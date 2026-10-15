/* Shape of a single case study. Every file in this folder follows it. */
export type Project = {
  slug: string;
  title: string;
  client: string;
  /** Short country label, shown on the Work grid card */
  country: string;
  /** Fuller market description, shown on the case study page */
  market: string;
  industry: string;
  role: string;
  /** Must match slugs in site.ts `services` */
  services: ("shopify" | "websites" | "automation" | "ai-visuals" | "social")[];
  /** Comma-joined display label built from `services` */
  serviceLabel: string;
  stack: string[];
  year: string;
  /** External URL to the live client site, opened in a new tab */
  liveUrl?: string;
  summary: string;
  problem: string;
  solution: string;
  keyFeatures: string[];
  /** Real, qualitative outcomes — no invented numbers */
  results: string[];
  closing: string;
  cover: { src: string; alt: string };
  images: { src: string; alt: string }[];
  featured?: boolean;
};
