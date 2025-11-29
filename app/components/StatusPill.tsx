import React from 'react';
import { cn } from "@/lib/utils";

interface StatusPillProps {
  status: string;
  variant?: 'active' | 'completed' | 'experimental' | 'archived' | 'online';
  className?: string;
}

export default function StatusPill({ status, variant = 'active', className }: StatusPillProps) {
  const variants = {
    active: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    online: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
    completed: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    experimental: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    archived: "bg-zinc-500/10 text-zinc-500 border-zinc-500/20",
  };

  return (
    <span className={cn(
      "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-medium",
      variants[variant],
      className
    )}>
      <span className={cn(
        "inline-block w-1.5 h-1.5 rounded-full bg-current",
        (variant === 'active' || variant === 'online') && "animate-pulse"
      )}></span>
      {status}
    </span>
  );
}
