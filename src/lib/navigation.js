"use client"

import { useRouter } from "next/navigation"

// Misma firma que usaba el prototipo: navigate("actividad", { activityId: 3 }).
// Traduce los nombres de página del prototipo a las rutas reales de Next.js.
const CONFIRM_KEY = "enviajarme-confirmacion"

export function useNavigate() {
  const router = useRouter()

  return (page, opts = {}) => {
    const routes = {
      inicio: "/",
      nosotros: "/nosotros",
      actividades: "/actividades",
      actividad: `/actividades/${opts.activityId ?? 1}`,
      inscripcion: `/actividades/${opts.activityId ?? 1}/inscripcion`,
      confirmacion: "/confirmacion",
      noticias: "/noticias",
      noticia: `/noticias/${opts.newsId ?? 1}`,
      contacto: "/contacto",
      responsabilidad: "/responsabilidad",
    }

    // Los datos de la confirmación se pasan por sessionStorage (no van en la URL por privacidad).
    if (page === "confirmacion" && opts.confirmData) {
      try {
        sessionStorage.setItem(CONFIRM_KEY, JSON.stringify(opts.confirmData))
      } catch {}
    }

    router.push(routes[page] ?? "/")
    window.scrollTo(0, 0)
  }
}

export function readConfirmData() {
  try {
    const raw = sessionStorage.getItem(CONFIRM_KEY)
    return raw ? JSON.parse(raw) : undefined
  } catch {
    return undefined
  }
}
