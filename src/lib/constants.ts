export const BUSINESS_NAME = "SK Cab Service";

export const PHONE_NUMBER = "+91 77779 19383";

export const PHONE_LINK = "tel:+917777919383";

export const WHATSAPP_NUMBER = "917777919383";

export const WHATSAPP_LINK =
  "https://wa.me/917777919383?text=Hi%20SK%20Cab,%20I%20want%20to%20book%20a%20ride";

export const CITY = "Ahmedabad";

export const STATE = "Gujarat";

export const COUNTRY = "India";

export const ADDRESS_LINE = "Ahmedabad, Gujarat, India";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const MAP_EMBED_URL =
  "https://www.google.com/maps?q=Ahmedabad,Gujarat,India&output=embed";

export const SERVICE_AREAS = [
  "Ahmedabad",
  "Gandhinagar",
  "SG Highway",
  "Prahlad Nagar",
  "Bopal",
  "Chandkheda",
  "Gota",
  "Satellite",
  "Vastrapur",
  "Maninagar",
  "Naroda",
  "Thaltej",
] as const;

export const CAB_TYPES = [
  "Sedan",
  "SUV",
  "Innova Crysta",
  "Tempo Traveller",
] as const;

export type CabType = (typeof CAB_TYPES)[number];

/** Builds a WhatsApp deep link with a safely encoded message. */
export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/** Trims, strips control characters and limits the length of user input. */
export function sanitizeInput(value: string, maxLength = 200): string {
  return value
    .replace(/[\u0000-\u001F\u007F]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim()
    .slice(0, maxLength);
}
