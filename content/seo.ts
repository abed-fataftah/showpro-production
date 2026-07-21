import type { Seo } from "../schema/content";
const OG = "og/og.jpg";
export const seo = {
  home: {
    title: "Showpro Production — Live Show Production | Macau & Malaysia",
    description: "Bespoke live entertainment for casinos, hotels, resorts, and corporate events across Macau, Hong Kong, Malaysia, and Singapore.",
    ogImage: OG,
  },
  portfolio: {
    title: "Portfolio — Showpro Production | Live Shows & Performances",
    description: "Live bands, dance productions, models and ushers, and the shows we build around them.",
    ogImage: OG,
  },
  about: {
    title: "About — Showpro Production | Show Production, Macau & Malaysia",
    description: "We create the entertainment at the heart of premium events.",
    ogImage: OG,
  },
  contact: {
    title: "Contact — Showpro Production | Enquire on WhatsApp",
    description: "Tell us the date, the venue, and what you have in mind — we'll take it from there. WhatsApp is the fastest way to reach us.",
    ogImage: OG,
  },
  privacy: {
    title: "Privacy — Showpro Production",
    description: "This website doesn't collect or store your information. We don't use analytics or tracking, and there are no cookies measuring visitors.",
    ogImage: OG,
  },
} as const satisfies Seo;