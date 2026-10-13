/* =============================================================
   ALL WEBSITE TEXT LIVES HERE.
   To change any wording on the site, edit this file only.
   Anything marked [TODO ...] is a placeholder for Husnain
   to replace with real information.
   ============================================================= */

export const site = {
  brand: "Vision Craft",
  brandFull: "Vision Craft by Husnain",
  name: "Husnain",
  role: "Shopify & Automation Specialist",
  email: "[TODO: your email address]",
  phone: "[TODO: your phone number]",
  location: "Working with clients in Sweden, UAE, US & Estonia",
  calendlyUrl: "[TODO: your Calendly or booking link]",
  availability: "Available for projects",
  year: 2026,
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
];

/* The orange button in the top-right corner of every page */
export const navCta = { label: "Let's talk", href: "/contact" };

export const socials = [
  { label: "LinkedIn", href: "[TODO: your LinkedIn URL]" },
  { label: "Instagram", href: "[TODO: your Instagram URL]" },
  { label: "X / Twitter", href: "[TODO: your X profile URL]" },
  { label: "Email", href: "mailto:[TODO: your email address]" },
];

/* ---------------------------------- HERO --------------------------------- */
export const hero = {
  badge: site.role,
  availability: site.availability,
  /* Each item is one line of the big heading. The word in `highlight`
     is shown in the accent colour. */
  headline: ["Hi, I'm Husnain.", "I build stores", "that sell."],
  highlight: "sell.",
  intro:
    "I'm a freelancer who builds and rescues Shopify stores, automates the manual admin your team repeats every day, and ships websites that bring in enquiries.",
  primaryCta: { label: "Start a project", href: "/contact" },
  secondaryCta: { label: "See my work", href: "/work" },
  socialProof: {
    /* Replace [TODO] with your real numbers, e.g. "30+" and "4.9" */
    value: "[TODO]+",
    label: "Happy clients",
    rating: "[TODO]/5",
  },
  /* Big photo of you on the right */
  portrait: {
    src: "/images/portrait.svg",
    alt: "Husnain, freelance Shopify and automation specialist",
  },
  /* Two small tilted previews of your work that float over the photo */
  previews: [
    { src: "/images/hero-2.svg", alt: "A Shopify store I designed" },
    { src: "/images/hero-3.svg", alt: "An automation workflow I built" },
  ],
};

/* -------------------------------- MARQUEE -------------------------------- */
export const marqueeLabel = "Tools & platforms I work with every day";

export const marquee = [
  "Shopify",
  "Shopify Plus",
  "Liquid",
  "Make.com",
  "Zapier",
  "n8n",
  "GoHighLevel",
  "Webflow",
  "WordPress",
  "Klaviyo",
  "Google Sheets",
  "Figma",
];

/* --------------------------------- ABOUT --------------------------------- */
export const about = {
  eyebrow: "About me",
  /* This sentence fills in word by word as you scroll */
  statement:
    "I help small businesses look sharper online and stop losing hours to manual work. You deal with me directly, from the first call to launch day.",
  body: "No account managers and no juniors doing the real work behind the scenes. Just one person who knows your project end to end and cares how it turns out, for clients across Sweden, the UAE, the US and Estonia.",
  cta: { label: "More about me", href: "/about" },
  /* Silent looping video next to the stats. To swap it, drop your own
     .mp4 into public/videos/ and change `src` (and `poster`, a still
     frame shown while the video loads). */
  video: {
    src: "/videos/about-placeholder.mp4",
    poster: "/videos/about-placeholder-poster.jpg",
    label: "[TODO: describe your video] Placeholder stock clip of hands typing on a laptop",
  },
  image: {
    src: "/images/about.svg",
    alt: "Husnain, freelance Shopify and automation specialist",
  },
  /* Replace [TODO] with real numbers, e.g. "40+" */
  stats: [
    { value: "[TODO]+", label: "Projects delivered" },
    { value: "[TODO]+", label: "Years freelancing" },
    { value: "4", label: "Countries I work in" },
  ],
};

/* -------------------------------- SERVICES ------------------------------- */
export const services = [
  {
    slug: "shopify",
    number: "01",
    /* icon options: "store" | "automation" | "website" */
    icon: "store",
    title: "Shopify stores",
    short:
      "New stores built from scratch, and redesigns of tired stores that get visitors but not sales.",
    tags: ["New builds", "Redesigns", "Speed & mobile"],
    description:
      "Whether you're launching your first product or sitting on a store that gets traffic but no orders, I design and build Shopify storefronts around one job: turning a visitor into a customer.",
    includes: [
      "New store builds from scratch",
      "Redesigns of outdated or poorly selling stores",
      "Product and collection page design",
      "Checkout, apps and payment setup",
      "Theme customisation in Liquid",
      "Speed and mobile optimisation",
    ],
    forWho:
      "Best for small brands launching a store, or anyone whose current store looks dated and isn't selling.",
  },
  {
    slug: "automation",
    number: "02",
    icon: "automation",
    title: "Business process automation",
    short:
      "Order confirmations, data entry into sheets, follow-ups and status updates. The repetitive internal work, running on its own.",
    tags: ["Confirmations", "Data entry", "Follow-ups"],
    description:
      "Order confirmations typed out by hand. Data copied into spreadsheets. Follow-ups someone has to remember. Status updates chased over WhatsApp. I map those processes and rebuild them so they run themselves, quietly, in the background.",
    includes: [
      "Automated order and booking confirmations",
      "Removing manual data entry into sheets and CRMs",
      "Automatic follow-up sequences for leads and customers",
      "Internal status updates and team notifications",
      "Connecting the tools you already pay for",
      "A written map of every process before I build it",
    ],
    forWho:
      "Best for small teams where one or two people spend hours a week on repetitive admin.",
  },
  {
    slug: "websites",
    number: "03",
    icon: "website",
    title: "Websites",
    short:
      "Fast, clean business websites built on the platform that fits how you work.",
    tags: ["GoHighLevel", "Webflow", "WordPress"],
    description:
      "A website should bring you enquiries, not just exist. I build on the platform that genuinely fits how you work: GoHighLevel when you want leads and follow-up in one place, Webflow for design-led sites, WordPress when you need full control.",
    includes: [
      "GoHighLevel funnels, sites and pipelines",
      "Webflow design and build",
      "WordPress sites you can actually edit yourself",
      "Lead forms, booking and CRM connections",
      "On-page SEO basics done properly",
      "A short handover walkthrough so nothing is a mystery",
    ],
    forWho:
      "Best for service businesses that need a credible site and a steady flow of enquiries.",
  },
] as const;

export const servicesSection = {
  eyebrow: "What I do",
  heading: "Three things I do really well",
  sub: "I keep my services deliberately narrow, so every project gets my full focus and real expertise, not a little bit of everything.",
  cta: { label: "See all services", href: "/services" },
  cardLink: "Learn more",
};

/* ------------------------------ CASE STUDIES ----------------------------- */
export const workSection = {
  eyebrow: "Selected work",
  heading: "Recent projects",
  sub: "A few projects that show how I work and what changed for the business afterwards.",
  cta: { label: "View all projects", href: "/work" },
};

/* ------------------------------ TESTIMONIALS ----------------------------- */
export const testimonialsSection = {
  eyebrow: "Kind words",
  heading: "What clients say",
  sub: "Tap a name to read what they said about working with me.",
};

export const testimonials = [
  {
    quote: "[TODO: client quote]",
    name: "[TODO: client name]",
    title: "[TODO: role, company]",
    country: "[TODO: country]",
  },
  {
    quote: "[TODO: client quote]",
    name: "[TODO: client name]",
    title: "[TODO: role, company]",
    country: "[TODO: country]",
  },
  {
    quote: "[TODO: client quote]",
    name: "[TODO: client name]",
    title: "[TODO: role, company]",
    country: "[TODO: country]",
  },
];

/* ---------------------------------- FAQ ---------------------------------- */
export const faqSection = {
  eyebrow: "FAQ",
  heading: "Questions I get asked",
};

export const faqs = [
  {
    q: "Do I work with you directly, or with a team?",
    a: "Directly with me, always. I'm a freelancer, not an agency. You get one person who knows your project end to end.",
  },
  {
    q: "How long does a Shopify store take?",
    a: "A redesign of an existing store is usually quicker than a build from scratch. I'll give you an exact timeline after our first call, once I've seen what you have. [TODO: add your typical timelines.]",
  },
  {
    q: "What does 'business process automation' actually mean?",
    a: "It means taking the repetitive internal work your team does by hand (confirming orders, typing data into spreadsheets, chasing follow-ups, posting status updates) and rebuilding it so it happens automatically. It is not just auto-replies to messages.",
  },
  {
    q: "Which platform should my website be on?",
    a: "It depends on what you need. GoHighLevel if leads and follow-up matter most, Webflow if design does, WordPress if you need full control and flexibility. I'll recommend one honestly on our call.",
  },
  {
    q: "Do you work across time zones?",
    a: "Yes. I work with clients in Sweden, the UAE, the US and Estonia, and I keep overlapping hours with each of them. [TODO: add your working hours.]",
  },
  {
    q: "How do you charge?",
    a: "Fixed project pricing, agreed before I start, so there are no surprise invoices. Starting prices for each service are on the pricing page.",
  },
];

/* ------------------------------- CONTACT CTA ----------------------------- */
export const contactCta = {
  eyebrow: "Let's work together",
  heading: "Got a store or a process that needs fixing?",
  sub: "Tell me what's not working. I'll tell you honestly whether I'm the right person for it, and what it would take.",
  primaryCta: { label: "Start a project", href: "/contact" },
  secondaryCta: { label: "Book a call", href: "/contact" },
};

export const footer = {
  tagline:
    "I'm Husnain, a freelancer building Shopify stores, business automations and websites for small businesses that want to sell more and work less.",
  copyright: `© ${site.year} ${site.brandFull}`,
};
