import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

/* ------------------------------------------------------------------ */
/*  Envio por SMTP de Google Workspace.                                 */
/*  Variables de entorno necesarias (ver .env.example):                 */
/*    SMTP_USER   cuenta de Workspace que envia (contacto@nexolabs.tech)*/
/*    SMTP_PASS   contrasena de aplicacion de 16 caracteres             */
/*    CONTACT_TO  correo que recibe las solicitudes                     */
/* ------------------------------------------------------------------ */

type Payload = {
  nombre?: string;
  empresa?: string;
  email?: string;
  telefono?: string;
  interes?: string;
  presupuesto?: string;
  mensaje?: string;
  idioma?: string;
  website?: string; // honeypot anti-spam
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function esc(v: string) {
  return v
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(req: Request) {
  let body: Payload;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  // Si el honeypot viene lleno es un bot: respondemos ok sin enviar nada.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const nombre = (body.nombre ?? "").trim();
  const empresa = (body.empresa ?? "").trim();
  const email = (body.email ?? "").trim();
  const telefono = (body.telefono ?? "").trim();
  const interes = (body.interes ?? "").trim();
  const presupuesto = (body.presupuesto ?? "").trim();
  const mensaje = (body.mensaje ?? "").trim();
  const idioma = body.idioma === "en" ? "English" : "Espanol";

  if (!nombre || !email || !mensaje) {
    return NextResponse.json(
      { error: "Faltan campos obligatorios." },
      { status: 400 },
    );
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json(
      { error: "El correo no parece válido." },
      { status: 400 },
    );
  }

  if (mensaje.length > 5000) {
    return NextResponse.json(
      { error: "El mensaje es demasiado largo." },
      { status: 400 },
    );
  }

  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const to = process.env.CONTACT_TO ?? user;

  if (!user || !pass) {
    console.error(
      "Faltan SMTP_USER o SMTP_PASS. Revisa el archivo .env.local.",
    );
    return NextResponse.json(
      { error: "El formulario no está configurado. Escríbenos por WhatsApp." },
      { status: 500 },
    );
  }

  const filas: Array<[string, string]> = [
    ["Nombre", nombre],
    ["Empresa", empresa || "—"],
    ["Correo", email],
    ["Teléfono", telefono || "—"],
    ["Interés", interes || "—"],
    ["Presupuesto", presupuesto || "—"],
    ["Idioma", idioma],
  ];

  const html = `
    <div style="font-family:system-ui,-apple-system,'Segoe UI',sans-serif;max-width:640px;color:#0f172a">
      <h2 style="margin:0 0 4px;font-size:18px">Nueva solicitud desde nexolabs.tech</h2>
      <p style="margin:0 0 20px;color:#64748b;font-size:13px">
        Recibida el ${new Date().toLocaleString("es-CR", { timeZone: "America/Costa_Rica" })}
      </p>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${filas
          .map(
            ([k, v]) => `
          <tr>
            <td style="padding:8px 12px 8px 0;color:#64748b;white-space:nowrap;vertical-align:top;border-bottom:1px solid #e2e8f0">${k}</td>
            <td style="padding:8px 0;border-bottom:1px solid #e2e8f0">${esc(v)}</td>
          </tr>`,
          )
          .join("")}
      </table>
      <div style="margin-top:24px">
        <p style="margin:0 0 8px;color:#64748b;font-size:13px">Mensaje</p>
        <div style="white-space:pre-wrap;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;padding:16px;font-size:14px;line-height:1.6">${esc(mensaje)}</div>
      </div>
    </div>
  `;

  const texto = [
    ...filas.map(([k, v]) => `${k}: ${v}`),
    "",
    "Mensaje:",
    mensaje,
  ].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: { user, pass },
    });

    await transporter.sendMail({
      // El remitente debe ser la misma cuenta autenticada.
      from: `Nexolabs <${user}>`,
      to,
      replyTo: `${nombre} <${email}>`,
      subject: `Nueva solicitud — ${nombre}${empresa ? ` (${empresa})` : ""}`,
      html,
      text: texto,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error al enviar el correo:", err);
    return NextResponse.json(
      {
        error:
          "No se pudo enviar. Intenta de nuevo o escríbenos por WhatsApp.",
      },
      { status: 500 },
    );
  }
}
