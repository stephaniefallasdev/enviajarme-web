"use client"

import { C, NEWS } from "@/lib/data"
import { NewsCard } from "@/components/Shared"

// ══════════════════════════════════════════════════════════════════════════════
// PÁGINA: DETALLE DE CONTENIDO
// ══════════════════════════════════════════════════════════════════════════════
function NoticiaDetallePage({ newsId, navigate }) {
  const item = NEWS.find((n) => n.id === newsId) ?? NEWS[0]
  const related = NEWS.filter((n) => n.id !== item.id && n.tag === item.tag).slice(0, 3)
  const extras = NEWS.filter((n) => n.id !== item.id && n.tag !== item.tag).slice(0, 3 - related.length)
  const relatedItems = [...related, ...extras].slice(0, 3)
  return (
    <section style={{ background: C.cream }} className="py-12 md:py-20">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <button
          onClick={() => navigate("noticias")}
          style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
          className="text-sm font-medium mb-8 block hover:opacity-70 transition-opacity"
        >
          ← Volver a noticias
        </button>

        {/* Encabezado */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span
              style={{ background: `${C.sky}22`, color: C.sky, fontFamily: "Outfit, sans-serif" }}
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
            >
              {item.tag}
            </span>
            <span style={{ color: C.muted, fontFamily: "Outfit, sans-serif" }} className="text-sm">
              {item.date}
            </span>
          </div>
          <h1
            style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
            className="text-3xl md:text-4xl font-black leading-tight mb-5"
          >
            {item.title}
          </h1>
          <p
            style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
            className="text-lg font-light leading-relaxed"
          >
            {item.summary}
          </p>
        </div>

        {/* Imagen principal */}
        <img src={item.img} alt={item.title} className="w-full h-72 md:h-96 object-cover rounded-2xl shadow-md mb-10" />

        {/* Contenido */}
        <div className="mb-14">
          {item.content.map((paragraph, i) => (
            <p
              key={i}
              style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
              className="text-base leading-relaxed mb-5 font-light"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Contenido relacionado */}
        {relatedItems.length > 0 && (
          <div>
            <h2 style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }} className="text-2xl font-bold mb-8">
              Contenido relacionado
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {relatedItems.map((n) => (
                <NewsCard key={n.id} item={n} navigate={navigate} />
              ))}
            </div>
          </div>
        )}

        <button
          onClick={() => navigate("noticias")}
          style={{ border: `2px solid ${C.forest}`, color: C.forest, fontFamily: "Outfit, sans-serif" }}
          className="px-8 py-3.5 rounded-full text-base font-semibold hover:bg-[#2d7a3a0d] transition-colors"
        >
          ← Volver a noticias
        </button>
      </div>
    </section>
  )
}

export default NoticiaDetallePage
