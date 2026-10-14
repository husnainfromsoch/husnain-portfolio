import Image from "next/image";
import { aboutPage, hero as homeHero } from "@/content/site";
import { Button, Container, Eyebrow } from "@/components/ui";
import { User } from "@/components/icons";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";
import { WordsReveal } from "@/components/TextReveal";

export default function AboutHero() {
  const { hero } = aboutPage;

  return (
    <section className="overflow-hidden pb-16 pt-28 sm:pb-20 sm:pt-36">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <Reveal>
            <Eyebrow icon={User}>{hero.eyebrow}</Eyebrow>
            <h1 className="mt-7 font-display text-[clamp(2.6rem,6vw,4.6rem)] font-bold leading-[1.02] tracking-[-0.045em]">
              <WordsReveal text={hero.heading} />
            </h1>
            <p className="mt-7 max-w-[34rem] text-base leading-relaxed text-ink/75 sm:text-lg">
              {hero.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/contact">Start a project</Button>
              <Button href="/work" variant="outline" arrow={false}>
                See my work
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <TiltCard strength={5} className="relative mx-auto max-w-[460px] lg:mr-0">
              <div className="aspect-[4/4.6] overflow-hidden rounded-card bg-accent-soft">
                <Image
                  src={hero.portrait.src}
                  alt={hero.portrait.alt}
                  width={900}
                  height={1035}
                  priority
                  quality={95}
                  sizes="(max-width: 1024px) 85vw, 460px"
                  className="h-full w-full object-cover"
                />
              </div>

              <p className="absolute left-5 top-5 inline-flex items-center gap-2.5 rounded-full bg-card px-4 py-2.5 text-xs font-semibold shadow-[0_8px_24px_rgba(14,14,14,0.08)] sm:text-sm">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
                </span>
                {homeHero.availability}
              </p>
            </TiltCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
