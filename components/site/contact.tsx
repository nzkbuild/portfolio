import { Mail, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/site/reveal";

const links = [
 { label: "nbzkri@gmail.com", href: "mailto:nbzkri@gmail.com", external: false, icon: Mail },
 { label: "linkedin.com/in/nbzkri", href: "https://www.linkedin.com/in/nbzkri/", external: true, icon: Linkedin },
 { label: "github.com/nzkbuild", href: "https://github.com/nzkbuild", external: true, icon: Github },
];

export function Contact() {
 return (
 <section id="contact" className="border-t border-line">
 <div className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
 <Reveal>
 <p className="font-mono text-xs uppercase tracking-[0.18em] text-faint">Contact</p>
 <h2 className="mt-4 max-w-2xl text-balance font-serif text-3xl leading-tight text-ink sm:text-5xl">
 Open to roles in HR, admin, and operations, and to building useful things.
 </h2>
 <p className="mt-6 max-w-prose text-base leading-relaxed text-muted sm:text-lg">
 Email is the best way to reach me. I am based in Johor Bahru and happy to
 talk remotely.
 </p>
 <ul className="-mx-2 mt-8 space-y-0.5">
 {links.map((l) => {
 const Icon = l.icon;
 return (
 <li key={l.label}>
 <a
 href={l.href}
 target={l.external ? "_blank" : undefined}
 rel={l.external ? "noopener noreferrer" : undefined}
 className="group inline-flex items-center gap-3 rounded-lg px-2 py-2 text-ink transition-all hover:bg-ink/5 active:scale-[0.98]"
 >
 <Icon size={18} strokeWidth={1.75} className="text-faint transition-colors group-hover:text-accent" />
 <span className="underline decoration-line underline-offset-4 transition-colors group-hover:decoration-ink">{l.label}</span>
 <ArrowUpRight size={14} strokeWidth={2} className="text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
 </a>
 </li>
 );
 })}
 </ul>
 </Reveal>
 </div>
 </section>
 );
}

