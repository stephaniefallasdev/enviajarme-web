"use client"

import { useParams } from "next/navigation"
import NoticiaDetallePage from "@/components/pages/NoticiaDetallePage"
import { useNavigate } from "@/lib/navigation"

export default function Page() {
  const { id } = useParams()
  const navigate = useNavigate()
  return <NoticiaDetallePage newsId={Number(id)} navigate={navigate} />
}
