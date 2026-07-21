import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "../styles/global.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { ScrollFX } from "../components/client/ScrollFX/ScrollFX";
import { getSiteUrl } from "../lib/site-url";
import { seo } from "../content/seo";
import { siteSettings } from "../content/site-settings";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: siteSettings.businessName,
  description: seo.home.description,
  applicationName: siteSettings.businessName,
  openGraph: { siteName: siteSettings.businessName, type: "website", locale: "en", images: [{ url: "/og/PLACEHOLDER-og.jpg" }] },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollFX />
      </body>
    </html>
  );
}