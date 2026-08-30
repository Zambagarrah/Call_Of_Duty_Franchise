import Link from "next/link";
import { Radar } from "lucide-react";
import { Container } from "@/components/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-center justify-center gap-4 py-28 text-center">
      <Radar className="h-10 w-10 text-accent" aria-hidden />
      <p className="font-mono text-xs font-semibold tracking-[0.3em] text-accent uppercase">
        404 · Target not found
      </p>
      <h1 className="font-display text-4xl font-bold tracking-wide text-foreground uppercase">
        Lost in the field
      </h1>
      <p className="max-w-md text-muted">
        This page doesn&apos;t exist in the archive. It may have been moved, or the intel was
        wrong.
      </p>
      <Link
        href="/"
        className="clip-tag mt-2 inline-flex items-center gap-2 border border-accent bg-accent px-5 py-3 font-mono text-sm font-semibold tracking-wide text-background uppercase hover:bg-accent-strong"
      >
        Return to base
      </Link>
    </Container>
  );
}
