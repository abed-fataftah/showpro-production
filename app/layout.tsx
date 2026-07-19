import type { Metadata } from "next";
import "../styles/global.css";

export const metadata: Metadata = {
  title: "Development scaffold verification",
  description: "F-001 scaffold — non-release development build.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
