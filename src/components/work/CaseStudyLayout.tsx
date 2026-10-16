import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/projects/types";
import { workPage } from "@/content/site";
import { Button, Container, Eyebrow } from "@/components/ui";
import { ArrowLeft, ArrowRight, ArrowUpRight, Briefcase, Check, Grid } from "@/components/icons";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import CountUp from "@/components/about/CountUp";

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

/** Shared visual structure for every case study page.
    Each project has its own route file in src/app/work/<slug>/page.tsx
    that passes its own data in — this component only renders. */
export default function CaseStudyLayout({
  project,
  next,
}: {
  project: Project;
  next: Project;
}) {
  return (
    <>
      {/* ------------------------------- HEADER ------------------------------ */}
      <section className="pb-12 pt-28 sm:pb-16 sm:pt-36">
        <Container>
          <Reveal>
            <Link
              href="/work"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink/70 transition-colors hover:text-ink"
            >
              <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
              {workPage.backLabel}
            </Link>

            <Eyebrow icon={Briefcase}>{project.serviceLabel}</Eyebrow>

            <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.25rem,5.2vw,4rem)] font-bold leading-[1.02] tracking-[-0.04em]">
              {project.title}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {project.summary}
            </p>

            {/* Key descriptor badges */}
            <div className="mt-8 flex flex-wrap gap-3">
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

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
                className="group mt-8 inline-flex items-center gap-2 rounded-cta border border-ink/15 bg-card px-7 py-3.5 text-sm font-semibold text-ink transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-ink"
              >
                Visit the live site
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
          </Reveal>

          {/* Quick stat strip — real counts pulled straight from the project data */}
          <Reveal delay={0.1} className="mt-12 grid grid-cols-3 gap-4 border-y border-line py-7 sm:max-w-2xl">
            {[
              { value: `${project.services.length}`, label: project.services.length === 1 ? "Service" : "Services combined" },
              { value: `${project.keyFeatures.length}`, label: "Things built" },
              { value: `${project.stack.length}`, label: project.stack.length === 1 ? "Tool used" : "Tools used" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-bold tracking-[-0.03em] text-accent-text sm:text-4xl">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-1 text-xs font-medium leading-snug text-muted sm:text-sm">{s.label}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      {/* -------------------------------- COVER ------------------------------- */}
      <Container>
        <Reveal>
          <TiltCard strength={4} className="relative aspect-[16/9] overflow-hidden rounded-card bg-accent-soft">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              sizes="(min-width: 1280px) 1200px, 90vw"
              priority
              className="object-cover"
            />
          </TiltCard>
        </Reveal>
      </Container>

      {/* ------------------------------- OVERVIEW ------------------------------ */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 sm:grid-cols-[minmax(0,280px)_1fr] sm:gap-16">
            <Reveal>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Project details
              </p>
              <dl className="mt-6 flex flex-col gap-5 border-t border-line pt-5 text-sm">
                {[
                  { dt: "Client", dd: project.client },
                  { dt: "Market", dd: project.market },
                  { dt: "Industry", dd: project.industry },
                  { dt: "My role", dd: project.role },
                ].map((row) => (
                  <div key={row.dt} className="border-b border-line pb-5">
                    <dt className="text-muted">{row.dt}</dt>
                    <dd className="mt-1.5 font-semibold leading-snug">{row.dd}</dd>
                  </div>
                ))}
                <div className="pb-1">
                  <dt className="text-muted">Stack</dt>
                  <dd className="mt-2.5 flex flex-wrap gap-2">
                    {project.stack.map((tool) => (
                      <span
                        key={tool}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-card px-3 py-1.5 text-xs font-semibold"
                      >
                        <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                        {tool}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </Reveal>

            <div className="flex flex-col gap-10">
              <Reveal>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-text">
                  {workPage.problemLabel}
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink/80 sm:text-lg">
                  {project.problem}
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-text">
                  {workPage.solutionLabel}
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink/80 sm:text-lg">
                  {project.solution}
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* -------------------------------- APPROACH ------------------------------ */}
      <section className="border-t border-line bg-card py-16 sm:py-24">
        <Container>
          <Reveal>
            <Eyebrow icon={Grid}>How I worked on this</Eyebrow>
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {approach.map((step, i) => (
              <Reveal
                key={step.title}
                delay={i * 0.08}
                className="group rounded-card border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_18px_40px_rgba(12,4,7,0.08)] sm:p-7"
              >
                <span className="flex size-10 items-center justify-center rounded-full border border-line font-display text-sm font-bold transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold tracking-[-0.02em] sm:text-xl">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink/75 sm:text-[15px]">
                  {step.description}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* --------------------------------- KEY FEATURES ------------------------ */}
      <section className="border-t border-line py-16 sm:py-24">
        <Container>
          <Reveal>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-text">
              What I built
            </p>
          </Reveal>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2">
            {project.keyFeatures.map((feature, i) => (
              <Reveal
                key={feature}
                as="li"
                delay={(i % 2) * 0.08}
                className="flex items-start gap-4 rounded-card border border-line bg-card p-6"
              >
                <span
                  aria-hidden="true"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-bold text-paper"
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
      <section className="border-y border-line bg-ink py-16 text-paper sm:py-20">
        <Container>
          <Reveal>
            <p className="text-center font-display text-xs font-semibold uppercase tracking-[0.22em] text-paper/60">
              {workPage.resultsLabel}
            </p>
          </Reveal>
          <ul
            className={`mx-auto mt-10 grid gap-5 ${
              project.results.length > 1 ? "max-w-3xl sm:grid-cols-2" : "max-w-xl"
            }`}
          >
            {project.results.map((r, i) => (
              <Reveal
                key={r}
                as="li"
                delay={(i % 2) * 0.08}
                className="flex h-full items-start gap-4 rounded-card border border-paper/15 bg-paper/[0.04] p-6 text-left"
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

      {/* ------------------------------- GALLERY ------------------------------ */}
      {project.images.length > 0 && (
        <section className="py-16 sm:py-24">
          <Container>
            <Reveal>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                Selected views
              </p>
              <h2 className="mt-3 font-display text-[clamp(1.75rem,3.6vw,2.75rem)] font-bold leading-[1.05] tracking-[-0.03em]">
                More of {project.title}
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-5">
              {/* First image: full-width hero shot */}
              <Reveal>
                <div className="group relative aspect-[16/9] overflow-hidden rounded-card bg-accent-soft">
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    fill
                    sizes="(min-width: 1280px) 1200px, 90vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                </div>
              </Reveal>

              {/* Remaining images: bento grid, alternating 2-up and full-width rows */}
              {project.images.length > 1 && (
                <div className="grid gap-5 sm:grid-cols-2">
                  {project.images.slice(1).map((img, i) => (
                    <Reveal key={img.src + i} delay={(i % 2) * 0.1}>
                      <div className="group relative aspect-[4/3] overflow-hidden rounded-card bg-accent-soft">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          sizes="(min-width: 1024px) 45vw, 90vw"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        />
                      </div>
                    </Reveal>
                  ))}
                </div>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* ----------------------------- MID-PAGE CTA ----------------------------- */}
      <section className="py-4 sm:py-6">
        <Container>
          <Reveal>
            <div className="flex flex-col items-center gap-6 rounded-card bg-accent px-6 py-12 text-center text-on-accent sm:px-16 sm:py-16">
              <p className="font-display text-[clamp(1.6rem,3.6vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                Want a site, store or system that performs like this?
              </p>
              <p className="max-w-lg text-sm leading-relaxed text-on-accent/85 sm:text-base">
                Tell me what you&apos;re building and I&apos;ll tell you exactly how I&apos;d approach it — no pressure, no sales script.
              </p>
              <Button href="/contact" variant="ink">
                Book a free call
              </Button>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* --------------------------------- NEXT -------------------------------- */}
      <section className="border-t border-line py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-ink/75 sm:text-lg">
              {project.closing}
            </p>
          </Reveal>

          <Reveal delay={0.05} className="mt-14">
            <Link href={`/work/${next.slug}`} className="group flex items-center justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted">
                  {workPage.nextLabel}
                </p>
                <p className="mt-2 font-display text-2xl font-bold tracking-[-0.03em] transition-colors group-hover:text-accent-text sm:text-4xl">
                  {next.title}
                </p>
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
