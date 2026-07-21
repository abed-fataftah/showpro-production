import type { Privacy } from "../schema/content";
export const privacy = {
  heading: "What we collect: nothing.",
  body: "This website doesn't collect or store your information. We don't use analytics or tracking, and there are no cookies measuring visitors. If you contact us through WhatsApp, WeChat, or email, any details you choose to share are handled by us directly and used only to respond to your enquiry.",
} as const satisfies Privacy;