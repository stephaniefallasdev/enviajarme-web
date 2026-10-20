"use client"


import ResponsabilidadPage from "@/components/pages/ResponsabilidadPage"
import { useNavigate } from "@/lib/navigation"

export default function Page() {

  const navigate = useNavigate()
  return <ResponsabilidadPage  navigate={navigate} />
}
