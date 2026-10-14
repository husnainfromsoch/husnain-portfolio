"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { aboutPage } from "@/content/site";
import { Container, Eyebrow, Heading } from "@/components/ui";
import { Briefcase } from "@/components/icons";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

export default function Story() {
  const { story } = aboutPage;
  const { leftTop, leftBottom, right } = story.gallery;

  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-24, 24]);

  return (
    <section className="overflow-x-clip border-b border-line py-20 sm:py-28">
      <Container>
        <div ref={sectionRef} className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <Reveal className="flex flex-col justify-center">
            <Eyebrow icon={Briefcase}>{story.eyebrow}</Eyebrow>
            <Heading className="mt-6 max-w-xl">{story.heading}</Heading>

            <div className="mt-7 flex flex-col gap-5">
              {story.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={`max-w-xl leading-relaxed ${
                    i === 0 ? "text-lg text-ink/90 sm:text-xl" : "text-base text-ink/75 sm:text-lg"
                  }`}
                >
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          {/* One dominant photo with two smaller prints layered over its
              corners, drifting gently as the section scrolls past — the
              same collage language as the home hero, so it reads as one
              consistent, premium visual system. */}
          <Reveal delay={0.1}>
            <motion.div
              style={reduced ? undefined : { y }}
              className="relative mx-auto mb-8 max-w-[420px] lg:mx-0 lg:ml-auto"
            >
              <TiltCard strength={4} className="relative">
                <div className="relative aspect-[4/5] overflow-hidden rounded-card bg-accent-soft shadow-[0_30px_60px_-20px_rgba(12,4,7,0.35)]">
                  <Image
                    src={right.src}
                    alt={right.alt}
                    fill
                    sizes="(min-width: 1024px) 38vw, 85vw"
                    className="object-cover"
                  />
                </div>

                {/* Bottom-left print: the wide photo */}
                <div className="absolute -left-4 bottom-10 w-[58%] overflow-hidden rounded-btn border-4 border-paper bg-card shadow-[0_18px_40px_rgba(12,4,7,0.22)] -rotate-6 sm:-left-12">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={leftBottom.src}
                      alt={leftBottom.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Top-right print: the square photo */}
                <div className="absolute -right-3 top-8 w-[42%] overflow-hidden rounded-btn border-4 border-paper bg-card shadow-[0_18px_40px_rgba(12,4,7,0.22)] rotate-6 sm:-right-10">
                  <div className="relative aspect-square">
                    <Image
                      src={leftTop.src}
                      alt={leftTop.alt}
                      fill
                      sizes="(min-width: 1024px) 16vw, 38vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </TiltCard>

              {/* Accent tag, premium finishing detail */}
              <span className="absolute -bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-paper shadow-[0_12px_28px_rgba(12,4,7,0.3)] sm:left-8 sm:translate-x-0">
                <span className="size-1.5 rounded-full bg-accent" />
                My story
              </span>
            </motion.div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
