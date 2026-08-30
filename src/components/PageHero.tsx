import Image from "next/image";
import { Container } from "./Container";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
  /** Optional background photo (path under /public). Rendered dim, behind a dark gradient, for legibility. */
  image?: string;
  imagePosition?: string;
}

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  image,
  imagePosition = "center",
}: PageHeroProps) {
  return (
    <div className={cn("relative overflow-hidden border-b border-border-subtle bg-background-elevated", className)}>
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            priority
            sizes="100vw"
            style={{ objectFit: "cover", objectPosition: imagePosition }}
            className="pointer-events-none absolute inset-0 opacity-45 grayscale-[20%]"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(10,11,8,0.55) 0%, rgba(10,11,8,0.88) 75%, rgba(10,11,8,1) 100%)",
            }}
            aria-hidden
          />
        </>
      ) : null}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(255,106,26,0.12), transparent)",
        }}
        aria-hidden
      />
      <Container className="relative py-16 sm:py-20">
        <p className="mb-3 font-mono text-xs font-semibold tracking-[0.3em] text-accent uppercase">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl font-bold tracking-wide text-foreground uppercase text-shadow-glow sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 max-w-2xl text-base text-muted sm:text-lg">{description}</p>
        ) : null}
      </Container>
    </div>
  );
}
