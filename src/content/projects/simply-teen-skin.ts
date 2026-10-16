import type { Project } from "./types";

const project: Project = {
  slug: "simply-teen-skin",
  title: "Simply Teen Skin",
  client: "Simply Teen Skin",
  country: "Sweden",
  market: "Sweden",
  industry: "Skincare for teenagers",
  role: "Built the store from scratch and launched it; social media posts and content",
  services: ["shopify", "social"],
  serviceLabel: "Shopify Development, Social Media Management",
  stack: ["Shopify", "Liquid"],
  year: "2026",
  liveUrl: "https://simplyteenskin.se",
  summary:
    "A Swedish-language Shopify store for a teen skincare brand, designed to make a four-step routine easy to understand and buy, plus ongoing social content.",
  problem:
    "Teens and their parents need to understand quickly which product does what and in which order, in Swedish, with proof that it works on real skin.",
  solution:
    "I built the store on Shopify in Swedish and organised the homepage around the routine: bestsellers, then a numbered four-step daily routine, then before-and-after stories and customer videos. I also created posts and content for the brand's social channels and published them.",
  keyFeatures: [
    "Numbered four-step routine: each product is labelled Step 01–04 with add-to-cart, so buying the full routine is one scroll",
    "Shoppable video cards sitting next to the product shown",
    "Before-and-after cards tied to the products used",
    "Trust marquee: free shipping over 499 kr, vegan and cruelty-free, 30-day returns",
    "Multi-currency checkout with Klarna among the payment options",
  ],
  results: [
    "The store is live in Swedish with the full product range and a routine-first homepage.",
    "The brand's social channels have regular content designed and posted alongside the store.",
  ],
  closing:
    "Simply Teen Skin turned a product range into a routine anyone can follow, with the social content to match.",
  cover: {
    src: "/images/work/covers/simply-teen-skin.jpg",
    alt: "Pink skincare products laid out on a soft pink background",
  },
  images: [
    {
      src: "/images/work/simply-teen-skin-home.jpg",
      alt: "Simply Teen Skin Swedish skincare Shopify homepage",
    },
    {
      src: "/images/work/simply-teen-skin-products.jpg",
      alt: "Simply Teen Skin bestselling products section on the homepage",
    },
  ],
  featured: true,
};

export default project;
