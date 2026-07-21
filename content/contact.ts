import type { ContactBand, ContactPage } from "../schema/content";
export const contactBand = {
  eyebrow: "Let's begin",
  heading: "Let's talk about your event.",
} as const satisfies ContactBand;

export const contactPage = {
  eyebrow: "Contact",
  heading: "Let's talk about your event.",
  intro: "Tell us the date, the venue, and what you have in mind — we'll take it from there. WhatsApp is the fastest way to reach us.",
} as const satisfies ContactPage;