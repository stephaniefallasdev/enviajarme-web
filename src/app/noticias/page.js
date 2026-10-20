"use client"


import NoticiasPage from "@/components/pages/NoticiasPage"
import { useNavigate } from "@/lib/navigation"

export default function Page() {

  const navigate = useNavigate()
  return <NoticiasPage  navigate={navigate} />
}
