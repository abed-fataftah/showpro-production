import type { EventType } from "../schema/content";
// Exactly four (CR-007 / D-13), enforced by the schema.
export const eventTypes = [
  { title: "[PLACEHOLDER] Event type one", description: "[PLACEHOLDER] Pending owner copy." },
  { title: "[PLACEHOLDER] Event type two", description: "[PLACEHOLDER] Pending owner copy." },
  { title: "[PLACEHOLDER] Event type three", description: "[PLACEHOLDER] Pending owner copy." },
  { title: "[PLACEHOLDER] Event type four", description: "[PLACEHOLDER] Pending owner copy." },
] as const satisfies readonly EventType[];