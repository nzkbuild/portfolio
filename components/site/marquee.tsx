const tools = [
 "React",
 "Next.js",
 "TypeScript",
 "Supabase",
 "Capacitor",
 "Android",
 "Python",
 "Tailwind CSS",
 "WebCrypto",
 "Git",
 "Vercel",
];

export function Marquee() {
 const row = [...tools, ...tools];
 return (
 <section aria-label="Tools and technologies" className="border-y border-line py-7 sm:py-9">
 <div className="marquee-mask overflow-hidden">
 <ul className="marquee-track">
 {row.map((t, i) => (
 <li
 key={i}
 className="mx-5 flex items-center gap-5 whitespace-nowrap font-serif text-2xl text-faint sm:mx-7 sm:text-3xl"
 >
 {t}
 <span aria-hidden="true" className="text-accent">&middot;</span>
 </li>
 ))}
 </ul>
 </div>
 </section>
 );
}

