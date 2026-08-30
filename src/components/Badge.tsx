import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "clip-tag inline-flex items-center gap-1 border px-2.5 py-1 font-mono text-[0.65rem] font-semibold tracking-wider uppercase",
        variant === "default" && "border-border-subtle bg-surface text-muted",
        variant === "outline" && "border-current bg-transparent",
        className,
      )}
      {...props}
    />
  );
}
