"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import type { Project } from "@/content/projects";
import { services, workPage } from "@/content/site";
import { serviceIcons } from "@/components/icons";
import { ArrowUpRight } from "@/components/icons";

const ease = [0.22, 1, 0.36, 1] as const;

export default function WorkFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<string>("all");
  const reduced = useReducedMotion();

  const filters = useMemo(
    () => [
      { slug: "all", title: workPage.filterAll, icon: null },
      ...services.map((s) => ({ slug: s.slug, title: s.title, icon: s.icon })),
    ],
    [],
  );

  const filtered = active === "all" ? projects : projects.filter((p) => p.service === active);

  return (
    <div>
      {/* Filter bar */}
      <div
        role="tablist"
        aria-label={workPage.filterLabel}
        className="flex flex-wrap gap-2.5"
      >
        {filters.map((f) => {
          const isActive = active === f.slug;
          const Icon = f.icon ? serviceIcons[f.icon as keyof typeof serviceIcons] : null;
          return (
            <button
              key={f.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(f.slug)}
              className={`group inline-flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                isActive
                  ? "border-ink bg-ink text-paper shadow-[0_8px_20px_rgba(12,4,7,0.18)]"
                  : "border-line bg-card text-ink/70 hover:border-ink/40 hover:text-ink"
              }`}
            >
              {Icon && (
                <span
                  className={`flex size-6 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                    isActive
                      ? "bg-accent text-on-accent"
                      : "bg-ink/[0.07] text-ink/70 group-hover:bg-accent-soft group-hover:text-accent-text"
                  }`}
                >
                  <Icon className="size-3.5" />
                </span>
              )}
              {f.title}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <AnimatePresence mode="wait">
        <motion.ul
          key={active}
          initial={reduced ? undefined : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.4, ease }}
          className="mt-12 grid gap-x-6 gap-y-14 sm:mt-14 sm:grid-cols-2"
        >
          {filtered.length === 0 && (
            <li className="col-span-full py-20 text-center text-muted">{workPage.empty}</li>
          )}

          {filtered.map((project, i) => (
            <motion.li
              key={project.slug}
              initial={reduced ? undefined : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08, ease }}
            >
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-accent-soft">
                  <Image
                    src={project.cover.src}
                    alt={project.cover.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/[0.04]" />
                  <span className="absolute right-5 top-5 flex size-12 items-center justify-center rounded-full bg-card text-ink opacity-0 shadow-[0_8px_20px_rgba(12,4,7,0.12)] transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                  <h3 className="font-display text-xl font-bold tracking-[-0.03em] transition-colors group-hover:text-accent-text sm:text-2xl">
                    {project.title}
                  </h3>
                  <span className="rounded-full border border-line px-3 py-1 text-xs font-medium text-ink/75">
                    {project.serviceLabel}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                  {project.summary}
                </p>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </AnimatePresence>
    </div>
  );
}
