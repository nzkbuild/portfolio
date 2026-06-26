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

const themeScript = `(function(){try{document.documentElement.classList.add("js");var t=localStorage.getItem("theme");var m=window.matchMedia("(prefers-color-scheme: dark)").matches;if(t==="dark"||(!t&&m)){document.documentElement.classList.add("dark");}}catch(e){}})();`;

export const viewport: Viewport = {
 colorScheme: "light dark",
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
 <html
 lang="en"
 suppressHydrationWarning
 className={`${inter.variable} ${newsreader.variable}`}
 >
 <body className="font-sans antialiased">
 <script dangerouslySetInnerHTML={{ __html: themeScript }} />
 <div className="grain" aria-hidden="true" />
 {children}
 </body>
 </html>
 );
}

