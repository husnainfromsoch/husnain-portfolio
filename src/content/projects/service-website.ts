import type { Project } from "./types";

const project: Project = {
  slug: "service-website",
  title: "[TODO: project title]",
  client: "[TODO: client name]",
  country: "[TODO: country]",
  service: "websites",
  serviceLabel: "Website build",
  year: "[TODO: year]",
  summary:
    "[TODO: one line about the site you built and what it does for the business.]",
  problem:
    "[TODO: describe what the old site was missing — no enquiries, slow, hard to update, looked unprofessional.]",
  solution:
    "[TODO: describe the platform you chose, why, and what you built.]",
  results: [
    { value: "[TODO: real number]", label: "Enquiries per month" },
    { value: "[TODO: real number]", label: "Page speed score" },
    { value: "[TODO: real number]", label: "Time to launch" },
  ],
  cover: { src: "/images/work-3.svg", alt: "[TODO: describe the cover image]" },
  images: [
    { src: "/images/work-3.svg", alt: "[TODO: homepage screenshot]" },
    { src: "/images/work-1.svg", alt: "[TODO: inner page screenshot]" },
  ],
  featured: true,
};

export default project;
