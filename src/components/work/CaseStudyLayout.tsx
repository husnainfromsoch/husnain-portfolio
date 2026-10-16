"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";
import type { Project } from "@/content/projects/types";
import { workPage } from "@/content/site";
import { Button, Container, Eyebrow } from "@/components/ui";
import { ArrowLeft, ArrowRight, ArrowUpRight, Briefcase, Check, Grid } from "@/components/icons";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import CountUp from "@/components/about/CountUp";
import { WordsReveal, LinesReveal } from "@/components/TextReveal";

const ease = [0.22, 1, 0.36, 1] as const;

const approach = [
  {
    title: "Map how it actually runs",
    description:
      "Before any code, I look at the real workflow — the tools, the manual steps, the bottlenecks that cost time or sales.",
  },
  {
    title: "Build the thing that fixes it",
    description:
      "Store, site or automation — built to match the brand and solve the specific problem, not a generic template.",
  },
  {
    title: "Launch and hand it over clean",
    description:
      "Tested on real devices, connected to the tools already in use, and explained in plain language — no black boxes.",
  },
];

/* Left-aligned section heading: small eyebrow + a heading that reveals
   word by word as it scrolls into view. Used for every major section
   below the hero so the page reads as one consistent system. */
function SectionHeading({
  eyebrow,
  icon,
  heading,
  invert = false,
}: {
  eyebrow: string;
  icon?: typeof Briefcase;
  heading: string;
  invert?: boolean;
}) {
  return (
    <Reveal>
      <p
        className={`inline-flex items-center gap-2.5 rounded-full border py-1.5 pl-1.5 pr-4 text-xs font-semibold uppercase tracking-[0.2em] ${
          invert ? "border-paper/15 bg-paper/5" : "border-line bg-card"
        }`}
      >
        <span
          className={`flex size-6 items-center justify-center rounded-full ${
            invert ? "bg-paper text-ink" : "bg-accent text-on-accent"
          }`}
        >
          {icon ? icon({ className: "size-3.5" }) : null}
        </span>
        {eyebrow}
      </p>
      <h2 className="mt-5 font-display text-[clamp(1.9rem,3.8vw,2.9rem)] font-bold leading-[1.04] tracking-[-0.035em]">
        <WordsReveal text={heading} />
      </h2>
    </Reveal>
  );
}

export default function CaseStudyLayout({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  const reduced = useReducedMotion();
  const processRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({
    target: processRef,
    offset: ["start 0.8", "end 0.6"],
  });

  const stats = [
    { value: `${project.services.length}`, label: project.services.length === 1 ? "Service" : "Services combined" },
    { value: `${project.keyFeatures.length}`, label: "Things built" },
    { value: `${project.stack.length}`, label: project.stack.length === 1 ? "Tool used" : "Tools used" },
  ];

  const thumb = project.images[0];

  return (
    <>
      {/* ------------------------------- HERO -------------------------------- */}
      <section className="overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-36">
        <Container>
          <Reveal>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink/70 transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              {workPage.backLabel}
            </Link>
          </Reveal>

          <div className="mt-6 grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* ------------------------------ Left: words ----------------------- */}
            <div>
              <Reveal>
                <Eyebrow icon={Briefcase}>{project.serviceLabel}</Eyebrow>

                <h1 className="mt-6 font-display text-[clamp(2.5rem,5.6vw,4.4rem)] font-bold leading-[0.98] tracking-[-0.045em]">
                  <LinesReveal lines={[project.title]} />
                </h1>

                <p className="mt-6 max-w-lg text-base leading-relaxed text-ink/75 sm:text-lg">
                  {project.summary}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {[
                    { k: "Client", v: project.client },
                    { k: "Market", v: project.country },
                    { k: "Year", v: project.year },
                  ].map((b) => (
                    <span
                      key={b.k}
                      className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-4 py-2 text-sm"
                    >
                      <span className="font-semibold text-ink">{b.v}</span>
                      <span className="text-muted">{b.k}</span>
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Button href="/contact">Book a free call</Button>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group inline-flex items-center gap-2 rounded-cta border border-ink/15 bg-card px-7 py-3.5 text-sm font-semibold text-ink transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-ink"
                    >
                      Visit the live site
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </a>
                  )}
                </div>
              </Reveal>

              {/* Quick stat strip — real counts pulled straight from the project data */}
              <motion.dl
                className="mt-11 grid max-w-md grid-cols-3 gap-4 border-t border-line pt-7"
                initial="hidden"
                whileInView="shown"
                viewport={{ once: true, amount: 0.6 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.1 }}
              >
                {stats.map((s) => (
                  <motion.div
                    key={s.label}
                    variants={
                      reduced
                        ? undefined
                        : {
                            hidden: { opacity: 0, y: 16, scale: 0.94 },
                            shown: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease } },
                          }
                    }
                  >
                    <dt className="sr-only">{s.label}</dt>
                    <dd>
                      <span className="block font-display text-3xl font-bold leading-none tracking-[-0.03em] text-accent-text sm:text-4xl">
                        <CountUp value={s.value} />
                      </span>
                      <span className="mt-2 block text-xs font-medium leading-snug text-muted sm:text-sm">
                        {s.label}
                      </span>
                    </dd>
                  </motion.div>
                ))}
              </motion.dl>
            </div>

            {/* --------------------- Right: cover art, Hero-style --------------- */}
            <Reveal delay={0.15}>
              <div className="relative mx-auto max-w-[560px] lg:mr-0">
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-1/2 -z-10 size-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 opacity-70 blur-3xl"
                />

                <TiltCard strength={5} className="relative">
                  <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-accent-soft">
                    <Image
                      src={project.cover.src}
                      alt={project.cover.alt}
                      fill
                      sizes="(min-width: 1024px) 560px, 90vw"
                      priority
                      className="object-cover"
                    />
                  </div>

                  {/* Status chip, pulsing dot — same mark as the homepage availability chip */}
                  <p className="absolute left-5 top-5 inline-flex items-center gap-2.5 rounded-full bg-card px-4 py-2.5 text-xs font-semibold shadow-[0_8px_24px_rgba(14,14,14,0.08)] sm:text-sm">
                    <span className="relative flex size-2.5">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
                      <span className="relative inline-flex size-2.5 rounded-full bg-accent" />
                    </span>
                    {project.liveUrl ? "Live" : "Shipped"} · {project.year}
                  </p>

                  {/* Floating thumbnail of a second screenshot, tilted like the homepage previews */}
                  {thumb && (
                    <div className="absolute -bottom-6 -left-6 w-[48%] overflow-hidden rounded-btn border-4 border-card bg-card shadow-[0_18px_40px_rgba(14,14,14,0.16)] -rotate-6 transition-transform duration-500 hover:-translate-y-1.5 hover:rotate-0 sm:-left-10">
                      <Image
                        src={thumb.src}
                        alt={thumb.alt}
                        width={640}
                        height={480}
                        sizes="(max-width: 1024px) 45vw, 260px"
                        className="aspect-[4/3] h-auto w-full object-cover"
                      />
                    </div>
                  )}
                </TiltCard>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ------------------------------- GALLERY ------------------------------ */}
      {project.images.length > 0 && (
        <section className="border-t border-line py-20 sm:py-28">
          <Container>
            <SectionHeading eyebrow="Selected views" icon={Grid} heading={`More of ${project.title}`} />

            <div className="mt-12 grid grid-cols-2 gap-5">
              {project.images.map((img, i) => (
                <Reveal
                  key={img.src + i}
                  delay={(i % 2) * 0.08}
                  className="group relative aspect-[4/3] overflow-hidden rounded-card bg-accent-soft"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 1024px) 45vw, 45vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  />
                  <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/10" />
                  <span className="pointer-events-none absolute bottom-3 right-3 flex size-8 items-center justify-center rounded-full bg-card/90 text-ink opacity-0 shadow-sm transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="size-4" />
                  </span>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ------------------------------- OVERVIEW ------------------------------ */}
      <section className="border-t border-line py-20 sm:py-28">
        <Container>
          {/* Problem and solution side by side, so neither column leaves a gap */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-text">
                {workPage.problemLabel}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/80 sm:text-xl">
                {project.problem}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-text">
                {workPage.solutionLabel}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink/80 sm:text-xl">
                {project.solution}
              </p>
            </Reveal>
          </div>

          {/* Project details as one horizontal strip underneath */}
          <Reveal className="mt-16 sm:mt-20">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              Project details
            </p>
            <dl className="mt-6 grid gap-x-10 gap-y-6 border-t border-line pt-6 text-sm sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1.5fr]">
              {[
                { dt: "Client", dd: project.client },
                { dt: "Market", dd: project.market },
                { dt: "Industry", dd: project.industry },
                { dt: "My role", dd: project.role },
              ].map((row) => (
                <div key={row.dt}>
                  <dt className="text-muted">{row.dt}</dt>
                  <dd className="mt-1.5 font-semibold leading-snug">{row.dd}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6 text-sm sm:flex-row sm:items-center sm:gap-6">
              <p className="shrink-0 text-muted">Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tool) => (
                  <span
                    key={tool}
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-semibold"
                  >
                    <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* -------------------------------- APPROACH ------------------------------ */}
      <section className="border-t border-line bg-card py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="How I worked on this" icon={Grid} heading="Same process, every time" />

          <motion.ol
            ref={processRef}
            className="relative mx-auto mt-14 grid gap-5 sm:mt-16 sm:grid-cols-3"
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ staggerChildren: 0.12 }}
          >
            {approach.map((step, i) => (
              <motion.li
                key={step.title}
                variants={
                  reduced
                    ? undefined
                    : { hidden: { opacity: 0, y: 24 }, shown: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }
                }
                className="group relative overflow-hidden rounded-card border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-ink/20 hover:shadow-[0_18px_40px_rgba(12,4,7,0.08)]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-3 -top-6 font-display text-[6rem] font-bold leading-none text-ink/[0.04] transition-colors duration-300 group-hover:text-accent/10"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="relative z-10 flex size-11 items-center justify-center rounded-full border border-line bg-card font-display text-sm font-bold tracking-[-0.02em] transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="relative z-10 mt-5 font-display text-xl font-bold tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="relative z-10 mt-2.5 text-[15px] leading-relaxed text-ink/75">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>
        </Container>
      </section>

      {/* --------------------------------- KEY FEATURES ------------------------ */}
      <section className="border-t border-line py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="What I built" icon={Briefcase} heading="Everything that shipped" />

          <ul className="mt-12 grid gap-5 sm:grid-cols-2">
            {project.keyFeatures.map((feature, i) => (
              <Reveal
                key={feature}
                as="li"
                delay={(i % 2) * 0.08}
                className="group relative overflow-hidden flex items-start gap-4 rounded-card border border-line bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_18px_40px_rgba(12,4,7,0.08)]"
              >
                <span
                  aria-hidden="true"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-paper transition-colors duration-300 group-hover:bg-accent group-hover:text-on-accent"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-[15px] leading-relaxed text-ink/80 sm:text-base">
                  {feature}
                </p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* ---------------------------------- RESULTS --------------------------- */}
      <section className="relative overflow-hidden border-y border-line bg-ink py-20 text-paper sm:py-28">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 -z-0 size-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/25 opacity-40 blur-[100px]"
        />
        <Container>
          <div className="relative text-center">
            <SectionHeadingCentered eyebrow={workPage.resultsLabel} heading="Real, measurable outcomes" />
          </div>

          <ul
            className={`relative mx-auto mt-14 grid gap-5 ${
              project.results.length > 1 ? "max-w-3xl sm:grid-cols-2" : "max-w-xl"
            }`}
          >
            {project.results.map((r, i) => (
              <Reveal
                key={r}
                as="li"
                delay={(i % 2) * 0.08}
                className="flex h-full items-start gap-4 rounded-card border border-paper/15 bg-paper/[0.04] p-7 text-left backdrop-blur-sm"
              >
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-on-accent"
                >
                  <Check className="size-4" />
                </span>
                <p className="text-base leading-relaxed text-paper/90 sm:text-lg">{r}</p>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      {/* --------------------------------- NEXT -------------------------------- */}
      <section className="border-t border-line py-20 sm:py-24">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-ink/75 sm:text-lg">
              {project.closing}
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-14">
            <Link
              href={`/work/${next.slug}`}
              className="group flex items-center justify-between gap-6 rounded-card border border-line bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_18px_40px_rgba(12,4,7,0.08)] sm:p-7"
            >
              <div className="flex items-center gap-5 sm:gap-7">
                <div className="relative hidden size-20 shrink-0 overflow-hidden rounded-btn bg-accent-soft sm:block">
                  <Image
                    src={next.cover.src}
                    alt={next.cover.alt}
                    fill
                    sizes="80px"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                    {workPage.nextLabel}
                  </p>
                  <p className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] transition-colors group-hover:text-accent-text sm:text-4xl">
                    {next.title}
                  </p>
                </div>
              </div>
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-ink text-paper transition-transform duration-300 group-hover:translate-x-1 group-hover:bg-accent group-hover:text-on-accent">
                <ArrowRight className="size-5" />
              </span>
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="mt-14 flex justify-center">
            <Button href="/contact">Start a project like this</Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

/** Centered variant of SectionHeading, for the dark Results band. */
function SectionHeadingCentered({ eyebrow, heading }: { eyebrow: string; heading: string }) {
  return (
    <Reveal>
      <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-paper/60">
        {eyebrow}
      </p>
      <h2 className="mx-auto mt-4 max-w-lg font-display text-[clamp(1.9rem,3.8vw,2.9rem)] font-bold leading-[1.04] tracking-[-0.035em]">
        <WordsReveal text={heading} />
      </h2>
    </Reveal>
  );
}
