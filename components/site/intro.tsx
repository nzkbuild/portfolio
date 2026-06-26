import { Mail, Linkedin, Github, FileText } from "lucide-react";

const links = [
 { label: "Email", href: "mailto:nbzkri@gmail.com", external: false, icon: Mail },
 { label: "LinkedIn", href: "https://www.linkedin.com/in/nbzkri/", external: true, icon: Linkedin },
 { label: "GitHub", href: "https://github.com/nzkbuild", external: true, icon: Github },
 { label: "R\u00e9sum\u00e9", href: "https://www.linkedin.com/in/nbzkri/", external: true, icon: FileText },
];

const proof = [
 { label: "Live on Google Play", note: "Boring App, shipped solo" },
 { label: "In daily use", note: "KIOS, built at KWSP" },
 { label: "Design to deploy", note: "I own the whole build" },
];

export function Intro() {
 return (
 <section className="mx-auto max-w-3xl px-6 py-20 sm:py-32">
 <p
 className="rise mb-6 text-xs uppercase tracking-[0.18em] text-faint"
 style={{ animationDelay: "0ms" }}
 >
 Johor Bahru, Malaysia &middot; Open to work
 </p>
 <h1
 className="rise text-balance font-serif text-[2.5rem] leading-[1.05] text-ink sm:text-[4rem] sm:leading-[1.02]"
 style={{ animationDelay: "90ms" }}
 >
 I turn messy operations into software that ships.
 </h1>
 <p
 className="rise mt-8 max-w-prose text-lg leading-relaxed text-muted sm:text-xl"
 style={{ animationDelay: "180ms" }}
 >
 I am Nabil, operations and admin by training and a builder by habit. I
 shipped{" "}
 <a
 href="#work"
 className="text-ink underline decoration-1 underline-offset-4 transition-[text-decoration-thickness] hover:decoration-2"
 >
 Boring App
 </a>{" "}
 to Google Play on my own, and I build internal tools that replace
 spreadsheet chaos.
 </p>
 <dl
 className="rise mt-10 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-line pt-6 sm:grid-cols-3"
 style={{ animationDelay: "260ms" }}
 >
 {proof.map((p) => (
 <div key={p.label}>
 <dt className="text-sm font-medium text-ink">{p.label}</dt>
 <dd className="mt-0.5 text-xs text-faint">{p.note}</dd>
 </div>
 ))}
 </dl>
 <div
 className="rise -mx-2 mt-10 flex flex-wrap items-center gap-x-1 gap-y-1 text-sm"
 style={{ animationDelay: "340ms" }}
 >
 {links.map((l) => {
 const Icon = l.icon;
 return (
 <a
 key={l.label}
 href={l.href}
 target={l.external ? "_blank" : undefined}
 rel={l.external ? "noopener noreferrer" : undefined}
 className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-muted transition-all hover:bg-ink/5 hover:text-ink active:scale-95"
 >
 <Icon size={16} strokeWidth={1.75} />
 {l.label}
 </a>
 );
 })}
 </div>
 </section>
 );
}

