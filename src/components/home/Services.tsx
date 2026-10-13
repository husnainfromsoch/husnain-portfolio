"use client";

import { services, servicesSection } from "@/content/site";
import { Button, Container, Eyebrow, Heading } from "@/components/ui";
import { Grid, serviceIcons } from "@/components/icons";
import Reveal from "@/components/Reveal";
import FeatureCarousel from "@/components/ui/feature-carousel";

/* Intro row on top, then a carousel: service names roll on the left,
   each service's thumbnail card slides in on the right. */
export default function Services() {
  const items = services.map((s) => ({
    id: s.slug,
    number: s.number,
    label: s.title,
    description: s.short,
    href: `/services#${s.slug}`,
    icon: serviceIcons[s.icon as keyof typeof serviceIcons],
    image: s.thumbnail,
  }));

  return (
    <section className="border-b border-line py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div>
              <Eyebrow icon={Grid}>{servicesSection.eyebrow}</Eyebrow>
              <Heading className="mt-6 max-w-xl">{servicesSection.heading}</Heading>
            </div>
            <div>
              <p className="max-w-lg text-base text-ink/75 sm:text-lg">{servicesSection.sub}</p>
              <div className="mt-7">
                <Button href={servicesSection.cta.href}>{servicesSection.cta.label}</Button>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-14 sm:mt-16">
          <FeatureCarousel
            items={items}
            linkLabel={servicesSection.cardLink}
            pauseLabel={servicesSection.pauseLabel}
            playLabel={servicesSection.playLabel}
          />
        </Reveal>
      </Container>
    </section>
  );
}
