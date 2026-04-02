"use client";

import { useEffect, useState, useRef } from "react";

const lines = [
    { prompt: "$ ", text: "whoami", delay: 400 },
    { prompt: "  ", text: "nabil — hr ops turned developer", delay: 900, output: true },
    { prompt: "$ ", text: "cat status.txt", delay: 1800 },
    { prompt: "  ", text: "available · open to offers · kuala lumpur", delay: 2400, output: true },
    { prompt: "$ ", text: "git log --oneline --no-merges", delay: 3400 },
    { prompt: "  ", text: "a3f9c2  built kios when a spreadsheet wasn't enough", delay: 3900, output: true },
    { prompt: "  ", text: "7b12e1  shipped it — learned supabase, rls, and auth the hard way", delay: 4100, output: true },
    { prompt: "  ", text: "c0091a  nobody asked for it. did it anyway.", delay: 4300, output: true },
    { prompt: "$ ", text: "echo $LOOKING_FOR", delay: 5400 },
    { prompt: "  ", text: "a team that ships real things", delay: 5900, output: true },
    { prompt: "$ ", text: "_", delay: 6800, cursor: true },
];

function useTypewriter(text: string, startDelay: number, speed = 38) {
    const [displayed, setDisplayed] = useState("");
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const startTimer = setTimeout(() => setStarted(true), startDelay);
        return () => clearTimeout(startTimer);
    }, [startDelay]);

    useEffect(() => {
        if (!started) return;
        let i = 0;
        setDisplayed("");
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i + 1));
            i++;
            if (i >= text.length) clearInterval(interval);
        }, speed);
        return () => clearInterval(interval);
    }, [started, text, speed]);

    return displayed;
}

function TerminalLine({ line }: { line: typeof lines[0] }) {
    const typed = useTypewriter(line.cursor ? "" : line.text, line.delay, line.output ? 0 : 38);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), line.delay - 50);
        return () => clearTimeout(t);
    }, [line.delay]);

    if (!visible) return null;

    if (line.cursor) {
        return (
            <div className="flex items-center gap-2 mt-1">
                <span className="text-accent-blue font-mono text-sm select-none">$ </span>
                <span className="w-[7px] h-[14px] bg-accent-blue/80 animate-pulse inline-block" />
            </div>
        );
    }

    return (
        <div className="flex gap-2 leading-relaxed">
            <span className={`font-mono text-sm select-none shrink-0 ${line.output ? "text-transparent" : "text-accent-blue"}`}>
                {line.prompt}
            </span>
            <span className={`font-mono text-sm ${line.output ? "text-text-muted" : "text-text-primary"}`}>
                {typed}
            </span>
        </div>
    );
}

export function Terminal() {
    return (
        <div className="bg-[#0d0d0d] border border-white/8 rounded-2xl overflow-hidden shadow-2xl">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <span className="text-xs font-mono text-text-muted mx-auto">bash — nabil@portfolio</span>
            </div>
            {/* Body */}
            <div className="p-6 space-y-1.5 min-h-[280px]">
                {lines.map((line, i) => (
                    <TerminalLine key={i} line={line} />
                ))}
            </div>
        </div>
    );
}
