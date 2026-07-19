import type { EventType, EventTypesSection } from "../schema/content";
// Exactly four (CR-007 / D-13), enforced by the schema.
export const eventTypes = [
  { title: "[PLACEHOLDER] Event type one", description: "[PLACEHOLDER] Pending owner copy." },
  { title: "[PLACEHOLDER] Event type two", description: "[PLACEHOLDER] Pending owner copy." },
  { title: "[PLACEHOLDER] Event type three", description: "[PLACEHOLDER] Pending owner copy." },
  { title: "[PLACEHOLDER] Event type four", description: "[PLACEHOLDER] Pending owner copy." },
] as const satisfies readonly EventType[];

export const eventTypesSection = {
  eyebrow: "[PLACEHOLDER] Event types eyebrow",
  intro: "[PLACEHOLDER] Event types intro pending owner copy (COPY-003).",
} as const satisfies EventTypesSection;