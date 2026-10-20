"use client"


import ContactoPage from "@/components/pages/ContactoPage"
import { useNavigate } from "@/lib/navigation"

export default function Page() {

  const navigate = useNavigate()
  return <ContactoPage  navigate={navigate} />
}
