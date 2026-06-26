import type { Metadata, Viewport } from "next";
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { BackToTop } from "@/components/site/back-to-top";

const display = Space_Grotesk({
 subsets: ["latin"],
 variable: "--font-display",
 weight: ["400", "500", "600", "700"],
 display: "swap",
});

const mono = IBM_Plex_Mono({
 subsets: ["latin"],
 variable: "--font-mono-ibm",
 weight: ["400", "500", "600"],
 display: "swap",
});

const siteUrl = "https://www.nzkbuild.xyz";

const personLd = {
 "@context": "https://schema.org",
 "@type": "Person",
 name: "Muhammad Nabil Zikri",
 alternateName: "nzkbuild",
 url: siteUrl,
 jobTitle: "Operations & Administration",
 description:
 "Business Administration graduate in Johor Bahru working in admin and operations, and building practical software tools.",
 email: "nbzkri@gmail.com",
 address: {
 "@type": "PostalAddress",
 addressLocality: "Johor Bahru",
 addressRegion: "Johor",
 addressCountry: "MY",
 },
 sameAs: [
 "https://www.linkedin.com/in/nbzkri/",
 "https://github.com/nzkbuild",
 "https://play.google.com/store/apps/details?id=com.boringsoftware.b",
 ],
};

const themeScript = `(function(){try{document.documentElement.classList.add("js");var t=localStorage.getItem("theme");if(t!=="light"){document.documentElement.classList.add("dark");}}catch(e){}})();`;

export const viewport: Viewport = {
 colorScheme: "dark light",
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
 <html lang="en" suppressHydrationWarning className={`${display.variable} ${mono.variable}`}>
 <body className="font-sans antialiased">
 <script dangerouslySetInnerHTML={{ __html: themeScript }} />
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
 />
 <a
 href="#main"
 className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-sm focus-visible:border focus-visible:border-line focus-visible:bg-surface focus-visible:px-4 focus-visible:py-2 focus-visible:font-mono focus-visible:text-sm focus-visible:text-ink"
 >
 Skip to content
 </a>
 <div className="grain" aria-hidden="true" />
 {children}
 <BackToTop />
 </body>
 </html>
 );
}

