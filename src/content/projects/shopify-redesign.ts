import type { Project } from "./types";

/* ONE CASE STUDY = ONE FILE. Copy this file, change the details,
   then add it to index.ts to make it appear on the site. */

const project: Project = {
  slug: "shopify-redesign",
  title: "[TODO: project title]",
  client: "[TODO: client name]",
  country: "[TODO: country]",
  service: "shopify",
  serviceLabel: "Shopify redesign",
  year: "[TODO: year]",
  summary:
    "[TODO: one line about what this store needed and what changed after the redesign.]",
  problem:
    "[TODO: describe what was wrong — dated design, slow pages, traffic but no sales, confusing product pages.]",
  solution:
    "[TODO: describe what you rebuilt and why those decisions were made.]",
  results: [
    { value: "[TODO: real number]", label: "Conversion rate change" },
    { value: "[TODO: real number]", label: "Page load time" },
    { value: "[TODO: real number]", label: "Revenue change" },
  ],
  cover: { src: "/images/work-1.svg", alt: "[TODO: describe the cover image]" },
  images: [
    { src: "/images/work-1.svg", alt: "[TODO: before screenshot]" },
    { src: "/images/work-2.svg", alt: "[TODO: after screenshot]" },
  ],
  featured: true,
};

export default project;
