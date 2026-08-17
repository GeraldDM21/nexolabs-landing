/* ------------------------------------------------------------------ */
/*  Constantes que no dependen del idioma                               */
/* ------------------------------------------------------------------ */

export const BRAND = "NEXOLABS";
export const SITE_URL = "https://nexolabs.tech";
export const CONTACT_EMAIL = "contacto@nexolabs.tech";

/* WhatsApp — cambiar por el numero real.
   Formato internacional, sin + ni espacios. Costa Rica = 506. */
export const WHATSAPP_NUMBER = "50600000000";

export function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type Locale = "es" | "en";
