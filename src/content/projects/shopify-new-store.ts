import type { Project } from "./types";

const project: Project = {
  slug: "shopify-new-store",
  title: "[TODO: project title]",
  client: "[TODO: client name]",
  country: "[TODO: country]",
  service: "shopify",
  serviceLabel: "New Shopify store",
  year: "[TODO: year]",
  summary:
    "[TODO: one line about the brand and the store you launched for them from scratch.]",
  problem:
    "[TODO: describe where the brand was before — no store, selling only on Instagram, or stuck on another platform.]",
  solution:
    "[TODO: describe the store you designed and built, and the key decisions behind it.]",
  results: [
    { value: "[TODO: real number]", label: "Orders in first month" },
    { value: "[TODO: real number]", label: "Conversion rate" },
    { value: "[TODO: real number]", label: "Time to launch" },
  ],
  cover: { src: "/images/work-4.svg", alt: "[TODO: describe the cover image]" },
  images: [
    { src: "/images/work-4.svg", alt: "[TODO: homepage screenshot]" },
    { src: "/images/work-1.svg", alt: "[TODO: product page screenshot]" },
  ],
  featured: true,
};

export default project;
