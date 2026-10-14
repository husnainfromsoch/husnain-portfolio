"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { aboutPage } from "@/content/site";
import { Container, Eyebrow, Heading } from "@/components/ui";
import { Briefcase } from "@/components/icons";
import Reveal from "@/components/Reveal";

/** One photo in the gallery, drifting vertically at its own speed as
    the section scrolls past — a classic editorial "gallery" parallax. */
function GalleryImage({
  src,
  alt,
  range,
  className,
  progress,
}: {
  src: string;
  alt: string;
  range: [number, number];
  className: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const reduced = useReducedMotion();
  const y = useTransform(progress, [0, 1], range);

  return (
    <motion.div
      style={reduced ? undefined : { y }}
      className={`group relative overflow-hidden rounded-card bg-accent-soft ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1024px) 28vw, 45vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
      />
    </motion.div>
  );
}

export default function Story() {
  const { story } = aboutPage;
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const { leftTop, leftBottom, right } = story.gallery;

  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <div ref={sectionRef} className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
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

          {/* Offset two-column photo gallery. Each box matches its
              photo's own aspect ratio, so nothing gets cropped away. */}
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="flex flex-col gap-4 sm:gap-5">
                <GalleryImage
                  src={leftTop.src}
                  alt={leftTop.alt}
                  range={[15, -20]}
                  className="aspect-square"
                  progress={scrollYProgress}
                />
                <GalleryImage
                  src={leftBottom.src}
                  alt={leftBottom.alt}
                  range={[-10, 15]}
                  className="aspect-[16/9]"
                  progress={scrollYProgress}
                />
              </div>
              <div className="flex flex-col gap-4 pt-10 sm:gap-5 sm:pt-16">
                <GalleryImage
                  src={right.src}
                  alt={right.alt}
                  range={[-15, 20]}
                  className="aspect-square"
                  progress={scrollYProgress}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
