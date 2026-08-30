import { ParallaxImage } from "./ParallaxImage";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

interface ImageBandProps {
  image: string;
  imagePosition?: string;
  eyebrow?: string;
  quote: string;
  attribution?: string;
}

/**
 * Full-bleed image divider used to break up long pages with a secondary
 * photo. Pairs a parallax background with a reveal-on-scroll pull quote.
 */
export function ImageBand({ image, imagePosition = "center", eyebrow, quote, attribution }: ImageBandProps) {
  return (
    <section className="relative isolate overflow-hidden border-y border-border-subtle py-20 sm:py-28">
      <ParallaxImage src={image} imagePosition={imagePosition} className="opacity-40 grayscale-[15%]" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(10,11,8,0.85) 0%, rgba(10,11,8,0.5) 50%, rgba(10,11,8,0.85) 100%)",
        }}
        aria-hidden
      />
      <Container className="relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div>
            {eyebrow ? (
              <p className="mb-3 font-mono text-xs font-semibold tracking-[0.3em] text-accent uppercase">
                {eyebrow}
              </p>
            ) : null}
            <p className="font-display text-xl leading-snug font-semibold tracking-wide text-foreground uppercase text-shadow-glow sm:text-2xl">
              {quote}
            </p>
            {attribution ? <p className="mt-3 text-sm text-muted">{attribution}</p> : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
