import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);
const TABLA = "solicitudes_empresariales";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PROYECTOS = {
  "Jornada de limpieza": "jornada_limpieza",
  "Conservación ambiental": "conservacion_ambiental",
  "Educación ambiental": "educacion_ambiental",
  "Proyecto colaborativo a la medida": "proyecto_a_medida",
  "Otra idea": "otros",
};

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const contacto = String(body.contacto ?? "").trim();
  const empresa = String(body.empresa ?? "").trim();
  const correo = String(body.correo ?? "").trim();
  const telefono = String(body.telefono ?? "").trim();
  const proyecto = String(body.proyecto ?? "").trim();
  const descripcion = String(body.descripcion ?? "").trim();
  const colaboradores = Number(body.colaboradores);

  let error = null;
  if (contacto.length < 2 || contacto.length > 100)
    error = "Nombre de contacto inválido.";
  else if (empresa.length < 2 || empresa.length > 150)
    error = "Nombre de empresa inválido.";
  else if (!EMAIL_RE.test(correo) || correo.length > 150)
    error = "Correo inválido.";
  else if (telefono.length < 6 || telefono.length > 30)
    error = "Teléfono inválido.";
  else if (
    !Number.isInteger(colaboradores) ||
    colaboradores < 1 ||
    colaboradores > 100000
  )
    error = "Cantidad de colaboradores inválida.";
  else if (!Object.hasOwn(PROYECTOS, proyecto))
    error = "Tipo de proyecto inválido.";
  else if (descripcion.length < 10 || descripcion.length > 5000)
    error = "La descripción debe tener entre 10 y 5000 caracteres.";

  if (error) return NextResponse.json({ error }, { status: 400 });

  // Sin .select(): el rol anon no tiene permiso de lectura
  const { error: dbError } = await supabase.from(TABLA).insert({
    nombre_contacto: contacto,
    nombre_empresa: empresa,
    correo,
    telefono,
    cantidad_colaboradores: colaboradores,
    tipo_proyecto: PROYECTOS[proyecto],
    descripcion,
  });

  if (dbError) {
    console.error("Error al guardar solicitud empresarial:", dbError);
    return NextResponse.json(
      { error: "No fue posible enviar la solicitud." },
      { status: 500 },
    );
  }

  const { error: emailError } = await resend.emails.send({
    from: "Enviajarme <onboarding@resend.dev>",
    to: process.env.CONTACT_TO_EMAIL,
    replyTo: correo,
    subject: `Nueva solicitud empresarial: ${empresa}`,
    text: [
      `Empresa: ${empresa}`,
      `Contacto: ${contacto}`,
      `Correo: ${correo}`,
      `Teléfono: ${telefono}`,
      `Colaboradores: ${colaboradores}`,
      `Proyecto: ${proyecto}`,
      "",
      descripcion,
    ].join("\n"),
  });

  if (emailError)
    console.error("Error al enviar correo de solicitud:", emailError);

  return NextResponse.json({ ok: true }, { status: 201 });
}
