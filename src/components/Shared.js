"use client"

import { useState } from "react"
import { C, NAV_ITEMS } from "@/lib/data"

// ── SHARED: Header ────────────────────────────────────────────────────────────
export function ThemeToggle({ theme, toggleTheme }) {
  const isDark = theme === "dark"
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      aria-pressed={isDark}
      title={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="theme-toggle"
    >
      {isDark ? (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M20.4 15.2A8.5 8.5 0 0 1 8.8 3.6 8.5 8.5 0 1 0 20.4 15.2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </button>
  )
}
export function Header({ navigate, currentPage, theme, toggleTheme }) {
  const [open, setOpen] = useState(false)
  const go = (page) => {
    navigate(page)
    setOpen(false)
  }
  return (
    <header
      style={{ background: C.surface, borderBottom: `1px solid ${C.forest}18` }}
      className="sticky top-0 z-50 w-full shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between h-[84px]">
        <button onClick={() => go("inicio")} className="flex items-center gap-2 shrink-0">
          <img src="/logo.png" alt="Enviajarme" className="h-16 w-auto object-contain" />
        </button>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
          {NAV_ITEMS.slice(0, 3).map(({ label, page }) => (
            <button
              key={label}
              onClick={() => go(page)}
              style={{
                color: currentPage === page ? C.forest : C.ink,
                fontFamily: "Outfit, sans-serif",
                background: currentPage === page ? `${C.forest}12` : "transparent",
              }}
              className="px-4 py-2 rounded-md text-[15px] font-medium transition-colors duration-150 hover:bg-[#2d7a3a12] hover:text-[#2d7a3a]"
            >
              {label}
            </button>
          ))}
          <div className="relative group">
            <button
              onClick={() => go("responsabilidad")}
              style={{
                color: currentPage === "responsabilidad" ? C.forest : C.ink,
                fontFamily: "Outfit, sans-serif",
                background: currentPage === "responsabilidad" ? `${C.forest}12` : "transparent",
              }}
              className="px-4 py-2 rounded-md text-[15px] font-medium transition-colors duration-150 hover:bg-[#2d7a3a12] hover:text-[#2d7a3a] flex items-center gap-1.5"
              aria-haspopup="true"
            >
              Enfoques
              <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path
                  d="m5 7.5 5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div
              style={{ background: C.surface, border: `1px solid ${C.forest}18` }}
              className="absolute left-0 top-full hidden group-hover:block group-focus-within:block w-64 rounded-xl p-2 shadow-lg"
            >
              <button
                onClick={() => go("responsabilidad")}
                style={{ color: C.ink, fontFamily: "Outfit, sans-serif" }}
                className="w-full rounded-lg px-3 py-3 text-left text-sm font-medium hover:bg-[#2d7a3a12] transition-colors"
              >
                Responsabilidad empresarial
              </button>
            </div>
          </div>
          {NAV_ITEMS.slice(3).map(({ label, page }) => (
            <button
              key={label}
              onClick={() => go(page)}
              style={{
                color: currentPage === page ? C.forest : C.ink,
                fontFamily: "Outfit, sans-serif",
                background: currentPage === page ? `${C.forest}12` : "transparent",
              }}
              className="px-4 py-2 rounded-md text-[15px] font-medium transition-colors duration-150 hover:bg-[#2d7a3a12] hover:text-[#2d7a3a]"
            >
              {label}
            </button>
          ))}
          <button
            onClick={() => go("actividades")}
            style={{ background: C.forest, color: C.white, fontFamily: "Outfit, sans-serif" }}
            className="ml-4 px-6 py-2.5 rounded-full text-[15px] font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            Inscribirme
          </button>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </nav>

        <div className="lg:hidden flex items-center gap-1">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          <button
            className="p-2 rounded-md transition-colors hover:bg-[#2d7a3a12]"
            style={{ color: C.forest }}
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? (
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                <path d="M5 5l12 12M17 5L5 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
                <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div
          style={{ background: C.surface, borderTop: `1px solid ${C.forest}18` }}
          className="lg:hidden px-5 pb-5 flex flex-col gap-1"
        >
          {NAV_ITEMS.map(({ label, page }) => (
            <button
              key={label}
              onClick={() => go(page)}
              style={{ color: C.ink }}
              className="px-3 py-3 rounded-md text-[15px] font-medium hover:bg-[#2d7a3a12] transition-colors text-left"
            >
              {label}
            </button>
          ))}
          <p
            style={{ color: C.muted, fontFamily: "Outfit, sans-serif" }}
            className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-widest"
          >
            Enfoques
          </p>
          <button
            onClick={() => go("responsabilidad")}
            style={{ color: currentPage === "responsabilidad" ? C.forest : C.ink }}
            className="px-3 py-3 rounded-md text-[15px] font-medium hover:bg-[#2d7a3a12] transition-colors text-left"
          >
            Responsabilidad empresarial
          </button>
          <button
            onClick={() => go("actividades")}
            style={{ background: C.forest, color: C.white }}
            className="mt-2 px-6 py-3 rounded-full text-[15px] font-semibold text-center hover:opacity-90 transition-opacity"
          >
            Inscribirme
          </button>
        </div>
      )}
    </header>
  )
}
// ── SHARED: Footer ────────────────────────────────────────────────────────────
export function Footer({ navigate }) {
  return (
    <footer style={{ background: C.footer, color: "rgba(255,255,255,0.7)" }} className="py-14">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <img src="/logo.png" alt="Enviajarme" className="h-14 w-auto object-contain mb-4 brightness-0 invert" />
            <p style={{ fontFamily: "Outfit, sans-serif" }} className="text-sm leading-relaxed max-w-sm">
              Asociación costarricense de voluntariado ambiental. Caminamos, limpiamos y construimos comunidad.
            </p>
          </div>
          <div>
            <p
              style={{ color: C.white, fontFamily: "Outfit, sans-serif" }}
              className="text-sm font-semibold mb-4 uppercase tracking-widest"
            >
              Navegación
            </p>
            <ul style={{ fontFamily: "Outfit, sans-serif" }} className="space-y-2 text-sm">
              {NAV_ITEMS.map(({ label, page }) => (
                <li key={label}>
                  <button onClick={() => navigate(page)} className="hover:text-white transition-colors">
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p
              style={{ color: C.white, fontFamily: "Outfit, sans-serif" }}
              className="text-sm font-semibold mb-4 uppercase tracking-widest"
            >
              Contacto
            </p>
            <ul style={{ fontFamily: "Outfit, sans-serif" }} className="space-y-2 text-sm">
              <li>info@enviajarme.org</li>
              <li>+506 2234-5678</li>
              <li>San José, Costa Rica</li>
            </ul>
            <div className="flex gap-3 mt-5">
              {["IG", "FB", "TT"].map((s) => (
                <a
                  key={s}
                  href="#"
                  style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold hover:bg-[#3aabdc] hover:text-white transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div
          style={{ borderTop: "rgba(255,255,255,0.1) 1px solid" }}
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs"
        >
          <p style={{ fontFamily: "Outfit, sans-serif" }}>© 2026 Enviajarme. Todos los derechos reservados.</p>
          <div style={{ fontFamily: "Outfit, sans-serif" }} className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Términos de uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
// ── SHARED: PageHero (banner de páginas internas) ─────────────────────────────
export function PageHero({ title, eyebrow, img }) {
  return (
    <section className="relative min-h-[38vh] flex items-end overflow-hidden bg-[#0d2a1a]">
      <img src={img} alt={title} className="absolute inset-0 w-full h-full object-cover" style={{ opacity: 0.72 }} />
      <div className="absolute inset-0" style={{ background: "rgba(8,24,12,0.48)" }} />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to top, rgba(8,24,12,0.94) 0%, rgba(8,24,12,0.28) 60%, transparent 100%)",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-14 pt-20">
        <p
          style={{ color: C.sky, fontFamily: "Outfit, sans-serif" }}
          className="text-xs font-semibold uppercase tracking-widest mb-3"
        >
          {eyebrow}
        </p>
        <h1
          style={{ fontFamily: "Fraunces, Georgia, serif", color: C.white }}
          className="text-4xl md:text-6xl font-black leading-tight"
        >
          {title}
        </h1>
      </div>
    </section>
  )
}
// ── SHARED: ActivityCard ──────────────────────────────────────────────────────
export function ActivityCard({ activity, navigate, variant = "home" }) {
  const { title, date, location, spots, img, id, category } = activity
  const isLow = spots > 0 && spots <= 5
  const isFull = spots === 0
  return (
    <article
      style={{ background: C.surface, border: `1px solid ${C.forest}18` }}
      className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
    >
      <div className="h-48 bg-[#2d7a3a22] overflow-hidden relative">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {isLow && (
          <span
            style={{ background: C.earth, fontFamily: "Outfit, sans-serif" }}
            className="absolute top-3 right-3 text-white text-xs font-semibold px-2.5 py-1 rounded-full"
          >
            ¡Pocos cupos!
          </span>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span
            style={{ background: `${C.forest}18`, color: C.forest, fontFamily: "Outfit, sans-serif" }}
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
          >
            {date}
          </span>
          <span
            style={{ background: `${C.sky}18`, color: C.sky, fontFamily: "Outfit, sans-serif" }}
            className="text-xs font-semibold px-2.5 py-1 rounded-full"
          >
            {category}
          </span>
        </div>
        <h3
          style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
          className="text-lg font-bold mb-2 leading-snug"
        >
          {title}
        </h3>
        <p style={{ color: C.muted, fontFamily: "Outfit, sans-serif" }} className="text-sm mb-4">
          📍 {location}
        </p>
        <div className="flex items-center justify-between">
          <span
            style={{
              color: isFull ? C.earth : isLow ? C.earth : C.forest,
              fontFamily: "Outfit, sans-serif",
            }}
            className="text-sm font-medium"
          >
            {isFull ? "Sin cupos" : `${spots} cupos disponibles`}
          </span>
          {variant === "list" ? (
            <button
              onClick={() => navigate?.("actividad", { activityId: id })}
              disabled={isFull}
              style={{
                background: isFull ? C.muted : C.forest,
                color: C.white,
                fontFamily: "Outfit, sans-serif",
              }}
              className="px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity disabled:cursor-not-allowed"
            >
              {isFull ? "Lleno" : "Ver actividad"}
            </button>
          ) : (
            <button
              onClick={() => navigate?.("actividades")}
              style={{ background: C.forest, color: C.white, fontFamily: "Outfit, sans-serif" }}
              className="px-4 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Inscribirme
            </button>
          )}
        </div>
      </div>
    </article>
  )
}
// ── SHARED: NewsCard ──────────────────────────────────────────────────────────
export function NewsCard({ item, navigate }) {
  return (
    <article
      style={{ background: C.surface, border: `1px solid ${C.forest}15` }}
      className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer"
      onClick={() => navigate?.("noticia", { newsId: item.id })}
    >
      <div className="h-44 bg-[#3aabdc22] overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <span
          style={{ background: `${C.sky}22`, color: C.sky, fontFamily: "Outfit, sans-serif" }}
          className="text-xs font-semibold px-2.5 py-1 rounded-full"
        >
          {item.tag}
        </span>
        <h3
          style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
          className="text-base font-bold mt-3 mb-1.5 leading-snug"
        >
          {item.title}
        </h3>
        <p style={{ color: C.muted, fontFamily: "Outfit, sans-serif" }} className="text-xs mb-3">
          {item.date}
        </p>
        <p
          style={{
            color: C.inkSoft,
            fontFamily: "Outfit, sans-serif",
            WebkitLineClamp: 2,
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
          className="text-sm leading-relaxed mb-4"
        >
          {item.summary}
        </p>
        <button
          style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
          className="text-sm font-semibold hover:opacity-70 transition-opacity"
          onClick={(e) => {
            e.stopPropagation()
            navigate?.("noticia", { newsId: item.id })
          }}
        >
          Leer más →
        </button>
      </div>
    </article>
  )
}
