import type { Metadata } from "next";
import { AlertTriangle, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { Badge } from "@/components/Badge";
import { futureEntries } from "@/data/future";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Future",
  description:
    "What's next for Call of Duty — confirmed live-service plans plus clearly-labeled, unconfirmed industry rumors about upcoming releases.",
};

export default function FuturePage() {
  return (
    <div>
      <PageHero
        eyebrow="Looking ahead"
        title="The Future"
        description="What's confirmed, and what's still just industry chatter. Anything not officially announced by Activision is clearly labeled as a rumor."
        image="/images/hero-future.jpg"
        imagePosition="center 25%"
      />
      <Container className="py-12 sm:py-16">
        <div className="mb-8 flex items-start gap-3 rounded-sm border border-amber-600/40 bg-amber-600/10 p-4 text-sm text-amber-200">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
          <p>
            Unreleased-game details change constantly and leaks are frequently wrong or outdated.
            Entries marked <span className="font-semibold">Rumored</span> below are unconfirmed
            speculation summarized from public industry reporting, not official announcements.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {futureEntries.map((entry) => (
            <article
              key={entry.id}
              className="rounded-sm border border-border-subtle bg-surface p-6"
            >
              <div className="flex flex-wrap items-center gap-2">
                <Badge
                  className={cn(
                    "flex items-center gap-1",
                    entry.status === "confirmed"
                      ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-300"
                      : "border-amber-600/40 bg-amber-600/10 text-amber-300",
                  )}
                >
                  {entry.status === "confirmed" ? (
                    <CheckCircle2 className="h-3 w-3" aria-hidden />
                  ) : (
                    <AlertTriangle className="h-3 w-3" aria-hidden />
                  )}
                  {entry.status === "confirmed" ? "Confirmed" : "Rumored"}
                </Badge>
                <Badge>{entry.expectedWindow}</Badge>
                {entry.studio ? <Badge>{entry.studio}</Badge> : null}
              </div>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-wide text-foreground uppercase">
                {entry.title}
              </h2>
              <p className="mt-2 text-base text-muted">{entry.summary}</p>
              <ul className="mt-4 flex flex-col gap-2">
                {entry.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
                    {detail}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
