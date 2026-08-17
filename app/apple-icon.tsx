import { ImageResponse } from "next/og";

/* Icono para iOS. Next lo genera como PNG en build. */

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#05070F",
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #7DD3FC 0%, #38BDF8 55%, #818CF8 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 56,
            fontWeight: 700,
            color: "#05070F",
          }}
        >
          N
        </div>
      </div>
    ),
    size,
  );
}
