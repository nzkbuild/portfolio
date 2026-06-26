import Link from "next/link";
import { Wordmark } from "@/components/site/wordmark";

const navigate = [
 { label: "Work", href: "#work" },
 { label: "Background", href: "#background" },
 { label: "Contact", href: "#contact" },
];

const elsewhere = [
 { label: "Email", href: "mailto:nbzkri@gmail.com", external: false },
 { label: "LinkedIn", href: "https://www.linkedin.com/in/nbzkri/", external: true },
 { label: "GitHub", href: "https://github.com/nzkbuild", external: true },
];

export function SiteFooter() {
 return (
 <footer className="border-t border-line">
 <div className="mx-auto max-w-5xl px-6 py-14">
 <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
 <div className="max-w-xs">
 <Link href="/" aria-label="nzkbuild home" className="inline-block">
 <Wordmark />
 </Link>
 <p className="mt-4 text-sm leading-relaxed text-muted">
 Operations and admin, building practical software. Currently open to work.
 </p>
 </div>
 <div className="flex gap-14 sm:gap-20">
 <div>
 <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Navigate</p>
 <ul className="mt-4 space-y-2.5">
 {navigate.map((n) => (
 <li key={n.href}>
 <a href={n.href} className="text-sm text-muted transition-colors hover:text-ink">{n.label}</a>
 </li>
 ))}
 </ul>
 </div>
 <div>
 <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Elsewhere</p>
 <ul className="mt-4 space-y-2.5">
 {elsewhere.map((n) => (
 <li key={n.label}>
 <a
 href={n.href}
 target={n.external ? "_blank" : undefined}
 rel={n.external ? "noopener noreferrer" : undefined}
 className="text-sm text-muted transition-colors hover:text-ink"
 >
 {n.label}
 </a>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </div>
 <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
 <span>(c) {new Date().getFullYear()} Muhammad Nabil Zikri</span>
 <span>Johor Bahru, Malaysia</span>
 </div>
 </div>
 </footer>
 );
}

