// ── palette ───────────────────────────────────────────────────────────────────
export const C = {
  sky: "#3aabdc",
  forest: "#2d7a3a",
  forestDark: "#1e5429",
  earth: "#7a4f1e",
  earthLight: "#a0692e",
  leaf: "#4caf50",
  cream: "var(--page-bg)",
  surface: "var(--surface)",
  white: "#ffffff",
  ink: "var(--text-primary)",
  inkSoft: "var(--text-secondary)",
  muted: "var(--text-muted)",
  footer: "#111713",
}
// ── data ──────────────────────────────────────────────────────────────────────
export const ACTIVITIES = [
  {
    id: 1,
    title: "Limpieza Sendero Volcán Poás",
    date: "12 Oct 2026",
    location: "Alajuela, Costa Rica",
    spots: 18,
    maxSpots: 30,
    category: "Sendero",
    description:
      "Únete a nuestra jornada de limpieza en los senderos del Parque Nacional Volcán Poás. Retiraremos residuos sólidos, plásticos y materiales abandonados, manteniendo el acceso limpio y seguro para visitantes y fauna local. Ideal para amantes del senderismo y la naturaleza. Se requiere ropa cómoda, calzado cerrado y guantes (se proveen bolsas).",
    img: "https://images.unsplash.com/photo-1721850661500-de8d89079863?w=1200&h=700&fit=crop&auto=format",
    gallery: [
      "https://images.unsplash.com/photo-1683065480640-6c3e20231a7a?w=600&h=400&fit=crop&auto=format",
      "https://images.unsplash.com/photo-1700936206521-791dcd35c745?w=600&h=400&fit=crop&auto=format",
    ],
    videos: [],
  },
  {
    id: 2,
    title: "Reforestación Bosque Nuboso",
    date: "25 Oct 2026",
    location: "Monteverde, Costa Rica",
    spots: 24,
    maxSpots: 40,
    category: "Bosque",
    description:
      "Participaremos en la siembra de árboles nativos en zonas degradadas del bosque nuboso de Monteverde. Esta actividad contribuye directamente a la recuperación de hábitats para la biodiversidad local, incluyendo quetzales y otras especies amenazadas. Se incluye capacitación en técnicas de siembra y charla sobre especies nativas.",
    img: "https://images.unsplash.com/photo-1683065480640-6c3e20231a7a?w=1200&h=700&fit=crop&auto=format",
    gallery: [],
    videos: [{ label: "Actividad de reforestación 2025", url: "https://youtube.com" }],
  },
  {
    id: 3,
    title: "Retiro de Residuos Playa Hermosa",
    date: "8 Nov 2026",
    location: "Puntarenas, Costa Rica",
    spots: 4,
    maxSpots: 30,
    category: "Playa",
    description:
      "Limpieza de playa en Playa Hermosa, Puntarenas. Retiraremos plásticos, botellas y otros residuos que amenazan los ecosistemas marinos y la fauna costera. Ideal para familias y grupos escolares. Actividad en la mañana para evitar el calor del mediodía.",
    img: "https://images.unsplash.com/photo-1700936206521-791dcd35c745?w=1200&h=700&fit=crop&auto=format",
    gallery: [],
    videos: [],
  },
  {
    id: 4,
    title: "Monitoreo de Ríos Zona Norte",
    date: "20 Nov 2026",
    location: "Sarapiquí, Costa Rica",
    spots: 15,
    maxSpots: 20,
    category: "Río",
    description:
      "Actividad de monitoreo de calidad del agua y limpieza de márgenes del río Sarapiquí. Trabajaremos con técnicos ambientales para documentar el estado del ecosistema fluvial y retirar residuos de las riberas. Incluye toma de muestras y registro de biodiversidad acuática.",
    img: "https://images.unsplash.com/photo-1643400814457-013ad2ee1b2d?w=1200&h=700&fit=crop&auto=format",
    gallery: [],
    videos: [],
  },
  {
    id: 5,
    title: "Educación Ambiental Escuelas Rurales",
    date: "5 Dic 2026",
    location: "San Carlos, Costa Rica",
    spots: 20,
    maxSpots: 25,
    category: "Educación",
    description:
      "Visitas a escuelas rurales de San Carlos para impartir talleres de educación ambiental con niños de primaria. Se abordarán temas de reciclaje, cuidado del agua y biodiversidad costarricense. Actividad perfecta para educadores, pedagogos y personas con experiencia con niños.",
    img: "https://images.unsplash.com/photo-1721850661499-0ed6d1096e76?w=1200&h=700&fit=crop&auto=format",
    gallery: [],
    videos: [],
  },
]
export const NEWS = [
  {
    id: 1,
    tag: "Medio Ambiente",
    title: "Costa Rica alcanza 99% de energía renovable en 2026",
    summary:
      "El país celebra un hito histórico en su transición energética, consolidándose como referente mundial en sostenibilidad.",
    date: "15 Sep 2026",
    img: "https://images.unsplash.com/photo-1721850661499-0ed6d1096e76?w=800&h=500&fit=crop&auto=format",
    content: [
      "Costa Rica ha alcanzado un nuevo récord histórico al generar el 99% de su electricidad a partir de fuentes renovables durante el 2026. Este logro posiciona al país como uno de los líderes mundiales en transición energética limpia.",
      "El Instituto Costarricense de Electricidad (ICE) confirmó que las fuentes hídricas, geotérmicas, eólicas y solares lograron satisfacer prácticamente toda la demanda nacional durante los primeros ocho meses del año.",
      "Los bosques y cuencas hidrográficas que cuidamos con nuestros voluntarios son la base de este éxito. Desde Enviajarme, celebramos este avance como parte de la misión colectiva de proteger los ecosistemas que hacen posible esta energía limpia.",
      "Las organizaciones ambientales han destacado que este logro debe ir acompañado de políticas de conservación de los territorios de agua, ya que el 70% de la energía renovable proviene de fuentes hidroeléctricas que dependen de la salud de los bosques.",
    ],
  },
  {
    id: 2,
    tag: "Voluntariado",
    title: "Más de 350 voluntarios transformaron senderos nacionales este año",
    summary:
      "La participación ciudadana en actividades de limpieza y conservación alcanzó cifras récord durante el 2026.",
    date: "3 Sep 2026",
    img: "https://images.unsplash.com/photo-1700936206550-d58812a80512?w=800&h=500&fit=crop&auto=format",
    content: [
      "Durante el 2026, más de 350 voluntarios se sumaron a las actividades organizadas por la Asociación Ambiental Enviajarme, marcando un récord histórico de participación ciudadana en la conservación de senderos y áreas naturales.",
      "Las jornadas abarcaron parques nacionales, reservas biológicas y senderos comunitarios en múltiples provincias. En total, se retiraron más de 1,250 kilogramos de residuos sólidos de zonas naturales protegidas.",
      "'No solo limpiamos el sendero, construimos una comunidad', expresó Ana Vargas, voluntaria de San José que participó en tres actividades este año.",
      "Enviajarme planea expandir su programa de voluntariado para el 2027, con nuevas actividades en la región Caribe y alianzas con comunidades indígenas para la conservación de territorios ancestrales.",
    ],
  },
  {
    id: 3,
    tag: "Comunidad",
    title: "Nuevas alianzas con municipios para el reciclaje en zonas rurales",
    summary:
      "Cinco municipios costarricenses se unen a la red de reciclaje comunitario impulsada por organizaciones ambientales.",
    date: "28 Ago 2026",
    img: "https://images.unsplash.com/photo-1700936206551-4223e111d38c?w=800&h=500&fit=crop&auto=format",
    content: [
      "Cinco municipios de zonas rurales de Costa Rica han formalizado alianzas con organizaciones ambientales para fortalecer sus sistemas de reciclaje comunitario.",
      "El proyecto contempla la instalación de puntos de reciclaje accesibles en comunidades alejadas, capacitación a familias y centros educativos, y la creación de rutas de recolección sostenibles.",
      "Enviajarme participa como facilitador en los talleres de educación ambiental que acompañan esta iniciativa, llevando voluntarios a las comunidades para apoyar los procesos de sensibilización.",
      "Se estima que en el primer año el proyecto podrá desviar más de 50 toneladas de residuos valorizables de los vertederos, reduciendo significativamente el impacto ambiental en estas zonas.",
    ],
  },
  {
    id: 4,
    tag: "Conservación",
    title: "Descubrimiento de nueva especie de orquídea en la Península de Osa",
    summary:
      "Investigadores costarricenses identifican una especie endémica nunca antes documentada en uno de los puntos de mayor biodiversidad del mundo.",
    date: "10 Ago 2026",
    img: "https://images.unsplash.com/photo-1721850661500-de8d89079863?w=800&h=500&fit=crop&auto=format",
    content: [
      "Un equipo de botánicos del Instituto Nacional de Biodiversidad de Costa Rica ha documentado una nueva especie de orquídea endémica en la Península de Osa, región que alberga el 2.5% de la biodiversidad mundial.",
      "La nueva especie fue encontrada en una zona de bosque primario a 800 metros de altitud. Su floración ocurre únicamente durante los meses de julio y agosto, lo que la hace especialmente difícil de observar.",
      "Este descubrimiento refuerza la urgencia de proteger los ecosistemas de la Península de Osa, donde la presión de actividades humanas sigue siendo una amenaza constante para la biodiversidad.",
      "Desde Enviajarme, este hallazgo nos recuerda por qué cada jornada de conservación importa. Los bosques que cuidamos son hogares de especies que aún no conocemos.",
    ],
  },
  {
    id: 5,
    tag: "Educación ambiental",
    title: "Talleres de compostaje llegan a 20 escuelas de la GAM",
    summary:
      "Programa educativo gratuito enseña a estudiantes de primaria el manejo responsable de residuos orgánicos.",
    date: "22 Jul 2026",
    img: "https://images.unsplash.com/photo-1683065480640-6c3e20231a7a?w=800&h=500&fit=crop&auto=format",
    content: [
      "Un programa de talleres de compostaje alcanzó a más de 3,000 estudiantes de primaria en 20 escuelas de la Gran Área Metropolitana durante el primer semestre del 2026.",
      "Los talleres, dirigidos por educadores ambientales voluntarios, enseñan a los niños a clasificar residuos orgánicos, crear abono casero y entender el ciclo de los nutrientes en la naturaleza.",
      "Varias de las escuelas participantes ya han instalado composteras en sus jardines, convirtiéndolas en herramientas pedagógicas permanentes.",
      "El programa busca expandirse a zonas rurales durante el segundo semestre, beneficiando a comunidades con acceso limitado a sistemas de gestión de residuos.",
    ],
  },
  {
    id: 6,
    tag: "Reciclaje",
    title: "Costa Rica reduce en 15% la generación de plástico de un solo uso",
    summary:
      "Las políticas de restricción y la educación ciudadana muestran resultados positivos en la reducción de plásticos desechables.",
    date: "5 Jul 2026",
    img: "https://images.unsplash.com/photo-1643400814457-013ad2ee1b2d?w=800&h=500&fit=crop&auto=format",
    content: [
      "Costa Rica reporta una reducción del 15% en la generación de residuos plásticos de un solo uso respecto al año anterior, según datos del Ministerio de Ambiente y Energía.",
      "Este resultado se atribuye a la combinación de políticas de restricción, campañas de sensibilización ciudadana y la adopción de alternativas sostenibles en el comercio.",
      "Las playas costarricenses han sido especialmente beneficiadas: los registros de residuos plásticos en zonas costeras muestran una disminución notable comparada con 2024.",
      "Desde Enviajarme, nuestras jornadas de limpieza de playas han contribuido a documentar y retirar toneladas de plástico de zonas costeras protegidas, datos que han servido de insumo para las políticas públicas.",
    ],
  },
]
export const NAV_ITEMS = [
  { label: "Inicio", page: "inicio" },
  { label: "Nosotros", page: "nosotros" },
  { label: "Actividades", page: "actividades" },
  { label: "Noticias", page: "noticias" },
  { label: "Contacto", page: "contacto" },
]
