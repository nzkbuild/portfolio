import {
 SiReact,
 SiNextdotjs,
 SiTypescript,
 SiSupabase,
 SiCapacitor,
 SiAndroid,
 SiPython,
 SiTailwindcss,
 SiGit,
 SiVercel,
} from "react-icons/si";

const tools = [
 { Icon: SiReact, label: "React" },
 { Icon: SiNextdotjs, label: "Next.js" },
 { Icon: SiTypescript, label: "TypeScript" },
 { Icon: SiSupabase, label: "Supabase" },
 { Icon: SiCapacitor, label: "Capacitor" },
 { Icon: SiAndroid, label: "Android" },
 { Icon: SiPython, label: "Python" },
 { Icon: SiTailwindcss, label: "Tailwind CSS" },
 { Icon: SiGit, label: "Git" },
 { Icon: SiVercel, label: "Vercel" },
];

export function Marquee() {
 const row = [...tools, ...tools];
 return (
 <section
 aria-label="Tools and technologies I work with"
 className="overflow-hidden border-y border-line bg-surface/40 py-5"
 >
 <div className="marquee-mask">
 <ul className="marquee-track flex w-max items-center">
 {row.map((t, i) => {
 const Icon = t.Icon;
 return (
 <li
 key={i}
 className="flex shrink-0 items-center gap-2.5 px-7 text-muted"
 >
 <Icon size={18} aria-hidden="true" />
 <span className="text-sm font-medium tracking-tight">{t.label}</span>
 </li>
 );
 })}
 </ul>
 </div>
 </section>
 );
}

