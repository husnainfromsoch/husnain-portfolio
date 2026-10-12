import type { Project } from "./types";
import shopifyRedesign from "./shopify-redesign";
import orderAutomation from "./order-automation";
import serviceWebsite from "./service-website";

/* To add a new case study: create a file in this folder,
   import it above, and add it to this list. That's it. */
export const projects: Project[] = [
  shopifyRedesign,
  orderAutomation,
  serviceWebsite,
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export type { Project };
