import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { StudioCard } from "@/components/StudioCard";
import { ImageBand } from "@/components/ImageBand";
import { Reveal } from "@/components/Reveal";
import { studios } from "@/data/studios";

export const metadata: Metadata = {
  title: "Studios",
  description:
    "Meet the development studios behind the Call of Duty franchise, from lead studios Infinity Ward and Treyarch to the support and mobile teams keeping it running.",
};

export default function StudiosPage() {
  return (
    <div>
      <PageHero
        eyebrow={`${studios.length} studios profiled`}
        title="The Studios"
        description="Call of Duty has never been the work of a single team. Meet the lead, support, mobile, and infrastructure studios that build and run the franchise year-round."
        image="/images/hero-studios.jpg"
        imagePosition="center 65%"
      />
      <Container className="py-12 sm:py-16">
        <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {studios.map((studio) => (
            <StudioCard key={studio.slug} studio={studio} />
          ))}
        </Reveal>
      </Container>
      <ImageBand
        image="/images/band-studios.jpg"
        imagePosition="center 40%"
        eyebrow="Built by many hands"
        quote="A rotating roster of studios has kept the franchise shipping, year after year."
      />
    </div>
  );
}
