import { contactCta, site } from "@/content/site";
import { Button, Container } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function ContactCta() {
  return (
    <section className="bg-accent py-24 text-white sm:py-32">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="flex items-center justify-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              <span className="size-1.5 rounded-full bg-white" aria-hidden="true" />
              {contactCta.eyebrow}
            </p>

            <h2 className="mt-6 font-display text-[clamp(2.4rem,6.5vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.03em]">
              {contactCta.heading}
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
              {contactCta.sub}
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Button href={contactCta.primaryCta.href} variant="ink">
                {contactCta.primaryCta.label}
              </Button>
              <Button href={contactCta.secondaryCta.href} variant="paper">
                {contactCta.secondaryCta.label}
              </Button>
            </div>

            <p className="mt-10 text-sm text-white/70">{site.email}</p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
