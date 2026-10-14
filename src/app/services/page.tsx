import Image from "next/image";
import type { Metadata } from "next";
import { services, servicesSection, site } from "@/content/site";
import { Button, Container, Eyebrow, Heading } from "@/components/ui";
import { Grid, serviceIcons } from "@/components/icons";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import ContactCta from "@/components/home/ContactCta";
import Faq from "@/components/home/Faq";

export const metadata: Metadata = {
  title: `Services — ${site.brandFull}`,
  description: servicesSection.sub,
};

export default function ServicesPage() {
  return (
    <>
      {/* ----------------------------- PAGE HERO ----------------------------- */}
      <section className="border-b border-line pb-16 pt-28 sm:pb-20 sm:pt-36">
        <Container>
          <Reveal>
            <Eyebrow icon={Grid}>{servicesSection.eyebrow}</Eyebrow>
            <Heading as="h1" className="mt-6 max-w-3xl">
              {servicesSection.heading}
            </Heading>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
              {servicesSection.sub}
            </p>
          </Reveal>

          {/* Jump nav: quick links down to each service block */}
          <Reveal delay={0.1} className="mt-10">
            <nav
              aria-label="Jump to a service"
              className="flex flex-wrap gap-2.5"
            >
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="rounded-full border border-line bg-card px-4 py-2 text-sm font-semibold text-ink/80 transition-colors duration-300 hover:border-ink hover:text-ink"
                >
                  {s.title}
                </a>
              ))}
            </nav>
          </Reveal>
        </Container>
      </section>

      {/* --------------------------- SERVICE BLOCKS --------------------------- */}
      {services.map((service, i) => {
        const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
        const reversed = i % 2 === 1;

        return (
          <section
            key={service.slug}
            id={service.slug}
            className="scroll-mt-24 border-b border-line py-20 sm:py-28"
          >
            <Container>
              <div
                className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${
                  reversed ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Text column */}
                <Reveal>
                  <span className="font-display text-sm font-semibold tracking-[0.08em] text-muted">
                    {service.number}
                  </span>

                  <div className="mt-4 flex items-center gap-3">
                    <span className="flex size-10 items-center justify-center rounded-full bg-accent text-on-accent">
                      <Icon className="size-5" />
                    </span>
                    <h2 className="font-display text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                      {service.title}
                    </h2>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-accent-text"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/80 sm:text-lg">
                    {service.description}
                  </p>

                  <ul className="mt-7 flex flex-col gap-3">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/80 sm:text-base">
                        <span
                          aria-hidden="true"
                          className="mt-1.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-ink/[0.07]"
                        >
                          <span className="size-1.5 rounded-full bg-accent" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 rounded-card border border-line bg-card px-5 py-4">
                    <p className="text-sm leading-relaxed text-ink/70">
                      <span className="font-semibold text-ink">Best for: </span>
                      {service.forWho}
                    </p>
                  </div>

                  <div className="mt-8">
                    <Button href="/contact">
                      Start a {service.title.toLowerCase()} project
                    </Button>
                  </div>
                </Reveal>

                {/* Image column */}
                <Reveal delay={0.1}>
                  <TiltCard
                    className="relative aspect-[4/3] overflow-hidden rounded-card bg-accent-soft"
                    strength={5}
                  >
                    <Image
                      src={service.thumbnail.src}
                      alt={service.thumbnail.alt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </TiltCard>
                </Reveal>
              </div>
            </Container>
          </section>
        );
      })}

      {/* --------------------------- PRICING NUDGE --------------------------- */}
      <section className="border-b border-line py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-card bg-ink px-6 py-10 text-paper sm:flex-row sm:items-center sm:px-10 sm:py-12">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                  Wondering what it costs?
                </h2>
                <p className="mt-2 max-w-md text-sm text-paper/75 sm:text-base">
                  Starting prices for every service, laid out clearly, no surprises.
                </p>
              </div>
              <Button href="/pricing" variant="accent" className="shrink-0">
                See pricing
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <Faq />
      <ContactCta />
    </>
  );
}
