import Link from "next/link";

const nav = [
 { label: "Work", href: "#work" },
 { label: "Background", href: "#background" },
 { label: "Contact", href: "#contact" },
];

export function Header() {
 return (
 <header className="border-b border-line">
 <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
 <Link href="/" className="font-serif text-lg tracking-tight text-ink">
 Nabil Zikri
 </Link>
 <nav className="flex items-center gap-5 text-sm text-muted sm:gap-7">
 {nav.map((item) => (
 <a
 key={item.href}
 href={item.href}
 className="transition-colors hover:text-ink"
 >
 {item.label}
 </a>
 ))}
 </nav>
 </div>
 </header>
 );
}

