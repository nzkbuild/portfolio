import { Mail, Linkedin, Github, FileText } from "lucide-react";

const links = [
 { label: "Email", href: "mailto:nbzkri@gmail.com", external: false, icon: Mail },
 { label: "LinkedIn", href: "https://www.linkedin.com/in/nbzkri/", external: true, icon: Linkedin },
 { label: "GitHub", href: "https://github.com/nzkbuild", external: true, icon: Github },
 { label: "R\u00e9sum\u00e9", href: "https://www.linkedin.com/in/nbzkri/", external: true, icon: FileText },
];

export function Intro() {
 return (
 <section className="mx-auto max-w-3xl px-6 py-16 sm:py-28">
 <p className="mb-5 text-xs uppercase tracking-[0.18em] text-faint">
 Johor Bahru, Malaysia &middot; Open to work
 </p>
 <h1 className="text-pretty font-serif text-[2rem] leading-[1.12] text-ink sm:text-5xl sm:leading-[1.08]">
 Operations and admin, with a habit of building tools.
 </h1>
 <div className="mt-7 max-w-prose space-y-4 text-base leading-relaxed text-muted sm:mt-8 sm:space-y-5 sm:text-lg">
 <p>
 I am Nabil, a Business Administration graduate. My background is in
 records, documentation, and member service, and I build simple,
 private software to take the friction out of that kind of work.
 </p>
 <p>
 Most recently I built and launched{" "}
 <a
 href="#work"
 className="text-ink underline decoration-1 underline-offset-4 hover:decoration-2"
 >
 Boring App
 </a>{" "}
 on Google Play, a private Android app for keeping the important
 documents, numbers, and dates of everyday life in one place.
 </p>
 </div>
 <div className="-mx-2 mt-9 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm sm:mt-10">
 {links.map((l) => {
 const Icon = l.icon;
 return (
 <a
 key={l.label}
 href={l.href}
 target={l.external ? "_blank" : undefined}
 rel={l.external ? "noopener noreferrer" : undefined}
 className="inline-flex items-center gap-2 px-2 py-2 text-muted transition-colors hover:text-ink"
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

