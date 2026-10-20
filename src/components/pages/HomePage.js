"use client"

import { C, ACTIVITIES, NEWS } from "@/lib/data"
import { ActivityCard, NewsCard } from "@/components/Shared"

// ══════════════════════════════════════════════════════════════════════════════
// PÁGINA: INICIO
// ══════════════════════════════════════════════════════════════════════════════
function Hero({ navigate }) {
  return (
    <section className="relative min-h-[88vh] flex items-end overflow-hidden bg-[#0d2a1a]">
      <img
        src="https://images.unsplash.com/photo-1643400814457-013ad2ee1b2d?w=1800&h=1000&fit=crop&auto=format"
        alt="Vista aérea de bosque tropical y río en Costa Rica"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0.85 }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(8,24,12,0.45)" }} />
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.pexels.com/videos/3571264/free-video-3571264.jpg?auto=compress&cs=tinysrgb&w=1800"
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="Vista aérea de una costa natural"
        >
          <source src="https://videos.pexels.com/video-files/3571264/3571264-hd_1920_1080_30fps.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(8,24,12,0.96) 0%, rgba(8,24,12,0.55) 45%, rgba(8,24,12,0.15) 100%)",
          }}
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-20 md:pb-28 pt-24">
        <p
          style={{ color: C.sky, fontFamily: "Outfit, sans-serif", textShadow: "0 1px 4px rgba(0,0,0,0.6)" }}
          className="text-sm font-semibold uppercase tracking-widest mb-4"
        >
          Costa Rica · Voluntariado Ambiental
        </p>
        <h1
          style={{
            fontFamily: "Fraunces, Georgia, serif",
            color: C.white,
            textShadow: "0 2px 16px rgba(0,0,0,0.5)",
          }}
          className="text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-6 max-w-3xl"
        >
          Caminamos
          <br />
          por Costa Rica
          <br />
          <span style={{ color: C.leaf }}>limpiando</span>
          <br />
          el camino.
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.90)",
            fontFamily: "Outfit, sans-serif",
            textShadow: "0 1px 6px rgba(0,0,0,0.5)",
          }}
          className="text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10"
        >
          Únete a nuestras actividades de voluntariado ambiental y sé parte del cambio que Costa Rica necesita.
        </p>
        <button
          onClick={() => navigate("actividades")}
          style={{ background: C.sky, color: C.white, fontFamily: "Outfit, sans-serif" }}
          className="inline-block px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 active:scale-95 transition-all shadow-lg"
        >
          Ver actividades →
        </button>
      </div>
    </section>
  )
}
function Impact() {
  const stats = [
    { value: "25", label: "actividades realizadas" },
    { value: "350", label: "voluntarios activos" },
    { value: "1,250 kg", label: "de residuos retirados" },
  ]
  return (
    <section style={{ background: C.forest }} className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <p
          style={{ color: C.leaf, fontFamily: "Outfit, sans-serif" }}
          className="text-xs font-semibold uppercase tracking-widest text-center mb-2"
        >
          Resultados reales
        </p>
        <h2
          style={{ color: C.white, fontFamily: "Fraunces, Georgia, serif" }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Nuestro impacto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x md:divide-white/20">
          {stats.map(({ value, label }) => (
            <div key={label} className="flex flex-col items-center text-center px-8 py-4">
              <span
                style={{ color: C.sky, fontFamily: "Fraunces, Georgia, serif" }}
                className="text-5xl md:text-6xl font-black mb-3 leading-none"
              >
                {value}
              </span>
              <span
                style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Outfit, sans-serif" }}
                className="text-base font-light tracking-wide"
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
function HomeActivities({ navigate }) {
  return (
    <section style={{ background: C.cream }} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <p
          style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
          className="text-xs font-semibold uppercase tracking-widest mb-2"
        >
          Próximas fechas
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2
            style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
            className="text-3xl md:text-4xl font-bold"
          >
            Próximas actividades
          </h2>
          <button
            onClick={() => navigate("actividades")}
            style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
            className="text-sm font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity text-left"
          >
            Ver todas →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {ACTIVITIES.slice(0, 3).map((a) => (
            <ActivityCard key={a.id} activity={a} navigate={navigate} variant="home" />
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={() => navigate("actividades")}
            style={{ border: `2px solid ${C.forest}`, color: C.forest, fontFamily: "Outfit, sans-serif" }}
            className="inline-block px-8 py-3.5 rounded-full text-base font-semibold hover:bg-[#2d7a3a0d] transition-colors"
          >
            Ver todas las actividades
          </button>
        </div>
      </div>
    </section>
  )
}
function HomeAbout({ navigate }) {
  return (
    <section className="py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p
              style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
              className="text-xs font-semibold uppercase tracking-widest mb-4"
            >
              Sobre nosotros
            </p>
            <h2
              style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
              className="text-3xl md:text-5xl font-bold leading-tight mb-6"
            >
              Somos una asociación costarricense
              <br />
              <span style={{ color: C.forest }}>con propósito.</span>
            </h2>
            <p
              style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
              className="text-base md:text-lg leading-relaxed mb-6 font-light"
            >
              Enviajarme nació de la convicción de que viajar puede ser un acto de cuidado. Organizamos actividades de
              voluntariado ambiental que unen a personas de todo el país en la protección de nuestros ecosistemas y
              senderos naturales.
            </p>
            <p
              style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
              className="text-base leading-relaxed mb-8 font-light"
            >
              Desde el 2021, hemos reunido a cientos de voluntarios en ríos, playas, bosques y montañas, construyendo
              comunidad y dejando un rastro limpio a nuestro paso.
            </p>
            <button
              onClick={() => navigate("nosotros")}
              style={{ background: C.earth, color: C.white, fontFamily: "Outfit, sans-serif" }}
              className="inline-block px-7 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-sm"
            >
              Conócenos →
            </button>
          </div>
          <div className="relative h-96 md:h-[480px]">
            <img
              src="https://images.unsplash.com/photo-1683065480640-6c3e20231a7a?w=700&h=500&fit=crop&auto=format"
              alt="Voluntarios en sendero"
              className="absolute top-0 right-0 w-[75%] h-[65%] object-cover rounded-2xl shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1700936206521-791dcd35c745?w=500&h=380&fit=crop&auto=format"
              alt="Grupo de voluntarios"
              className="absolute bottom-0 left-0 w-[60%] h-[50%] object-cover rounded-2xl shadow-lg"
              style={{ border: `4px solid ${C.cream}` }}
            />
            <div
              style={{ background: C.sky, fontFamily: "Outfit, sans-serif" }}
              className="absolute bottom-12 right-4 rounded-2xl px-5 py-3 shadow-lg"
            >
              <p className="text-white text-2xl font-black leading-none">+5 años</p>
              <p className="text-white/80 text-xs font-medium mt-0.5">de impacto ambiental</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
function HomeNews({ navigate }) {
  return (
    <section style={{ background: C.cream }} className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <p
          style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
          className="text-xs font-semibold uppercase tracking-widest mb-2"
        >
          Actualidad ambiental
        </p>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <h2
            style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
            className="text-3xl md:text-4xl font-bold"
          >
            Contenido ambiental
          </h2>
          <button
            onClick={() => navigate("noticias")}
            style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
            className="text-sm font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity"
          >
            Ver todo →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS.slice(0, 3).map((n) => (
            <NewsCard key={n.id} item={n} navigate={navigate} />
          ))}
        </div>
      </div>
    </section>
  )
}
function HomeCorporate({ navigate }) {
  return (
    <section className="py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="relative overflow-hidden rounded-2xl min-h-[420px] flex items-end shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1697490251905-d7abdf8436ca?w=1400&h=700&fit=crop&auto=format"
            alt="Personas colaborando en una jornada ambiental"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(8,24,12,0.94) 0%, rgba(8,24,12,0.62) 55%, rgba(8,24,12,0.2) 100%)",
            }}
          />
          <div className="relative z-10 max-w-2xl p-8 md:p-14">
            <p
              style={{ color: C.sky, fontFamily: "Outfit, sans-serif" }}
              className="text-xs font-semibold uppercase tracking-widest mb-3"
            >
              Responsabilidad empresarial
            </p>
            <h2
              style={{ color: C.white, fontFamily: "Fraunces, Georgia, serif" }}
              className="text-3xl md:text-5xl font-bold leading-tight mb-5"
            >
              El compromiso compartido puede transformar territorios.
            </h2>
            <p
              style={{ color: "rgba(255,255,255,0.82)", fontFamily: "Outfit, sans-serif" }}
              className="text-base md:text-lg font-light leading-relaxed mb-8"
            >
              Diseñemos una experiencia ambiental que conecte a tu equipo con las comunidades y la naturaleza de Costa
              Rica.
            </p>
            <button
              onClick={() => navigate("responsabilidad")}
              style={{ background: C.sky, color: C.white, fontFamily: "Outfit, sans-serif" }}
              className="px-7 py-3.5 rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-md"
            >
              Conocer la propuesta →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
function HomePage({ navigate }) {
  return (
    <>
      <Hero navigate={navigate} />
      <Impact />
      <HomeActivities navigate={navigate} />
      <HomeAbout navigate={navigate} />
      <HomeCorporate navigate={navigate} />
      <HomeNews navigate={navigate} />
    </>
  )
}

export default HomePage
