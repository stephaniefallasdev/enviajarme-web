import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const runtime = "nodejs";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      id_actividad,
      nombre,
      correo,
      telefono,
      edad,
      direccion,
      consentimiento,
    } = body;

    // 1. Validar el identificador de la actividad
    if (typeof id_actividad !== "string" || !UUID_REGEX.test(id_actividad)) {
      return NextResponse.json(
        { error: "La actividad seleccionada no es válida." },
        { status: 400 },
      );
    }

    // 2. Normalizar los datos
    const nombreLimpio = String(nombre ?? "").trim();
    const correoLimpio = String(correo ?? "")
      .trim()
      .toLowerCase();
    const telefonoLimpio = String(telefono ?? "").trim();
    const direccionLimpia = String(direccion ?? "").trim();

    const edadNumero = Number(edad);

    // 3. Validar campos obligatorios
    if (!nombreLimpio || !correoLimpio || !telefonoLimpio || !direccionLimpia) {
      return NextResponse.json(
        { error: "Todos los campos obligatorios deben completarse." },
        { status: 400 },
      );
    }

    if (!EMAIL_REGEX.test(correoLimpio)) {
      return NextResponse.json(
        { error: "El correo electrónico no es válido." },
        { status: 400 },
      );
    }

    if (!Number.isInteger(edadNumero) || edadNumero < 12 || edadNumero > 100) {
      return NextResponse.json(
        { error: "La edad debe estar entre 12 y 100 años." },
        { status: 400 },
      );
    }

    if (consentimiento !== undefined && typeof consentimiento !== "boolean") {
      return NextResponse.json(
        { error: "El consentimiento debe ser válido." },
        { status: 400 },
      );
    }

    // 4. Ejecutar la función SQL en Supabase
    const { data, error } = await supabaseAdmin.rpc(
      "registrar_voluntario_actividad",
      {
        p_id_actividad: id_actividad,
        p_nombre_completo: nombreLimpio,
        p_correo: correoLimpio,
        p_telefono: telefonoLimpio,
        p_edad: edadNumero,
        p_direccion: direccionLimpia,
        p_consentimiento_email: consentimiento ?? false,
      },
    );

    if (error) {
      console.error("Error al registrar voluntario:", error);

      const mensaje = error.message ?? "";

      if (mensaje.includes("no tiene cupos disponibles")) {
        return NextResponse.json(
          { error: "La actividad ya no tiene cupos disponibles." },
          { status: 409 },
        );
      }

      if (mensaje.includes("no está disponible")) {
        return NextResponse.json(
          { error: "La actividad no está disponible para inscripciones." },
          { status: 409 },
        );
      }

      if (mensaje.includes("no existe")) {
        return NextResponse.json(
          { error: "La actividad seleccionada no existe." },
          { status: 404 },
        );
      }

      if (mensaje.includes("duplicate key") || mensaje.includes("ya existe")) {
        return NextResponse.json(
          {
            error:
              "No fue posible completar el registro. Inténtalo nuevamente.",
          },
          { status: 409 },
        );
      }

      return NextResponse.json(
        { error: "Ocurrió un error al procesar la inscripción." },
        { status: 500 },
      );
    }

    // 5. Correos (solo si hubo inscripción nueva o reactivada)
    if (data.resultado !== "ya_inscrito") {
      const from =
        process.env.EMAIL_FROM ?? "Enviajarme <onboarding@resend.dev>";

      const { data: actividad } = await supabaseAdmin
        .from("actividades")
        .select("titulo, fecha_inicio, ubicacion")
        .eq("id_actividad", id_actividad)
        .maybeSingle();

      const titulo = actividad?.titulo ?? "la actividad";
      const fecha = actividad?.fecha_inicio
        ? new Date(actividad.fecha_inicio).toLocaleString("es-CR", {
            dateStyle: "full",
            timeStyle: "short",
            timeZone: "America/Costa_Rica",
          })
        : "Por confirmar";
      const lugar = actividad?.ubicacion ?? "Por confirmar";

      // 5.1 Aviso a Enviajarme
      try {
        const { error: avisoError } = await resend.emails.send({
          from,
          to: process.env.CONTACT_TO_EMAIL,
          replyTo: correoLimpio,
          subject: `Nueva inscripción: ${titulo}`,
          text: [
            `Actividad: ${titulo}`,
            `Voluntario: ${nombreLimpio}`,
            `Correo: ${correoLimpio}`,
            `Resultado: ${data.resultado}`,
            "",
            "Los datos completos están en la tabla voluntarios.",
          ].join("\n"),
        });
        if (avisoError)
          console.error("Error al enviar aviso de inscripción:", avisoError);
      } catch (e) {
        console.error("Error al enviar aviso de inscripción:", e);
      }

      // 5.2 Confirmación al voluntario
      try {
        const { error: confirmError } = await resend.emails.send({
          from,
          to: correoLimpio,
          replyTo: process.env.CONTACT_TO_EMAIL,
          subject: `Confirmación de inscripción: ${titulo}`,
          text: [
            `Hola, ${nombreLimpio}:`,
            "",
            "Tu inscripción quedó confirmada. Estos son los detalles:",
            "",
            `Actividad: ${titulo}`,
            `Fecha: ${fecha}`,
            `Lugar: ${lugar}`,
            "",
            "Si no puedes asistir o tienes alguna duda, responde a este correo.",
            "",
            "¡Gracias por sumarte!",
            "Asociación Ambiental Enviajarme",
          ].join("\n"),
        });
        if (confirmError)
          console.error(
            "Error al enviar confirmación al voluntario:",
            confirmError,
          );
      } catch (e) {
        console.error("Error al enviar confirmación al voluntario:", e);
      }
    }

    // 6. Responder según el resultado de la función
    const mensajes = {
      registrada: "Tu inscripción se registró correctamente.",
      reactivada: "Tu inscripción fue reactivada correctamente.",
      ya_inscrito: "Ya tienes una inscripción confirmada para esta actividad.",
    };

    return NextResponse.json(
      {
        success: true,
        resultado: data.resultado,
        id_inscripcion: data.id_inscripcion,
        mensaje:
          mensajes[data.resultado] ??
          "La solicitud fue procesada correctamente.",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error en API de inscripciones:", error);

    return NextResponse.json(
      { error: "No fue posible procesar la solicitud." },
      { status: 500 },
    );
  }
}
