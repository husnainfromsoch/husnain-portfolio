import type { Project } from "./types";

const project: Project = {
  slug: "with-umair",
  title: "With Umair",
  client: "Umair Shahzad (With Umair)",
  country: "Pakistan",
  market: "Pakistan, serving founders internationally",
  industry: "Coaching: LinkedIn personal branding for founders",
  role: "Built the website from scratch in GoHighLevel; created AI visuals",
  services: ["websites", "ai-visuals"],
  serviceLabel: "Website Development, AI Visuals & Content",
  stack: ["GoHighLevel", "AI image tools"],
  year: "2026",
  liveUrl: "https://withumair.com",
  summary:
    "A GoHighLevel website for a LinkedIn coach, built to collect free-audit requests and book strategy sessions.",
  problem:
    "The site has one job: get the right founder to submit their profile for an audit, and capture their details in the CRM so follow-up can happen.",
  solution:
    "I built the site as a single-page funnel in GoHighLevel: a headline aimed at founders, an audit request pop-up (name, LinkedIn URL, email, role, consent), a strategy session option, audience cards, a four-step \"what happens next\" section, testimonials and an about section. I created the visuals with AI.",
  keyFeatures: [
    "Audit request form with LinkedIn URL and consent checkbox, feeding GoHighLevel",
    "Two calls to action: free audit or free strategy session",
    "Audience cards for founders, senior leaders, consultants and executives",
    "Four-step process so visitors know exactly what happens after they submit",
  ],
  results: [
    "The funnel is live and collects audit requests directly into GoHighLevel.",
  ],
  closing:
    "With Umair shows a GoHighLevel build done properly: one page, one offer, every lead captured.",
  cover: {
    src: "/images/work-2.svg",
    alt: "[TODO: replace with a real screenshot of the With Umair homepage]",
  },
  images: [
    {
      src: "/images/work-2.svg",
      alt: "[TODO: replace with a screenshot of the With Umair homepage]",
    },
    {
      src: "/images/work-3.svg",
      alt: "[TODO: replace with a screenshot of the audit request form]",
    },
  ],
};

export default project;
