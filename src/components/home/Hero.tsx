import Image from "next/image";
import { hero, site } from "@/content/site";
import { Button, Container } from "@/components/ui";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";

/* Tilted collage of three images, each nudged a different way */
const collage = [
  "mt-0 rotate-[-5deg] sm:mt-10",
  "mt-6 rotate-[3deg] sm:mt-0",
  "mt-0 rotate-[6deg] sm:mt-16",
];

export default function Hero() {
  return (
    <section className="overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* ---------------------------- Left: words --------------------------- */}
          <Reveal>
            <p className="inline-flex items-center gap-2.5 rounded-[var(--radius-pill)] border border-line bg-card px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em]">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-accent" />
              </span>
              {hero.badge}
            </p>

            <p className="mt-8 font-display text-lg font-semibold text-muted">
              {hero.greeting}
            </p>

            <h1 className="mt-2 font-display text-[clamp(2.6rem,8vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.03em]">
              {hero.headlineTop}
              <br />
              <span className="text-accent">{hero.headlineBottom}</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {hero.intro}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="outline">
                {hero.secondaryCta.label}
              </Button>
            </div>

            {/* Social proof row, like the reference */}
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2.5" aria-hidden="true">
                {["bg-ink", "bg-accent", "bg-muted", "bg-line"].map((c) => (
                  <span
                    key={c}
                    className={`size-9 rounded-full border-2 border-paper ${c}`}
                  />
                ))}
              </div>
              <p className="text-sm leading-snug">
                <span className="font-display font-extrabold">
                  {hero.socialProof.value}
                </span>{" "}
                <span className="text-muted">{hero.socialProof.label}</span>
                <span className="mt-0.5 block text-xs text-muted">
                  ★★★★★ {hero.socialProof.detail}
                </span>
              </p>
            </div>

            <p className="mt-8 text-sm text-muted">{site.location}</p>
          </Reveal>

          {/* --------------------------- Right: images -------------------------- */}
          <Reveal delay={0.15}>
            <div className="grid grid-cols-3 gap-3 sm:gap-5">
              {hero.images.map((img, i) => (
                <TiltCard
                  key={img.src}
                  className={`overflow-hidden rounded-[var(--radius-card)] bg-ink ${collage[i]}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={800}
                    height={1000}
                    priority={i === 0}
                    sizes="(max-width: 1024px) 32vw, 180px"
                    className="h-full w-full object-cover"
                  />
                </TiltCard>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
