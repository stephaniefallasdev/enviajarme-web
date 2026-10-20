"use client"

import { useState } from "react"
import { C } from "@/lib/data"

// ══════════════════════════════════════════════════════════════════════════════
// PÁGINA: RESPONSABILIDAD EMPRESARIAL
// ══════════════════════════════════════════════════════════════════════════════
function CorporateIcon({ name }) {
  const paths = {
    contact: (
      <>
        <path d="M5 6.5h14v10H9l-4 3v-13Z" />
        <path d="M8 10h8M8 13h5" />
      </>
    ),
    goals: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <path d="m12 12 6-6" />
      </>
    ),
    proposal: (
      <>
        <path d="M7 3h8l4 4v14H7V3Z" />
        <path d="M15 3v5h4M10 12h6M10 16h6" />
      </>
    ),
    coordinate: (
      <>
        <circle cx="8" cy="8" r="3" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M3 20c.5-4 2.2-6 5-6s4.5 2 5 6M14 15c2.8-.6 5 .9 6 4" />
      </>
    ),
    clean: (
      <>
        <path d="m5 11 7-7 7 7" />
        <path d="M8 9v10h8V9M4 20h16" />
      </>
    ),
    conserve: (
      <>
        <path d="M12 21V9" />
        <path d="M12 13c-5 0-7-3-7-7 4 0 7 2 7 7ZM12 16c5 0 7-3 7-7-4 0-7 2-7 7Z" />
      </>
    ),
    educate: (
      <>
        <path d="m3 7 9-4 9 4-9 4-9-4Z" />
        <path d="M6 9.5V15c3 2.5 9 2.5 12 0V9.5M21 7v7" />
      </>
    ),
    collaborate: (
      <>
        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM16 13a3 3 0 1 0 0-6" />
        <path d="M2 21c.5-4.5 2.5-7 6-7s5.5 2.5 6 7M14 15c4-.8 6.5 1.2 7 5" />
      </>
    ),
  }
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {paths[name]}
      </g>
    </svg>
  )
}
function ResponsabilidadPage({ navigate }) {
  const emptyForm = {
    contacto: "",
    empresa: "",
    correo: "",
    telefono: "",
    colaboradores: "",
    proyecto: "",
    descripcion: "",
  }
  const [form, setForm] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [sent, setSent] = useState(false)
  const initiatives = [
    {
      title: "Jornadas de limpieza",
      desc: "Posibles acciones participativas en playas, ríos, senderos u otros espacios naturales, según las necesidades identificadas.",
      icon: "clean",
      img: "https://images.unsplash.com/photo-1700936206521-791dcd35c745?w=700&h=500&fit=crop&auto=format",
    },
    {
      title: "Conservación ambiental",
      desc: "Experiencias orientadas al cuidado y recuperación de ecosistemas, definidas junto a aliados locales y el equipo participante.",
      icon: "conserve",
      img: "https://images.unsplash.com/photo-1752169580565-c2515f8973f1?w=700&h=500&fit=crop&auto=format",
    },
    {
      title: "Educación ambiental",
      desc: "Espacios de aprendizaje y sensibilización que pueden adaptarse al contexto, los objetivos y la experiencia de cada grupo.",
      icon: "educate",
      img: "https://images.unsplash.com/photo-1697490320291-472391ded800?w=700&h=500&fit=crop&auto=format",
    },
    {
      title: "Proyectos a la medida",
      desc: "Ideas colaborativas construidas desde cero para responder a la cultura, disponibilidad y prioridades ambientales de la empresa.",
      icon: "collaborate",
      img: "https://images.unsplash.com/photo-1697490251928-7e75b5147e5f?w=700&h=500&fit=crop&auto=format",
    },
  ]
  const steps = [
    { title: "Nos contactamos", desc: "Abrimos una conversación para conocer la idea inicial.", icon: "contact" },
    {
      title: "Conocemos sus objetivos",
      desc: "Escuchamos las metas, necesidades y características del equipo.",
      icon: "goals",
    },
    {
      title: "Diseñamos una propuesta",
      desc: "Planteamos una colaboración coherente con el contexto de la empresa.",
      icon: "proposal",
    },
    {
      title: "Coordinamos el proyecto",
      desc: "Alineamos la logística y la participación de los colaboradores.",
      icon: "coordinate",
    },
  ]
  const validate = () => {
    const next = {}
    if (!form.contacto.trim()) next.contacto = "Indica el nombre de la persona de contacto."
    if (!form.empresa.trim()) next.empresa = "Indica el nombre de la empresa."
    if (!form.correo.trim()) {
      next.correo = "El correo electrónico es obligatorio."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      next.correo = "Ingresa un correo electrónico válido."
    }
    if (!form.telefono.trim()) next.telefono = "El teléfono es obligatorio."
    if (!form.colaboradores.trim()) {
      next.colaboradores = "Indica una cantidad aproximada."
    } else if (Number(form.colaboradores) < 1) {
      next.colaboradores = "La cantidad debe ser mayor a cero."
    }
    if (!form.proyecto) next.proyecto = "Selecciona un tipo de proyecto."
    if (!form.descripcion.trim()) next.descripcion = "Cuéntanos brevemente sobre la propuesta."
    setErrors(next)
    return Object.keys(next).length === 0
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSent(true)
    }, 650)
  }
  const fieldStyle = (key) => ({
    border: `1px solid ${errors[key] ? C.earth : `${C.forest}30`}`,
    fontFamily: "Outfit, sans-serif",
    color: C.ink,
    background: C.surface,
  })
  const scrollToForm = () => document.getElementById("solicitud-empresarial")?.scrollIntoView({ behavior: "smooth" })
  return (
    <>
      <section className="relative min-h-[76vh] flex items-end overflow-hidden bg-[#0d2a1a]">
        <img
          src="https://images.unsplash.com/photo-1697490251905-d7abdf8436ca?w=1800&h=1000&fit=crop&auto=format"
          alt="Equipo colaborando en una actividad ambiental"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(90deg, rgba(8,24,12,0.92) 0%, rgba(8,24,12,0.6) 54%, rgba(8,24,12,0.2) 100%)",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pb-16 md:pb-24 pt-28 w-full">
          <p
            style={{ color: C.sky, fontFamily: "Outfit, sans-serif" }}
            className="text-xs font-semibold uppercase tracking-widest mb-4"
          >
            Responsabilidad empresarial
          </p>
          <h1
            style={{ fontFamily: "Fraunces, Georgia, serif", color: C.white }}
            className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.04] max-w-4xl mb-6"
          >
            Transformemos juntos nuestro compromiso ambiental en acción
          </h1>
          <p
            style={{ color: "rgba(255,255,255,0.86)", fontFamily: "Outfit, sans-serif" }}
            className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mb-9"
          >
            Conectamos empresas, colaboradores y comunidades mediante proyectos que promueven la participación y el
            compromiso con el ambiente.
          </p>
          <button
            onClick={scrollToForm}
            style={{ background: C.sky, color: C.white, fontFamily: "Outfit, sans-serif" }}
            className="px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 active:scale-95 transition-all shadow-lg"
          >
            Conversemos sobre un proyecto
          </button>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="max-w-3xl mb-12">
            <p
              style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
              className="text-xs font-semibold uppercase tracking-widest mb-3"
            >
              Colaboración empresarial
            </p>
            <h2
              style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
              className="text-3xl md:text-5xl font-bold leading-tight mb-5"
            >
              Una alianza que genera impacto
            </h2>
            <p
              style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
              className="text-base md:text-lg leading-relaxed font-light"
            >
              Cada empresa tiene objetivos y equipos distintos. Por eso, el primer paso es conversar: Enviajarme puede
              explorar junto a su organización oportunidades de participación ambiental y diseñar una actividad adecuada
              a sus colaboradores, capacidades y contexto.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((item) => (
              <article
                key={item.title}
                style={{ background: C.surface, border: `1px solid ${C.forest}18` }}
                className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span
                    style={{ background: `${C.forest}15`, color: C.forest }}
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  >
                    <CorporateIcon name={item.icon} />
                  </span>
                  <h3
                    style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
                    className="text-xl font-bold mb-3"
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
                    className="text-sm leading-relaxed font-light"
                  >
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.cream }} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <p
            style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
            className="text-xs font-semibold uppercase tracking-widest text-center mb-3"
          >
            Cómo trabajamos
          </p>
          <h2
            style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
            className="text-3xl md:text-4xl font-bold text-center mb-14"
          >
            De la conversación a la acción
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {index < steps.length - 1 && (
                  <div
                    style={{ background: `${C.forest}30` }}
                    className="hidden md:block absolute h-px top-7 left-[62%] w-[76%]"
                  />
                )}
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <span
                      style={{ background: C.forest, color: C.white }}
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                    >
                      <CorporateIcon name={step.icon} />
                    </span>
                    <span
                      style={{ color: C.sky, fontFamily: "Fraunces, Georgia, serif" }}
                      className="text-3xl font-black"
                    >
                      0{index + 1}
                    </span>
                  </div>
                  <h3
                    style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
                    className="text-xl font-bold mb-2"
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
                    className="text-sm leading-relaxed font-light"
                  >
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: C.forest }} className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
          <h2
            style={{ fontFamily: "Fraunces, Georgia, serif", color: C.white }}
            className="text-3xl md:text-5xl font-bold mb-5"
          >
            ¿Te gustaría desarrollar un proyecto con Enviajarme?
          </h2>
          <p
            style={{ color: "rgba(255,255,255,0.8)", fontFamily: "Outfit, sans-serif" }}
            className="text-lg font-light leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Comparte las ideas, necesidades y objetivos de tu empresa. Nuestro equipo podrá conocer el contexto y
            explorar contigo una colaboración posible.
          </p>
          <button
            onClick={scrollToForm}
            style={{ background: C.sky, color: C.white }}
            className="px-8 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-lg"
          >
            Iniciar conversación
          </button>
        </div>
      </section>

      <section id="solicitud-empresarial" className="py-20 md:py-28 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-2 lg:sticky lg:top-32">
              <p
                style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
                className="text-xs font-semibold uppercase tracking-widest mb-3"
              >
                Contacto empresarial
              </p>
              <h2
                style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
                className="text-3xl md:text-4xl font-bold leading-tight mb-5"
              >
                Cuéntanos qué tienen en mente
              </h2>
              <p
                style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
                className="text-base leading-relaxed font-light mb-8"
              >
                Esta solicitud es independiente de la inscripción pública a actividades. La información nos ayudará a
                preparar una primera conversación enfocada en su empresa.
              </p>
              <div style={{ background: `${C.sky}10`, border: `1px solid ${C.sky}25` }} className="rounded-2xl p-5">
                <p style={{ color: C.ink, fontFamily: "Outfit, sans-serif" }} className="text-sm font-semibold mb-1">
                  Una conversación sin compromiso
                </p>
                <p style={{ color: C.muted, fontFamily: "Outfit, sans-serif" }} className="text-sm leading-relaxed">
                  Revisaremos la solicitud y utilizaremos los datos únicamente para contactar a su organización.
                </p>
              </div>
            </div>

            <div
              style={{ background: C.surface, border: `1px solid ${C.forest}18` }}
              className="lg:col-span-3 rounded-2xl p-6 md:p-9 shadow-sm"
            >
              {sent ? (
                <div className="text-center py-12" role="status">
                  <span
                    style={{ background: `${C.forest}15`, color: C.forest }}
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                  >
                    <svg width="38" height="38" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="m5 12 4 4L19 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <h3
                    style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
                    className="text-3xl font-bold mb-3"
                  >
                    Solicitud recibida
                  </h3>
                  <p
                    style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
                    className="text-base leading-relaxed max-w-md mx-auto mb-8"
                  >
                    Gracias, {form.contacto}. Recibimos la información de {form.empresa} y podremos contactarte en{" "}
                    {form.correo}.
                  </p>
                  <button
                    onClick={() => {
                      setForm(emptyForm)
                      setSent(false)
                    }}
                    style={{ border: `1px solid ${C.forest}40`, color: C.forest }}
                    className="px-7 py-3 rounded-full text-sm font-semibold hover:bg-[#2d7a3a08] transition-colors"
                  >
                    Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <>
                  <h3
                    style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
                    className="text-2xl font-bold mb-2"
                  >
                    Solicitud de colaboración
                  </h3>
                  <p style={{ color: C.muted, fontFamily: "Outfit, sans-serif" }} className="text-sm mb-8">
                    Todos los campos son obligatorios.
                  </p>
                  <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      ["contacto", "Nombre de la persona de contacto", "text", "Ej. Ana Rodríguez"],
                      ["empresa", "Nombre de la empresa", "text", "Ej. Empresa Verde S.A."],
                      ["correo", "Correo electrónico", "email", "ana@empresa.com"],
                      ["telefono", "Teléfono", "tel", "Ej. 8888-8888"],
                    ].map(([key, label, type, placeholder]) => (
                      <div key={key}>
                        <label
                          htmlFor={`corporate-${key}`}
                          style={{ color: C.ink, fontFamily: "Outfit, sans-serif" }}
                          className="block text-sm font-semibold mb-1.5"
                        >
                          {label} <span style={{ color: C.earth }}>*</span>
                        </label>
                        <input
                          id={`corporate-${key}`}
                          type={type}
                          value={form[key]}
                          onChange={(event) => setForm((current) => ({ ...current, [key]: event.target.value }))}
                          placeholder={placeholder}
                          aria-invalid={Boolean(errors[key])}
                          aria-describedby={errors[key] ? `corporate-${key}-error` : undefined}
                          style={fieldStyle(key)}
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[#2d7a3a40]"
                        />
                        {errors[key] && (
                          <p id={`corporate-${key}-error`} style={{ color: C.earth }} className="text-xs mt-1.5">
                            {errors[key]}
                          </p>
                        )}
                      </div>
                    ))}
                    <div>
                      <label
                        htmlFor="corporate-colaboradores"
                        style={{ color: C.ink }}
                        className="block text-sm font-semibold mb-1.5"
                      >
                        Cantidad aproximada de colaboradores <span style={{ color: C.earth }}>*</span>
                      </label>
                      <input
                        id="corporate-colaboradores"
                        type="number"
                        min="1"
                        value={form.colaboradores}
                        onChange={(event) => setForm((current) => ({ ...current, colaboradores: event.target.value }))}
                        placeholder="Ej. 25"
                        aria-invalid={Boolean(errors.colaboradores)}
                        style={fieldStyle("colaboradores")}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[#2d7a3a40]"
                      />
                      {errors.colaboradores && (
                        <p style={{ color: C.earth }} className="text-xs mt-1.5">
                          {errors.colaboradores}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="corporate-proyecto"
                        style={{ color: C.ink }}
                        className="block text-sm font-semibold mb-1.5"
                      >
                        Tipo de proyecto de interés <span style={{ color: C.earth }}>*</span>
                      </label>
                      <select
                        id="corporate-proyecto"
                        value={form.proyecto}
                        onChange={(event) => setForm((current) => ({ ...current, proyecto: event.target.value }))}
                        aria-invalid={Boolean(errors.proyecto)}
                        style={fieldStyle("proyecto")}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[#2d7a3a40]"
                      >
                        <option value="">Seleccionar</option>
                        <option>Jornada de limpieza</option>
                        <option>Conservación ambiental</option>
                        <option>Educación ambiental</option>
                        <option>Proyecto colaborativo a la medida</option>
                        <option>Otra idea</option>
                      </select>
                      {errors.proyecto && (
                        <p style={{ color: C.earth }} className="text-xs mt-1.5">
                          {errors.proyecto}
                        </p>
                      )}
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="corporate-descripcion"
                        style={{ color: C.ink }}
                        className="block text-sm font-semibold mb-1.5"
                      >
                        Descripción de la propuesta <span style={{ color: C.earth }}>*</span>
                      </label>
                      <textarea
                        id="corporate-descripcion"
                        rows={5}
                        value={form.descripcion}
                        onChange={(event) => setForm((current) => ({ ...current, descripcion: event.target.value }))}
                        placeholder="Cuéntanos sobre sus objetivos, ideas, fechas tentativas o necesidades particulares."
                        aria-invalid={Boolean(errors.descripcion)}
                        style={{ ...fieldStyle("descripcion"), resize: "vertical" }}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[#2d7a3a40]"
                      />
                      {errors.descripcion && (
                        <p style={{ color: C.earth }} className="text-xs mt-1.5">
                          {errors.descripcion}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      style={{ background: submitting ? C.muted : C.forest, color: C.white }}
                      className="sm:col-span-2 w-full py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-sm disabled:cursor-not-allowed"
                    >
                      {submitting ? "Enviando solicitud..." : "Enviar solicitud"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mt-14">
            <button
              onClick={() => navigate("inicio")}
              style={{ color: C.forest }}
              className="px-7 py-3 rounded-full text-sm font-semibold underline underline-offset-4"
            >
              Volver a Inicio
            </button>
            <button
              onClick={() => navigate("actividades")}
              style={{ border: `1px solid ${C.forest}40`, color: C.forest }}
              className="px-7 py-3 rounded-full text-sm font-semibold hover:bg-[#2d7a3a08] transition-colors"
            >
              Consultar actividades ambientales
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default ResponsabilidadPage
