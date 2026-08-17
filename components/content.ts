export const BRAND = "NEXOLABS";
export const SITE_URL = "https://nexolabs.tech";
export const CONTACT_EMAIL = "info@nexolabs.tech";

/* ------------------------------------------------------------------ */
/*  WhatsApp — el primer contacto lo atiende el agente                  */
/*  Cambiar por el numero real: formato internacional, sin + ni espacios */
/*  Costa Rica = 506. Ej: 50688887777                                   */
/* ------------------------------------------------------------------ */
export const WHATSAPP_NUMBER = "50600000000";

export const WHATSAPP_MESSAGES = {
  demo: "Hola, quiero ver una demo de Nexolabs para mi negocio.",
  info: "Hola, quiero información sobre cómo automatizar mi negocio con Nexolabs.",
  sector: (sector: string) =>
    `Hola, tengo un negocio del sector ${sector} y quiero saber qué puede automatizar Nexolabs.`,
  datos:
    "Hola, quiero hablar sobre estrategia de datos y una posible migración a Databricks.",
};

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "#solucion", label: "Solución" },
  { href: "#capacidades", label: "Capacidades" },
  { href: "#datos", label: "Datos" },
  { href: "#proceso", label: "Proceso" },
  { href: "#contacto", label: "Contacto" },
];

export const METRICS = [
  { value: "24/7", label: "Operando sin pausa" },
  { value: "Segundos", label: "De consulta a orden creada" },
  { value: "1 agente", label: "Cuatro frentes cubiertos" },
];

export const PROBLEMS = [
  {
    title: "Todo pasa por una persona",
    body: "Cada consulta de WhatsApp, cada pedido y cada coordinación con el despachador depende de que alguien esté libre para atenderlo.",
  },
  {
    title: "El negocio cierra, las consultas no",
    body: "Los mensajes siguen llegando fuera de horario. Cuando alguien los ve al día siguiente, el cliente ya compró en otro lado.",
  },
  {
    title: "Se opera a ciegas",
    body: "Los datos existen en el POS, en el inventario y en las planillas, pero nadie tiene tiempo de cruzarlos para saber cómo va el negocio.",
  },
];

export const PILLARS = [
  {
    index: "01",
    title: "Ventas y atención",
    body: "El agente contesta chats, resuelve dudas, consulta stock y arma la orden directo en el punto de venta.",
    points: ["WhatsApp, SMS y web", "Stock en tiempo real", "Orden en el POS"],
  },
  {
    index: "02",
    title: "Despacho y entregas",
    body: "Avisa al despachador, asigna al repartidor y mantiene al cliente informado del estado de su pedido.",
    points: ["Aviso automático", "Asignación de ruta", "Seguimiento al cliente"],
  },
  {
    index: "03",
    title: "Reportes e inteligencia",
    body: "Ventas del día, productos que más rotan, márgenes por categoría y análisis de clientes, generados solos.",
    points: ["Reportes automáticos", "Rotación y márgenes", "Perfil de clientes"],
  },
  {
    index: "04",
    title: "Gestión de personal",
    body: "Consulta turnos, le avisa a cada colaborador el suyo, registra asistencia y calcula horas y horas extra.",
    points: ["Turnos y avisos", "Control de asistencia", "Horas y extras"],
  },
];

export const CAPABILITIES = [
  {
    group: "Ventas",
    items: [
      "Conversación natural en WhatsApp, SMS y chat web",
      "Consulta de inventario y stock en tiempo real",
      "Creación de órdenes directo en el POS",
      "Conexión con pasarelas de pago",
      "Historial y preferencias de cada cliente",
    ],
  },
  {
    group: "Operación",
    items: [
      "Coordinación de despacho y repartidores",
      "Notificaciones automáticas al equipo",
      "Seguimiento de entrega para el cliente",
      "Alertas de stock bajo y reposición",
      "Órdenes de compra a proveedores",
    ],
  },
  {
    group: "Datos y equipo",
    items: [
      "Reportes de ventas diarios, semanales y mensuales",
      "Análisis de clientes: frecuencia, historial y preferencias",
      "Turnos, asistencia, horas trabajadas y horas extra",
      "Rentabilidad por categoría y comparativas",
      "Publicidad automática desde fotos del producto",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Practica de datos: segunda linea de servicio                       */
/* ------------------------------------------------------------------ */

export const DATA_INTRO = {
  title: "Cuando los datos ya no caben en una hoja de cálculo",
  body: "La automatización genera información todos los días: cada venta, cada entrega, cada turno. Esa información vale poco mientras viva dispersa entre el POS, el ERP y archivos sueltos. Diseñamos la arquitectura que la consolida y la vuelve utilizable.",
};

export const DATA_SERVICES = [
  {
    index: "01",
    title: "Estrategia de datos",
    body: "Definimos qué se mide, dónde vive cada dato y quién lo consume. Modelo de gobierno, calidad y trazabilidad antes de escribir la primera línea de código.",
  },
  {
    index: "02",
    title: "Ingeniería y big data",
    body: "Pipelines que ingieren de múltiples fuentes, procesan a escala y sostienen el volumen conforme el negocio crece. Batch y streaming según lo pida el caso.",
  },
  {
    index: "03",
    title: "Análisis y visualización",
    body: "Modelos analíticos y tableros que responden preguntas de negocio, no que muestran gráficos bonitos. Rentabilidad real, comportamiento de cliente, proyecciones.",
  },
  {
    index: "04",
    title: "Migraciones a Databricks",
    body: "Llevamos plataformas heredadas a Lakehouse: migración de cargas, Delta Lake, Unity Catalog y optimización de costos. Sin cortar la operación mientras se mueve.",
  },
];

export const DATA_NOTE =
  "Trabajamos igual con quien ya tiene infraestructura y quiere ordenarla, y con quien arranca de cero y no quiere heredar los problemas de siempre.";

/* ------------------------------------------------------------------ */
/*  Como trabajamos                                                     */
/* ------------------------------------------------------------------ */

export const PROCESS_INTRO = {
  title: "Cómo trabajamos contigo",
  body: "Nadie automatiza un negocio entero de un solo golpe. Empezamos por un proceso concreto, lo dejamos funcionando y de ahí se construye el resto.",
};

export const PROCESS_STEPS = [
  {
    index: "01",
    title: "Diagnóstico",
    duration: "Semana 1",
    body: "Revisamos cómo opera hoy tu negocio: por dónde entran los pedidos, qué sistemas usas, dónde se pierde tiempo. Salimos con una lista priorizada de qué conviene automatizar primero.",
  },
  {
    index: "02",
    title: "Primer flujo",
    duration: "Semanas 2 a 4",
    body: "Construimos y conectamos el agente al proceso que más duele. Lo probamos con volumen real y con tu equipo, hasta que responde como esperabas.",
  },
  {
    index: "03",
    title: "Puesta en marcha",
    duration: "Semana 5",
    body: "El agente entra en producción con acompañamiento. Capacitamos a quien lo va a supervisar y dejamos claro qué decide solo y qué escala a una persona.",
  },
  {
    index: "04",
    title: "Medición y expansión",
    duration: "Continuo",
    body: "Medimos qué cambió en números y ajustamos. Con esa base decidimos cuál es el siguiente proceso que vale la pena automatizar.",
  },
];

export const PROCESS_NOTE =
  "Sin contratos largos ni migraciones de meses. El primer flujo tiene que demostrar su valor antes de hablar del segundo.";

/* ------------------------------------------------------------------ */
/*  Formulario de contacto                                              */
/* ------------------------------------------------------------------ */

export const BUDGET_OPTIONS = [
  "Todavía no lo tengo definido",
  "Menos de $2.000",
  "$2.000 - $5.000",
  "$5.000 - $10.000",
  "Más de $10.000",
];

export const INTEREST_OPTIONS = [
  "Automatización con agentes de IA",
  "Estrategia y arquitectura de datos",
  "Migración a Databricks",
  "Aún no estoy seguro",
];

export const FLOW_STEPS = [
  {
    step: "01",
    title: "Llega el mensaje",
    body: "Un cliente escribe por WhatsApp pidiendo tres jabones.",
  },
  {
    step: "02",
    title: "Consulta el inventario",
    body: "El agente revisa stock y precio en el sistema, sin intervención humana.",
  },
  {
    step: "03",
    title: "Crea la orden",
    body: "Registra la venta en el POS y confirma al cliente con el total.",
  },
  {
    step: "04",
    title: "Coordina la entrega",
    body: "Avisa al despachador, asigna transporte y notifica al cliente.",
  },
];

export const AD_STEPS = [
  "Manda dos fotos del producto por WhatsApp",
  "El agente arma la pieza promocional",
  "La revisas y apruebas",
  "Sale a toda tu base de clientes",
];

export const CUSTOMIZATION = [
  {
    title: "Empezamos por lo que más duele",
    body: "Definimos juntos qué se automatiza primero: ventas, despacho, reportes o personal. No hay que hacerlo todo de una vez.",
  },
  {
    title: "Nos conectamos a lo que ya usas",
    body: "El agente se integra con tu POS, tu inventario, tu contabilidad o el sistema que ya tengas funcionando.",
  },
  {
    title: "Crece con el negocio",
    body: "Arrancas con un flujo y vas sumando capacidades conforme el equipo se acostumbra y aparecen nuevas necesidades.",
  },
  {
    title: "Se adapta a tu forma de trabajar",
    body: "Configuramos el agente según tus procesos y tu tono. No tienes que cambiar cómo opera el negocio.",
  },
];

export const SECTORS = [
  {
    name: "Supermercados",
    body: "Pedidos por mensajería, inventario, entregas a domicilio, reportes y turnos.",
  },
  {
    name: "Hoteles",
    body: "Reservas, consultas de huéspedes, coordinación de servicios y atención continua.",
  },
  {
    name: "Pedidos express",
    body: "Toma de órdenes, asignación de repartidores y seguimiento en tiempo real.",
  },
];
