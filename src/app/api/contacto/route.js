import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  let body;

  // Leer los datos recibidos
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "La solicitud no contiene datos válidos." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json(
      { error: "Los datos enviados no son válidos." },
      { status: 400 },
    );
  }

  // Limpiar y validar los campos
  const nombre = typeof body.nombre === "string" ? body.nombre.trim() : "";

  const correo = typeof body.correo === "string" ? body.correo.trim() : "";

  const asunto = typeof body.asunto === "string" ? body.asunto.trim() : "";

  const mensaje = typeof body.mensaje === "string" ? body.mensaje.trim() : "";

  if (nombre.length < 2 || nombre.length > 100) {
    return NextResponse.json(
      { error: "El nombre debe tener entre 2 y 100 caracteres." },
      { status: 400 },
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
    return NextResponse.json(
      { error: "Ingresa un correo electrónico válido." },
      { status: 400 },
    );
  }

  if (!asunto || asunto.length > 150) {
    return NextResponse.json(
      { error: "El asunto es obligatorio y no debe superar 150 caracteres." },
      { status: 400 },
    );
  }

  if (mensaje.length < 10 || mensaje.length > 5000) {
    return NextResponse.json(
      { error: "El mensaje debe tener entre 10 y 5000 caracteres." },
      { status: 400 },
    );
  }

  // Guardar el mensaje en Supabase
  try {
    const { error } = await supabase.from("mensajes_contacto").insert({
      nombre,
      correo,
      asunto,
      mensaje,
      estado: "nuevo",
    });

    if (error) {
      console.error("Error al guardar mensaje de contacto:", error);

      return NextResponse.json(
        { error: "No fue posible guardar el mensaje. Inténtalo nuevamente." },
        { status: 500 },
      );
    }

    const { error: emailError } = await resend.emails.send({
      from: "Enviajarme <onboarding@resend.dev>",
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: correo,
      subject: `Nuevo mensaje de contacto: ${asunto}`,
      text: `Nombre: ${nombre}\nCorreo: ${correo}\nAsunto: ${asunto}\n\n${mensaje}`,
    });

    if (emailError) {
      console.error("Error al enviar correo de contacto:", emailError);
    }

    return NextResponse.json(
      { mensaje: "Mensaje enviado correctamente." },
      { status: 201 },
    );
  } catch (error) {
    console.error("Error inesperado en contacto:", error);

    return NextResponse.json(
      { error: "Ocurrió un error al procesar el mensaje." },
      { status: 500 },
    );
  }
}
