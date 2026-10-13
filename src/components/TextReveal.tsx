"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/* Each word/line sits in a clipping "window" and slides up into it.
   The small bottom padding stops letters like g, y, p being cut off. */
const mask = "inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom";

/** Words slide up one after another when the text scrolls into view. */
export function WordsReveal({
  text,
  delay = 0,
  stagger = 0.06,
}: {
  text: string;
  delay?: number;
  stagger?: number;
}) {
  const reduced = useReducedMotion();
  if (reduced) return <>{text}</>;

  const words = text.split(" ");

  return (
    <>
      <span className="sr-only">{text}</span>
      <motion.span
        aria-hidden="true"
        initial="hidden"
        whileInView="shown"
        viewport={{ once: true, amount: 0.6 }}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
      >
        {words.map((word, i) => (
          <span key={`${word}-${i}`} className={mask}>
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "105%" },
                shown: { y: "0%", transition: { duration: 0.8, ease } },
              }}
            >
              {word}
            </motion.span>
            {i < words.length - 1 && " "}
          </span>
        ))}
      </motion.span>
    </>
  );
}

/** Whole lines slide up one after another as soon as the page loads.
    Used for the big hero headline. */
export function LinesReveal({
  lines,
  delay = 0.1,
  stagger = 0.12,
}: {
  lines: ReactNode[];
  delay?: number;
  stagger?: number;
}) {
  const reduced = useReducedMotion();

  return (
    <>
      {lines.map((line, i) => (
        <span key={i} className={`${mask} block`}>
          {reduced ? (
            <span className="block">{line}</span>
          ) : (
            <motion.span
              className="block"
              initial={{ y: "105%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, delay: delay + i * stagger, ease }}
            >
              {line}
            </motion.span>
          )}
        </span>
      ))}
    </>
  );
}
