import { FaLinkedinIn, FaRegEnvelope, FaWhatsapp } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { contactPage } from "@/content/site";
import { Container } from "@/components/ui";
import { ArrowUpRight } from "@/components/icons";
import Reveal from "@/components/Reveal";

const icons: Record<string, IconType> = {
  email: FaRegEnvelope,
  linkedin: FaLinkedinIn,
  whatsapp: FaWhatsapp,
};

export default function ContactCards() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="grid gap-5 sm:grid-cols-3">
          {contactPage.cards.map((card, i) => {
            const Icon = icons[card.icon];
            return (
              <Reveal key={card.label} delay={i * 0.08}>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group flex h-full flex-col rounded-card border border-line bg-card p-7 transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-ink"
                >
                  <span className="flex size-12 items-center justify-center rounded-small bg-accent text-on-accent">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>

                  <span className="mt-6 flex items-center justify-between">
                    <span className="font-display text-xl font-bold tracking-[-0.02em]">
                      {card.label}
                    </span>
                    <ArrowUpRight className="size-5 text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink" />
                  </span>

                  <span className="mt-2 break-words text-base font-semibold text-accent">
                    {card.value}
                  </span>
                  <span className="mt-3 text-sm leading-relaxed text-muted">
                    {card.note}
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
