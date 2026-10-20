"use client"


import ActividadesPage from "@/components/pages/ActividadesPage"
import { useNavigate } from "@/lib/navigation"

export default function Page() {

  const navigate = useNavigate()
  return <ActividadesPage  navigate={navigate} />
}
