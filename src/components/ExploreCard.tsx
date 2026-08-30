"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { useTilt } from "@/hooks/useTilt";

export function ExploreCard({
  href,
  icon,
  title,
  description,
}: {
  href: string;
  icon: ReactNode;
  title: string;
  description: string;
}) {
  const { ref, onMouseMove, onMouseLeave } = useTilt<HTMLAnchorElement>();

  return (
    <Link
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      href={href}
      className="tilt group flex flex-col gap-3 rounded-sm border border-border-subtle bg-surface p-5 transition-colors hover:border-accent/50 hover:bg-surface-hover"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-sm border border-border-subtle bg-background-elevated text-muted group-hover:text-accent">
        {icon}
      </span>
      <h3 className="font-display text-lg font-semibold tracking-wide text-foreground uppercase group-hover:text-accent">
        {title}
      </h3>
      <p className="text-sm text-muted">{description}</p>
      <span className="mt-auto flex items-center gap-1 font-mono text-xs font-semibold tracking-wide text-accent uppercase opacity-0 transition-opacity group-hover:opacity-100">
        Explore <ArrowRight className="h-3 w-3" aria-hidden />
      </span>
    </Link>
  );
}
