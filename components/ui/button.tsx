import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost" | "outline";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";

        // Base styles
        const baseStyles = "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

        // Variants
        const variants = {
            primary: "bg-accent-blue text-white hover:bg-accent-hover hover:-translate-y-0.5 shadow-lg shadow-accent-blue/20 border border-transparent",
            secondary: "bg-white/5 text-text-primary border border-white/10 hover:bg-white/10 hover:border-white/20 backdrop-blur-md",
            ghost: "hover:bg-white/5 text-text-secondary hover:text-text-primary border border-transparent",
            outline: "border border-white/10 bg-transparent hover:bg-white/5 text-text-secondary hover:text-text-primary",
        };

        // Sizes
        const sizes = {
            sm: "h-9 px-4 text-xs gap-2",
            md: "h-11 px-6 text-sm gap-2",
            lg: "h-14 px-8 text-base gap-3",
        };

        return (
            <Comp
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
