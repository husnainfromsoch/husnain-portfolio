"use client";

import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/content/site";
import { serviceIcons } from "@/components/icons";

/* Small orbiting cluster of the five service icons around a pulsing
   centre — a compact eye-catching visual next to the section heading. */
export default function ServicesOrbit() {
  const reduced = useReducedMotion();
  const radius = 54;

  return (
    <div className="relative mx-auto flex size-32 shrink-0 items-center justify-center sm:size-36">
      {/* Pulsing glow */}
      {!reduced && (
        <motion.span
          aria-hidden="true"
          className="absolute size-full rounded-full bg-accent/20 blur-xl"
          animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Dashed orbit ring */}
      <svg viewBox="0 0 140 140" className="absolute size-full" aria-hidden="true">
        <circle
          cx="70"
          cy="70"
          r={radius}
          fill="none"
          stroke="var(--ink)"
          strokeOpacity="0.1"
          strokeWidth="1.5"
          strokeDasharray="3 8"
        />
      </svg>

      {/* Centre badge */}
      <span className="relative flex size-12 items-center justify-center rounded-full bg-ink text-paper sm:size-14">
        <span className="font-display text-base font-bold sm:text-lg">{services.length}</span>
      </span>

      {/* Orbiting icons */}
      <motion.div
        className="absolute inset-0"
        animate={reduced ? undefined : { rotate: 360 }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {services.map((s, i) => {
          const angle = (i / services.length) * 2 * Math.PI - Math.PI / 2;
          const x = 70 + radius * Math.cos(angle);
          const y = 70 + radius * Math.sin(angle);
          const Icon = serviceIcons[s.icon as keyof typeof serviceIcons];

          return (
            <motion.span
              key={s.slug}
              className="absolute flex size-8 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-card text-ink shadow-[0_6px_16px_rgba(12,4,7,0.12)] sm:size-9"
              style={{ left: `${(x / 140) * 100}%`, top: `${(y / 140) * 100}%` }}
              animate={reduced ? undefined : { rotate: -360 }}
              transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            >
              <Icon className="size-4" />
            </motion.span>
          );
        })}
      </motion.div>
    </div>
  );
}
