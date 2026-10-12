import Image from "next/image";
import { about } from "@/content/site";
import { Button, Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal>
            <div className="overflow-hidden rounded-[var(--radius-card)] bg-ink">
              <Image
                src={about.image.src}
                alt={about.image.alt}
                width={900}
                height={1100}
                sizes="(max-width: 1024px) 100vw, 420px"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <Eyebrow>{about.eyebrow}</Eyebrow>

            <h2 className="mt-5 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.03] tracking-[-0.025em]">
              {about.heading}
            </h2>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
              {about.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="mt-10">
              <Button href="/about" variant="ink">
                More about me
              </Button>
            </div>

            {/* Stats */}
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-card)] bg-line sm:grid-cols-4">
              {about.stats.map((stat) => (
                <div key={stat.label} className="bg-paper px-5 py-7">
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                      {stat.value}
                    </span>
                    <span className="mt-2 block text-xs leading-snug text-muted">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
