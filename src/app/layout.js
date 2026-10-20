import "./globals.css"
import SiteShell from "@/components/SiteShell"

export const metadata = {
  title: {
    default: "Asociación Ambiental Enviajarme",
    template: "%s | Enviajarme",
  },
  description:
    "Sitio público de la Asociación Ambiental Enviajarme: actividades de voluntariado, noticias y contenido ambiental en Costa Rica.",
  // El prototipo tenía robots.index = false. Quitá esta línea cuando el sitio salga a producción.
  robots: { index: false, follow: false },
}

// Aplica el tema guardado (o el del sistema) antes de pintar para evitar el parpadeo claro/oscuro.
const themeScript = `
try {
  var t = localStorage.getItem("enviajarme-theme");
  if (t !== "light" && t !== "dark") t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  document.documentElement.dataset.theme = t;
  document.documentElement.style.colorScheme = t;
} catch (e) {}
`

export default function RootLayout({ children }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  )
}
