import Link from "next/link";
import { Building2 } from "lucide-react";
import type { Studio } from "@/data/types";
import { Badge } from "./Badge";
import { studioRoleLabel } from "@/lib/utils";

export function StudioCard({ studio }: { studio: Studio }) {
  return (
    <Link
      href={`/studios/${studio.slug}`}
      className="group flex flex-col gap-3 rounded-sm border border-border-subtle bg-surface p-5 transition-colors hover:border-accent/50 hover:bg-surface-hover"
    >
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border border-border-subtle bg-background-elevated text-muted group-hover:text-accent">
          <Building2 className="h-5 w-5" aria-hidden />
        </span>
        <div>
          <h3 className="font-display text-lg leading-tight font-semibold tracking-wide text-foreground uppercase group-hover:text-accent">
            {studio.name}
          </h3>
          <p className="font-mono text-xs text-muted">Est. {studio.founded}</p>
        </div>
      </div>
      <Badge className="w-fit">{studioRoleLabel(studio.role)}</Badge>
      <p className="line-clamp-3 text-sm text-muted">{studio.description[0]}</p>
      <p className="mt-auto font-mono text-xs text-muted/70">{studio.headquarters}</p>
    </Link>
  );
}
