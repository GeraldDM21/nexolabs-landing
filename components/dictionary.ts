import type { Locale } from "./config";

/* ------------------------------------------------------------------ */
/*  Todo el texto del sitio, en espanol e ingles.                       */
/*  Para editar copy, este es el unico archivo que hay que tocar.       */
/* ------------------------------------------------------------------ */

export const dict = {
  es: {
    nav: [
      { href: "#solucion", label: "Solución" },
      { href: "#capacidades", label: "Capacidades" },
      { href: "#datos", label: "Datos" },
      { href: "#proceso", label: "Proceso" },
      { href: "#contacto", label: "Contacto" },
    ],

    wa: {
      demo: "Hola, quiero ver una demo de Nexolabs para mi negocio.",
      info: "Hola, quiero información sobre cómo automatizar mi negocio con Nexolabs.",
      datos:
        "Hola, quiero hablar sobre estrategia de datos y una posible migración a Databricks.",
      sector: (s: string) =>
        `Hola, tengo un negocio del sector ${s} y quiero saber qué puede automatizar Nexolabs.`,
    },

    hero: {
      badge: "Automatización con IA y arquitectura de datos",
      titleA: "Un agente que atiende,",
      titleB: "vende y",
      titleAccent: "despacha por ti",
      body: "Automatizamos la atención y las ventas de tu negocio con agentes de IA conectados a WhatsApp, a tu inventario y a tu punto de venta. Contestan chats, arman órdenes, coordinan entregas, generan reportes y gestionan turnos, sin que nadie tenga que estar pendiente.",
      ctaPrimary: "Contáctenos",
      ctaSecondary: "Ver cómo funciona",
      note: "Te contesta el mismo agente que trabajaría en tu negocio",
      metrics: [
        { value: "24/7", label: "Operando sin pausa" },
        { value: "Segundos", label: "De consulta a orden creada" },
        { value: "1 agente", label: "Cuatro frentes cubiertos" },
      ],
    },

    problems: {
      eyebrow: "El problema",
      title: "El negocio funciona, pero todo depende de manos disponibles",
      items: [
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
      ],
    },

    solution: {
      eyebrow: "La solución",
      title: "Un solo agente que se encarga de cuatro frentes",
      body: "No es un chatbot que responde preguntas. Es un modelo conectado a tus herramientas, con permiso para ejecutar tareas reales.",
      pillars: [
        {
          index: "01",
          title: "Ventas y atención",
          body: "El agente contesta chats, resuelve dudas, consulta stock y arma la orden directo en el punto de venta.",
          points: [
            "WhatsApp, SMS y web",
            "Stock en tiempo real",
            "Orden en el POS",
          ],
        },
        {
          index: "02",
          title: "Despacho y entregas",
          body: "Avisa al despachador, asigna al repartidor y mantiene al cliente informado del estado de su pedido.",
          points: [
            "Aviso automático",
            "Asignación de ruta",
            "Seguimiento al cliente",
          ],
        },
        {
          index: "03",
          title: "Reportes e inteligencia",
          body: "Ventas del día, productos que más rotan, márgenes por categoría y análisis de clientes, generados solos.",
          points: [
            "Reportes automáticos",
            "Rotación y márgenes",
            "Perfil de clientes",
          ],
        },
        {
          index: "04",
          title: "Gestión de personal",
          body: "Consulta turnos, le avisa a cada colaborador el suyo, registra asistencia y calcula horas y horas extra.",
          points: [
            "Turnos y avisos",
            "Control de asistencia",
            "Horas y extras",
          ],
        },
      ],
    },

    capabilities: {
      eyebrow: "Capacidades",
      title: "Qué puede hacer el agente",
      groups: [
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
      ],
    },

    data: {
      eyebrow: "Datos",
      title: "Cuando los datos ya no caben en una hoja de cálculo",
      body: "La automatización genera información todos los días: cada venta, cada entrega, cada turno. Esa información vale poco mientras viva dispersa entre el POS, el ERP y archivos sueltos. Diseñamos la arquitectura que la consolida y la vuelve utilizable.",
      services: [
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
      ],
      note: "Trabajamos igual con quien ya tiene infraestructura y quiere ordenarla, y con quien arranca de cero y no quiere heredar los problemas de siempre.",
      cta: "Hablemos de tus datos",
    },

    flow: {
      eyebrow: "Cómo funciona",
      title: "Una venta de supermercado, de punta a punta",
      body: "El mismo flujo aplica a un pedido express o a una consulta de hotel. Cambia el sistema al que se conecta, no la lógica.",
      steps: [
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
      ],
      note: "Todo esto ocurre en segundos y queda registrado. El dueño se entera por el reporte, no por tener que estar encima.",
    },

    ads: {
      eyebrow: "Extra",
      title: "Publicidad que se arma sola",
      bodyA: "El dueño manda un par de fotos y dice qué quiere promocionar. El agente genera la imagen, la deja lista para revisión y, una vez aprobada, la manda a todos los clientes registrados en la base.",
      bodyB: "Una campaña pasa de tomar medio día a tomar unos minutos, sin contratar diseñador.",
      steps: [
        "Manda dos fotos del producto por WhatsApp",
        "El agente arma la pieza promocional",
        "La revisas y apruebas",
        "Sale a toda tu base de clientes",
      ],
    },

    process: {
      eyebrow: "Proceso",
      title: "Cómo trabajamos contigo",
      body: "Nadie automatiza un negocio entero de un solo golpe. Empezamos por un proceso concreto, lo dejamos funcionando y de ahí se construye el resto.",
      steps: [
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
      ],
      note: "Sin contratos largos ni migraciones de meses. El primer flujo tiene que demostrar su valor antes de hablar del segundo.",
    },

    customization: {
      eyebrow: "Personalización",
      title: "Cada negocio es distinto, y la solución también",
      body: "No entregamos un producto cerrado. Levantamos cómo opera tu negocio y armamos el agente alrededor de eso.",
      items: [
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
      ],
      sectorsTitle: "Sectores donde trabajamos",
      sectors: [
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
      ],
      sectorCta: "Preguntar por este sector",
    },

    contact: {
      eyebrow: "Contacto",
      title: "Veamos qué se puede automatizar en tu negocio",
      body: "Cuéntanos cómo opera hoy y te decimos qué tareas puede tomar el agente desde la primera semana.",
      perks: [
        "Respuesta en menos de 24 horas",
        "Diagnóstico inicial sin costo",
        "Sin contratos de permanencia",
      ],
      waTitle: "¿Prefieres verlo funcionando?",
      waBody:
        "Escríbenos por WhatsApp y te atiende el mismo agente que trabajaría en tu negocio. El chat es la demo.",
      waCta: "Contáctenos",
      emailLabel: "También por correo:",
    },

    form: {
      nombre: "Nombre",
      nombrePh: "Tu nombre",
      empresa: "Empresa",
      empresaPh: "Nombre de tu negocio",
      email: "Correo",
      emailPh: "tu@correo.com",
      telefono: "Teléfono",
      telefonoPh: "Opcional",
      interes: "Qué te interesa",
      interesPh: "Selecciona una opción",
      presupuesto: "Presupuesto estimado",
      presupuestoPh: "Selecciona un rango",
      mensaje: "Cuéntanos sobre tu negocio",
      mensajePh:
        "Qué proceso te está costando tiempo, qué sistemas usas hoy, qué te gustaría resolver primero.",
      submit: "Enviar solicitud",
      sending: "Enviando",
      okTitle: "Solicitud recibida",
      okBody:
        "Te respondemos en menos de 24 horas. Si necesitas algo antes, escríbenos por WhatsApp.",
      okAgain: "Enviar otra solicitud",
      errGeneric: "No se pudo enviar. Intenta de nuevo.",
      errNetwork: "No se pudo conectar. Revisa tu conexión e intenta de nuevo.",
      legalA: "Al enviar aceptas nuestros",
      legalTerms: "Términos",
      legalAnd: "y la",
      legalPrivacy: "Política de Privacidad",
      legalB: ". Solo usamos tus datos para responderte.",
      interestOptions: [
        "Automatización con agentes de IA",
        "Estrategia y arquitectura de datos",
        "Migración a Databricks",
        "Aún no estoy seguro",
      ],
      budgetOptions: [
        "Todavía no lo tengo definido",
        "Menos de $2.000",
        "$2.000 - $5.000",
        "$5.000 - $10.000",
        "Más de $10.000",
      ],
    },

    modal: {
      open: "Contacto",
      title: "Solicita una propuesta",
      subtitle: "Cuéntanos qué necesitas y te respondemos en menos de 24 horas.",
      close: "Cerrar",
    },

    float: {
      hint: "Habla con el agente y velo trabajar",
      aria: "Escríbenos por WhatsApp",
    },

    footer: {
      terms: "Términos y Condiciones",
      privacy: "Política de Privacidad",
      rights: "Todos los derechos reservados.",
      back: "Volver al inicio",
    },
  },

  /* ---------------------------------------------------------------- */

  en: {
    nav: [
      { href: "#solucion", label: "Solution" },
      { href: "#capacidades", label: "Capabilities" },
      { href: "#datos", label: "Data" },
      { href: "#proceso", label: "Process" },
      { href: "#contacto", label: "Contact" },
    ],

    wa: {
      demo: "Hi, I'd like to see a Nexolabs demo for my business.",
      info: "Hi, I'd like information about automating my business with Nexolabs.",
      datos:
        "Hi, I'd like to talk about data strategy and a possible Databricks migration.",
      sector: (s: string) =>
        `Hi, I run a business in the ${s} sector and I'd like to know what Nexolabs can automate.`,
    },

    hero: {
      badge: "AI automation and data architecture",
      titleA: "An agent that answers,",
      titleB: "sells and",
      titleAccent: "ships for you",
      body: "We automate your business's customer service and sales with AI agents wired into WhatsApp, your inventory and your point of sale. They answer chats, create orders, coordinate deliveries, generate reports and manage shifts, without anyone having to keep watch.",
      ctaPrimary: "Contact us",
      ctaSecondary: "See how it works",
      note: "You'll be talking to the same agent that would work in your business",
      metrics: [
        { value: "24/7", label: "Running without pause" },
        { value: "Seconds", label: "From question to order" },
        { value: "1 agent", label: "Four fronts covered" },
      ],
    },

    problems: {
      eyebrow: "The problem",
      title: "The business works, but everything depends on someone being free",
      items: [
        {
          title: "Everything goes through one person",
          body: "Every WhatsApp message, every order and every hand-off to dispatch waits until someone has a free moment to handle it.",
        },
        {
          title: "The store closes, the questions don't",
          body: "Messages keep coming after hours. By the time someone reads them the next morning, the customer has already bought elsewhere.",
        },
        {
          title: "Operating blind",
          body: "The data lives in the POS, the inventory and the spreadsheets, but nobody has time to cross-reference it and see how the business is actually doing.",
        },
      ],
    },

    solution: {
      eyebrow: "The solution",
      title: "One agent covering four fronts",
      body: "This isn't a chatbot that answers questions. It's a model wired into your tools, with permission to carry out real tasks.",
      pillars: [
        {
          index: "01",
          title: "Sales and support",
          body: "The agent answers chats, resolves questions, checks stock and creates the order directly in your point of sale.",
          points: ["WhatsApp, SMS and web", "Live stock", "Order in the POS"],
        },
        {
          index: "02",
          title: "Dispatch and delivery",
          body: "It notifies dispatch, assigns the driver and keeps the customer updated on their order.",
          points: ["Automatic alerts", "Route assignment", "Customer tracking"],
        },
        {
          index: "03",
          title: "Reporting and insight",
          body: "Daily sales, fastest-moving products, margins by category and customer analysis, generated on their own.",
          points: [
            "Automatic reports",
            "Turnover and margins",
            "Customer profiles",
          ],
        },
        {
          index: "04",
          title: "Staff management",
          body: "It checks schedules, tells each team member their shift, logs attendance and calculates hours and overtime.",
          points: ["Shifts and alerts", "Attendance", "Hours and overtime"],
        },
      ],
    },

    capabilities: {
      eyebrow: "Capabilities",
      title: "What the agent can do",
      groups: [
        {
          group: "Sales",
          items: [
            "Natural conversation on WhatsApp, SMS and web chat",
            "Live inventory and stock lookups",
            "Order creation straight into the POS",
            "Payment gateway integration",
            "History and preferences for each customer",
          ],
        },
        {
          group: "Operations",
          items: [
            "Dispatch and driver coordination",
            "Automatic notifications to your team",
            "Delivery tracking for the customer",
            "Low-stock and restocking alerts",
            "Purchase orders to suppliers",
          ],
        },
        {
          group: "Data and team",
          items: [
            "Daily, weekly and monthly sales reports",
            "Customer analysis: frequency, history and preferences",
            "Shifts, attendance, hours worked and overtime",
            "Profitability by category and period comparisons",
            "Automatic ad creative from product photos",
          ],
        },
      ],
    },

    data: {
      eyebrow: "Data",
      title: "When the data outgrows the spreadsheet",
      body: "Automation produces information every day: every sale, every delivery, every shift. That information is worth little while it sits scattered across the POS, the ERP and loose files. We design the architecture that consolidates it and makes it usable.",
      services: [
        {
          index: "01",
          title: "Data strategy",
          body: "We define what gets measured, where each piece of data lives and who consumes it. Governance, quality and lineage before the first line of code.",
        },
        {
          index: "02",
          title: "Engineering and big data",
          body: "Pipelines that ingest from multiple sources, process at scale and hold up as the business grows. Batch and streaming, whichever the case calls for.",
        },
        {
          index: "03",
          title: "Analytics and visualization",
          body: "Analytical models and dashboards that answer business questions rather than display pretty charts. Real profitability, customer behaviour, forecasts.",
        },
        {
          index: "04",
          title: "Databricks migrations",
          body: "We move legacy platforms to Lakehouse: workload migration, Delta Lake, Unity Catalog and cost optimization. Without stopping operations mid-move.",
        },
      ],
      note: "We work equally well with those who already have infrastructure and want it tidied up, and with those starting from zero who'd rather not inherit the usual problems.",
      cta: "Let's talk about your data",
    },

    flow: {
      eyebrow: "How it works",
      title: "A supermarket sale, end to end",
      body: "The same flow applies to an express order or a hotel enquiry. What changes is the system it connects to, not the logic.",
      steps: [
        {
          step: "01",
          title: "The message arrives",
          body: "A customer messages on WhatsApp asking for three bars of soap.",
        },
        {
          step: "02",
          title: "It checks inventory",
          body: "The agent looks up stock and price in the system, with no human involved.",
        },
        {
          step: "03",
          title: "It creates the order",
          body: "The sale is registered in the POS and confirmed to the customer with the total.",
        },
        {
          step: "04",
          title: "It arranges delivery",
          body: "Dispatch is notified, transport assigned and the customer kept informed.",
        },
      ],
      note: "All of this happens in seconds and is logged. The owner finds out from the report, not by having to hover.",
    },

    ads: {
      eyebrow: "Extra",
      title: "Advertising that builds itself",
      bodyA: "The owner sends a couple of photos and says what they want to promote. The agent generates the image, leaves it ready for review and, once approved, sends it to every customer in the database.",
      bodyB: "A campaign goes from taking half a day to taking a few minutes, with no designer to hire.",
      steps: [
        "Send two product photos over WhatsApp",
        "The agent builds the creative",
        "You review and approve it",
        "It goes out to your whole customer base",
      ],
    },

    process: {
      eyebrow: "Process",
      title: "How we work with you",
      body: "Nobody automates an entire business in one go. We start with one concrete process, get it running, and build from there.",
      steps: [
        {
          index: "01",
          title: "Assessment",
          duration: "Week 1",
          body: "We look at how your business runs today: where orders come in, what systems you use, where time is lost. We come out with a prioritised list of what's worth automating first.",
        },
        {
          index: "02",
          title: "First flow",
          duration: "Weeks 2 to 4",
          body: "We build the agent and wire it into the process that hurts most. We test it with real volume and with your team, until it responds the way you expected.",
        },
        {
          index: "03",
          title: "Go live",
          duration: "Week 5",
          body: "The agent goes into production with support. We train whoever will supervise it and make clear what it decides alone and what escalates to a person.",
        },
        {
          index: "04",
          title: "Measure and expand",
          duration: "Ongoing",
          body: "We measure what changed in numbers and adjust. From that baseline we decide which process is worth automating next.",
        },
      ],
      note: "No long contracts or months-long migrations. The first flow has to prove its worth before we talk about the second.",
    },

    customization: {
      eyebrow: "Customization",
      title: "Every business is different, and so is the solution",
      body: "We don't hand over a closed product. We map how your business runs and build the agent around that.",
      items: [
        {
          title: "We start where it hurts most",
          body: "Together we decide what gets automated first: sales, dispatch, reporting or staff. It doesn't all have to happen at once.",
        },
        {
          title: "We connect to what you already use",
          body: "The agent integrates with your POS, your inventory, your accounting or whatever system you already have running.",
        },
        {
          title: "It grows with the business",
          body: "You start with one flow and add capabilities as the team gets comfortable and new needs appear.",
        },
        {
          title: "It adapts to how you work",
          body: "We configure the agent around your processes and your tone. You don't have to change how the business operates.",
        },
      ],
      sectorsTitle: "Sectors we work in",
      sectors: [
        {
          name: "Supermarkets",
          body: "Orders over messaging, inventory, home delivery, reporting and shifts.",
        },
        {
          name: "Hotels",
          body: "Bookings, guest enquiries, service coordination and round-the-clock support.",
        },
        {
          name: "Express delivery",
          body: "Order intake, driver assignment and real-time tracking.",
        },
      ],
      sectorCta: "Ask about this sector",
    },

    contact: {
      eyebrow: "Contact",
      title: "Let's see what we can automate in your business",
      body: "Tell us how it runs today and we'll tell you which tasks the agent can take over from week one.",
      perks: [
        "Reply within 24 hours",
        "Initial assessment at no cost",
        "No lock-in contracts",
      ],
      waTitle: "Rather see it working?",
      waBody:
        "Message us on WhatsApp and you'll be answered by the same agent that would work in your business. The chat is the demo.",
      waCta: "Contact us",
      emailLabel: "Or by email:",
    },

    form: {
      nombre: "Name",
      nombrePh: "Your name",
      empresa: "Company",
      empresaPh: "Your business name",
      email: "Email",
      emailPh: "you@email.com",
      telefono: "Phone",
      telefonoPh: "Optional",
      interes: "What you're interested in",
      interesPh: "Select an option",
      presupuesto: "Estimated budget",
      presupuestoPh: "Select a range",
      mensaje: "Tell us about your business",
      mensajePh:
        "What process is eating your time, what systems you use today, what you'd like to solve first.",
      submit: "Send request",
      sending: "Sending",
      okTitle: "Request received",
      okBody:
        "We'll get back to you within 24 hours. If you need something sooner, message us on WhatsApp.",
      okAgain: "Send another request",
      errGeneric: "Couldn't send. Please try again.",
      errNetwork: "Couldn't connect. Check your connection and try again.",
      legalA: "By sending this you accept our",
      legalTerms: "Terms",
      legalAnd: "and",
      legalPrivacy: "Privacy Policy",
      legalB: ". We only use your details to reply to you.",
      interestOptions: [
        "AI agent automation",
        "Data strategy and architecture",
        "Databricks migration",
        "Not sure yet",
      ],
      budgetOptions: [
        "Not defined yet",
        "Under $2,000",
        "$2,000 - $5,000",
        "$5,000 - $10,000",
        "Over $10,000",
      ],
    },

    modal: {
      open: "Contact",
      title: "Request a proposal",
      subtitle: "Tell us what you need and we'll reply within 24 hours.",
      close: "Close",
    },

    float: {
      hint: "Talk to the agent and watch it work",
      aria: "Message us on WhatsApp",
    },

    footer: {
      terms: "Terms and Conditions",
      privacy: "Privacy Policy",
      rights: "All rights reserved.",
      back: "Back to home",
    },
  },
} as const;

export type Dict = (typeof dict)[Locale];
