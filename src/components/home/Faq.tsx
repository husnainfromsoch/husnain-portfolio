import { faqs, faqSection } from "@/content/site";
import { Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function Faq() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow>{faqSection.eyebrow}</Eyebrow>
            </div>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
              {faqSection.heading}
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="mx-auto mt-14 max-w-4xl border-t border-line">
            {faqs.map((faq, i) => (
              <li key={faq.q} className="border-b border-line">
                {/* Native accordion — works even with JavaScript off */}
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-start gap-5 py-6 sm:gap-7">
                    <span className="mt-1 shrink-0 font-display text-sm font-bold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 font-display text-lg font-bold leading-snug tracking-tight sm:text-xl">
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-7 pl-10 pr-10 text-sm leading-relaxed text-muted sm:pl-12 sm:text-base">
                    {faq.a}
                  </p>
                </details>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
