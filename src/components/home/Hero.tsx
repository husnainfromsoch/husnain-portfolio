import { hero } from "@/content/site";
import { Button, Container, Eyebrow } from "@/components/ui";
import { Briefcase, Star } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { LinesReveal } from "@/components/TextReveal";
import HeroMotion from "@/components/home/HeroMotion";

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
            <HeroMotion previewPlacement={previewPlacement} />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
