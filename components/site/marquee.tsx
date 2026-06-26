import {
 SiReact,
 SiNextdotjs,
 SiTypescript,
 SiSupabase,
 SiCapacitor,
 SiPython,
 SiTailwindcss,
 SiGit,
} from "react-icons/si";
import { FaMicrosoft, FaFileExcel } from "react-icons/fa6";
import type { IconType } from "react-icons";

const tools: { Icon: IconType; label: string }[] = [
 { Icon: FaMicrosoft, label: "Microsoft Office" },
 { Icon: FaFileExcel, label: "Excel" },
 { Icon: SiReact, label: "React" },
 { Icon: SiNextdotjs, label: "Next.js" },
 { Icon: SiTypescript, label: "TypeScript" },
 { Icon: SiSupabase, label: "Supabase" },
 { Icon: SiPython, label: "Python" },
 { Icon: SiCapacitor, label: "Capacitor" },
 { Icon: SiTailwindcss, label: "Tailwind CSS" },
 { Icon: SiGit, label: "Git" },
];

export function Marquee() {
 const row = [...tools, ...tools, ...tools, ...tools];
 return (
 <section
 aria-label="Tools I work with, across operations and engineering"
 className="overflow-hidden border-y border-line bg-surface/40 py-5"
 >
 <div className="marquee-mask">
 <ul className="marquee-track flex w-max items-center">
 {row.map((t, i) => {
 const Icon = t.Icon;
 return (
 <li key={i} className="flex shrink-0 items-center gap-2.5 px-7 text-ink/75">
 <Icon size={19} aria-hidden="true" />
 <span className="text-sm font-medium tracking-tight">{t.label}</span>
 </li>
 );
 })}
 </ul>
 </div>
 </section>
 );
}

