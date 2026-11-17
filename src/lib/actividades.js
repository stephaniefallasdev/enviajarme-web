const MESES = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];
const IMG_DEFAULT =
  "https://images.unsplash.com/photo-1700936206521-791dcd35c745?w=1200&h=700&fit=crop&auto=format";

function formatearFecha(iso) {
  const partes = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Costa_Rica",
    day: "numeric",
    month: "numeric",
    year: "numeric",
  }).formatToParts(new Date(iso));
  const get = (t) => Number(partes.find((p) => p.type === t).value);
  return `${get("day")} ${MESES[get("month") - 1]} ${get("year")}`;
}

export function mapActividad(a) {
  return {
    id: a.id,
    title: a.titulo,
    date: formatearFecha(a.fecha_inicio),
    location: a.ubicacion,
    spots: a.cupos_disponibles,
    maxSpots: a.cupo_maximo,
    category: a.categoria ?? "General",
    description: a.descripcion,
    img: a.imagen_url || IMG_DEFAULT,
    gallery: a.fotos ?? [],
    videos: a.videos ?? [],
    open: a.abierta ?? true,
  };
}
