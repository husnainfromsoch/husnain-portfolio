import type { Project } from "./types";
import hookahHubPakistan from "./hookah-hub-pakistan";
import simplyTeenSkin from "./simply-teen-skin";
import hermineHold from "./hermine-hold";
import gloryByLaurence from "./glory-by-laurence";
import soch from "./soch";
import withUmair from "./with-umair";
import socialCatalyst from "./social-catalyst";
import soovita from "./soovita";
import masalaMurten from "./masala-murten";
import cycleTogether from "./cycle-together";
import aiWithRiz from "./ai-with-riz";

/* To add a new case study: create a file in this folder,
   import it above, and add it to this list. That's it. */
export const projects: Project[] = [
  hookahHubPakistan,
  soch,
  gloryByLaurence,
  simplyTeenSkin,
  soovita,
  aiWithRiz,
  hermineHold,
  socialCatalyst,
  withUmair,
  masalaMurten,
  cycleTogether,
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export type { Project };
