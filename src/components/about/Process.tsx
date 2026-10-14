"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import { aboutPage } from "@/content/site";
import { Container, SectionIntro } from "@/components/ui";
import { Grid } from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Process() {
  const { process } = aboutPage;
  const reduced = useReducedMotion();
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.8", "end 0.6"],
  });

  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <SectionIntro eyebrow={process.eyebrow} icon={Grid} heading={process.heading} sub={process.sub} />

        <motion.ol
          ref={listRef}
          className="relative mx-auto mt-16 flex max-w-3xl flex-col gap-5 sm:mt-20"
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {/* Track + animated fill that draws down as you scroll past the list */}
          <span
            aria-hidden="true"
            className="absolute left-[27px] top-3 hidden h-[calc(100%-3.5rem)] w-px bg-line sm:block"
          />
          {!reduced && (
            <motion.span
              aria-hidden="true"
              style={{ scaleY: scrollYProgress }}
              className="absolute left-[27px] top-3 hidden h-[calc(100%-3.5rem)] w-px origin-top bg-accent sm:block"
            />
          )}

          {process.steps.map((step) => (
            <motion.li
              key={step.number}
              variants={
                reduced
                  ? undefined
                  : { hidden: { opacity: 0, y: 24 }, shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }
              }
              className="group relative flex gap-6 rounded-card border border-line bg-card px-5 py-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_18px_40px_rgba(12,4,7,0.08)] sm:gap-8 sm:px-7 sm:py-7"
            >
              <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-line bg-paper font-display text-base font-bold tracking-[-0.02em] transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
                {step.number}
              </span>

              <div className="pt-1.5">
                <h3 className="font-display text-xl font-bold tracking-[-0.02em] transition-colors duration-300 group-hover:text-accent-text sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink/75 sm:text-base">
                  {step.description}
                </p>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
