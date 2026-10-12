/* Shape of a single case study. Every file in this folder follows it. */
export type Project = {
  slug: string;
  title: string;
  client: string;
  country: string;
  /** Must match one of the service slugs: "shopify" | "automation" | "websites" */
  service: "shopify" | "automation" | "websites";
  serviceLabel: string;
  year: string;
  summary: string;
  problem: string;
  solution: string;
  results: { value: string; label: string }[];
  cover: { src: string; alt: string };
  images: { src: string; alt: string }[];
  featured?: boolean;
};
