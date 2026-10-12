import Link from "next/link";
import { services, servicesSection } from "@/content/site";
import { Button, Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

/* Layout follows the reference: a short intro column on the left that
   stays put, and the services stacked as rows on the right. */
export default function Services() {
  return (
    <section className="bg-ink py-20 text-paper sm:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="lg:sticky lg:top-28">
              <Eyebrow tone="light">{servicesSection.eyebrow}</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
                {servicesSection.heading}
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-paper/60">
                {servicesSection.sub}
              </p>
              <div className="mt-9">
                <Button href="/services">All services</Button>
              </div>
            </div>
          </Reveal>

          <ul className="lg:mt-2">
            {services.map((service, i) => (
              <Reveal as="li" key={service.slug} delay={i * 0.08}>
                <Link
                  href="/services"
                  className="group flex gap-6 border-b border-paper/15 py-9 first:border-t first:border-paper/15 sm:gap-8"
                >
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-[var(--radius-pill)] bg-accent font-display text-sm font-extrabold text-white sm:size-14">
                    {service.number}
                  </span>

                  <div className="flex-1">
                    <h3 className="font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-paper/60 sm:text-base">
                      {service.short}
                    </p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="mt-1 shrink-0 self-start text-xl text-accent transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
