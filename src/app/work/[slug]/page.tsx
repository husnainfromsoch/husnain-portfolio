import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { projects, getProject } from "@/content/projects";
import { workPage, site } from "@/content/site";
import { Button, Container, Eyebrow } from "@/components/ui";
import { ArrowLeft, ArrowRight, Briefcase } from "@/components/icons";
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
                <dt className="text-muted">Country</dt>
                <dd className="mt-1 font-semibold">{project.country}</dd>
              </div>
              <div>
                <dt className="text-muted">Service</dt>
                <dd className="mt-1 font-semibold">{project.serviceLabel}</dd>
              </div>
              <div>
                <dt className="text-muted">Year</dt>
                <dd className="mt-1 font-semibold">{project.year}</dd>
              </div>
            </dl>
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

      {/* ---------------------------------- RESULTS --------------------------- */}
      <section className="border-y border-line py-16 sm:py-20">
        <Container>
          <Reveal>
            <p className="text-center font-display text-xs font-semibold uppercase tracking-[0.22em] text-muted">
              {workPage.resultsLabel}
            </p>
            <dl className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-10 text-center sm:grid-cols-3">
              {project.results.map((r) => (
                <div key={r.label}>
                  <dt className="sr-only">{r.label}</dt>
                  <dd>
                    <span className="block font-display text-[clamp(2rem,4vw,3rem)] font-bold leading-none tracking-[-0.04em] text-accent-text">
                      {r.value}
                    </span>
                    <span className="mt-3 block text-sm text-muted sm:text-base">{r.label}</span>
                  </dd>
                </div>
              ))}
            </dl>
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
