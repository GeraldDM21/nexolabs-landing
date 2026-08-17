import { ImageResponse } from "next/og";

/* Imagen que se muestra al compartir el link (WhatsApp, LinkedIn, X). */

export const alt = "Nexolabs — Automatizacion con IA y arquitectura de datos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05070F",
          padding: 72,
        }}
      >
        {/* halo decorativo */}
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -120,
            width: 620,
            height: 620,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(56,189,248,0.22) 0%, rgba(5,7,15,0) 70%)",
            display: "flex",
          }}
        />

        {/* marca */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              background: "#38BDF8",
              display: "flex",
            }}
          />
          <div
            style={{
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: 8,
              color: "#FFFFFF",
              display: "flex",
            }}
          >
            NEXOLABS
          </div>
        </div>

        {/* titular */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: -2,
              color: "#FFFFFF",
              display: "flex",
            }}
          >
            Un agente que atiende,
          </div>
          <div
            style={{
              fontSize: 76,
              fontWeight: 600,
              lineHeight: 1.1,
              letterSpacing: -2,
              color: "#7DD3FC",
              display: "flex",
              marginTop: 6,
            }}
          >
            vende y despacha por ti
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: "#94A3B8",
              display: "flex",
              marginTop: 28,
              maxWidth: 900,
            }}
          >
            Automatizacion con IA conectada a tu punto de venta, y la
            arquitectura de datos que la sostiene.
          </div>
        </div>

        {/* pie */}
        <div
          style={{
            display: "flex",
            gap: 32,
            fontSize: 24,
            color: "#64748B",
          }}
        >
          <div style={{ display: "flex" }}>nexolabs.tech</div>
          <div style={{ display: "flex", color: "#334155" }}>|</div>
          <div style={{ display: "flex" }}>Costa Rica</div>
        </div>
      </div>
    ),
    size,
  );
}
