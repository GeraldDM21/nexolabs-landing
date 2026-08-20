/* ------------------------------------------------------------------ */
/*  Constantes que no dependen del idioma                               */
/* ------------------------------------------------------------------ */

export const BRAND = "NEXOLABS";
/* El dominio canonico incluye www: Vercel redirige nexolabs.tech hacia
   www.nexolabs.tech, asi que si aqui ponemos la version sin www, Google
   ve una URL canonica que redirige y no la indexa. */
export const SITE_URL = "https://www.nexolabs.tech";
export const CONTACT_EMAIL = "contacto@nexolabs.tech";

/* WhatsApp — formato internacional, sin + ni espacios. Costa Rica = 506. */
export const WHATSAPP_NUMBER = "50688028339";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type Locale = "es" | "en";
