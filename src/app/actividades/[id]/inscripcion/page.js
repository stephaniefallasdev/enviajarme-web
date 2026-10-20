"use client"

import { useParams } from "next/navigation"
import InscripcionPage from "@/components/pages/InscripcionPage"
import { useNavigate } from "@/lib/navigation"

export default function Page() {
  const { id } = useParams()
  const navigate = useNavigate()
  return <InscripcionPage activityId={Number(id)} navigate={navigate} />
}
