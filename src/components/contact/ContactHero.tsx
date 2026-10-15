import { contactPage } from "@/content/site";
import { Container, Heading, Eyebrow } from "@/components/ui";
import { Mail } from "@/components/icons";
import Reveal from "@/components/Reveal";

export default function ContactHero() {
  return (
    <section className="pt-36 pb-12 sm:pt-44 sm:pb-16">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow icon={Mail}>{contactPage.eyebrow}</Eyebrow>
            <Heading as="h1" className="mt-6">
              {contactPage.heading}
            </Heading>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {contactPage.intro}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
