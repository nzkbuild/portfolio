import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const newsreader = Newsreader({
 subsets: ["latin"],
 variable: "--font-newsreader",
 display: "swap",
 style: ["normal", "italic"],
});

const siteUrl = "https://www.nzkbuild.xyz";

export const viewport: Viewport = {
 themeColor: "#faf8f4",
 colorScheme: "light",
 width: "device-width",
 initialScale: 1,
};

export const metadata: Metadata = {
 metadataBase: new URL(siteUrl),
 title: "Nabil Zikri - Operations & admin who builds practical tools",
 description:
 "Business Administration graduate in Johor Bahru working in admin and operations, and building simple, private software tools. Most recent work: Boring App.",
 keywords: ["Nabil Zikri", "Operations", "Administration", "HR", "Johor Bahru", "Boring App", "Next.js"],
 authors: [{ name: "Muhammad Nabil Zikri" }],
 alternates: { canonical: siteUrl },
 openGraph: {
 title: "Nabil Zikri - Operations & admin who builds practical tools",
 description: "Admin and operations work, plus simple private software like Boring App.",
 url: siteUrl,
 siteName: "Nabil Zikri",
 locale: "en_MY",
 type: "website",
 },
 twitter: {
 card: "summary_large_image",
 title: "Nabil Zikri",
 description: "Admin and operations work, plus simple private software like Boring App.",
 },
};

export default function RootLayout({
 children,
}: Readonly<{ children: React.ReactNode }>) {
 return (
 <html lang="en" className={`${inter.variable} ${newsreader.variable}`}>
 <body className="font-sans antialiased">{children}</body>
 </html>
 );
}
