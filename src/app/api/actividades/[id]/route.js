import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { mapActividad } from "@/lib/actividades";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const UUID_REGEX =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export async function GET(_request, { params }) {
  const { id } = await params;

  if (!UUID_REGEX.test(id)) {
    return NextResponse.json(
      { error: "Actividad no válida." },
      { status: 400 },
    );
  }

  const { data, error } = await supabaseAdmin.rpc("obtener_actividad_publica", {
    p_id: id,
  });

  if (error) {
    console.error("Error al obtener actividad:", error);
    return NextResponse.json(
      { error: "No fue posible cargar la actividad." },
      { status: 500 },
    );
  }

  if (!data) {
    return NextResponse.json(
      { error: "Actividad no encontrada." },
      { status: 404 },
    );
  }

  return NextResponse.json({ actividad: mapActividad(data) });
}
