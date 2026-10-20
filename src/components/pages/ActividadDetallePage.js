"use client"

import { C, ACTIVITIES } from "@/lib/data"

// ══════════════════════════════════════════════════════════════════════════════
// PÁGINA: DETALLE DE ACTIVIDAD
// ══════════════════════════════════════════════════════════════════════════════
function ActividadDetallePage({ activityId, navigate }) {
  const activity = ACTIVITIES.find((a) => a.id === activityId) ?? ACTIVITIES[0]
  const isFull = activity.spots === 0
  const isLow = activity.spots > 0 && activity.spots <= 5
  const pct = Math.round(((activity.maxSpots - activity.spots) / activity.maxSpots) * 100)
  return (
    <>
      {/* Hero imagen */}
      <div className="relative h-[50vh] md:h-[58vh] overflow-hidden bg-[#0d2a1a]">
        <img src={activity.img} alt={activity.title} className="w-full h-full object-cover" style={{ opacity: 0.82 }} />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(8,24,12,0.88) 0%, transparent 55%)" }}
        />
        <div className="absolute bottom-8 left-0 right-0">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <button
              onClick={() => navigate("actividades")}
              style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Outfit, sans-serif" }}
              className="text-sm mb-3 block hover:text-white transition-colors"
            >
              ← Volver a actividades
            </button>
            <span
              style={{ background: `${C.sky}cc`, color: C.white, fontFamily: "Outfit, sans-serif" }}
              className="text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block"
            >
              {activity.category}
            </span>
            <h1
              style={{ fontFamily: "Fraunces, Georgia, serif", color: C.white }}
              className="text-3xl md:text-5xl font-black leading-tight"
            >
              {activity.title}
            </h1>
          </div>
        </div>
      </div>

      <section style={{ background: C.cream }} className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contenido principal */}
            <div className="md:col-span-2">
              <div className="flex flex-wrap gap-3 mb-8">
                <span
                  style={{ background: `${C.forest}18`, color: C.forest, fontFamily: "Outfit, sans-serif" }}
                  className="text-sm font-semibold px-3 py-1.5 rounded-full"
                >
                  📅 {activity.date}
                </span>
                <span
                  style={{ background: `${C.forest}18`, color: C.forest, fontFamily: "Outfit, sans-serif" }}
                  className="text-sm font-semibold px-3 py-1.5 rounded-full"
                >
                  📍 {activity.location}
                </span>
              </div>

              <h2 style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }} className="text-2xl font-bold mb-4">
                Descripción
              </h2>
              <p
                style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
                className="text-base leading-relaxed mb-10 font-light"
              >
                {activity.description}
              </p>

              {activity.gallery.length > 0 && (
                <div className="mb-10">
                  <h2
                    style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
                    className="text-2xl font-bold mb-6"
                  >
                    Fotografías
                  </h2>
                  <div className="grid grid-cols-2 gap-4">
                    {activity.gallery.map((src, i) => (
                      <img key={i} src={src} alt="" className="rounded-2xl object-cover w-full h-48 shadow-sm" />
                    ))}
                  </div>
                </div>
              )}

              {activity.videos.length > 0 && (
                <div>
                  <h2
                    style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
                    className="text-2xl font-bold mb-6"
                  >
                    Videos relacionados
                  </h2>
                  <div className="flex flex-col gap-3">
                    {activity.videos.map((v, i) => (
                      <a
                        key={i}
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          background: C.surface,
                          border: `1px solid ${C.forest}18`,
                          color: C.forest,
                          fontFamily: "Outfit, sans-serif",
                        }}
                        className="flex items-center gap-3 px-5 py-4 rounded-xl hover:shadow-md transition-shadow"
                      >
                        <span className="text-xl">▶️</span>
                        <span className="text-sm font-medium">{v.label}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              <div
                style={{ background: C.surface, border: `1px solid ${C.forest}18` }}
                className="rounded-2xl p-6 shadow-sm sticky top-28"
              >
                <h3 style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }} className="text-xl font-bold mb-6">
                  Cupos disponibles
                </h3>

                <div className="mb-2 flex justify-between items-center">
                  <span style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }} className="text-sm">
                    Inscritos / Total
                  </span>
                  <span
                    style={{ color: isFull ? C.earth : isLow ? C.earth : C.forest, fontFamily: "Outfit, sans-serif" }}
                    className="text-sm font-bold"
                  >
                    {activity.maxSpots - activity.spots} / {activity.maxSpots}
                  </span>
                </div>

                <div className="w-full rounded-full h-2 mb-6" style={{ background: `${C.forest}18` }}>
                  <div
                    style={{ width: `${pct}%`, background: pct > 80 ? C.earth : C.forest }}
                    className="h-2 rounded-full transition-all"
                  />
                </div>

                {isLow && !isFull && (
                  <div
                    style={{ background: `${C.earth}15`, color: C.earth, fontFamily: "Outfit, sans-serif" }}
                    className="rounded-xl px-4 py-3 text-sm font-medium mb-6"
                  >
                    ⚠️ ¡Solo quedan {activity.spots} cupos!
                  </div>
                )}

                {isFull ? (
                  <div
                    style={{ background: `${C.earth}15`, color: C.earth, fontFamily: "Outfit, sans-serif" }}
                    className="rounded-xl px-4 py-4 text-sm font-medium text-center mb-4"
                  >
                    Esta actividad ya no tiene cupos disponibles.
                  </div>
                ) : (
                  <button
                    onClick={() => navigate("inscripcion", { activityId: activity.id })}
                    style={{ background: C.forest, color: C.white, fontFamily: "Outfit, sans-serif" }}
                    className="w-full py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-sm mb-3"
                  >
                    Inscribirme a esta actividad
                  </button>
                )}

                <button
                  onClick={() => navigate("actividades")}
                  style={{ border: `1px solid ${C.forest}40`, color: C.forest, fontFamily: "Outfit, sans-serif" }}
                  className="w-full py-3 rounded-full text-sm font-semibold hover:bg-[#2d7a3a08] transition-colors"
                >
                  Ver otras actividades
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ActividadDetallePage
