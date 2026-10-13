import Link from "next/link";
import { services, servicesSection } from "@/content/site";
import { Button, Container, Eyebrow, Heading } from "@/components/ui";
import { ArrowRight, Grid, serviceIcons } from "@/components/icons";
import Reveal from "@/components/Reveal";

/* Layout follows the reference: a short intro column on the left that
   stays put while the service cards scroll past on the right. */
export default function Services() {
  return (
    <section className="border-b border-line py-24 sm:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-12">
          {/* Sticky wrapper sits outside the animation so it can stick */}
          <div className="self-start lg:sticky lg:top-32">
            <Reveal>
              <Eyebrow icon={Grid}>{servicesSection.eyebrow}</Eyebrow>
              <Heading className="mt-6 max-w-lg">{servicesSection.heading}</Heading>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/75 sm:text-lg">
                {servicesSection.sub}
              </p>
              <div className="mt-9">
                <Button href={servicesSection.cta.href}>
                  {servicesSection.cta.label}
                </Button>
              </div>
            </Reveal>
          </div>

          <ul className="space-y-6">
            {services.map((service, i) => {
              const Icon = serviceIcons[service.icon];
              return (
                <Reveal as="li" key={service.slug} delay={i * 0.06}>
                  <Link
                    href={`/services#${service.slug}`}
                    className="group block rounded-[var(--radius-card)] border border-line bg-paper p-7 transition-[transform,border-color,background-color,box-shadow] duration-300 hover:-translate-y-1.5 hover:border-ink/20 hover:bg-card hover:shadow-[0_20px_40px_rgba(14,14,14,0.06)] sm:p-9"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex size-14 items-center justify-center rounded-full bg-accent text-white transition-transform duration-300 group-hover:rotate-[-8deg]">
                        <Icon className="size-6" />
                      </span>
                      <span className="font-display text-sm font-semibold text-muted">
                        {service.number}
                      </span>
                    </div>

                    <h3 className="mt-7 font-display text-2xl font-bold tracking-[-0.03em] sm:text-[1.9rem]">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-muted">
                      {service.short}
                    </p>

                    <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                      <ul className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <li
                            key={tag}
                            className="rounded-[var(--radius-pill)] border border-line px-3 py-1 text-xs font-medium text-ink/75"
                          >
                            {tag}
                          </li>
                        ))}
                      </ul>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                        {servicesSection.cardLink}
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
