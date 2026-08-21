/** Single source of truth for every phone number, WhatsApp link and address used in the UI. */
export const CONTACT = {
  whatsappNumber: "212661361250",
  phone: {
    landline: { display: "+212 (0) 5 22 00 00 00", href: "tel:+212522000000" },
    mobile: { display: "+212 (0) 6 61 00 00 00", href: "tel:+212661000000" },
    sales: { display: "05 22 76 53 53", href: "tel:+212522765353" },
  },
  email: "contact@aquaflex.ma",
  address: ["Zone Industrielle Sapino, Nouaceur,", "Casablanca, Maroc"],
} as const;

/** Builds a wa.me link for the brand number, optionally pre-filling the message. */
export function whatsAppUrl(message?: string): string {
  const base = `https://wa.me/${CONTACT.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
