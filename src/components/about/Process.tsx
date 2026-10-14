"use client";

import { motion, useReducedMotion } from "framer-motion";
import { aboutPage } from "@/content/site";
import { Container, SectionIntro } from "@/components/ui";
import { Grid } from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Process() {
  const { process } = aboutPage;
  const reduced = useReducedMotion();

  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <SectionIntro eyebrow={process.eyebrow} icon={Grid} heading={process.heading} sub={process.sub} />

        <motion.ol
          className="relative mx-auto mt-16 flex max-w-5xl flex-col sm:mt-20"
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.15 }}
          transition={{ staggerChildren: 0.12 }}
        >
          {/* Connecting line down the left side, desktop only */}
          <span
            aria-hidden="true"
            className="absolute left-[27px] top-3 hidden h-[calc(100%-2.5rem)] w-px bg-line sm:block"
          />

          {process.steps.map((step, i) => (
            <motion.li
              key={step.number}
              variants={
                reduced
                  ? undefined
                  : { hidden: { opacity: 0, y: 24 }, shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }
              }
              className="group relative flex gap-6 border-b border-line py-7 last:border-b-0 sm:gap-8 sm:py-8"
            >
              <span className="relative z-10 flex size-14 shrink-0 items-center justify-center rounded-full border border-line bg-card font-display text-base font-bold tracking-[-0.02em] transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
                {step.number}
              </span>

              <div className="pt-1.5">
                <h3 className="font-display text-xl font-bold tracking-[-0.02em] sm:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-ink/75 sm:text-base">
                  {step.description}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="ml-auto hidden self-start pt-2 font-display text-5xl font-bold text-ink/5 transition-colors duration-500 group-hover:text-accent/10 sm:block"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
            </motion.li>
          ))}
        </motion.ol>
      </Container>
    </section>
  );
}
