import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "secondary" | "outline" | "success" | "warning";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
    const variants = {
        default: "border-transparent bg-accent-blue/15 text-accent-blue hover:bg-accent-blue/25",
        secondary: "border-transparent bg-white/5 text-text-secondary hover:bg-white/10",
        outline: "text-text-secondary border-white/10",
        success: "border-transparent bg-status-success/15 text-status-success hover:bg-status-success/25",
        warning: "border-transparent bg-status-warning/15 text-status-warning hover:bg-status-warning/25",
    };

    return (
        <div
            className={cn(
                "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                variants[variant],
                className
            )}
            {...props}
        />
    );
}

export { Badge };
