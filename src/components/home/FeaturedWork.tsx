import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/content/projects";
import { workSection } from "@/content/site";
import { Button, Container, Eyebrow } from "@/components/ui";
import Reveal from "@/components/Reveal";

export default function FeaturedWork() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow>{workSection.eyebrow}</Eyebrow>
            </div>
            <h2 className="mt-5 font-display text-[clamp(2.2rem,5.5vw,4rem)] font-extrabold leading-[1.02] tracking-[-0.03em]">
              {workSection.heading}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {workSection.sub}
            </p>
          </div>
        </Reveal>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <Reveal as="li" key={project.slug} delay={i * 0.08}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden rounded-[var(--radius-card)] bg-ink">
                  <Image
                    src={project.cover.src}
                    alt={project.cover.alt}
                    width={1200}
                    height={900}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="mt-5 flex items-start justify-between gap-5">
                  <div>
                    <h3 className="font-display text-xl font-extrabold leading-tight tracking-tight sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {project.summary}
                    </p>
                  </div>

                  <span className="shrink-0 rounded-[var(--radius-pill)] bg-accent px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-white">
                    {project.serviceLabel}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.1}>
          <div className="mt-14 flex justify-center">
            <Button href={workSection.cta.href}>{workSection.cta.label}</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
