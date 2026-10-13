"use client";

import { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "framer-motion";

/**
 * The big footer headline. When the mouse moves over it, a soft accent-coloured
 * light follows the cursor across the letters. Mouse position is tracked with
 * motion values (not React state) so it stays smooth and never re-renders.
 * On touch screens and for people who prefer reduced motion it is plain text.
 */
export default function FooterHeadline({ text }: { text: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const reduced = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(-500);
  const y = useMotionValue(-500);

  const spotlight = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, var(--accent) 0%, var(--accent) 22%, transparent 72%)`;

  const headingClass =
    "max-w-[16ch] font-display text-[clamp(1.95rem,4.6vw,3.6rem)] font-bold leading-[1.03] tracking-[-0.045em]";

  if (reduced) {
    return <h2 className={headingClass}>{text}</h2>;
  }

  return (
    <h2
      ref={ref}
      className={`${headingClass} relative isolate cursor-default`}
      onPointerMove={(e) => {
        if (e.pointerType === "touch") return;
        const box = e.currentTarget.getBoundingClientRect();
        x.set(e.clientX - box.left);
        y.set(e.clientY - box.top);
      }}
      onPointerEnter={(e) => {
        if (e.pointerType !== "touch") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
    >
      {text}

      {/* The same words again, painted with the cursor-following light and
          clipped to the letter shapes. Fades in only while hovering. */}
      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-clip-text text-transparent transition-opacity duration-300"
        style={{ backgroundImage: spotlight, opacity: hovered ? 1 : 0 }}
      >
        {text}
      </motion.span>
    </h2>
  );
}
