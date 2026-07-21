import type { PortfolioItem, PortfolioTeaser, PortfolioIntro } from "../schema/content";

// alt text is intentionally neutral (I can't see the images); refine per-item anytime.
const VIDEO_ALT = "Live show performance by Showpro Production";
const PHOTO_ALT = "Live event performance by Showpro Production";

export const portfolio = [
  { type: "video", src: "/media/portfolio/clip01.mp4", poster: "/media/portfolio/clip01.jpg", alt: VIDEO_ALT, consentConfirmed: true, featured: true },
  { type: "photo", src: "/media/portfolio/photo37-lg.jpg", alt: PHOTO_ALT, consentConfirmed: true, featured: true },
  { type: "photo", src: "/media/portfolio/photo09-lg.jpg", alt: PHOTO_ALT, consentConfirmed: true },
  { type: "video", src: "/media/portfolio/clip03.mp4", poster: "/media/portfolio/clip03.jpg", alt: VIDEO_ALT, consentConfirmed: true, featured: true },
  { type: "photo", src: "/media/portfolio/photo04-lg.jpg", alt: PHOTO_ALT, consentConfirmed: true },
  { type: "photo", src: "/media/portfolio/photo14-lg.jpg", alt: PHOTO_ALT, consentConfirmed: true },
  { type: "video", src: "/media/portfolio/clip05.mp4", poster: "/media/portfolio/clip05.jpg", alt: VIDEO_ALT, consentConfirmed: true, featured: true },
  { type: "photo", src: "/media/portfolio/photo24-lg.jpg", alt: PHOTO_ALT, consentConfirmed: true },
  { type: "video", src: "/media/portfolio/clip02.mp4", poster: "/media/portfolio/clip02.jpg", alt: VIDEO_ALT, consentConfirmed: true },
  { type: "photo", src: "/media/portfolio/photo11-lg.jpg", alt: PHOTO_ALT, consentConfirmed: true },
  { type: "video", src: "/media/portfolio/clip04.mp4", poster: "/media/portfolio/clip04.jpg", alt: VIDEO_ALT, consentConfirmed: true },
  { type: "photo", src: "/media/portfolio/photo36-lg.jpg", alt: PHOTO_ALT, consentConfirmed: true },
  { type: "photo", src: "/media/portfolio/photo21-lg.jpg", alt: PHOTO_ALT, consentConfirmed: true },
  { type: "video", src: "/media/portfolio/clip06.mp4", poster: "/media/portfolio/clip06.jpg", alt: VIDEO_ALT, consentConfirmed: true },
  { type: "photo", src: "/media/portfolio/photo29-lg.jpg", alt: PHOTO_ALT, consentConfirmed: true },
  { type: "video", src: "/media/portfolio/clip07.mp4", poster: "/media/portfolio/clip07.jpg", alt: VIDEO_ALT, consentConfirmed: true },
  { type: "photo", src: "/media/portfolio/photo42-lg.jpg", alt: PHOTO_ALT, consentConfirmed: true },
] as const satisfies readonly PortfolioItem[];

export const portfolioTeaser = {
  eyebrow: "Selected Work",
  line: "A look at the shows we create — bands, dancers, and full productions, performed by our own team.",
} as const satisfies PortfolioTeaser;

export const portfolioIntro = {
  eyebrow: "The Work",
  heading: "One curated look at what we do.",
  lede: "Live bands, dance productions, models and ushers, and the shows we build around them.",
} as const satisfies PortfolioIntro;