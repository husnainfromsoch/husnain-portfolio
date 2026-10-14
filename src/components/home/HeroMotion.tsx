"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/content/site";
import TiltCard from "@/components/TiltCard";

/* Dashed ring that spins slowly behind the portrait. Pure SVG, solid
   stroke in the accent colour — no gradients. */
function SpinningRing() {
  return (
    <svg viewBox="0 0 200 200" className="h-[120%] w-[120%]" aria-hidden="true">
      <circle
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeDasharray="2 10"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HeroMotion({
  previewPlacement,
}: {
  previewPlacement: string[];
}) {
  const reduced = useReducedMotion();

  return (
    <div className="relative mx-auto max-w-[560px] lg:mr-0">
      {/* Soft glow behind everything — static, no animated blur (cheap) */}
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -z-10 size-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 opacity-70 blur-3xl"
      />

      {/* Slow-spinning dashed ring — the one continuous animation here */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 will-change-transform"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <SpinningRing />
      </motion.div>

      {/* Gentle continuous float on the whole portrait group */}
      <motion.div
        className="will-change-transform"
        animate={reduced ? undefined : { y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <TiltCard strength={5} className="relative">
          <div className="aspect-[4/4.6] overflow-hidden rounded-card bg-accent-soft">
            <Image
              src={hero.portrait.src}
              alt={hero.portrait.alt}
              width={1024}
              height={1024}
              priority
              quality={95}
              sizes="(max-width: 1024px) 90vw, 560px"
              className="h-full w-full origin-top scale-[1.24] object-cover object-top"
            />
          </div>

          {/* Availability chip */}
          <p className="absolute left-5 top-5 inline-flex items-center gap-2.5 rounded-full bg-card px-4 py-2.5 text-xs font-semibold shadow-[0_8px_24px_rgba(14,14,14,0.08)] sm:text-sm">
            <span className="relative flex size-2.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
              <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
            </span>
            {hero.availability}
          </p>

          {/* Floating, tilted previews of my work */}
          {hero.previews.map((img, i) => (
            <div
              key={img.src}
              className={`absolute overflow-hidden rounded-btn border-4 border-card bg-card shadow-[0_18px_40px_rgba(14,14,14,0.16)] transition-transform duration-500 hover:-translate-y-1.5 ${previewPlacement[i]}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={1024}
                height={768}
                sizes="(max-width: 1024px) 50vw, 300px"
                className="aspect-[4/3] h-auto w-full object-cover"
              />
            </div>
          ))}
        </TiltCard>
      </motion.div>
    </div>
  );
}
