"use client";

import { Container } from "@/components/ui/container";
import { FadeIn, StaggerContainer, fadeInItem } from "@/components/ui/motion";
import { motion } from "framer-motion";

const skillGroups = [
    {
        label: "Dev Stack",
        items: [
            { name: "Next.js", context: "KIOS dashboard, routing & server components" },
            { name: "TypeScript", context: "Type-safe data layer across KIOS" },
            { name: "Supabase", context: "Auth, RLS policies, real-time data" },
            { name: "Tailwind CSS", context: "UI system for KIOS & this portfolio" },
            { name: "Python", context: "Luno grid bot, MT4 bridge scripts" },
        ],
    },
    {
        label: "HR & Ops",
        items: [
            { name: "Workforce Planning", context: "Scheduling & headcount analysis at KWSP" },
            { name: "HRIS Systems", context: "SAP HCM navigation & data entry" },
            { name: "Process Mapping", context: "Identifying bottlenecks → building fixes" },
            { name: "Policy Writing", context: "SOP documents for operational teams" },
        ],
    },
    {
        label: "Tools",
        items: [
            { name: "Git / GitHub", context: "Daily — version control & collaboration" },
            { name: "Figma", context: "Wireframes & component design before building" },
            { name: "Notion", context: "Project planning & knowledge base" },
            { name: "VS Code", context: "Primary editor" },
        ],
    },
];

export function Skills() {
    return (
        <section className="py-16 md:py-24 border-t border-white/5">
            <Container size="wide">
                <FadeIn className="mb-12">
                    <div className="flex items-baseline justify-between gap-8 mb-2">
                        <p className="text-sm font-mono text-text-muted tracking-widest uppercase">Capabilities</p>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-text-primary tracking-tight">
                        What I work with
                    </h2>
                </FadeIn>

                <StaggerContainer className="grid md:grid-cols-3 gap-x-12 gap-y-10">
                    {skillGroups.map((group) => (
                        <motion.div key={group.label} variants={fadeInItem}>
                            <p className="text-xs font-mono text-text-muted tracking-widest uppercase mb-6 pb-3 border-b border-white/5">
                                {group.label}
                            </p>
                            <div className="flex flex-col gap-5">
                                {group.items.map((item) => (
                                    <div key={item.name} className="group">
                                        <div className="flex items-baseline gap-3 mb-0.5">
                                            <span className="text-base font-semibold text-text-primary">{item.name}</span>
                                        </div>
                                        <p className="text-sm text-text-muted leading-relaxed">{item.context}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </StaggerContainer>
            </Container>
        </section>
    );
}
