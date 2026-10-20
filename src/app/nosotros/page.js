"use client"


import NosotrosPage from "@/components/pages/NosotrosPage"
import { useNavigate } from "@/lib/navigation"

export default function Page() {

  const navigate = useNavigate()
  return <NosotrosPage  navigate={navigate} />
}
