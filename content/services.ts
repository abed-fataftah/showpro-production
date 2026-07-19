import type { Service, ServicesSection } from "../schema/content";
export const services = [
  { title: "[PLACEHOLDER] Service one", description: "[PLACEHOLDER] Pending owner copy." },
  { title: "[PLACEHOLDER] Service two", description: "[PLACEHOLDER] Pending owner copy." },
  { title: "[PLACEHOLDER] Service three", description: "[PLACEHOLDER] Pending owner copy." },
  { title: "[PLACEHOLDER] Service four", description: "[PLACEHOLDER] Pending owner copy." },
] as const satisfies readonly Service[];

export const servicesSection = {
  eyebrow: "[PLACEHOLDER] Services eyebrow",
  heading: "[PLACEHOLDER] Services heading pending owner copy (COPY-003).",
  closing: "[PLACEHOLDER] Services closing line pending owner copy (COPY-003).",
} as const satisfies ServicesSection;