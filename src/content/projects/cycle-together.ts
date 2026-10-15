import type { Project } from "./types";

const project: Project = {
  slug: "cycle-together",
  title: "Cycle Together",
  client: "Cycle Together",
  country: "UK",
  market: "UK (London)",
  industry: "Community and sport: inclusive cycling programmes",
  role: "Redesigned the existing WordPress website",
  services: ["websites"],
  serviceLabel: "Website Development",
  stack: ["WordPress"],
  year: "2026",
  liveUrl: "https://cycletogether.com",
  summary:
    "A WordPress redesign for Cycle Together, a London organisation running free beginner cycling programmes and a supportive community for women of colour.",
  problem:
    "The organisation serves several audiences at once: beginners, community members, partners and funders. The site has to route each of them to the right place without overwhelming first-time visitors.",
  solution:
    "I redesigned the WordPress site around a \"come ride with us\" hero, followed by sections for courses, community, the resource hub, the prison programme and partnerships, then partner logos and member quotes.",
  keyFeatures: [
    "Grouped navigation: What we do, About, Partnerships, Memberships, Contact",
    "Audience sections on the homepage, each with its own call to action",
    "Video embeds and partner logos for trust",
    "Mailchimp sign-up for the community",
  ],
  results: [
    "The redesigned site is live and routes beginners, members and partners to their own sections.",
  ],
  closing:
    "A good redesign keeps what works and makes the next step obvious. For Cycle Together, that step is getting on a bike.",
  cover: {
    src: "/images/work-2.svg",
    alt: "[TODO: replace with a real screenshot of the Cycle Together homepage]",
  },
  images: [
    {
      src: "/images/work-2.svg",
      alt: "[TODO: replace with a screenshot of the Cycle Together homepage]",
    },
    {
      src: "/images/work-3.svg",
      alt: "[TODO: replace with a screenshot of the Our Courses page]",
    },
  ],
};

export default project;
