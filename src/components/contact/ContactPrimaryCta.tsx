import { contactPage } from "@/content/site";
import { Button, Container, Eyebrow } from "@/components/ui";
import { Mail } from "@/components/icons";
import { WordsReveal } from "@/components/TextReveal";
import Reveal from "@/components/Reveal";

/* Soft wavy line pattern drawn in the accent colour (solid strokes,
   no gradients). Purely decorative. */
function WavePattern() {
  const rows = Array.from({ length: 9 }, (_, i) => i);
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full text-accent opacity-[0.12]"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      stroke="currentColor"
      strokeWidth="14"
      strokeLinecap="round"
    >
      {rows.map((i) => {
        const y = 20 + i * 72;
        const s = i % 2 === 0 ? 1 : -1;
        return (
          <path
            key={i}
            d={`M-50 ${y} C 150 ${y - 60 * s}, 300 ${y + 70 * s}, 480 ${y} S 820 ${y - 70 * s}, 980 ${y} S 1180 ${y + 50 * s}, 1260 ${y}`}
          />
        );
      })}
    </svg>
  );
}

export default function ContactPrimaryCta() {
  const { cta } = contactPage;
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-card bg-accent-soft px-6 py-20 text-center sm:px-12 sm:py-28">
            <WavePattern />

            <div className="relative mx-auto flex max-w-3xl flex-col items-center">
              <Eyebrow icon={Mail}>{cta.eyebrow}</Eyebrow>

              <h2 className="mt-7 font-display text-[clamp(2.4rem,6.5vw,5.25rem)] font-bold leading-[0.98] tracking-[-0.045em]">
                <WordsReveal text={cta.heading} />
              </h2>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/80 sm:text-lg">
                {cta.sub}
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-3">
                <Button href={cta.primaryCta.href}>{cta.primaryCta.label}</Button>
                <Button href={cta.secondaryCta.href} variant="outline" arrow={false}>
                  {cta.secondaryCta.label}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
