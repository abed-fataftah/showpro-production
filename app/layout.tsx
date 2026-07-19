import type { Metadata } from "next";
import "../styles/global.css";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

export const metadata: Metadata = {
  title: "Development preview",
  description: "Static-sections preview build — placeholder content, not for release.",
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