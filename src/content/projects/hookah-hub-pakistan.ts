import type { Project } from "./types";

const project: Project = {
  slug: "hookah-hub-pakistan",
  title: "Hookah Hub Pakistan",
  client: "Hookah Hub Pakistan",
  country: "Pakistan",
  market: "Pakistan",
  industry: "Specialty retail: hookahs, flavours and accessories",
  role: "Built the store from scratch and launched it; built the WhatsApp automation",
  services: ["shopify", "automation"],
  serviceLabel: "Shopify Development, Business Automation",
  stack: ["Shopify", "Liquid", "n8n", "WhatsApp"],
  year: "2026",
  liveUrl: "https://hookahubpakistan.com",
  summary:
    "A full Shopify store for one of Pakistan's online hookah retailers, with an n8n workflow that answers customers and confirms orders on WhatsApp.",
  problem:
    "A catalogue that runs from a budget accessory to a premium hookah has to stay easy to browse. And in Pakistan, much of the buying conversation happens on WhatsApp, which takes staff time on every order.",
  solution:
    "I built the store from scratch on Shopify and set up the catalogue structure: seven categories in the main menu, with hookahs split into Premium, Exclusive and Budget Friendly. I then built an n8n workflow connected to WhatsApp that handles customer questions and confirms orders automatically.",
  keyFeatures: [
    "Category-first menu: buyers jump straight to hookahs, bowls, coals, devices, accessories or flavours",
    "Collection carousels on the homepage: every category is browsable without leaving the page",
    "Customer video reviews build trust for high-priced items",
    "Age verification gate before browsing",
    "WhatsApp automation: questions and order confirmations are handled by an n8n workflow",
  ],
  results: [
    "The store is live with a full catalogue across seven categories.",
    "Customer questions and order confirmations on WhatsApp now run through an automated workflow instead of a person typing each reply.",
  ],
  closing:
    "Hookah Hub shows what I like to build most: a store that sells, and a system behind it that saves the team time on every order.",
  cover: {
    src: "/images/work/covers/hookah-hub-pakistan.jpg",
    alt: "Hookah with smoke in a warmly lit lounge",
  },
  images: [
    {
      src: "/images/work/hookah-hub-pakistan-home.jpg",
      alt: "Hookah Hub Pakistan Shopify homepage with a featured premium hookah",
    },
    {
      src: "/images/work/hookah-hub-pakistan-product.jpg",
      alt: "Hookah Hub Pakistan product page for a premium hookah",
    },
  ],
  featured: true,
};

export default project;
