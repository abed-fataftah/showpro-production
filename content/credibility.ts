import type { Credibility } from "../schema/content";
export const credibility = {
  eyebrow: "[PLACEHOLDER] Credibility eyebrow",
  heading: "[PLACEHOLDER] Credibility heading pending owner copy (COPY-003).",
  body: "[PLACEHOLDER] Credibility body pending owner confirmation (COPY-004).",
  points: [
    { title: "[PLACEHOLDER] Point one", body: "[PLACEHOLDER] Pending owner copy." },
    { title: "[PLACEHOLDER] Point two", body: "[PLACEHOLDER] Pending owner copy." },
    { title: "[PLACEHOLDER] Point three", body: "[PLACEHOLDER] Pending owner copy." },
    { title: "[PLACEHOLDER] Point four", body: "[PLACEHOLDER] Pending owner copy." },
  ],
} as const satisfies Credibility;