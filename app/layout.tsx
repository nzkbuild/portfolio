import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "nzkbuild - Portfolio",
  description: "Protégé trainee at KWSP Kluang building internal tools. From trading bots to full-stack web apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
