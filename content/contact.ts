import type { ContactBand, ContactPage } from "../schema/content";
export const contactBand = {
  eyebrow: "[PLACEHOLDER] Contact-band eyebrow",
  heading: "[PLACEHOLDER] Contact-band heading pending owner copy (COPY-003).",
} as const satisfies ContactBand;

export const contactPage = {
  eyebrow: "[PLACEHOLDER] Contact eyebrow",
  heading: "[PLACEHOLDER] Contact heading pending owner copy (COPY-003).",
  intro: "[PLACEHOLDER] Contact intro pending owner copy (COPY-003).",
} as const satisfies ContactPage;