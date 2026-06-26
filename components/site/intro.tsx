import { Mail, Linkedin, Github, FileText } from "lucide-react";

const links = [
 { label: "Email", href: "mailto:nbzkri@gmail.com", external: false, icon: Mail },
 { label: "LinkedIn", href: "https://www.linkedin.com/in/nbzkri/", external: true, icon: Linkedin },
 { label: "GitHub", href: "https://github.com/nzkbuild", external: true, icon: Github },
 { label: "R\u00e9sum\u00e9", href: "https://www.linkedin.com/in/nbzkri/", external: true, icon: FileText },
];

export function Intro() {
 return (
 <section className="mx-auto max-w-3xl px-6 py-20 sm:py-32">
 <p
 className="rise mb-5 text-xs uppercase tracking-[0.18em] text-faint"
 style={{ animationDelay: "0ms" }}
 >
 Johor Bahru, Malaysia &middot; Open to work
 </p>
 <h1
 className="rise text-pretty font-serif text-[2.25rem] leading-[1.08] text-ink sm:text-6xl sm:leading-[1.04]"
 style={{ animationDelay: "90ms" }}
 >
 Operations and admin, with a habit of building tools.
 </h1>
 <div
 className="rise mt-8 max-w-prose space-y-4 text-base leading-relaxed text-muted sm:text-lg"
 style={{ animationDelay: "180ms" }}
 >
 <p>
 I am Nabil, a Business Administration graduate. My background is in
 records, documentation, and member service, and I build simple,
 private software to take the friction out of that kind of work.
 </p>
 <p>
 Most recently I built and launched{" "}
 <a
 href="#work"
 className="text-ink underline decoration-1 underline-offset-4 transition-[text-decoration-thickness] hover:decoration-2"
 >
 Boring App
 </a>{" "}
 on Google Play, a private Android app for keeping the important
 documents, numbers, and dates of everyday life in one place.
 </p>
 </div>
 <div
 className="rise -mx-2 mt-10 flex flex-wrap items-center gap-x-1 gap-y-1 text-sm"
 style={{ animationDelay: "270ms" }}
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

