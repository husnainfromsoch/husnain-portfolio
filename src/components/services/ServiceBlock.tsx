"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui";
import { serviceIcons } from "@/components/icons";
import TiltCard from "@/components/TiltCard";
import Reveal from "@/components/Reveal";
import type { services as servicesType } from "@/content/site";

type Service = (typeof servicesType)[number];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServiceBlock({
  service,
  reversed,
}: {
  service: Service;
  reversed: boolean;
}) {
  const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
  const reduced = useReducedMotion();

  return (
    <section
      id={service.slug}
      className="group/block relative scroll-mt-[136px] overflow-hidden border-b border-line py-20 transition-colors duration-500 sm:py-28"
    >
      {/* Giant faint watermark number, sits behind everything */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-0 select-none font-display text-[12rem] font-bold leading-none tracking-[-0.05em] text-ink/[0.025] transition-colors duration-500 group-hover/block:text-accent/[0.06] sm:text-[18rem]"
      >
        {service.number}
      </span>

      <div className="relative mx-auto w-full max-w-[1280px] px-5 sm:px-8">
        <div
          className={`grid items-stretch gap-12 lg:grid-cols-2 lg:gap-16 ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          {/* Text column */}
          <Reveal>
            <div className="flex h-full flex-col">
              <span className="font-display text-sm font-semibold tracking-[0.08em] text-muted">
                {service.number}
              </span>

              <div className="mt-4 flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-full bg-accent text-on-accent transition-transform duration-500 group-hover/block:rotate-[12deg]">
                  <Icon className="size-5" />
                </span>
                <h2 className="font-display text-[clamp(1.75rem,3.4vw,2.5rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                  {service.title}
                </h2>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-soft px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-accent-text"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/80 sm:text-lg">
                {service.description}
              </p>

              <motion.ul
                className="mt-7 flex flex-col gap-3"
                initial="hidden"
                whileInView="shown"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.07 }}
              >
                {service.includes.map((item) => (
                  <motion.li
                    key={item}
                    variants={
                      reduced
                        ? undefined
                        : {
                            hidden: { opacity: 0, x: -12 },
                            shown: { opacity: 1, x: 0, transition: { duration: 0.5, ease } },
                          }
                    }
                    className="group/item flex items-start gap-3 text-[15px] leading-relaxed text-ink/80 sm:text-base"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-1.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-ink/[0.07] transition-colors duration-300 group-hover/item:bg-accent-soft"
                    >
                      <span className="size-1.5 rounded-full bg-accent transition-transform duration-300 group-hover/item:scale-150" />
                    </span>
                    <span className="transition-colors duration-300 group-hover/item:text-ink">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* "Best for" — premium pull-quote treatment, not a plain box */}
              <div className="relative mt-9 border-l-2 border-accent py-1 pl-6">
                <p className="font-display text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-accent-text">
                  Best for
                </p>
                <p className="mt-2 max-w-md font-display text-lg font-medium leading-snug tracking-[-0.015em] text-ink/90 sm:text-xl">
                  {service.forWho}
                </p>
              </div>

              <div className="mt-auto pt-8">
                <Button href="/contact">
                  Start a {service.title.toLowerCase()} project
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Image column — fills the full height of the text column */}
          <Reveal delay={0.1}>
            <TiltCard className="relative h-full min-h-[22rem] overflow-hidden rounded-card bg-accent-soft" strength={5}>
              <Image
                src={service.thumbnail.src}
                alt={service.thumbnail.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover transition-transform duration-700 ease-out group-hover/block:scale-[1.06]"
              />
              <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover/block:bg-ink/[0.03]" />
            </TiltCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
