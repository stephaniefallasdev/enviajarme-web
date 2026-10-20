"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Header, Footer } from "@/components/Shared"
import { useNavigate } from "@/lib/navigation"

// Convierte la ruta actual en el nombre de página que usa el Header para resaltar el menú.
function pageFromPath(pathname) {
  if (pathname === "/") return "inicio"
  const first = pathname.split("/")[1]
  return first || "inicio"
}

export default function SiteShell({ children }) {
  const navigate = useNavigate()
  const pathname = usePathname()
  const [theme, setTheme] = useState("light")

  // El script del layout ya aplicó el tema guardado antes de pintar; acá solo sincronizamos el estado de React.
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light")
  }, [])

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light"
    setTheme(next)
    document.documentElement.dataset.theme = next
    document.documentElement.style.colorScheme = next
    try {
      localStorage.setItem("enviajarme-theme", next)
    } catch {}
  }

  return (
    <div className="min-h-screen">
      <Header navigate={navigate} currentPage={pageFromPath(pathname)} theme={theme} toggleTheme={toggleTheme} />
      {children}
      <Footer navigate={navigate} />
    </div>
  )
}
