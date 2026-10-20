"use client"

import { useEffect, useState } from "react"
import ConfirmacionPage from "@/components/pages/ConfirmacionPage"
import { useNavigate, readConfirmData } from "@/lib/navigation"

export default function Page() {
  const navigate = useNavigate()
  const [confirmData, setConfirmData] = useState()

  useEffect(() => {
    setConfirmData(readConfirmData())
  }, [])

  return <ConfirmacionPage confirmData={confirmData} navigate={navigate} />
}
