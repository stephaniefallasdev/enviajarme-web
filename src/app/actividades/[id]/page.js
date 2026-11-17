"use client";

import { useParams } from "next/navigation";
import ActividadDetallePage from "@/components/pages/ActividadDetallePage";
import { useNavigate } from "@/lib/navigation";

export default function Page() {
  const { id } = useParams();
  const navigate = useNavigate();
  return <ActividadDetallePage activityId={id} navigate={navigate} />;
}
