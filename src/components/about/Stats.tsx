"use client";

import { motion, useReducedMotion } from "framer-motion";
import { aboutPage } from "@/content/site";
import { Container, SectionIntro } from "@/components/ui";
import { Star } from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Stats() {
  const { stats } = aboutPage;
  const reduced = useReducedMotion();

  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionIntro eyebrow={stats.eyebrow} icon={Star} heading={stats.heading} />

        <motion.dl
          className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-12 sm:mt-16 sm:grid-cols-4"
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {stats.items.map((stat) => (
            <motion.div
              key={stat.label}
              variants={
                reduced
                  ? undefined
                  : {
                      hidden: { opacity: 0, y: 20, scale: 0.92 },
                      shown: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease } },
                    }
              }
              className="group text-center"
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-display text-[clamp(2.1rem,4.4vw,3.5rem)] font-bold leading-none tracking-[-0.04em] transition-colors duration-300 group-hover:text-accent-text">
                  {stat.value}
                </span>
                <span className="mt-3 block text-sm leading-snug text-muted sm:text-base">
                  {stat.label}
                </span>
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
