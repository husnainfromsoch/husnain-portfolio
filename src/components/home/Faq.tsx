import { faqs, faqSection } from "@/content/site";
import { Container, SectionIntro } from "@/components/ui";
import AccordionRow from "@/components/AccordionRow";
import Reveal from "@/components/Reveal";

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-24 sm:py-32">
      <Container>
        <SectionIntro eyebrow={faqSection.eyebrow} heading={faqSection.heading} />

        <Reveal delay={0.1}>
          <div className="mx-auto mt-14 max-w-5xl border-t border-line">
            {faqs.map((faq, i) => (
              <AccordionRow
                key={faq.q}
                defaultOpen={i === 0}
                leading={
                  <span className="w-9 shrink-0 font-display text-sm font-semibold tracking-[0.08em] text-muted sm:w-11">
                    {String(i + 1).padStart(2, "0")}/
                  </span>
                }
                title={faq.q}
              >
                <p className="max-w-3xl pb-8 pl-[3.25rem] pr-4 text-base leading-relaxed text-ink/75 sm:pl-[4.25rem] sm:pr-16 sm:text-lg">
                  {faq.a}
                </p>
              </AccordionRow>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
