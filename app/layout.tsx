import type { Metadata } from "next";
import { SITE_URL } from "@/components/config";
import "./globals.css";

const title = "Nexolabs | Automatizacion con IA y arquitectura de datos";
const description =
  "Agentes de IA conectados a tu POS que atienden, venden y despachan. Y la capa de datos que lo sostiene: estrategia, big data, analitica y migraciones a Databricks.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: [
    "automatizacion",
    "inteligencia artificial",
    "agentes IA",
    "retail",
    "supermercados",
    "estrategia de datos",
    "big data",
    "analitica de datos",
    "Databricks",
    "Lakehouse",
    "Costa Rica",
  ],
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
  },
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
      <body className="bg-ink-950">{children}</body>
    </html>
  );
}
