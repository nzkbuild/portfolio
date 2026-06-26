import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";

const links = [
 { label: "nbzkri@gmail.com", href: "mailto:nbzkri@gmail.com", external: false, icon: Mail },
 { label: "linkedin.com/in/nbzkri", href: "https://www.linkedin.com/in/nbzkri/", external: true, icon: Linkedin },
 { label: "github.com/nzkbuild", href: "https://github.com/nzkbuild", external: true, icon: Github },
];

export function Contact() {
 return (
 <section id="contact" className="border-t border-line">
 <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
 <h2 className="mb-6 font-sans text-xs font-medium uppercase tracking-[0.18em] text-faint">
 Contact
 </h2>
 <p className="max-w-xl text-pretty font-serif text-[1.75rem] leading-tight text-ink sm:text-4xl">
 Open to roles in HR, admin, and operations, and to building useful things.
 </p>
 <p className="mt-5 max-w-prose text-base leading-relaxed text-muted sm:text-lg">
 Email is the best way to reach me. I am based in Johor Bahru and happy to
 talk remotely.
 </p>
 <ul className="-mb-2 mt-7 space-y-1">
 {links.map((l) => {
 const Icon = l.icon;
 return (
 <li key={l.label}>
 <a
 href={l.href}
 target={l.external ? "_blank" : undefined}
 rel={l.external ? "noopener noreferrer" : undefined}
 className="group inline-flex items-center gap-3 py-2 text-ink"
 >
 <Icon size={18} strokeWidth={1.75} className="text-faint" />
 <span className="underline decoration-line underline-offset-4 group-hover:decoration-ink">
 {l.label}
 </span>
 <ArrowUpRight
 size={14}
 strokeWidth={2}
 className="text-faint transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
 />
 </a>
 </li>
 );
 })}
 </ul>
 </div>
 <footer className="border-t border-line">
 <div className="mx-auto flex max-w-3xl flex-col gap-1 px-6 py-8 text-sm text-faint sm:flex-row sm:items-center sm:justify-between">
 <span>Muhammad Nabil Zikri &middot; Johor Bahru, Malaysia</span>
 <span>{new Date().getFullYear()}</span>
 </div>
 </footer>
 </section>
 );
}

