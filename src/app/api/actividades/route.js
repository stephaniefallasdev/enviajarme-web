import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { mapActividad } from "@/lib/actividades";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  const [lista, categorias] = await Promise.all([
    supabaseAdmin.rpc("listar_actividades_publicas"),
    supabaseAdmin.rpc("listar_categorias_actividad"),
  ]);

  if (lista.error || categorias.error) {
    console.error(
      "Error al listar actividades:",
      lista.error ?? categorias.error,
    );
    return NextResponse.json(
      { error: "No fue posible cargar las actividades." },
      { status: 500 },
    );
  }

  return NextResponse.json({
    actividades: lista.data.map(mapActividad),
    categorias: categorias.data,
  });
}
