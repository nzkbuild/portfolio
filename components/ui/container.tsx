import * as React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "default" | "narrow" | "wide";
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
    ({ className, size = "default", ...props }, ref) => {
        const sizes = {
            default: "max-w-7xl",
            narrow: "max-w-4xl",
            wide: "max-w-[1400px]",
        };

        return (
            <div
                ref={ref}
                className={cn("mx-auto w-full px-6", sizes[size], className)}
                {...props}
            />
        );
    }
);
Container.displayName = "Container";

export { Container };
