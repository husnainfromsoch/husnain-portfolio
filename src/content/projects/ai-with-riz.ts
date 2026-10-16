import type { Project } from "./types";

const project: Project = {
  slug: "ai-with-riz",
  title: "AI with Riz",
  client: "Rizwan Mahmood (AI with Riz)",
  country: "Estonia",
  market: "Estonia (Tallinn), clients worldwide",
  industry: "Consulting: AI and operations advisory",
  role: "Built the website from scratch; built the n8n guide pipeline",
  services: ["websites", "automation"],
  serviceLabel: "Website Development, Business Automation",
  stack: ["Next.js", "Claude Code", "n8n"],
  year: "2026",
  liveUrl: "https://aiwithriz.com",
  summary:
    "A custom website for Rizwan Mahmood, an operator and AI consultant in Tallinn, with an n8n pipeline that creates guides and their visuals and publishes them automatically.",
  problem:
    "A personal brand built on expertise needs a steady stream of useful content. Writing, illustrating and publishing each guide by hand doesn't scale alongside client work.",
  solution:
    "I built the website in Next.js with Claude Code: services, case studies, writing, articles, guides and about, plus an audio intro, a career timeline and a reel carousel. I then built a guide pipeline in n8n that creates each guide, creates its visuals and publishes it to the site.",
  keyFeatures: [
    "Guides library, filterable by topic and by AI tool, with search",
    "Career timeline table showing results at each past company",
    "Reel carousel of short videos",
    "Booking link to a paid strategy call",
  ],
  results: [
    "The site is live, and its guides library grows automatically through the pipeline, with each new guide and its visuals created and published without manual work.",
  ],
  closing:
    "AI with Riz pairs a sharp personal site with a content engine that runs in the background.",
  cover: {
    src: "/images/work/covers/ai-with-riz.jpg",
    alt: "3D neural network shaped like a brain",
  },
  images: [
    {
      src: "/images/work/ai-with-riz-home.jpg",
      alt: "AI with Riz personal brand website for an AI consultant",
    },
    {
      src: "/images/work/stock/ai-with-riz-stock-1.jpg",
      alt: "Placeholder visual — real project screenshot coming soon",
    },
    {
      src: "/images/work/stock/ai-with-riz-stock-2.jpg",
      alt: "Placeholder visual — real project screenshot coming soon",
    },
    {
      src: "/images/work/stock/ai-with-riz-stock-3.jpg",
      alt: "Placeholder visual — real project screenshot coming soon",
    },
  ],
};

export default project;
