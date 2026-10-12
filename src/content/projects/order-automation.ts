import type { Project } from "./types";

const project: Project = {
  slug: "order-automation",
  title: "[TODO: project title]",
  client: "[TODO: client name]",
  country: "[TODO: country]",
  service: "automation",
  serviceLabel: "Process automation",
  year: "[TODO: year]",
  summary:
    "[TODO: one line about the manual process you removed and the time it gave back.]",
  problem:
    "[TODO: describe the manual work — confirmations typed by hand, data copied into sheets, follow-ups chased manually.]",
  solution:
    "[TODO: describe the automated process you built and which tools it connects.]",
  results: [
    { value: "[TODO: real number]", label: "Hours saved per month" },
    { value: "[TODO: real number]", label: "Manual steps removed" },
    { value: "[TODO: real number]", label: "Response time" },
  ],
  cover: { src: "/images/work-2.svg", alt: "[TODO: describe the cover image]" },
  images: [
    { src: "/images/work-2.svg", alt: "[TODO: workflow screenshot]" },
    { src: "/images/work-3.svg", alt: "[TODO: result screenshot]" },
  ],
  featured: true,
};

export default project;
