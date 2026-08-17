export const BRAND = "NEXOLABS";
export const CONTACT_EMAIL = "info@nexolabs.cr";

export const NAV_LINKS = [
  { href: "#problema", label: "Problema" },
  { href: "#solucion", label: "Solucion" },
  { href: "#capacidades", label: "Capacidades" },
  { href: "#flujo", label: "Como funciona" },
  { href: "#personalizacion", label: "Personalizacion" },
];

export const METRICS = [
  { value: "24/7", label: "Operando sin pausa" },
  { value: "Segundos", label: "De consulta a orden creada" },
  { value: "1 agente", label: "Cuatro frentes cubiertos" },
];

export const PROBLEMS = [
  {
    title: "Todo pasa por una persona",
    body: "Cada consulta de WhatsApp, cada pedido y cada coordinacion con el despachador depende de que alguien este libre para atenderlo.",
  },
  {
    title: "El negocio cierra, las consultas no",
    body: "Los mensajes siguen llegando fuera de horario. Cuando alguien los ve al dia siguiente, el cliente ya compro en otro lado.",
  },
  {
    title: "Se opera a ciegas",
    body: "Los datos existen en el POS, en el inventario y en las planillas, pero nadie tiene tiempo de cruzarlos para saber como va el negocio.",
  },
];

export const PILLARS = [
  {
    index: "01",
    title: "Ventas y atencion",
    body: "El agente contesta chats, resuelve dudas, consulta stock y arma la orden directo en el punto de venta.",
    points: ["WhatsApp, SMS y web", "Stock en tiempo real", "Orden en el POS"],
  },
  {
    index: "02",
    title: "Despacho y entregas",
    body: "Avisa al despachador, asigna al repartidor y mantiene al cliente informado del estado de su pedido.",
    points: ["Aviso automatico", "Asignacion de ruta", "Seguimiento al cliente"],
  },
  {
    index: "03",
    title: "Reportes e inteligencia",
    body: "Ventas del dia, productos que mas rotan, margenes por categoria y analisis de clientes, generados solos.",
    points: ["Reportes automaticos", "Rotacion y margenes", "Perfil de clientes"],
  },
  {
    index: "04",
    title: "Gestion de personal",
    body: "Consulta turnos, le avisa a cada colaborador el suyo, registra asistencia y calcula horas y horas extra.",
    points: ["Turnos y avisos", "Control de asistencia", "Horas y extras"],
  },
];

export const CAPABILITIES = [
  {
    group: "Ventas",
    items: [
      "Conversacion natural en WhatsApp, SMS y chat web",
      "Consulta de inventario y stock en tiempo real",
      "Creacion de ordenes directo en el POS",
      "Conexion con pasarelas de pago",
      "Historial y preferencias de cada cliente",
    ],
  },
  {
    group: "Operacion",
    items: [
      "Coordinacion de despacho y repartidores",
      "Notificaciones automaticas al equipo",
      "Seguimiento de entrega para el cliente",
      "Alertas de stock bajo y reposicion",
      "Ordenes de compra a proveedores",
    ],
  },
  {
    group: "Datos y equipo",
    items: [
      "Reportes de ventas diarios, semanales y mensuales",
      "Analisis de clientes: frecuencia, historial y preferencias",
      "Turnos, asistencia, horas trabajadas y horas extra",
      "Rentabilidad por categoria y comparativas",
      "Publicidad automatica desde fotos del producto",
    ],
  },
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
    body: "El agente revisa stock y precio en el sistema, sin intervencion humana.",
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
  "La revisas y aprobas",
  "Sale a toda tu base de clientes",
];

export const CUSTOMIZATION = [
  {
    title: "Empezamos por lo que mas duele",
    body: "Definimos juntos que se automatiza primero: ventas, despacho, reportes o personal. No hay que hacerlo todo de una vez.",
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
    body: "Configuramos el agente segun tus procesos y tu tono. No tienes que cambiar como opera el negocio.",
  },
];

export const SECTORS = [
  {
    name: "Supermercados",
    body: "Pedidos por mensajeria, inventario, entregas a domicilio, reportes y turnos.",
  },
  {
    name: "Hoteles",
    body: "Reservas, consultas de huespedes, coordinacion de servicios y atencion continua.",
  },
  {
    name: "Pedidos express",
    body: "Toma de ordenes, asignacion de repartidores y seguimiento en tiempo real.",
  },
];
