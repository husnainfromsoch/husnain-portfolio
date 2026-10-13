import { testimonials, testimonialsSection } from "@/content/site";
import { Container, SectionIntro } from "@/components/ui";
import { Quote } from "@/components/icons";
import AccordionRow from "@/components/AccordionRow";
import Reveal from "@/components/Reveal";

/* Placeholder avatar colours — swap for client photos later if you like */
const avatarColours = ["bg-accent text-white", "bg-ink text-paper", "bg-accent-soft text-ink"];

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

        <Reveal delay={0.1}>
          <div className="mt-14 border-t border-line">
            {testimonials.map((t, i) => (
              <AccordionRow
                key={i}
                defaultOpen={i === 0}
                leading={
                  <span
                    aria-hidden="true"
                    className={`flex size-12 shrink-0 items-center justify-center rounded-full font-display text-lg font-bold sm:size-14 ${
                      avatarColours[i % avatarColours.length]
                    }`}
                  >
                    {t.name.replace(/[^A-Za-z]/g, "").charAt(0) || "•"}
                  </span>
                }
                title={t.name}
                subtitle={`${t.title} · ${t.country}`}
              >
                <figure className="pb-8 pl-16 pr-4 sm:pb-10 sm:pl-20 sm:pr-16">
                  <Quote className="size-7 text-accent" />
                  <blockquote className="mt-4 max-w-3xl font-display text-xl font-medium leading-snug tracking-[-0.025em] sm:text-[1.75rem]">
                    {t.quote}
                  </blockquote>
                </figure>
              </AccordionRow>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
