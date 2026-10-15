import type { Project } from "./types";

const project: Project = {
  slug: "soch",
  title: "Soch",
  client: "Soch",
  country: "Estonia",
  market: "Estonia (Tallinn), clients worldwide",
  industry: "AI automation consulting",
  role: "Built the website from scratch; created AI graphics; built n8n automations for leads, email, ClickUp and the blog",
  services: ["websites", "automation", "ai-visuals"],
  serviceLabel: "Website Development, Business Automation, AI Visuals & Content",
  stack: ["Next.js", "Claude Code", "n8n", "Replicate", "ClickUp", "GitHub"],
  year: "2026",
  liveUrl: "https://withsoch.com",
  summary:
    "A custom-coded website for Soch, a Tallinn AI automation agency, plus the n8n systems that handle its leads, team tasks and blog.",
  problem:
    "An automation agency has to show it practises what it sells. The site needed to explain several services and engagement types clearly, prove results with case studies, and keep publishing content without eating the team's time.",
  solution:
    "I built the website in Next.js with Claude Code: services, case studies, about, blog, contact and a free AI Ops Score audit. I created the site's AI visuals with Replicate, then built the automations behind it: lead generation, email automation, ClickUp task creation for internal and client-facing work, and a blog pipeline that writes each post, creates its visuals, applies SEO, pushes it to GitHub and publishes it live.",
  keyFeatures: [
    "Engagement comparison table: consulting vs implementation vs transformation, with timeline and investment",
    "Case study cards with challenge, solution and result on the homepage",
    "\"Ask AI about Soch\" buttons that open Claude, Gemini or Perplexity with a question about the company",
    "Self-publishing blog pipeline, in production since launch",
    "Client logo marquee and an FAQ answering cost, timing and ownership",
  ],
  results: [
    "The site is live with services, case studies and a blog that publishes through one automated n8n pipeline.",
    "Leads, email follow-up and internal team tasks run through n8n instead of by hand.",
  ],
  closing:
    "Soch is the clearest example of my full range: the website, the visuals, and the automation that keeps it running.",
  cover: {
    src: "/images/work/soch-home.jpg",
    alt: "Soch AI automation agency homepage built in Next.js",
  },
  images: [
    {
      src: "/images/work/soch-home.jpg",
      alt: "Soch AI automation agency homepage built in Next.js",
    },
    {
      src: "/images/work/soch-blog.jpg",
      alt: "Soch blog published through an automated n8n pipeline",
    },
  ],
  featured: true,
};

export default project;
