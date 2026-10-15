import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/content/projects";
import { workPage, site } from "@/content/site";
import { Button, Container, Eyebrow } from "@/components/ui";
import { ArrowLeft, ArrowRight, ArrowUpRight, Briefcase } from "@/components/icons";
import Reveal from "@/components/Reveal";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = getProject(params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${site.brandFull}`,
    description: project.summary,
  };
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

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

            <Eyebrow icon={Briefcase} >{project.serviceLabel}</Eyebrow>

            <h1 className="mt-6 max-w-3xl font-display text-[clamp(2.25rem,5.2vw,4rem)] font-bold leading-[1.02] tracking-[-0.04em]">
              {project.title}
            </h1>

            <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-3 text-sm">
              <div>
                <dt className="text-muted">Client</dt>
                <dd className="mt-1 font-semibold">{project.client}</dd>
              </div>
              <div>
                <dt className="text-muted">Market</dt>
                <dd className="mt-1 font-semibold">{project.market}</dd>
              </div>
              <div>
                <dt className="text-muted">Service</dt>
                <dd className="mt-1 font-semibold">{project.serviceLabel}</dd>
              </div>
              <div>
                <dt className="text-muted">My role</dt>
                <dd className="mt-1 font-semibold">{project.role}</dd>
              </div>
              <div>
                <dt className="text-muted">Stack</dt>
                <dd className="mt-1 font-semibold">{project.stack.join(" · ")}</dd>
              </div>
            </dl>

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
        </Container>
      </section>

      {/* -------------------------------- COVER ------------------------------- */}
      <Container>
        <Reveal>
          <div className="relative aspect-[16/9] overflow-hidden rounded-card bg-accent-soft">
            <Image
              src={project.cover.src}
              alt={project.cover.alt}
              fill
              sizes="(min-width: 1280px) 1200px, 90vw"
              priority
              className="object-cover"
            />
          </div>
        </Reveal>
      </Container>

      {/* --------------------------- PROBLEM / SOLUTION ----------------------- */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 sm:grid-cols-2 sm:gap-10">
            <Reveal>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-text">
                {workPage.problemLabel}
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink/80 sm:text-lg">
                {project.problem}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-text">
                {workPage.solutionLabel}
              </p>
              <p className="mt-4 max-w-md text-base leading-relaxed text-ink/80 sm:text-lg">
                {project.solution}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* --------------------------------- KEY FEATURES ------------------------ */}
      <section className="py-16 sm:py-24">
        <Container>
          <Reveal>
            <p className="font-display text-xs font-semibold uppercase tracking-[0.22em] text-accent-text">
              Key features
            </p>
            <ul className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-2">
              {project.keyFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-[15px] leading-relaxed text-ink/80 sm:text-base"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-ink/[0.07]"
                  >
                    <span className="size-1.5 rounded-full bg-accent" />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* ---------------------------------- RESULTS --------------------------- */}
      <section className="border-y border-line py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-center font-display text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              {workPage.resultsLabel}
            </p>
            <ul className="mx-auto mt-8 flex max-w-2xl flex-col gap-4 text-center">
              {project.results.map((r) => (
                <li key={r} className="text-base leading-relaxed text-ink/85 sm:text-lg">
                  {r}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------- GALLERY ------------------------------ */}
      {project.images.length > 0 && (
        <section className="py-16 sm:py-24">
          <Container>
            <div className="grid gap-6 sm:grid-cols-2">
              {project.images.map((img, i) => (
                <Reveal key={img.src + i} delay={(i % 2) * 0.1}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-accent-soft">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(min-width: 1024px) 45vw, 90vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

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
