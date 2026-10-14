"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

/** Splits "70+" into { digits: 70, prefix: "", suffix: "+" } so only the
    number itself counts up, with any prefix/suffix kept static. */
function splitValue(value: string) {
  const match = value.match(/^([^\d]*)(\d+)([^\d]*)$/);
  if (!match) return { prefix: "", digits: null, suffix: value };
  const [, prefix, digits, suffix] = match;
  return { prefix, digits: Number(digits), suffix };
}

/** Counts up from 0 to the target number the moment it scrolls into
    view — no hover or click needed, it just plays. */
export default function CountUp({ value }: { value: string }) {
  const { prefix, digits, suffix } = splitValue(value);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(reduced || digits === null ? digits ?? 0 : 0);

  useEffect(() => {
    if (!inView || digits === null || reduced) return;
    const controls = animate(0, digits, {
      duration: 1.4,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, digits, reduced]);

  if (digits === null) return <span ref={ref}>{suffix}</span>;

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
