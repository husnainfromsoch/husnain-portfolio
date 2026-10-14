import type { Metadata } from "next";
import { projects } from "@/content/projects";
import { workPage, site } from "@/content/site";
import { Container, Eyebrow, Heading } from "@/components/ui";
import { Briefcase } from "@/components/icons";
import Reveal from "@/components/Reveal";
import WorkFilter from "@/components/work/WorkFilter";

export const metadata: Metadata = {
  title: `Work — ${site.brandFull}`,
  description: workPage.sub,
};

export default function WorkPage() {
  return (
    <>
      <section className="pb-12 pt-28 sm:pb-16 sm:pt-36">
        <Container>
          <Reveal>
            <Eyebrow icon={Briefcase}>{workPage.eyebrow}</Eyebrow>
            <Heading as="h1" className="mt-6 max-w-2xl">
              {workPage.heading}
            </Heading>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/75 sm:text-lg">
              {workPage.sub}
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="pb-24 sm:pb-32">
        <Container>
          <WorkFilter projects={projects} />
        </Container>
      </section>
    </>
  );
}
