import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nexolabs Vea | Automatizacion con IA para retail",
  description:
    "Agentes de IA que atienden chats, crean ordenes, coordinan entregas, generan reportes y gestionan turnos. Conectados a tu POS e inventario.",
  keywords: [
    "automatizacion",
    "inteligencia artificial",
    "retail",
    "supermercados",
    "agentes IA",
    "Costa Rica",
  ],
  openGraph: {
    title: "Nexolabs Vea | Automatizacion con IA para retail",
    description:
      "Agentes de IA conectados a tu POS que venden, despachan y reportan las 24 horas.",
    type: "website",
    locale: "es_CR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-ink-950 antialiased">{children}</body>
    </html>
  );
}
