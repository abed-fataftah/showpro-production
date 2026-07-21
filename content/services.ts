import type { Service, ServicesSection } from "../schema/content";
export const services = [
  { title: "Band Performance", description: "Live singers and musicians, from intimate sets to full show bands, matched to your event and audience." },
  { title: "Dance Shows", description: "Original choreography and themed dance productions, created and rehearsed for your event." },
  { title: "Modelling & Ushers", description: "Professional models and ushers to greet, host, and elevate the guest experience." },
  { title: "Sound & Lighting", description: "Sound-system and lighting support to complete the production when you need it." },
] as const satisfies readonly Service[];

export const servicesSection = {
  eyebrow: "What We Do",
  heading: "Full productions, or a single element.",
  closing: "Book a single element or a full production — we scope each show to the event.",
} as const satisfies ServicesSection;