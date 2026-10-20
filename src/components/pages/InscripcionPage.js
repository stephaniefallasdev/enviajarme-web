"use client"

import { useState } from "react"
import { C, ACTIVITIES } from "@/lib/data"

// ══════════════════════════════════════════════════════════════════════════════
// PÁGINA: FORMULARIO DE INSCRIPCIÓN
// ══════════════════════════════════════════════════════════════════════════════
function InscripcionPage({ activityId, navigate }) {
  const activity = ACTIVITIES.find((a) => a.id === activityId) ?? ACTIVITIES[0]
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    edad: "",
    direccion: "",
    consentimiento: false,
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const validate = () => {
    const e = {}
    if (!form.nombre.trim()) e.nombre = "El nombre completo es obligatorio."
    if (!form.correo.trim()) {
      e.correo = "El correo electrónico es obligatorio."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo)) {
      e.correo = "Ingresa un correo válido."
    }
    if (!form.telefono.trim()) e.telefono = "El teléfono es obligatorio."
    if (!form.edad.trim()) {
      e.edad = "La edad es obligatoria."
    } else if (isNaN(Number(form.edad)) || Number(form.edad) < 12 || Number(form.edad) > 100) {
      e.edad = "Ingresa una edad válida (12–100)."
    }
    if (!form.direccion.trim()) e.direccion = "La dirección es obligatoria."
    setErrors(e)
    return Object.keys(e).length === 0
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    setTimeout(() => {
      navigate("confirmacion", {
        confirmData: {
          name: form.nombre,
          email: form.correo,
          activityTitle: activity.title,
          date: activity.date,
          location: activity.location,
        },
      })
    }, 700)
  }
  const InputField = ({ k, label, type = "text", placeholder = "" }) => (
    <div>
      <label style={{ color: C.ink, fontFamily: "Outfit, sans-serif" }} className="block text-sm font-semibold mb-1.5">
        {label} <span style={{ color: C.earth }}>*</span>
      </label>
      <input
        type={type}
        value={form[k]}
        onChange={(e) => setForm((f) => ({ ...f, [k]: e.target.value }))}
        placeholder={placeholder}
        style={{
          border: `1px solid ${errors[k] ? C.earth : `${C.forest}30`}`,
          fontFamily: "Outfit, sans-serif",
          color: C.ink,
          background: C.surface,
        }}
        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all focus:ring-2 focus:ring-[#2d7a3a40]"
      />
      {errors[k] && (
        <p style={{ color: C.earth, fontFamily: "Outfit, sans-serif" }} className="text-xs mt-1.5">
          {errors[k]}
        </p>
      )}
    </div>
  )
  return (
    <section style={{ background: C.cream }} className="py-12 md:py-20">
      <div className="max-w-3xl mx-auto px-5 md:px-8">
        <button
          onClick={() => navigate("actividad", { activityId })}
          style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
          className="text-sm font-medium mb-8 block hover:opacity-70 transition-opacity"
        >
          ← Volver a la actividad
        </button>

        {/* Resumen de actividad */}
        <div
          style={{ background: `${C.forest}0d`, border: `1px solid ${C.forest}20` }}
          className="rounded-2xl p-5 mb-8"
        >
          <p
            style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
            className="text-xs font-semibold uppercase tracking-widest mb-1"
          >
            Inscripción a actividad
          </p>
          <h2 style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }} className="text-xl font-bold mb-3">
            {activity.title}
          </h2>
          <div className="flex flex-wrap gap-4">
            <span style={{ color: C.muted, fontFamily: "Outfit, sans-serif" }} className="text-sm">
              📅 {activity.date}
            </span>
            <span style={{ color: C.muted, fontFamily: "Outfit, sans-serif" }} className="text-sm">
              📍 {activity.location}
            </span>
            <span style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }} className="text-sm font-medium">
              {activity.spots} cupos disponibles
            </span>
          </div>
        </div>

        {/* Formulario */}
        <div style={{ background: C.surface, border: `1px solid ${C.forest}15` }} className="rounded-2xl p-8 shadow-sm">
          <h2 style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }} className="text-2xl font-bold mb-2">
            Datos de inscripción
          </h2>
          <p style={{ color: C.muted, fontFamily: "Outfit, sans-serif" }} className="text-sm mb-8">
            Completa el formulario para reservar tu cupo. No es necesario crear una cuenta.
          </p>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            <InputField k="nombre" label="Nombre completo" placeholder="Ej. María González Pérez" />
            <InputField k="correo" label="Correo electrónico" type="email" placeholder="Ej. maria@correo.com" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <InputField k="telefono" label="Teléfono" type="tel" placeholder="Ej. 8888-8888" />
              <InputField k="edad" label="Edad" type="number" placeholder="Ej. 28" />
            </div>
            <InputField k="direccion" label="Dirección" placeholder="Provincia, cantón, distrito" />

            {/* Consentimiento */}
            <div className="flex items-start gap-3 mt-1">
              <input
                type="checkbox"
                id="consentimiento"
                checked={form.consentimiento}
                onChange={(e) => setForm((f) => ({ ...f, consentimiento: e.target.checked }))}
                style={{ accentColor: C.forest }}
                className="mt-1 w-4 h-4 shrink-0 cursor-pointer"
              />
              <label
                htmlFor="consentimiento"
                style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
                className="text-sm leading-relaxed cursor-pointer"
              >
                Acepto recibir información sobre futuras actividades y noticias de Enviajarme por correo electrónico.{" "}
                <span style={{ color: C.muted }}>(Opcional)</span>
              </label>
            </div>

            {/* Nota de privacidad */}
            <div
              style={{
                background: `${C.sky}10`,
                border: `1px solid ${C.sky}20`,
                color: C.muted,
                fontFamily: "Outfit, sans-serif",
              }}
              className="text-xs leading-relaxed px-4 py-3 rounded-xl"
            >
              🔒 Tus datos serán utilizados únicamente para gestionar tu inscripción y comunicación relacionada con esta
              actividad. No compartimos tu información con terceros.
            </div>

            {/* Acciones */}
            <div className="flex flex-col sm:flex-row gap-3 mt-2">
              <button
                type="submit"
                disabled={submitting}
                style={{
                  background: submitting ? C.muted : C.forest,
                  color: C.white,
                  fontFamily: "Outfit, sans-serif",
                }}
                className="flex-1 py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-sm disabled:cursor-not-allowed"
              >
                {submitting ? "Confirmando..." : "Confirmar inscripción"}
              </button>
              <button
                type="button"
                onClick={() => navigate("actividad", { activityId })}
                style={{ border: `1px solid ${C.forest}40`, color: C.forest, fontFamily: "Outfit, sans-serif" }}
                className="sm:w-auto px-6 py-4 rounded-full text-base font-semibold hover:bg-[#2d7a3a08] transition-colors"
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default InscripcionPage
