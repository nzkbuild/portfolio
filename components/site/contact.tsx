import { Reveal } from "@/components/site/reveal";
import { SectionHead } from "@/components/site/section-head";

const channels = [
 { k: "Email", v: "nbzkri@gmail.com", href: "mailto:nbzkri@gmail.com", external: false },
 { k: "LinkedIn", v: "linkedin.com/in/nbzkri", href: "https://www.linkedin.com/in/nbzkri/", external: true },
 { k: "GitHub", v: "github.com/nzkbuild", href: "https://github.com/nzkbuild", external: true },
 { k: "Location", v: "Johor Bahru, Malaysia", href: "", external: false },
];

export function Contact() {
 return (
 <section id="contact" className="border-t border-line">
 <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
 <SectionHead
 index="04"
 label="Contact"
 title="Open to roles in HR, admin, and operations, and to building useful things."
 meta="Available"
 />
 <p className="mb-10 max-w-prose leading-relaxed text-muted">
 Email is the best way to reach me. I am based in Johor Bahru and happy to talk remotely.
 </p>
 <Reveal>
 <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
 {channels.map((c) => (
 <div key={c.k} className="bg-paper p-5">
 <dt className="font-mono text-[11px] uppercase tracking-[0.15em] text-faint">{c.k}</dt>
 <dd className="mt-1.5 text-ink">
 {c.href ? (
 <a
 href={c.href}
 target={c.external ? "_blank" : undefined}
 rel={c.external ? "noopener noreferrer" : undefined}
 className="underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
 >
 {c.v}
 </a>
 ) : (
 c.v
 )}
 </dd>
 </div>
 ))}
 </dl>
 </Reveal>
 </div>
 </section>
 );
}

