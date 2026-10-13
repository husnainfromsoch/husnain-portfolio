"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState, type ComponentType, type SVGProps } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowRight, Pause, Play } from "@/components/icons";

/* Adapted from the 21st.dev "feature carousel":
   - colours come from the site tokens (no hard-coded blue)
   - gradients removed (site rule) — solid panels instead
   - content is passed in from src/content/site.ts
   - pause button + keyboard support + reduced-motion support added */

export type CarouselItem = {
  id: string;
  number: string;
  label: string;
  description: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  image: { src: string; alt: string };
};

type Props = {
  items: CarouselItem[];
  linkLabel: string;
  pauseLabel: string;
  playLabel: string;
  /** milliseconds between slides */
  interval?: number;
};

const ITEM_HEIGHT = 72;

const wrap = (min: number, max: number, v: number) => {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
};

export function FeatureCarousel({
  items,
  linkLabel,
  pauseLabel,
  playLabel,
  interval = 4000,
}: Props) {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  const len = items.length;
  const current = ((step % len) + len) % len;
  const paused = hovered || userPaused || !!reduced;

  const next = useCallback(() => setStep((s) => s + 1), []);

  /* Jump to any chip, moving the shortest way round */
  const goTo = (index: number) => {
    let diff = index - current;
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;
    setStep((s) => s + diff);
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, interval);
    return () => clearInterval(id);
  }, [next, paused, interval]);

  const status = (index: number) => {
    let diff = index - current;
    if (diff > len / 2) diff -= len;
    if (diff < -len / 2) diff += len;
    if (diff === 0) return "active";
    if (diff === -1) return "prev";
    if (diff === 1) return "next";
    return "hidden";
  };

  const spring = reduced ? { duration: 0 } : undefined;

  return (
    <div
      className="relative flex min-h-[600px] flex-col overflow-hidden rounded-card border border-line lg:aspect-[16/9] lg:flex-row"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setHovered(true)}
      onBlurCapture={() => setHovered(false)}
    >
      {/* ---------------------- Left: rolling list of chips ---------------------- */}
      <div className="relative z-30 flex min-h-[470px] w-full flex-col justify-center overflow-hidden bg-accent px-5 sm:min-h-[500px] sm:px-12 lg:h-full lg:w-[42%] lg:pl-14">
        <div
          role="tablist"
          aria-label="Services"
          className="relative flex h-full w-full items-center justify-center lg:justify-start"
          onKeyDown={(e) => {
            if (e.key === "ArrowDown" || e.key === "ArrowRight") {
              e.preventDefault();
              next();
            }
            if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
              e.preventDefault();
              setStep((s) => s - 1);
            }
          }}
        >
          {items.map((item, index) => {
            const active = index === current;
            const distance = wrap(-(len / 2), len / 2, index - current);
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                style={{ height: ITEM_HEIGHT }}
                animate={{
                  y: distance * ITEM_HEIGHT,
                  opacity: 1 - Math.abs(distance) * 0.3,
                }}
                transition={spring ?? { type: "spring", stiffness: 90, damping: 22, mass: 1 }}
                className="absolute flex w-fit items-center"
              >
                <button
                  type="button"
                  role="tab"
                  aria-selected={active}
                  aria-controls={`service-panel-${item.id}`}
                  tabIndex={active ? 0 : -1}
                  onClick={() => goTo(index)}
                  className={cn(
                    "flex items-center gap-3 rounded-full border px-5 py-3 text-left transition-colors duration-500 sm:gap-4 sm:px-8 sm:py-4",
                    active
                      ? "border-ink bg-ink text-paper"
                      : "border-ink/30 bg-transparent text-ink hover:border-ink",
                  )}
                >
                  <Icon className="size-5 shrink-0" />
                  <span className="whitespace-nowrap text-xs font-semibold uppercase tracking-[0.08em] sm:text-sm">
                    {item.label}
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Pause / play — required for auto-moving content (WCAG 2.2.2) */}
        {!reduced && (
          <button
            type="button"
            onClick={() => setUserPaused((p) => !p)}
            aria-label={userPaused ? playLabel : pauseLabel}
            className="absolute bottom-5 left-5 z-40 flex size-11 items-center justify-center rounded-full border border-ink/30 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper sm:left-12 lg:left-14"
          >
            {userPaused ? <Play className="size-4" /> : <Pause className="size-4" />}
          </button>
        )}
      </div>

      {/* --------------------------- Right: card stack --------------------------- */}
      <div className="relative flex min-h-[560px] flex-1 items-center justify-center overflow-hidden bg-black px-5 py-14 sm:min-h-[620px] sm:px-12 lg:h-full lg:min-h-0 lg:py-12">
        <div className="relative aspect-[4/5] w-full max-w-[420px]">
          {items.map((item, index) => {
            const s = status(index);
            const active = s === "active";
            const side = s === "prev" || s === "next";

            return (
              <motion.div
                key={item.id}
                id={`service-panel-${item.id}`}
                role="tabpanel"
                aria-hidden={!active}
                initial={false}
                animate={{
                  x: active ? 0 : s === "prev" ? -110 : s === "next" ? 110 : 0,
                  scale: active ? 1 : side ? 0.85 : 0.7,
                  opacity: active ? 1 : side ? 0.35 : 0,
                  rotate: s === "prev" ? -4 : s === "next" ? 4 : 0,
                  zIndex: active ? 20 : side ? 10 : 0,
                }}
                transition={spring ?? { type: "spring", stiffness: 260, damping: 25, mass: 0.8 }}
                className={cn(
                  "absolute inset-0 flex origin-center flex-col overflow-hidden rounded-card border-4 border-paper bg-card sm:border-8",
                  !active && "pointer-events-none",
                )}
              >
                <div className="relative aspect-[4/3] shrink-0 overflow-hidden">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="420px"
                    className={cn(
                      "object-cover transition-[filter] duration-700",
                      !active && "grayscale",
                    )}
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-card px-3 py-1 text-xs font-semibold tabular-nums">
                    {item.number} / {String(len).padStart(2, "0")}
                  </span>
                </div>

                <AnimatePresence>
                  {active && (
                    <motion.div
                      initial={reduced ? false : { opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="flex flex-1 flex-col p-5 sm:p-6"
                    >
                      <p className="font-display text-xl font-bold tracking-[-0.03em] sm:text-2xl">
                        {item.label}
                      </p>
                      <p className="mt-2 line-clamp-3 text-sm text-muted sm:text-base">
                        {item.description}
                      </p>
                      <Link
                        href={item.href}
                        tabIndex={active ? 0 : -1}
                        className="group mt-auto inline-flex w-fit items-center gap-1.5 pt-3 text-sm font-semibold text-accent-text"
                      >
                        {linkLabel}
                        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
