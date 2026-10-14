import Image from "next/image";
import { aboutPage } from "@/content/site";
import { Container, Eyebrow, Heading } from "@/components/ui";
import { Briefcase } from "@/components/icons";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

export default function Story() {
  const { story } = aboutPage;

  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <TiltCard strength={4} className="relative aspect-[4/3] overflow-hidden rounded-card bg-accent-soft lg:aspect-auto lg:h-full">
              <Image
                src={story.image.src}
                alt={story.image.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </TiltCard>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow icon={Briefcase}>{story.eyebrow}</Eyebrow>
            <Heading className="mt-6 max-w-xl">{story.heading}</Heading>

            <div className="mt-7 flex flex-col gap-5">
              {story.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`max-w-xl leading-relaxed ${
                    i === 0 ? "text-lg text-ink/90 sm:text-xl" : "text-base text-ink/75 sm:text-lg"
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
