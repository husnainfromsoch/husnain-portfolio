import { testimonials, testimonialsSection } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Testimonials() {
  return (
    <section className="border-y border-line bg-card py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>{testimonialsSection.eyebrow}</Eyebrow>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
              {testimonialsSection.heading}
            </h2>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={i} delay={i * 0.08} className="h-full">
              <figure className="flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-paper p-8">
                <span
                  aria-hidden="true"
                  className="font-display text-5xl font-extrabold leading-none text-accent"
                >
                  &ldquo;
                </span>

                <blockquote className="mt-5 flex-1 text-base leading-relaxed sm:text-lg">
                  {t.quote}
                </blockquote>

                <figcaption className="mt-8 border-t border-line pt-6">
                  <span className="block font-display font-bold">{t.name}</span>
                  <span className="mt-1 block text-sm text-muted">
                    {t.title} · {t.country}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
