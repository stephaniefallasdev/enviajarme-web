"use client"

import { useState } from "react"
import { C, NEWS } from "@/lib/data"
import { NewsCard, PageHero } from "@/components/Shared"

// ══════════════════════════════════════════════════════════════════════════════
// PÁGINA: NOTICIAS
// ══════════════════════════════════════════════════════════════════════════════
const NEWS_TAGS = [
  "Todos",
  "Medio Ambiente",
  "Voluntariado",
  "Comunidad",
  "Conservación",
  "Educación ambiental",
  "Reciclaje",
]
function NoticiasPage({ navigate }) {
  const [activeTag, setActiveTag] = useState("Todos")
  const filtered = NEWS.filter((n) => (activeTag === "Todos" ? true : n.tag === activeTag))
  return (
    <>
      <PageHero
        title="Noticias y contenido ambiental"
        eyebrow="Actualidad ambiental"
        img="https://images.unsplash.com/photo-1721850661499-0ed6d1096e76?w=1400&h=700&fit=crop&auto=format"
      />
      <section style={{ background: C.cream }} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p
            style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
            className="text-xs font-semibold uppercase tracking-widest mb-2"
          >
            Publicaciones y noticias
          </p>
          <h2
            style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            Contenido ambiental
          </h2>
          <p
            style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
            className="text-base mb-10 font-light max-w-xl"
          >
            Noticias, artículos educativos y publicaciones de la asociación, ordenados de los más recientes a los más
            antiguos.
          </p>

          {/* Filtros por categoría */}
          <div className="flex flex-wrap gap-2 mb-10">
            {NEWS_TAGS.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                style={{
                  background: activeTag === tag ? C.sky : C.surface,
                  color: activeTag === tag ? C.white : C.inkSoft,
                  border: `1px solid ${activeTag === tag ? C.sky : `${C.forest}30`}`,
                  fontFamily: "Outfit, sans-serif",
                }}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:opacity-90"
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filtered.map((n) => (
              <NewsCard key={n.id} item={n} navigate={navigate} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ color: C.muted, fontFamily: "Outfit, sans-serif" }} className="text-center py-16 text-lg">
              No hay publicaciones en esta categoría aún.
            </p>
          )}
        </div>
      </section>
    </>
  )
}

export default NoticiasPage
