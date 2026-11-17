"use client";

import { useEffect, useState } from "react";
import { C } from "@/lib/data";
import { ActivityCard, PageHero } from "@/components/Shared";

function ActividadesPage({ navigate }) {
  const [activities, setActivities] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [status, setStatus] = useState("loading"); // loading | ok | error

  useEffect(() => {
    let cancelled = false;
    fetch("/api/actividades", { cache: "no-store" })
      .then(async (res) => {
        if (!res.ok) throw new Error();
        const data = await res.json();
        if (!cancelled) {
          setActivities(data.actividades);
          setCategories(data.categorias);
          setStatus("ok");
        }
      })
      .catch(() => {
        if (!cancelled) setStatus("error");
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const filtered = activities.filter((a) =>
    activeCategory === "Todos" ? true : a.category === activeCategory,
  );

  return (
    <>
      <PageHero
        title="Actividades"
        eyebrow="Voluntariado ambiental"
        img="https://images.unsplash.com/photo-1700936206521-791dcd35c745?w=1400&h=700&fit=crop&auto=format"
      />
      <section style={{ background: C.cream }} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p
            style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
            className="text-xs font-semibold uppercase tracking-widest mb-2"
          >
            Disponibles para inscripción
          </p>
          <h2
            style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
            className="text-3xl md:text-4xl font-bold mb-3"
          >
            Próximas actividades
          </h2>
          <p
            style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
            className="text-base mb-10 font-light max-w-xl"
          >
            Todas las actividades mostradas están abiertas para inscripción.
            Actúa rápido cuando veas pocos cupos disponibles.
          </p>

          {status === "loading" && (
            <p
              style={{ color: C.muted, fontFamily: "Outfit, sans-serif" }}
              className="py-20 text-center"
              role="status"
            >
              Cargando actividades...
            </p>
          )}

          {status === "error" && (
            <p
              style={{ color: C.earth, fontFamily: "Outfit, sans-serif" }}
              className="py-20 text-center"
              role="alert"
            >
              No fue posible cargar las actividades. Inténtalo de nuevo más
              tarde.
            </p>
          )}

          {status === "ok" && (
            <>
              <div className="flex flex-wrap gap-2 mb-10">
                {["Todos", ...categories].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      background: activeCategory === cat ? C.forest : C.surface,
                      color: activeCategory === cat ? C.white : C.inkSoft,
                      border: `1px solid ${activeCategory === cat ? C.forest : `${C.forest}30`}`,
                      fontFamily: "Outfit, sans-serif",
                    }}
                    className="px-4 py-2 rounded-full text-sm font-medium transition-all hover:opacity-90"
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {filtered.length === 0 ? (
                <div className="text-center py-20">
                  <p
                    style={{ color: C.muted, fontFamily: "Outfit, sans-serif" }}
                    className="text-lg"
                  >
                    No hay actividades disponibles en esta categoría por el
                    momento.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {filtered.map((a) => (
                    <ActivityCard
                      key={a.id}
                      activity={a}
                      navigate={navigate}
                      variant="list"
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}

export default ActividadesPage;
