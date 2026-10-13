import Image from "next/image";
import { hero } from "@/content/site";
import { Button, Container, Eyebrow } from "@/components/ui";
import { Briefcase, Star } from "@/components/icons";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";
import { LinesReveal } from "@/components/TextReveal";

/* Placeholder avatar colours for the "happy clients" row.
   Swap for real client photos later if you like. */
const avatarColours = ["bg-ink", "bg-accent", "bg-muted", "bg-accent-soft"];

/* Where each small preview card floats over the portrait */
const previewPlacement = [
  "-left-6 bottom-8 w-[52%] rotate-[-7deg] sm:-left-14 lg:-left-24",
  "-right-4 top-10 w-[46%] rotate-[6deg] sm:-right-10",
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
              <LinesReveal
                lines={hero.headline.map((line, i) =>
                  i === lastLine && line.endsWith(hero.highlight) ? (
                    <>
                      {line.slice(0, -hero.highlight.length)}
                      <span className="text-accent">{hero.highlight}</span>
                    </>
                  ) : (
                    line
                  ),
                )}
              />
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
            <div className="mt-10 inline-flex items-center gap-4 rounded-btn border border-line bg-card/60 py-3 pl-3 pr-6">
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
              <div className="aspect-[4/4.6] overflow-hidden rounded-card bg-accent-soft">
                <Image
                  src={hero.portrait.src}
                  alt={hero.portrait.alt}
                  width={1024}
                  height={1024}
                  priority
                  quality={95}
                  sizes="(max-width: 1024px) 90vw, 560px"
                  /* Full photo with its own background, so it fills the card
                     and is cropped to fit. Zoomed in from the top so the
                     lettering on the podium sits below the bottom edge. */
                  className="h-full w-full origin-top scale-[1.24] object-cover object-top"
                />
              </div>

              {/* Availability chip */}
              <p className="absolute left-5 top-5 inline-flex items-center gap-2.5 rounded-full bg-card px-4 py-2.5 text-xs font-semibold shadow-[0_8px_24px_rgba(14,14,14,0.08)] sm:text-sm">
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
                  className={`absolute overflow-hidden rounded-btn border-4 border-card bg-card shadow-[0_18px_40px_rgba(14,14,14,0.16)] ${previewPlacement[i]}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1024}
                    height={768}
                    sizes="(max-width: 1024px) 50vw, 300px"
                    /* Kept at a fixed 4:3 shape so both preview cards match,
                       whatever size the photo itself is. */
                    className="aspect-[4/3] h-auto w-full object-cover"
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
