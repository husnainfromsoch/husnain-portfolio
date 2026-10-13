import Image from "next/image";
import { hero } from "@/content/site";
import { Button, Container, Eyebrow } from "@/components/ui";
import { Briefcase, Star } from "@/components/icons";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";

/* Placeholder avatar colours for the "happy clients" row.
   Swap for real client photos later if you like. */
const avatarColours = ["bg-ink", "bg-accent", "bg-muted", "bg-accent-soft"];

/* Where each small preview card floats over the portrait */
const previewPlacement = [
  "-left-4 bottom-10 w-[42%] rotate-[-7deg] sm:-left-10 lg:-left-16",
  "-right-2 top-12 w-[36%] rotate-[6deg] sm:-right-6",
];

export default function Hero() {
  const lastLine = hero.headline.length - 1;

  return (
    <section className="overflow-hidden pt-10 pb-20 sm:pt-16 sm:pb-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-12">
          {/* ---------------------------- Left: words --------------------------- */}
          <Reveal>
            <Eyebrow icon={Briefcase}>{hero.badge}</Eyebrow>

            <h1 className="mt-7 font-display text-[clamp(2.9rem,7.4vw,5.6rem)] font-bold leading-[0.95] tracking-[-0.045em]">
              {hero.headline.map((line, i) => (
                <span key={line} className="block">
                  {i === lastLine && line.endsWith(hero.highlight) ? (
                    <>
                      {line.slice(0, -hero.highlight.length)}
                      <span className="text-accent">{hero.highlight}</span>
                    </>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h1>

            <p className="mt-7 max-w-[34rem] text-base leading-relaxed text-ink/75 sm:text-lg">
              {hero.intro}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="outline" arrow={false}>
                {hero.secondaryCta.label}
              </Button>
            </div>

            {/* Social proof card, like the reference */}
            <div className="mt-10 inline-flex items-center gap-4 rounded-[18px] border border-line bg-card/60 py-3 pl-3 pr-6">
              <div className="flex -space-x-3" aria-hidden="true">
                {avatarColours.map((c) => (
                  <span
                    key={c}
                    className={`size-11 rounded-full border-[3px] border-paper ${c}`}
                  />
                ))}
              </div>
              <div className="text-sm leading-tight">
                <p className="font-display text-base font-bold tracking-[-0.02em]">
                  {hero.socialProof.value} {hero.socialProof.label}
                </p>
                <p className="mt-1 flex items-center gap-1.5 text-ink/80">
                  <span className="flex text-accent" aria-hidden="true">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="size-3.5" />
                    ))}
                  </span>
                  <span className="font-medium">{hero.socialProof.rating}</span>
                </p>
              </div>
            </div>
          </Reveal>

          {/* --------------------- Right: portrait + previews -------------------- */}
          <Reveal delay={0.15}>
            <TiltCard strength={5} className="relative mx-auto max-w-[560px] lg:mr-0">
              <div className="aspect-[4/4.6] overflow-hidden rounded-[32px] bg-accent-soft">
                <Image
                  src={hero.portrait.src}
                  alt={hero.portrait.alt}
                  width={900}
                  height={1035}
                  priority
                  sizes="(max-width: 1024px) 90vw, 560px"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Availability chip */}
              <p className="absolute left-5 top-5 inline-flex items-center gap-2.5 rounded-[var(--radius-pill)] bg-card px-4 py-2.5 text-xs font-semibold shadow-[0_8px_24px_rgba(14,14,14,0.08)] sm:text-sm">
                <span className="relative flex size-2.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
                  <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
                </span>
                {hero.availability}
              </p>

              {/* Floating, tilted previews of my work */}
              {hero.previews.map((img, i) => (
                <div
                  key={img.src}
                  className={`absolute overflow-hidden rounded-[18px] border-4 border-card bg-card shadow-[0_18px_40px_rgba(14,14,14,0.16)] ${previewPlacement[i]}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={450}
                    sizes="(max-width: 1024px) 40vw, 230px"
                    className="h-auto w-full"
                  />
                </div>
              ))}
            </TiltCard>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
