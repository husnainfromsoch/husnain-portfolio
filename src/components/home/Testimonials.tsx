import { testimonials, testimonialsSection } from "@/content/site";
import { Container, SectionIntro } from "@/components/ui";
import { Quote } from "@/components/icons";
import Reveal from "@/components/Reveal";
import VoiceTestimonial from "@/components/ui/voice-testimonial";

export default function Testimonials() {
  return (
    <section className="border-b border-line py-24 sm:py-32">
      <Container>
        <SectionIntro
          eyebrow={testimonialsSection.eyebrow}
          icon={Quote}
          heading={testimonialsSection.heading}
          sub={testimonialsSection.sub}
        />

        <Reveal delay={0.1} className="mt-14">
          <VoiceTestimonial testimonials={testimonials} />
        </Reveal>
      </Container>
    </section>
  );
}
