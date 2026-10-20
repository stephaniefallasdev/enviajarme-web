"use client"

import { C } from "@/lib/data"

// ══════════════════════════════════════════════════════════════════════════════
// PÁGINA: CONFIRMACIÓN DE INSCRIPCIÓN
// ══════════════════════════════════════════════════════════════════════════════
function ConfirmacionPage({ confirmData, navigate }) {
  const data = confirmData ?? {
    name: "Participante",
    email: "tu@correo.com",
    activityTitle: "Actividad ambiental",
    date: "",
    location: "",
  }
  return (
    <section style={{ background: C.cream }} className="min-h-[80vh] flex items-center py-16">
      <div className="max-w-2xl mx-auto px-5 md:px-8 text-center w-full">
        <div
          style={{ background: `${C.forest}15`, width: 96, height: 96 }}
          className="rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <span className="text-5xl">🌿</span>
        </div>

        <p
          style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
          className="text-xs font-semibold uppercase tracking-widest mb-3"
        >
          ¡Todo listo!
        </p>
        <h1
          style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
          className="text-4xl md:text-5xl font-black mb-5"
        >
          ¡Inscripción confirmada!
        </h1>
        <p
          style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
          className="text-lg font-light mb-10 leading-relaxed"
        >
          Gracias, <strong>{data.name}</strong>. Tu inscripción ha sido registrada exitosamente.
        </p>

        {/* Resumen */}
        <div
          style={{ background: C.surface, border: `1px solid ${C.forest}18` }}
          className="rounded-2xl p-6 mb-8 text-left shadow-sm"
        >
          <p
            style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
            className="text-xs font-semibold uppercase tracking-widest mb-3"
          >
            Resumen de tu inscripción
          </p>
          <h2 style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }} className="text-xl font-bold mb-4">
            {data.activityTitle}
          </h2>
          <div className="flex flex-wrap gap-4">
            {data.date && (
              <span style={{ color: C.muted, fontFamily: "Outfit, sans-serif" }} className="text-sm">
                📅 {data.date}
              </span>
            )}
            {data.location && (
              <span style={{ color: C.muted, fontFamily: "Outfit, sans-serif" }} className="text-sm">
                📍 {data.location}
              </span>
            )}
          </div>
        </div>

        <p style={{ color: C.muted, fontFamily: "Outfit, sans-serif" }} className="text-sm mb-10">
          📧 Recibirás un correo de confirmación en <strong>{data.email}</strong> con todos los detalles.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate("actividades")}
            style={{ background: C.forest, color: C.white, fontFamily: "Outfit, sans-serif" }}
            className="px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            Ver otras actividades
          </button>
          <button
            onClick={() => navigate("inicio")}
            style={{ border: `1px solid ${C.forest}40`, color: C.forest, fontFamily: "Outfit, sans-serif" }}
            className="px-8 py-4 rounded-full text-base font-semibold hover:bg-[#2d7a3a08] transition-colors"
          >
            Ir al inicio
          </button>
        </div>
      </div>
    </section>
  )
}

export default ConfirmacionPage
