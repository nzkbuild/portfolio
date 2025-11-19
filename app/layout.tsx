import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nzkbuild - Portfolio",
  description: "Portfolio of Nabil - Early-career builder with HR and operations background",
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

