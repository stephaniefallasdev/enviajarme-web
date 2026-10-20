"use client"

import { C } from "@/lib/data"
import { PageHero } from "@/components/Shared"

// ══════════════════════════════════════════════════════════════════════════════
// PÁGINA: NOSOTROS
// ══════════════════════════════════════════════════════════════════════════════
const VALUES = [
  {
    icon: "🌿",
    title: "Respeto a la naturaleza",
    desc: "Cada acción que tomamos tiene como prioridad la salud de los ecosistemas que habitamos y visitamos.",
  },
  {
    icon: "🤝",
    title: "Comunidad",
    desc: "Creemos en el poder colectivo de personas comprometidas con el cambio ambiental positivo.",
  },
  {
    icon: "♻️",
    title: "Responsabilidad",
    desc: "Actuamos con conciencia sobre el impacto de nuestras decisiones en el planeta.",
  },
  {
    icon: "📚",
    title: "Educación",
    desc: "Compartimos conocimiento ambiental para empoderar a más personas a proteger su entorno.",
  },
  {
    icon: "💚",
    title: "Inclusión",
    desc: "Nuestras actividades son abiertas para todas las edades, perfiles y comunidades.",
  },
  {
    icon: "✨",
    title: "Transparencia",
    desc: "Gestionamos los recursos con honestidad y rendición de cuentas ante nuestra comunidad.",
  },
]
function NosotrosPage({ navigate }) {
  return (
    <>
      <PageHero
        title="Nosotros"
        eyebrow="Asociación Ambiental Enviajarme"
        img="https://images.unsplash.com/photo-1683065480640-6c3e20231a7a?w=1400&h=700&fit=crop&auto=format"
      />

      {/* Quiénes somos */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div>
              <p
                style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
                className="text-xs font-semibold uppercase tracking-widest mb-4"
              >
                Quiénes somos
              </p>
              <h2
                style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
                className="text-3xl md:text-4xl font-bold leading-tight mb-6"
              >
                Una asociación nacida del amor por <span style={{ color: C.forest }}>Costa Rica.</span>
              </h2>
              <p
                style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
                className="text-base leading-relaxed mb-5 font-light"
              >
                La Asociación Ambiental Enviajarme es una organización sin fines de lucro fundada en 2021 en Costa Rica.
                Nació de la convicción de que viajar puede ser un acto de cuidado: cada excursión, cada caminata, puede
                dejar los ecosistemas que visitamos en mejor estado que como los encontramos.
              </p>
              <p
                style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
                className="text-base leading-relaxed mb-5 font-light"
              >
                Organizamos actividades de voluntariado ambiental que unen a personas de todo el país en la protección
                de nuestros ecosistemas y senderos naturales. Trabajamos en ríos, playas, bosques y montañas,
                construyendo comunidad y dejando un rastro limpio a nuestro paso.
              </p>
              <p
                style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
                className="text-base leading-relaxed font-light"
              >
                Desde 2021, más de 350 voluntarios han participado en nuestras actividades, retirando más de 1,250
                kilogramos de residuos de zonas naturales protegidas y plantando cientos de árboles nativos en zonas
                degradadas.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1700936206521-791dcd35c745?w=600&h=500&fit=crop&auto=format"
                alt="Voluntarios en acción"
                className="rounded-2xl object-cover w-full h-64 shadow-md"
              />
              <img
                src="https://images.unsplash.com/photo-1683065480640-6c3e20231a7a?w=600&h=500&fit=crop&auto=format"
                alt="Naturaleza de Costa Rica"
                className="rounded-2xl object-cover w-full h-64 mt-8 shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section style={{ background: C.cream }} className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p
            style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
            className="text-xs font-semibold uppercase tracking-widest mb-2 text-center"
          >
            Nuestro norte
          </p>
          <h2
            style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
            className="text-3xl md:text-4xl font-bold text-center mb-14"
          >
            Misión y Visión
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              style={{ background: C.surface, border: `1px solid ${C.forest}18` }}
              className="rounded-2xl p-8 shadow-sm"
            >
              <div
                style={{ background: `${C.forest}15`, color: C.forest }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6"
              >
                🎯
              </div>
              <h3 style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }} className="text-2xl font-bold mb-4">
                Misión
              </h3>
              <p
                style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
                className="text-base leading-relaxed font-light"
              >
                Promover la participación ciudadana activa en la conservación y restauración de los ecosistemas
                naturales de Costa Rica, a través de actividades de voluntariado ambiental que eduquen, conecten y
                movilicen a comunidades en torno al cuidado de nuestro entorno.
              </p>
            </div>
            <div
              style={{ background: C.surface, border: `1px solid ${C.forest}18` }}
              className="rounded-2xl p-8 shadow-sm"
            >
              <div
                style={{ background: `${C.sky}15`, color: C.sky }}
                className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-6"
              >
                🌱
              </div>
              <h3 style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }} className="text-2xl font-bold mb-4">
                Visión
              </h3>
              <p
                style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
                className="text-base leading-relaxed font-light"
              >
                Ser la red de voluntariado ambiental más grande y activa de Costa Rica, donde cada persona sea un agente
                de cambio que cuida, restaura y celebra la biodiversidad extraordinaria del país, construyendo un legado
                ambiental para las generaciones futuras.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p
            style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
            className="text-xs font-semibold uppercase tracking-widest mb-2 text-center"
          >
            Lo que nos guía
          </p>
          <h2
            style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
            className="text-3xl md:text-4xl font-bold text-center mb-14"
          >
            Nuestros valores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                style={{ background: C.surface, border: `1px solid ${C.forest}18` }}
                className="rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl mb-4 block">{v.icon}</span>
                <h3 style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }} className="text-lg font-bold mb-2">
                  {v.title}
                </h3>
                <p
                  style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
                  className="text-sm leading-relaxed font-light"
                >
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section style={{ background: C.cream }} className="py-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p
            style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
            className="text-xs font-semibold uppercase tracking-widest mb-2 text-center"
          >
            En acción
          </p>
          <h2
            style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
            className="text-3xl font-bold text-center mb-12"
          >
            Nuestra comunidad
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1643400814457-013ad2ee1b2d?w=600&h=600&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1700936206521-791dcd35c745?w=600&h=600&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1683065480640-6c3e20231a7a?w=600&h=600&fit=crop&auto=format",
              "https://images.unsplash.com/photo-1721850661499-0ed6d1096e76?w=600&h=600&fit=crop&auto=format",
            ].map((src, i) => (
              <img key={i} src={src} alt="" className="rounded-2xl object-cover w-full h-48 md:h-60 shadow-sm" />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: C.forest }} className="py-20">
        <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
          <h2
            style={{ fontFamily: "Fraunces, Georgia, serif", color: C.white }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            ¿Listo para sumarte?
          </h2>
          <p
            style={{ color: "rgba(255,255,255,0.8)", fontFamily: "Outfit, sans-serif" }}
            className="text-lg mb-8 font-light"
          >
            Explora nuestras actividades y únete a la comunidad de voluntarios que cuida a Costa Rica.
          </p>
          <button
            onClick={() => navigate("actividades")}
            style={{ background: C.sky, color: C.white, fontFamily: "Outfit, sans-serif" }}
            className="inline-block px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            Ver actividades →
          </button>
        </div>
      </section>
    </>
  )
}

export default NosotrosPage
