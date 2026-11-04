"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function PruebaSupabase() {
  const [estado, setEstado] = useState("Comprobando conexión...");

  useEffect(() => {
    async function comprobarConexion() {
      const { error } = await supabase
        .from("actividades")
        .select("id")
        .limit(1);

      if (error?.code === "42P01" || error?.code === "PGRST205") {
        setEstado(
          "Conexión establecida, pero falta crear la tabla actividades.",
        );
      } else if (error) {
        setEstado(`Respuesta de Supabase: ${error.message}`);
      } else {
        setEstado("¡Conexión correcta con Supabase!");
      }
    }

    comprobarConexion();
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Prueba de conexión con Supabase</h1>
      <p className="mt-4">{estado}</p>
    </main>
  );
}
