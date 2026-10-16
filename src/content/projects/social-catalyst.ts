import type { Project } from "./types";

const project: Project = {
  slug: "social-catalyst",
  title: "Social Catalyst",
  client: "Social Catalyst",
  country: "Estonia",
  market: "Estonia, serving the UK, US, Europe and Pakistan",
  industry: "Marketing: social media and LinkedIn for B2B businesses",
  role: "Built the website from scratch; created graphics with Replicate",
  services: ["websites", "ai-visuals"],
  serviceLabel: "Website Development, AI Visuals & Content",
  stack: ["Next.js", "Claude Code", "Replicate", "Cal.com"],
  year: "2026",
  liveUrl: "https://withsocialcatalyst.com",
  summary:
    "A custom-coded website for Social Catalyst, a social media and LinkedIn agency for B2B businesses, with AI-made visuals.",
  problem:
    "B2B owners often don't see that being hard to find online costs them clients. The site had to make that visible quickly and lead to a free audit or a quote call.",
  solution:
    "I built the site in Next.js with Claude Code. The homepage uses illustrated interface mock-ups (a search result where the client ranks last, a post with six likes, an empty inbox) to show the problem, then a six-channel content plan, services, client results, a sample audit and an FAQ. Calls to action go to a Cal.com booking page. I created the site graphics with Replicate.",
  keyFeatures: [
    "Rotating headline: \"found first\" cycles through Google, LinkedIn and Instagram",
    "Problem mock-ups that show what a neglected profile looks like to buyers",
    "Sample audit card so visitors see what the free audit delivers",
    "Cal.com booking behind every \"Get a quote\" button",
    "Social share images generated per page, with SEO keywords and descriptions set",
  ],
  results: [
    "The site is live with services, packages, case studies and a booking flow, using graphics created with Replicate.",
  ],
  closing: "Social Catalyst's site doesn't tell owners they have a problem. It shows them.",
  cover: {
    src: "/images/work/covers/social-catalyst.jpg",
    alt: "Phone screen showing LinkedIn, Instagram, TikTok and YouTube apps",
  },
  images: [
    {
      src: "/images/work/social-catalyst-home.jpg",
      alt: "Social Catalyst B2B social media agency homepage",
    },
    {
      src: "/images/work/social-catalyst-problem.jpg",
      alt: "Problem section with Google, Instagram and LinkedIn mock-ups on Social Catalyst",
    },
    {
      src: "/images/work/stock/social-catalyst-stock-1.jpg",
      alt: "Placeholder visual — real project screenshot coming soon",
    },
    {
      src: "/images/work/stock/social-catalyst-stock-2.jpg",
      alt: "Placeholder visual — real project screenshot coming soon",
    },
    {
      src: "/images/work/stock/social-catalyst-stock-3.jpg",
      alt: "Placeholder visual — real project screenshot coming soon",
    },
  ],
};

export default project;
