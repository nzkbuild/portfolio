import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "nzkbuild - Portfolio",
  description:
    "ProtAcgAc trainee at KWSP Kluang building internal tools. From trading automation to web development - learning through practical problem-solving.",
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
