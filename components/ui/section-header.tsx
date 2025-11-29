import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center";
}

export function SectionHeader({
    title,
    subtitle,
    className,
    align = "left"
}: SectionHeaderProps) {
    return (
        <div className={cn("mb-16 md:mb-24 space-y-6", align === "center" && "text-center", className)}>
            <h2 className={cn(
                "text-3xl md:text-5xl font-bold text-text-primary tracking-tight",
                "relative inline-block"
            )}>
                {title}
            </h2>
            {subtitle && (
                <p className={cn(
                    "text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl",
                    align === "center" && "mx-auto"
                )}>
                    {subtitle}
                </p>
            )}
        </div>
    );
}
