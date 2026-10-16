import type { Metadata } from "next";
import project from "@/content/projects/ai-with-riz";
import nextProject from "@/content/projects/hermine-hold";
import { site } from "@/content/site";
import CaseStudyLayout from "@/components/work/CaseStudyLayout";

export const metadata: Metadata = {
  title: `${project.title} — ${site.brandFull}`,
  description: project.summary,
};

export default function Page() {
  return <CaseStudyLayout project={project} next={nextProject} />;
}
