/* =============================================================
   ALL WEBSITE TEXT LIVES HERE.
   To change any wording on the site, edit this file only.
   Anything marked [TODO: ...] is a placeholder for Husnain
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
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Pricing", href: "/pricing" },
];

export const socials = [
  { label: "LinkedIn", href: "[TODO: your LinkedIn URL]" },
  { label: "Instagram", href: "[TODO: your Instagram URL]" },
  { label: "X / Twitter", href: "[TODO: your X profile URL]" },
  { label: "Email", href: "mailto:[TODO: your email address]" },
];

/* ---------------------------------- HERO --------------------------------- */
export const hero = {
  badge: site.availability,
  greeting: "Hi, I'm Husnain",
  headlineTop: "I build Shopify",
  headlineBottom: "stores that sell",
  intro:
    "I'm a freelance Shopify designer and automation specialist. I build and rescue online stores, take the manual admin work off your team's hands, and ship fast websites that make a small business look serious.",
  primaryCta: { label: "Start a project", href: "/contact" },
  secondaryCta: { label: "See my work", href: "/work" },
  socialProof: {
    value: "[TODO: real number]",
    label: "happy clients",
    detail: "[TODO: real rating] / 5 average rating",
  },
  images: [
    { src: "/images/hero-1.svg", alt: "A Shopify storefront I designed" },
    { src: "/images/hero-2.svg", alt: "An automation workflow I built" },
    { src: "/images/hero-3.svg", alt: "A website landing page I built" },
  ],
};

/* -------------------------------- MARQUEE -------------------------------- */
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
  "Google Sheets API",
  "Figma",
];

/* --------------------------------- ABOUT --------------------------------- */
export const about = {
  eyebrow: "About me",
  heading: "One person. Fewer handoffs. Work that actually ships.",
  body: [
    "I'm Husnain, a freelancer working with small businesses across Sweden, the UAE, the US and Estonia. You talk to me directly — no account manager, no team of juniors doing the real work behind the scenes.",
    "Most of my clients come to me with the same two problems: a store that gets visitors but not sales, and a team quietly drowning in manual admin. I fix both — the shopfront and the machinery behind it.",
  ],
  image: {
    src: "/images/about.svg",
    alt: "Husnain, freelance Shopify and automation specialist",
  },
  stats: [
    { value: "[TODO: real number]", label: "Projects delivered" },
    { value: "[TODO: real number]", label: "Years freelancing" },
    { value: "[TODO: real number]", label: "Countries worked in" },
    { value: "[TODO: real number]", label: "Hours/month automated away" },
  ],
};

/* -------------------------------- SERVICES ------------------------------- */
export const services = [
  {
    slug: "shopify",
    number: "01",
    title: "Shopify stores",
    short:
      "New stores built from scratch, and redesigns of tired stores that aren't converting.",
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
    title: "Business process automation",
    short:
      "I automate the internal manual work your team repeats every single day.",
    description:
      "Order confirmations typed out by hand. Data copied into spreadsheets. Follow-ups someone has to remember. Status updates chased over WhatsApp. I map those processes and rebuild them so they run themselves — quietly, in the background.",
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
    title: "Websites",
    short:
      "Fast, clean business websites on GoHighLevel, Webflow or WordPress.",
    description:
      "A website should bring you enquiries, not just exist. I build on the platform that genuinely fits how you work — GoHighLevel when you want leads and follow-up in one place, Webflow for design-led sites, WordPress when you need full control.",
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
];

export const servicesSection = {
  eyebrow: "What I do",
  heading: "Three things, done properly",
  sub: "I deliberately keep my services narrow. These are the three I'm genuinely good at.",
};

/* ------------------------------ CASE STUDIES ----------------------------- */
export const workSection = {
  eyebrow: "Selected work",
  heading: "Recent projects",
  sub: "A few projects that show how I work. [TODO: replace these with your real case studies.]",
  cta: { label: "View all work", href: "/work" },
};

/* ------------------------------ TESTIMONIALS ----------------------------- */
export const testimonialsSection = {
  eyebrow: "Kind words",
  heading: "What clients say",
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
    a: "It means taking the repetitive internal work your team does by hand — confirming orders, typing data into spreadsheets, chasing follow-ups, posting status updates — and rebuilding it so it happens automatically. It is not just auto-replies to messages.",
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
  eyebrow: "Let's talk",
  heading: "Got a store or a process that needs fixing?",
  sub: "Tell me what's not working. I'll tell you honestly whether I'm the right person for it — and what it would take.",
  primaryCta: { label: "Start a project", href: "/contact" },
  secondaryCta: { label: "Book a call", href: "/contact" },
};

export const footer = {
  tagline:
    "Shopify stores, business automation and websites — built by one person who cares how it turns out.",
  copyright: `© ${site.year} ${site.brandFull}. All rights reserved.`,
};
