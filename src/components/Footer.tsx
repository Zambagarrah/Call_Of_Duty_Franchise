import Link from "next/link";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-background-elevated">
      <Container className="flex flex-col gap-6 py-10 text-sm text-muted">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="font-display text-lg tracking-widest text-foreground uppercase">
              The Archive<span className="text-accent">.</span>
            </p>
            <p className="mt-2 max-w-md text-sm text-muted">
              An unofficial, fan-made reference covering the history and games of the Call of
              Duty franchise.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/history" className="hover:text-foreground">History</Link>
            <Link href="/games" className="hover:text-foreground">Games</Link>
            <Link href="/timeline" className="hover:text-foreground">Timeline</Link>
            <Link href="/studios" className="hover:text-foreground">Studios</Link>
            <Link href="/future" className="hover:text-foreground">Future</Link>
          </nav>
        </div>
        <div className="border-t border-border-subtle pt-6 text-xs leading-relaxed text-muted/80">
          <p>
            This is an independent, non-commercial fan project created for informational and
            educational purposes. It is not affiliated with, endorsed by, or sponsored by
            Activision Publishing, Inc., Microsoft, or any of their subsidiary studios.
            Call of Duty and all related titles, characters, and logos are trademarks of their
            respective owners. Visit the official site at{" "}
            <a
              href="https://www.callofduty.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline decoration-dotted underline-offset-2 hover:text-foreground"
            >
              callofduty.com
            </a>
            .
          </p>
          <p className="mt-2">
            Background photography is free-license stock imagery from{" "}
            <a
              href="https://www.pexels.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="underline decoration-dotted underline-offset-2 hover:text-foreground"
            >
              Pexels
            </a>{" "}
            — generic military/tactical photography, not Call of Duty artwork or screenshots.
          </p>
        </div>
      </Container>
    </footer>
  );
}
