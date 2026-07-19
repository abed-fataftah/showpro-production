import type { Metadata } from "next";
import "../styles/global.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import { getSiteUrl } from "../lib/site-url";
import { seo } from "../content/seo";
import { siteSettings } from "../content/site-settings";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: siteSettings.businessName,
  description: seo.home.description,
  applicationName: siteSettings.businessName,
  openGraph: {
    siteName: siteSettings.businessName,
    type: "website",
    locale: "en",
    images: [{ url: "/og/PLACEHOLDER-og.jpg" }],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}