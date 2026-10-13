import { about } from "@/content/site";
import { Button, Container, Eyebrow } from "@/components/ui";
import { User } from "@/components/icons";
import Reveal from "@/components/Reveal";
import ScrollRevealText from "@/components/ScrollRevealText";
import AutoplayVideo from "@/components/AutoplayVideo";

export default function AboutPreview() {
  return (
    <section className="border-b border-line py-24 sm:py-36">
      <Container>
        <Reveal>
          <div className="flex justify-center">
            <Eyebrow icon={User}>{about.eyebrow}</Eyebrow>
          </div>
        </Reveal>

        <ScrollRevealText
          text={about.statement}
          className="mx-auto mt-8 max-w-5xl text-center font-display text-[clamp(1.85rem,4.2vw,3.4rem)] font-bold leading-[1.08] tracking-[-0.04em]"
        />

        <div className="mt-14 grid gap-10 sm:mt-20 lg:grid-cols-[1.05fr_1fr] lg:items-start lg:gap-14">
          <Reveal>
            <div className="aspect-[3/2] overflow-hidden rounded-[32px] bg-ink">
              <AutoplayVideo
                src={about.video.src}
                poster={about.video.poster}
                label={about.video.label}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:pt-2">
            <p className="text-lg leading-relaxed text-ink/80">{about.body}</p>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd>
                    <span className="block font-display text-[clamp(2rem,4vw,3.25rem)] font-bold leading-none tracking-[-0.04em]">
                      {stat.value}
                    </span>
                    <span className="mt-3 block text-sm leading-snug text-muted sm:text-base">
                      {stat.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12">
              <Button href={about.cta.href}>{about.cta.label}</Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
