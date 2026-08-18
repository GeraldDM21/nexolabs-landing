import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BRAND, CONTACT_EMAIL, SITE_URL, WHATSAPP_NUMBER } from "@/components/config";
import "./globals.css";

/* El titulo apunta a lo que la gente busca, no al nombre de la marca:
   nadie busca "Nexolabs" todavia. La marca va al final. */
const title =
  "Automatización con IA para negocios | Agentes de WhatsApp y datos | Nexolabs";

const description =
  "Automatizamos ventas, pedidos y atención con agentes de IA conectados a WhatsApp y a tu punto de venta. También estrategia de datos, big data y migraciones a Databricks. Costa Rica.";

/* Datos estructurados: le dicen a Google que esto es una empresa,
   que servicios ofrece y donde opera. Mejora como se muestra el
   resultado y ayuda en busquedas locales. */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Nexolabs",
  url: SITE_URL,
  email: CONTACT_EMAIL,
  telephone: `+${WHATSAPP_NUMBER}`,
  description,
  areaServed: [
    { "@type": "Country", name: "Costa Rica" },
    { "@type": "Place", name: "Centroamérica" },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "CR",
  },
  knowsAbout: [
    "Automatización de procesos con inteligencia artificial",
    "Agentes conversacionales de IA",
    "Integración con WhatsApp Business",
    "Integración con sistemas de punto de venta",
    "Estrategia de datos",
    "Big data",
    "Análisis de datos",
    "Migraciones a Databricks",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Nexolabs",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Agentes de IA para atención y ventas",
          description:
            "Agentes conversacionales que responden chats, consultan inventario y crean órdenes en el punto de venta.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automatización de operaciones",
          description:
            "Coordinación de despacho y entregas, notificaciones al equipo y gestión de turnos y horas.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Estrategia y arquitectura de datos",
          description:
            "Gobierno de datos, pipelines, analítica y migraciones a Databricks Lakehouse.",
        },
      },
    ],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: BRAND,
  keywords: [
    "automatización con inteligencia artificial",
    "agentes de IA para empresas",
    "automatizar WhatsApp negocio",
    "chatbot con IA para ventas",
    "automatización de procesos Costa Rica",
    "integración POS inteligencia artificial",
    "estrategia de datos",
    "big data",
    "análisis de datos",
    "migración a Databricks",
    "Databricks Costa Rica",
    "agencia de automatización con IA",
  ],
  authors: [{ name: "Nexolabs", url: SITE_URL }],
  creator: "Nexolabs",
  publisher: "Nexolabs",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: "Nexolabs",
    type: "website",
    locale: "es_CR",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

export const viewport = {
  themeColor: "#05070F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ink-950">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
