"use client";

import { useState } from "react";
import { C } from "@/lib/data";
import { PageHero } from "@/components/Shared";

function ContactoPage() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const validate = () => {
    const e = {};

    if (!form.nombre.trim()) {
      e.nombre = "El nombre es obligatorio.";
    } else if (
      form.nombre.trim().length < 2 ||
      form.nombre.trim().length > 100
    ) {
      e.nombre = "El nombre debe tener entre 2 y 100 caracteres.";
    }

    if (!form.correo.trim()) {
      e.correo = "El correo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correo.trim())) {
      e.correo = "Ingresa un correo válido.";
    }

    if (!form.asunto.trim()) {
      e.asunto = "El asunto es obligatorio.";
    } else if (form.asunto.trim().length > 150) {
      e.asunto = "El asunto no puede superar los 150 caracteres.";
    }

    if (!form.mensaje.trim()) {
      e.mensaje = "El mensaje es obligatorio.";
    } else if (
      form.mensaje.trim().length < 10 ||
      form.mensaje.trim().length > 5000
    ) {
      e.mensaje = "El mensaje debe tener entre 10 y 5000 caracteres.";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) return;

    setLoading(true);

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "No fue posible enviar el mensaje.");
      }

      setSent(true);
      setForm({
        nombre: "",
        correo: "",
        asunto: "",
        mensaje: "",
      });
      setErrors({});
    } catch (error) {
      setServerError(error.message || "Ocurrió un error al enviar el mensaje.");
    } finally {
      setLoading(false);
    }
  };

  const contacts = [
    { icon: "📧", label: "Correo electrónico", value: "info@enviajarme.org" },
    { icon: "📞", label: "Teléfono", value: "+506 2234-5678" },
    { icon: "📍", label: "Ubicación", value: "San José, Costa Rica" },
  ];

  return (
    <>
      <PageHero
        title="Contacto"
        eyebrow="Comunícate con nosotros"
        img="https://images.unsplash.com/photo-1643400814457-013ad2ee1b2d?w=1400&h=600&fit=crop&auto=format"
      />

      <section style={{ background: C.cream }} className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-5 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <p
                style={{ color: C.forest, fontFamily: "Outfit, sans-serif" }}
                className="text-xs font-semibold uppercase tracking-widest mb-4"
              >
                Estamos aquí para ayudarte
              </p>

              <h2
                style={{ fontFamily: "Fraunces, Georgia, serif", color: C.ink }}
                className="text-3xl md:text-4xl font-bold leading-tight mb-6"
              >
                Ponerse en contacto es fácil.
              </h2>

              <p
                style={{ color: C.inkSoft, fontFamily: "Outfit, sans-serif" }}
                className="text-base leading-relaxed mb-10 font-light"
              >
                ¿Tienes preguntas sobre nuestras actividades, deseas colaborar o
                quieres saber más sobre Enviajarme? Escríbenos y te
                responderemos con gusto.
              </p>

              <div className="flex flex-col gap-4 mb-10">
                {contacts.map((c) => (
                  <div
                    key={c.label}
                    style={{
                      background: C.surface,
                      border: `1px solid ${C.forest}18`,
                    }}
                    className="rounded-2xl p-5 flex items-center gap-4 shadow-sm"
                  >
                    <span className="text-2xl">{c.icon}</span>
                    <div>
                      <p
                        style={{
                          color: C.muted,
                          fontFamily: "Outfit, sans-serif",
                        }}
                        className="text-xs font-medium mb-0.5"
                      >
                        {c.label}
                      </p>
                      <p
                        style={{
                          color: C.ink,
                          fontFamily: "Outfit, sans-serif",
                        }}
                        className="text-sm font-semibold"
                      >
                        {c.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p
                style={{ color: C.ink, fontFamily: "Outfit, sans-serif" }}
                className="text-sm font-semibold mb-4"
              >
                Redes sociales
              </p>

              <div className="flex gap-3">
                {[
                  { name: "Instagram", abbr: "IG" },
                  { name: "Facebook", abbr: "FB" },
                  { name: "TikTok", abbr: "TT" },
                ].map((s) => (
                  <a
                    key={s.name}
                    href="#"
                    aria-label={s.name}
                    style={{
                      background: `${C.forest}15`,
                      color: C.forest,
                      fontFamily: "Outfit, sans-serif",
                    }}
                    className="w-11 h-11 rounded-full flex items-center justify-center text-xs font-bold hover:bg-[#2d7a3a] hover:text-white transition-all"
                  >
                    {s.abbr}
                  </a>
                ))}
              </div>
            </div>

            <div
              style={{
                background: C.surface,
                border: `1px solid ${C.forest}15`,
              }}
              className="rounded-2xl p-8 shadow-sm"
            >
              {sent ? (
                <div className="text-center py-10">
                  <span className="text-5xl mb-5 block">✅</span>

                  <h3
                    style={{
                      fontFamily: "Fraunces, Georgia, serif",
                      color: C.ink,
                    }}
                    className="text-2xl font-bold mb-3"
                  >
                    ¡Mensaje enviado!
                  </h3>

                  <p
                    style={{
                      color: C.inkSoft,
                      fontFamily: "Outfit, sans-serif",
                    }}
                    className="text-base leading-relaxed mb-6"
                  >
                    Gracias por contactarnos. Te responderemos a la brevedad
                    posible.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    style={{
                      background: C.forest,
                      color: C.white,
                      fontFamily: "Outfit, sans-serif",
                    }}
                    className="px-6 py-3 rounded-full text-sm font-semibold hover:opacity-90"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <>
                  <h3
                    style={{
                      fontFamily: "Fraunces, Georgia, serif",
                      color: C.ink,
                    }}
                    className="text-2xl font-bold mb-6"
                  >
                    Enviar mensaje
                  </h3>

                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="flex flex-col gap-5"
                  >
                    {["nombre", "correo", "asunto"].map((k) => {
                      const labels = {
                        nombre: "Nombre",
                        correo: "Correo electrónico",
                        asunto: "Asunto",
                      };

                      return (
                        <div key={k}>
                          <label
                            style={{
                              color: C.ink,
                              fontFamily: "Outfit, sans-serif",
                            }}
                            className="block text-sm font-semibold mb-1.5"
                          >
                            {labels[k]}{" "}
                            <span style={{ color: C.earth }}>*</span>
                          </label>

                          <input
                            type={k === "correo" ? "email" : "text"}
                            maxLength={
                              k === "nombre"
                                ? 100
                                : k === "asunto"
                                  ? 150
                                  : undefined
                            }
                            value={form[k]}
                            onChange={(e) =>
                              setForm((f) => ({ ...f, [k]: e.target.value }))
                            }
                            style={{
                              border: `1px solid ${errors[k] ? C.earth : `${C.forest}30`}`,
                              fontFamily: "Outfit, sans-serif",
                              color: C.ink,
                              background: C.surface,
                            }}
                            className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#2d7a3a40] transition-all"
                          />

                          {errors[k] && (
                            <p
                              style={{
                                color: C.earth,
                                fontFamily: "Outfit, sans-serif",
                              }}
                              className="text-xs mt-1.5"
                            >
                              {errors[k]}
                            </p>
                          )}
                        </div>
                      );
                    })}

                    <div>
                      <label
                        style={{
                          color: C.ink,
                          fontFamily: "Outfit, sans-serif",
                        }}
                        className="block text-sm font-semibold mb-1.5"
                      >
                        Mensaje <span style={{ color: C.earth }}>*</span>
                      </label>

                      <textarea
                        rows={5}
                        maxLength={5000}
                        value={form.mensaje}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, mensaje: e.target.value }))
                        }
                        style={{
                          border: `1px solid ${errors.mensaje ? C.earth : `${C.forest}30`}`,
                          fontFamily: "Outfit, sans-serif",
                          color: C.ink,
                          background: C.surface,
                          resize: "vertical",
                        }}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:ring-2 focus:ring-[#2d7a3a40] transition-all"
                      />

                      {errors.mensaje && (
                        <p
                          style={{
                            color: C.earth,
                            fontFamily: "Outfit, sans-serif",
                          }}
                          className="text-xs mt-1.5"
                        >
                          {errors.mensaje}
                        </p>
                      )}
                    </div>

                    {serverError && (
                      <p
                        role="alert"
                        style={{
                          color: C.earth,
                          fontFamily: "Outfit, sans-serif",
                        }}
                        className="text-sm"
                      >
                        {serverError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={loading}
                      style={{
                        background: C.forest,
                        color: C.white,
                        fontFamily: "Outfit, sans-serif",
                      }}
                      className="w-full py-4 rounded-full text-base font-semibold hover:opacity-90 transition-opacity shadow-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? "Enviando..." : "Enviar mensaje"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactoPage;
