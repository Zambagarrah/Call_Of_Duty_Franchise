"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { TimelineCategory, TimelineEvent } from "@/data/types";
import { Reveal } from "./Reveal";
import { cn, timelineCategoryClasses, timelineCategoryLabel } from "@/lib/utils";

const CATEGORIES: TimelineCategory[] = ["release", "studio", "business", "esports", "technology"];

export function TimelineList({ events }: { events: TimelineEvent[] }) {
  const [active, setActive] = useState<TimelineCategory | "All">("All");

  const filtered = useMemo(
    () => (active === "All" ? events : events.filter((e) => e.category === active)),
    [events, active],
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setActive("All")}
          className={cn(
            "rounded-sm border px-3 py-1.5 font-mono text-xs font-semibold tracking-wide uppercase transition-colors",
            active === "All"
              ? "border-accent bg-accent/10 text-accent"
              : "border-border-subtle text-muted hover:text-foreground",
          )}
        >
          All events
        </button>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              "rounded-sm border px-3 py-1.5 font-mono text-xs font-semibold tracking-wide uppercase transition-colors",
              active === cat
                ? "border-accent bg-accent/10 text-accent"
                : "border-border-subtle text-muted hover:text-foreground",
            )}
          >
            {timelineCategoryLabel(cat)}
          </button>
        ))}
      </div>

      <Reveal as="ol" className="relative flex flex-col gap-6 border-l border-border-subtle pl-6 sm:pl-8">
        {filtered.map((event) => (
          <li key={event.id} className="relative">
            <span
              className={cn(
                "absolute top-1.5 -left-[1.72rem] h-3 w-3 rounded-full border-2 border-background sm:-left-[2.22rem]",
                "bg-accent",
              )}
              aria-hidden
            />
            <div className="flex flex-col gap-2 rounded-sm border border-border-subtle bg-surface p-4 sm:p-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-display text-xl font-bold text-accent">{event.year}</span>
                {event.date ? (
                  <span className="font-mono text-xs text-muted">{event.date}</span>
                ) : null}
                <span
                  className={cn(
                    "clip-tag ml-auto border px-2 py-0.5 font-mono text-[0.65rem] font-semibold tracking-wider uppercase",
                    timelineCategoryClasses(event.category),
                  )}
                >
                  {timelineCategoryLabel(event.category)}
                </span>
              </div>
              <h3 className="font-display text-lg font-semibold tracking-wide text-foreground uppercase">
                {event.title}
              </h3>
              <p className="text-sm text-muted">{event.description}</p>
              {event.relatedGameSlug ? (
                <Link
                  href={`/games/${event.relatedGameSlug}`}
                  className="mt-1 w-fit font-mono text-xs font-semibold tracking-wide text-accent uppercase hover:underline"
                >
                  View game →
                </Link>
              ) : null}
            </div>
          </li>
        ))}
      </Reveal>
    </div>
  );
}
