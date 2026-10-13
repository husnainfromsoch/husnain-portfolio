"use client";

import { useId, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Plus } from "@/components/icons";

type Props = {
  /** Shown before the title, e.g. "01/" or an avatar */
  leading?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
  /** Tighter rows and smaller text, for lists with many items (the FAQ) */
  compact?: boolean;
  className?: string;
};

/** One row that opens to show more. Used by the FAQ and testimonials. */
export default function AccordionRow({
  leading,
  title,
  subtitle,
  children,
  defaultOpen = false,
  compact = false,
  className = "",
}: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const reduced = useReducedMotion();
  const panelId = useId();

  return (
    <div className={`border-b border-line ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className={`group flex w-full items-center gap-4 text-left sm:gap-6 ${
          compact ? "py-4 sm:py-[1.1rem]" : "py-6 sm:py-7"
        }`}
      >
        {leading}
        <span className="flex-1">
          <span
            className={`block font-display font-semibold leading-snug tracking-[-0.03em] transition-colors ${
              compact ? "text-base sm:text-lg" : "text-lg sm:text-2xl"
            } ${open ? "text-ink" : "text-ink/80 group-hover:text-ink"}`}
          >
            {title}
          </span>
          {subtitle && (
            <span className="mt-1 block text-sm text-muted">{subtitle}</span>
          )}
        </span>
        <span
          aria-hidden="true"
          className={`flex shrink-0 items-center justify-center rounded-full transition-[background-color,color,transform] duration-300 ${
            compact ? "size-8 sm:size-9" : "size-10 sm:size-11"
          } ${
            open
              ? "rotate-45 bg-accent text-on-accent"
              : "bg-ink/[0.07] text-ink group-hover:bg-ink group-hover:text-paper"
          }`}
        >
          <Plus className={compact ? "size-4" : "size-5"} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            key="panel"
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
