import type { Metadata } from "next";
import { services, servicesSection, site } from "@/content/site";
import { Button, Container, Eyebrow, Heading } from "@/components/ui";
import { Grid } from "@/components/icons";
import Reveal from "@/components/Reveal";
import Faq from "@/components/home/Faq";
import ServiceJumpNav from "@/components/services/ServiceJumpNav";
import ServiceBlock from "@/components/services/ServiceBlock";

export const metadata: Metadata = {
  title: `Services — ${site.brandFull}`,
  description: servicesSection.sub,
};

export default function ServicesPage() {
  return (
    <>
      {/* ----------------------------- PAGE HERO ----------------------------- */}
      <section className="pb-10 pt-28 sm:pb-14 sm:pt-36">
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
        </Container>
      </section>

      {/* Sticky filter bar: jump to a service, highlights the one in view */}
      <Container>
        <ServiceJumpNav services={services} />
      </Container>

      {/* --------------------------- SERVICE BLOCKS --------------------------- */}
      {services.map((service, i) => (
        <ServiceBlock key={service.slug} service={service} reversed={i % 2 === 1} />
      ))}

      {/* --------------------------- PRICING NUDGE --------------------------- */}
      <section className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <div className="group relative flex flex-col items-start justify-between gap-6 overflow-hidden rounded-card bg-ink px-6 py-10 text-paper transition-transform duration-500 hover:-translate-y-1 sm:flex-row sm:items-center sm:px-10 sm:py-12">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-accent/20 blur-2xl transition-transform duration-700 group-hover:scale-125"
              />
              <div className="relative">
                <h2 className="font-display text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                  Not sure which one you need?
                </h2>
                <p className="mt-2 max-w-md text-sm text-paper/75 sm:text-base">
                  Book a free call and I'll tell you honestly what would help.
                </p>
              </div>
              <Button href="/contact" variant="accent" className="relative shrink-0">
                Book a free call
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      <Faq />
    </>
  );
}
