import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const viewport: Viewport = {
  themeColor: "#020617",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Nabil Zikri | Operations to Full-Stack Developer",
  description: "Protégé at KWSP Kluang & developer building internal systems. Graduated with BBA in HRM. Bridging the gap between HR ops and system automation.",
  keywords: ["Portfolio", "HRM", "Operations", "Full-Stack Developer", "Next.js", "Kluang"],
  authors: [{ name: "Muhammad Nabil Zikri" }],
  openGraph: {
    title: "Nabil Zikri | Operations to Full-Stack Developer",
    description: "Detail-oriented HR graduate developing operational systems. Check out my portfolio and projects.",
    url: "https://nzkbuild.vercel.app",
    siteName: "Nabil Zikri Portfolio",
    locale: "en_MY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nabil Zikri | Portfolio",
    description: "Bridging the gap between HR ops and system automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
