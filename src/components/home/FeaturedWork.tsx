import Image from "next/image";
import Link from "next/link";
import { featuredProjects } from "@/content/projects";
import { workSection } from "@/content/site";
import { Button, Container, SectionIntro } from "@/components/ui";
import { ArrowUpRight, Briefcase } from "@/components/icons";
import Reveal from "@/components/Reveal";

export default function FeaturedWork() {
  return (
    <section className="border-b border-line py-24 sm:py-32">
      <Container>
        <SectionIntro
          eyebrow={workSection.eyebrow}
          icon={Briefcase}
          heading={workSection.heading}
          sub={workSection.sub}
        />

        <ul className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2">
          {featuredProjects.slice(0, 4).map((project, i) => (
            <Reveal as="li" key={project.slug} delay={(i % 2) * 0.08}>
              <Link href={`/work/${project.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-card bg-accent-soft">
                  <Image
                    src={project.cover.src}
                    alt={project.cover.alt}
                    width={1200}
                    height={900}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <span className="absolute right-5 top-5 flex size-12 items-center justify-center rounded-full bg-card text-ink opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <ArrowUpRight className="size-5" />
                  </span>
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                  <h3 className="font-display text-xl font-bold tracking-[-0.03em] transition-colors group-hover:text-accent sm:text-2xl">
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
            </Reveal>
          ))}
        </ul>

        <Reveal>
          <div className="mt-16 flex justify-center">
            <Button href={workSection.cta.href}>{workSection.cta.label}</Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
