import type { Project } from "./types";

const project: Project = {
  slug: "soovita",
  title: "Soovita",
  client: "Soovita",
  country: "Estonia",
  market: "Estonia (Tallinn)",
  industry: "Marketing for restaurants, cafés and shisha lounges",
  role: "Built the website from scratch; created AI visuals; created posts and content and posted on social media",
  services: ["websites", "ai-visuals", "social"],
  serviceLabel: "Website Development, AI Visuals & Content, Social Media Management",
  stack: ["Next.js", "Claude Code", "AI image tools"],
  year: "2026",
  liveUrl: "https://soovita.com",
  summary:
    "A custom website for Soovita, which runs Instagram, Google and delivery-app listings for venues in Tallinn, plus the AI visuals and social content behind it.",
  problem:
    "Venue owners are busy and sceptical of agencies. The site had to speak their language (empty tables, unanswered reviews, blurry delivery photos) and show packages upfront.",
  solution:
    "I built the site in Next.js with Claude Code: a hero with a free venue audit, the six channels Soovita runs, three problem cards, services, packages, a four-step process and an FAQ. I created the site visuals with AI and produced and published Soovita's own social posts.",
  keyFeatures: [
    "Channel strip with Instagram, Google, Facebook, TikTok, Wolt and Bolt Food",
    "Problem cards written from the owner's side (\"it's 7pm on a Tuesday and half the tables are empty\")",
    "Package pricing shown clearly on the homepage",
    "Four-step process and plain-language FAQ",
  ],
  results: [
    "The site is live with full services and packages, supported by AI visuals and an active social feed.",
  ],
  closing:
    "Soovita got its website, its visuals and its social feed from one builder, which kept the brand consistent everywhere.",
  cover: {
    src: "/images/work/covers/soovita.jpg",
    alt: "Warmly lit café and lounge interior",
  },
  images: [
    {
      src: "/images/work/soovita-home.jpg",
      alt: "Soovita restaurant marketing website homepage",
    },
    {
      src: "/images/work/soovita-packages.jpg",
      alt: "Soovita marketing packages for restaurants and cafés",
    },
    {
      src: "/images/work/stock/soovita-stock-1.jpg",
      alt: "Placeholder visual — real project screenshot coming soon",
    },
    {
      src: "/images/work/stock/soovita-stock-2.jpg",
      alt: "Placeholder visual — real project screenshot coming soon",
    },
    {
      src: "/images/work/stock/soovita-stock-3.jpg",
      alt: "Placeholder visual — real project screenshot coming soon",
    },
    {
      src: "/images/work/stock/soovita-stock-4.jpg",
      alt: "Placeholder visual — real project screenshot coming soon",
    },
  ],
};

export default project;
