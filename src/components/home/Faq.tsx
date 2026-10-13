import { faqs, faqSection } from "@/content/site";
import { Container, SectionIntro } from "@/components/ui";
import AccordionRow from "@/components/AccordionRow";
import Reveal from "@/components/Reveal";

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <SectionIntro eyebrow={faqSection.eyebrow} heading={faqSection.heading} />

        <Reveal delay={0.1}>
          {/* Two columns on desktop so seven questions do not run down the
              whole screen. Stacks to one column under 1024px. */}
          <div className="mx-auto mt-10 grid max-w-5xl gap-x-12 lg:grid-cols-2">
            {faqs.map((faq, i) => (
              <AccordionRow
                key={faq.q}
                compact
                defaultOpen={i === 0}
                /* top hairline on the first row only: item 1 on mobile,
                   items 1 and 2 once the list splits into two columns */
                className={
                  i === 0
                    ? "border-t border-line"
                    : i === 1
                      ? "lg:border-t lg:border-line"
                      : ""
                }
                leading={
                  <span className="w-8 shrink-0 font-display text-sm font-semibold tracking-[0.08em] text-muted sm:w-9">
                    {String(i + 1).padStart(2, "0")}/
                  </span>
                }
                title={faq.q}
              >
                <p className="pb-6 pl-[3rem] pr-4 text-[15px] leading-relaxed text-ink/75 sm:pl-[3.5rem] sm:pr-10">
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
