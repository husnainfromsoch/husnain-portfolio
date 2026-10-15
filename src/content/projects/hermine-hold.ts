import type { Project } from "./types";

const project: Project = {
  slug: "hermine-hold",
  title: "Hermine Hold",
  client: "Hermine Hold",
  country: "Sweden",
  market: "Sweden, selling across Europe, the UK and US",
  industry: "Fashion: women's hair accessories",
  role: "Built the store from scratch and launched it; content creation, post design and posting",
  services: ["shopify", "social"],
  serviceLabel: "Shopify Development, Social Media Management",
  stack: ["Shopify", "Liquid"],
  year: "2026",
  liveUrl: "https://herminehold.com",
  summary:
    "A Shopify storefront for a Stockholm brand selling claw clips, barrettes, scrunchies and silk scarves to women across Europe.",
  problem:
    "The brand's style is bold and Scandinavian. The store had to look like the brand, sell to many countries, and connect to its social channels where most customers discover it.",
  solution:
    "I built the storefront on Shopify with a bold hero, a scrolling brand marquee, featured products, a brand video and featured collections for barrettes, scarves, hair clips and scrunchies. The homepage pulls in TikTok, Instagram, Facebook and YouTube posts. Separately, I created content, designed posts and published them on the brand's social channels.",
  keyFeatures: [
    "Statement hero: a typographic headline that sets the brand's tone immediately",
    "Featured collections: four product types, one click each",
    "Social wall: TikTok, Instagram, Facebook and YouTube embeds keep the store and socials connected",
    "International selling: country and currency selector for 40+ markets",
    "Student offer banner for a key audience",
  ],
  results: [
    "The store is live and selling across Europe, the UK and the US.",
    "The brand's social channels are kept active with regular posts designed to match the store.",
  ],
  closing:
    "Hermine Hold needed a store with as much attitude as its products. The store and the social feed now tell the same story.",
  cover: {
    src: "/images/work-3.svg",
    alt: "[TODO: replace with a real screenshot of the Hermine Hold homepage]",
  },
  images: [
    {
      src: "/images/work-3.svg",
      alt: "[TODO: replace with a screenshot of the Hermine Hold homepage]",
    },
    {
      src: "/images/work-4.svg",
      alt: "[TODO: replace with a screenshot of the Hermine Hold featured collections]",
    },
  ],
  featured: true,
};

export default project;
