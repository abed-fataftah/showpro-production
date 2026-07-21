import type { SiteSettings } from "../schema/content";
export const siteSettings = {
  businessName: "Showpro Production",
  whatsappNumber: "+60 17-500 2680",
  wechatQr: "/qr/wechat-qr.png",
  email: "Showpromacau@gmail.com",
  whatsappOpener: "Hi — I'd like to enquire about a live show for an event.",
  reachLine: "Macau · Hong Kong · Malaysia · Singapore",
  tagline: "Live show production — Macau & Malaysia.",
} as const satisfies SiteSettings;