"use client";

import { useEffect, useRef, useState } from "react";
import { serviceIcons } from "@/components/icons";
import type { services as servicesType } from "@/content/site";

type Service = (typeof servicesType)[number];

/* Sticky filter-style bar: jumps to a service section and highlights
   whichever one is currently in view, so it reads as live navigation
   rather than a static row of links. */
export default function ServiceJumpNav({ services }: { services: readonly Service[] }) {
  const [active, setActive] = useState(services[0]?.slug);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = services
      .map((s) => document.getElementById(s.slug))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id as Service["slug"]);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25, 0.5] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [services]);

  return (
    <div
      ref={barRef}
      role="tablist"
      aria-label="Jump to a service"
      className="sticky top-[72px] z-30 -mx-5 flex gap-2 overflow-x-auto border-y border-line bg-paper/95 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8 [&::-webkit-scrollbar]:hidden"
    >
      {services.map((s) => {
        const Icon = serviceIcons[s.icon as keyof typeof serviceIcons];
        const isActive = active === s.slug;
        return (
          <a
            key={s.slug}
            href={`#${s.slug}`}
            role="tab"
            aria-selected={isActive}
            className={`group relative flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "border-ink bg-ink text-paper shadow-[0_8px_20px_rgba(12,4,7,0.18)]"
                : "border-line bg-card text-ink/70 hover:border-ink/40 hover:text-ink"
            }`}
          >
            <span
              className={`flex size-6 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                isActive ? "bg-accent text-on-accent" : "bg-ink/[0.07] text-ink/70 group-hover:bg-accent-soft group-hover:text-accent-text"
              }`}
            >
              <Icon className="size-3.5" />
            </span>
            {s.title}
          </a>
        );
      })}
    </div>
  );
}
