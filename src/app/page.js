"use client"


import HomePage from "@/components/pages/HomePage"
import { useNavigate } from "@/lib/navigation"

export default function Page() {

  const navigate = useNavigate()
  return <HomePage  navigate={navigate} />
}
