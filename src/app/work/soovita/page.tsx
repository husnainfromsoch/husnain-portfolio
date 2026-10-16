import type { Metadata } from "next";
import project from "@/content/projects/soovita";
import nextProject from "@/content/projects/ai-with-riz";
import { site } from "@/content/site";
import CaseStudyLayout from "@/components/work/CaseStudyLayout";

export const metadata: Metadata = {
  title: `${project.title} — ${site.brandFull}`,
  description: project.summary,
};

export default function Page() {
  return <CaseStudyLayout project={project} next={nextProject} />;
}
