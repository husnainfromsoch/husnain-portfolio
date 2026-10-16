/* =============================================================
   ALL WEBSITE TEXT LIVES HERE.
   To change any wording on the site, edit this file only.
   Anything marked [TODO ...] is a placeholder for Husnain
   to replace with real information.

   Copy on this site is sourced from the confirmed project facts
   in content-master.md.docx (11 live client projects, checked
   16 Oct 2026). No invented numbers, testimonials or claims.
   ============================================================= */

export const site = {
  brand: "Vision Craft",
  brandFull: "Vision Craft by Husnain",
  name: "Husnain Ali",
  role: "Web & Automation Builder",
  email: "husnainshopifyd@gmail.com",
  phone: "+92 324 4763035",
  location: "Based in Lahore, Pakistan — working with clients in Sweden, Estonia, Switzerland, the UK and Pakistan",
  calendlyUrl: "[TODO: your Cal.com or Calendly link]",
  availability: "Available for projects",
  year: 2026,
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "Contact", href: "/contact" },
];

/* The orange button in the top-right corner of every page */
export const navCta = { label: "Book a free call", href: "/contact" };

/* The four ways people can reach me. `icon` picks the logo shown in the
   footer: "linkedin" | "instagram" | "whatsapp" | "email". */
export const socials = [
  {
    label: "LinkedIn",
    note: "Work updates",
    href: "https://www.linkedin.com/in/husnain-ali3411",
    icon: "linkedin",
  },
  {
    label: "Instagram",
    note: "Behind the builds",
    href: "[TODO: your Instagram URL]",
    icon: "instagram",
  },
  {
    label: "WhatsApp",
    note: "Fastest reply",
    href: "https://wa.me/923244763035",
    icon: "whatsapp",
  },
  {
    label: "Email",
    note: "For briefs and files",
    href: "mailto:husnainshopifyd@gmail.com",
    icon: "email",
  },
] as const;

/* ---------------------------------- HERO --------------------------------- */
export const hero = {
  badge: "Web & Automation Builder · Lahore, working worldwide",
  availability: site.availability,
  /* Each item is one line of the big heading. The word in `highlight`
     is shown in the accent colour. */
  headline: ["I build the store,", "the website and", "the systems behind them."],
  highlight: "behind them.",
  intro:
    "Shopify stores, custom websites and n8n automations for small businesses that are still doing too much by hand. You get one builder who thinks about how your business runs, not just how it looks.",
  primaryCta: { label: "Book a free call", href: "/contact" },
  secondaryCta: { label: "See my work", href: "/work" },
  socialProof: {
    value: "11+",
    label: "Live projects",
    /* Not a star rating — a true line, since no verified rating exists yet */
    rating: "Sweden · Estonia · Switzerland · UK · Pakistan",
  },
  /* Big photo of you on the right */
  portrait: {
    src: "/images/Husnain-Hero.jpg",
    alt: "Husnain Ali, web and automation builder, with website analytics on the screen behind him",
  },
  /* Two small tilted previews of your work that float over the photo */
  previews: [
    { src: "/images/Husnain-hero-2.jpg", alt: "Husnain Ali working on a laptop" },
    { src: "/images/Hero-3rd.jpg", alt: "A website homepage Husnain built, shown on a laptop" },
  ],
};

/* -------------------------------- MARQUEE -------------------------------- */
export const marqueeLabel = "Platforms and tools I build with";

/* `logo` picks the icon shown before each name. Available logos:
   shopify, figma, webflow, gohighlevel, wordpress, claude, vercel,
   github, n8n, social */
export const marquee = [
  { name: "Shopify", logo: "shopify" },
  { name: "WordPress", logo: "wordpress" },
  { name: "Webflow", logo: "webflow" },
  { name: "GoHighLevel", logo: "gohighlevel" },
  { name: "Claude Code", logo: "claude" },
  { name: "n8n", logo: "n8n" },
  { name: "GitHub", logo: "github" },
  { name: "Vercel", logo: "vercel" },
] as const;

/* --------------------------------- ABOUT --------------------------------- */
export const about = {
  eyebrow: "About me",
  /* This sentence fills in word by word as you scroll */
  statement:
    "I'm an operations analyst who builds the store, the website and the automation behind it, for small businesses doing too much by hand.",
  body: "No account managers and no juniors behind the scenes. I map how your business runs, then build the Shopify store, website or n8n workflow that fixes what's slowing it down, for founders and small teams in Sweden, Estonia, Switzerland, the UK and Pakistan.",
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
    alt: "Husnain Ali, web and automation builder",
  },
  stats: [
    { value: "11+", label: "Live projects" },
    { value: "5", label: "Countries served" },
    { value: "5", label: "Services, one builder" },
  ],
};

/* ------------------------------ ABOUT PAGE ------------------------------- */
export const aboutPage = {
  hero: {
    eyebrow: "About me",
    heading: "Operations analyst by title. Builder by craft.",
    intro:
      "I'm Husnain. I spend my days looking at how businesses actually run: where work waits, where it gets done twice, where someone copies the same thing from one tool into another. Then I build the thing that fixes it.",
    portrait: {
      src: "/images/Husnain-hero-2.jpg",
      alt: "Husnain Ali working on a laptop",
    },
  },
  story: {
    eyebrow: "My story",
    heading: "How I got here",
    paragraphs: [
      "I came to building from the operations side. My work started with diagnosing processes and finding where time was being lost. Over time I stopped handing over recommendations and started building the fixes myself: first websites and stores, then the automations that run behind them.",
      "Today I build on Shopify, WordPress, Webflow and GoHighLevel, write custom sites with Claude Code, and run automation in n8n. I choose whichever platform fits the job, not just the one I'm most comfortable in.",
      "I work with small businesses across Sweden, Estonia, Switzerland, the UK and Pakistan. Different time zones, same job: understand what's actually slowing a business down, then build the thing that fixes it.",
    ],
    /* Small scrolling photo gallery next to the story text. Each image
       drifts at its own speed as you scroll past this section. */
    gallery: {
      leftTop: {
        src: "/images/about/My story-section left top side image.jpg",
        alt: "Husnain Ali at work, top-left photo in the story gallery",
      },
      leftBottom: {
        src: "/images/about/My story-section left bottom side image.jpg",
        alt: "Husnain Ali at work, bottom-left photo in the story gallery",
      },
      right: {
        src: "/images/about/My story-section right side image.jpg",
        alt: "Husnain Ali at work, right-side photo in the story gallery",
      },
    },
  },
  process: {
    eyebrow: "How I work",
    heading: "How a project runs",
    sub: "Structure first, direct communication throughout, no surprises along the way.",
    steps: [
      {
        number: "01",
        title: "Discovery and audit",
        description:
          "We look at what you have, what's slowing you down, and what the site or system actually has to do.",
      },
      {
        number: "02",
        title: "Build and connect",
        description:
          "I build the store, website or workflow and connect it to the tools you already use.",
      },
      {
        number: "03",
        title: "Launch and improve",
        description:
          "We go live, test it with real use, and fix what needs fixing.",
      },
    ],
  },
  tools: {
    eyebrow: "Platforms I use",
    heading: "What I build with",
    sub: "I pick whichever platform fits the job, not just the one I'm most comfortable in.",
  },
  stats: {
    eyebrow: "What I've built",
    heading: "11 projects, five services",
    items: [
      { value: "4", label: "Shopify stores" },
      { value: "7", label: "Websites" },
      { value: "4", label: "n8n automation systems" },
      { value: "4", label: "AI visual projects" },
      { value: "3", label: "Social media accounts" },
    ],
  },
};

/* -------------------------------- SERVICES ------------------------------- */
export const services = [
  {
    slug: "shopify",
    number: "01",
    /* icon options: "store" | "automation" | "website" | "social" | "terminal" | "visuals" */
    icon: "store",
    title: "Shopify Development",
    short:
      "New stores built from scratch, and tired stores rebuilt so they're ready to sell.",
    tags: ["New builds", "Multi-language", "Launch-ready"],
    /* Card image (home carousel + services page). Files live in public/images/services/ */
    thumbnail: {
      src: "/images/services/shopify.jpg",
      alt: "Laptop showing the Shopify \"Start selling\" page on a desk",
    },
    description:
      "I build Shopify stores from scratch and rebuild stores that aren't selling. You get a store that looks like your brand, works on every phone, and is ready to take orders on launch day.",
    includes: [
      "Store setup, theme build and custom Liquid sections",
      "Collections, product pages and navigation planned around how customers shop",
      "Language and currency settings for each market",
      "Trust sections: reviews, before-and-after, how-to video, FAQ",
      "Payment, shipping and policy pages set up",
      "Domain connection and launch",
    ],
    forWho:
      "Best for new brands launching their first store, or store owners whose current theme looks dated, loads slowly or doesn't convert.",
  },
  {
    slug: "websites",
    number: "02",
    icon: "website",
    title: "Website Development",
    short:
      "Custom-coded, WordPress, Webflow or GoHighLevel sites, chosen to fit your business, not my habits.",
    tags: ["Custom code", "WordPress", "GoHighLevel"],
    thumbnail: {
      src: "/images/services/websites.jpg",
      alt: "Desktop screen with website code next to a landing page design",
    },
    description:
      "I pick the platform that fits your business: a custom-coded site when you need speed and full control, WordPress or Webflow when you want to edit it yourself, GoHighLevel when the site has to feed your CRM.",
    includes: [
      "Page structure and copy layout planned around one clear action",
      "Design and build on the right platform: custom Next.js, WordPress, Webflow or GoHighLevel",
      "Booking, audit and lead forms connected to your calendar or CRM",
      "Blog, case study or guide sections you can keep adding to",
      "Basic on-page SEO: titles, descriptions, headings, image alt text",
      "Domain, hosting setup and launch",
    ],
    forWho:
      "Best for founders, agencies, consultants, coaches and local businesses that need a site to bring in enquiries.",
  },
  {
    slug: "automation",
    number: "03",
    icon: "automation",
    title: "Business Automation",
    short:
      "n8n workflows that take over lead follow-up, order confirmation, task routing and content publishing.",
    tags: ["WhatsApp", "Lead follow-up", "Content pipelines"],
    thumbnail: {
      src: "/images/services/automation-dashboard.jpg",
      alt: "Laptop and phone on a desk showing the same live business dashboard",
    },
    description:
      "If someone on your team copies data, sends the same reply or chases the same follow-up every day, that work can run on its own. I build n8n workflows that take it over and connect the tools you already use.",
    includes: [
      "A map of the manual steps worth automating first",
      "n8n workflows built, tested and connected to your tools",
      "WhatsApp, email and lead follow-up automation",
      "AI steps where they help: drafting, summarising, creating visuals",
      "Team task routing and internal notifications",
      "Handover so you know what each workflow does",
    ],
    forWho:
      "Best for online stores answering the same customer questions, and teams chasing leads or publishing content by hand.",
  },
  {
    slug: "ai-visuals",
    number: "04",
    icon: "visuals",
    title: "AI Visuals & Content",
    short:
      "On-brand images for your site and socials, made with AI instead of a photo shoot.",
    tags: ["Website visuals", "Social visuals", "On-brand"],
    thumbnail: {
      src: "/images/services/ai-visuals-editing.jpg",
      alt: "Laptop with image editing software open on a bold red photo",
    },
    description:
      "Stock photos make you look like everyone else, and shoots are slow and expensive. I create AI visuals that match your brand for your website, services and social posts.",
    includes: [
      "A visual direction that matches your brand colours and tone",
      "Website hero, section and service images",
      "Social media visuals sized for each platform",
      "Image files ready to upload",
    ],
    forWho:
      "Best for agencies, consultants and brands that need imagery for every page and run out of photos fast.",
  },
  {
    slug: "social",
    number: "05",
    icon: "social",
    title: "Social Media Management",
    short:
      "Posts planned, designed and published every week, so your feed never looks abandoned.",
    tags: ["Content plan", "Post design", "Scheduling"],
    thumbnail: {
      src: "/images/services/social.jpg",
      alt: "Hands scrolling a social media feed on a phone in front of a laptop",
    },
    description:
      "A quiet feed makes a business look closed. I plan, design and publish your posts so your social media keeps working while you run the business.",
    includes: [
      "A content plan for each month",
      "Post designs and captions in your brand style",
      "Scheduling and posting on your channels",
      "AI visuals where you don't have photos",
    ],
    forWho:
      "Best for online stores and local businesses that know they should post more but never have the time.",
  },
] as const;

export const servicesSection = {
  eyebrow: "What I build",
  heading: "Five ways I remove manual work from your business",
  sub: "Most businesses don't need five vendors. They need the right store or site, and the manual work behind it taken off their plate. Pick where you want to start.",
  cta: { label: "See all services", href: "/services" },
  cardLink: "Learn more",
  /* Carousel controls (read by screen readers) */
  pauseLabel: "Pause the slideshow",
  playLabel: "Play the slideshow",
};

/* ------------------------------ CASE STUDIES ----------------------------- */
export const workSection = {
  eyebrow: "Selected work",
  heading: "Recent projects",
  sub: "Six projects that show the range, from a Pakistani hookah retailer to a blog that publishes itself.",
  cta: { label: "See all 11 projects", href: "/work" },
};

export const workPage = {
  eyebrow: "Case studies",
  heading: "Work",
  sub: "Every project here is live. Click through to see the site, what I built and why.",
  filterAll: "All work",
  filterLabel: "Filter case studies",
  empty: "No case studies in this category yet.",
  backLabel: "All case studies",
  problemLabel: "The challenge",
  solutionLabel: "What I built",
  resultsLabel: "Results and impact",
  nextLabel: "Next project",
};

/* ------------------------------ TESTIMONIALS ----------------------------- */
/* Left out of the live site for now — no verified client quotes exist yet.
   Ask clients for one or two sentences each before publishing any of these. */
export const testimonialsSection = {
  eyebrow: "Kind words",
  heading: "What clients say",
  sub: "Real feedback from the people I've worked with.",
};

/* ⚠️ PLACEHOLDER CONTENT — every name, photo, quote and voice note below is
   stock / sample content for design preview only. Not rendered on the live
   site. Replace with real client quotes, then add <Testimonials /> back to
   src/app/page.tsx, before publishing.
   - image:  photo in public/images/testimonials/
   - audio:  voice note file in public/audio/ (mp3, m4a or wav)
   - social: their LinkedIn or X link (leave "" to hide the icon) */
export const testimonials = [
  {
    name: "[TODO: real client name]",
    jobtitle: "[TODO: role · country]",
    text: "[TODO: real client quote — ask after the project wraps up]",
    image: "/images/testimonials/placeholder-1.jpg",
    audio: "placeholder-1.wav",
    social: "",
  },
  {
    name: "[TODO: real client name]",
    jobtitle: "[TODO: role · country]",
    text: "[TODO: real client quote — ask after the project wraps up]",
    image: "/images/testimonials/placeholder-2.jpg",
    audio: "placeholder-2.wav",
    social: "",
  },
];

/* ---------------------------------- FAQ ---------------------------------- */
export const faqSection = {
  eyebrow: "FAQ",
  heading: "Common questions",
};

export const faqs = [
  {
    q: "Which platforms do you work with?",
    a: "Shopify for online stores. Next.js (built with Claude Code), WordPress, Webflow and GoHighLevel for websites. n8n for automation.",
  },
  {
    q: "Do you work with clients outside Pakistan?",
    a: "Yes. Most of my clients are in Sweden, Estonia, Switzerland and the UK. Everything runs remotely.",
  },
  {
    q: "Can you fix my existing store instead of starting over?",
    a: "Yes. I rebuild or redesign existing sites too, as I did for Cycle Together's WordPress site.",
  },
  {
    q: "How long does a project take?",
    a: "It depends on the size. You'll get a clear timeline after our first call, before any work starts.",
  },
  {
    q: "What do you need from me?",
    a: "Your logo, product or service details, and access to your accounts. I'll send a short checklist after the call.",
  },
  {
    q: "Will I be able to update the site myself?",
    a: "Yes. You own the site and the accounts, and I'll show you how to make everyday changes.",
  },
];

/* ------------------------------- CONTACT CTA ----------------------------- */
export const contactCta = {
  eyebrow: "Let's talk",
  heading: "Tired of doing it by hand?",
  sub: "Tell me what's slowing your business down. I'll tell you honestly whether a new site, an automation or neither is the right fix.",
  primaryCta: { label: "Book a free call", href: "/contact" },
  secondaryCta: { label: "See my work", href: "/work" },
};

/* -------------------------------- CONTACT -------------------------------- */
export const contactPage = {
  eyebrow: "Get in touch",
  heading: "Let's talk about your project",
  intro:
    "Tell me what you're building or what's slowing you down. I read every message myself and reply with next steps, usually within a day.",
  /* The 3 contact boxes. `icon` matches the keys in socialIcons below:
     "email" | "linkedin" | "whatsapp". Edit the hrefs once you have them. */
  cards: [
    {
      icon: "email",
      label: "Email",
      value: site.email,
      note: "Best for briefs, files and longer details.",
      href: `mailto:${site.email}`,
    },
    {
      icon: "linkedin",
      label: "LinkedIn",
      value: "Connect with me",
      note: "Work updates and a quick way to check I'm real.",
      href: "https://www.linkedin.com/in/husnain-ali3411",
    },
    {
      icon: "whatsapp",
      label: "WhatsApp",
      value: "Message me",
      note: "Fastest reply if it's urgent.",
      href: "https://wa.me/923244763035",
    },
  ] as const,
  cta: {
    eyebrow: "Start a project",
    heading: "Got a store, a website or a workflow that needs fixing?",
    sub: "Tell me what's not working. I'll tell you honestly whether I'm the right person for it, and what it would take.",
    primaryCta: { label: "Email me", href: `mailto:${site.email}` },
    secondaryCta: { label: "Message on WhatsApp", href: "https://wa.me/923244763035" },
  },
  booking: {
    eyebrow: "Book a call",
    heading: "Pick a time that works for you",
    sub: "Grab 20 minutes on my calendar and we'll talk through what you need.",
    /* TODO (Husnain): once you have a Cal.com account, paste your event
       link here, e.g. "husnain/intro-call". The embed below will start
       working automatically once this is filled in. */
    calLink: "",
    placeholder: "My booking calendar is going live here soon. In the meantime, email or WhatsApp me to find a time.",
  },
};

export const footer = {
  /* Closing call to action that sits at the top of the footer block */
  cta: {
    heading: "Let's fix what's slowing you down.",
    sub: "Tell me what's taking up too much of your week. I'll tell you honestly whether a new site, a workflow, or neither is the right fix.",
    primaryCta: { label: "Book a free call", href: "/contact" },
  },
  tagline:
    "I'm Husnain, an operations analyst who builds. I make Shopify stores, websites and n8n automations for businesses that are tired of doing things by hand. I work remotely from Lahore with clients in Sweden, Estonia, Switzerland, the UK and Pakistan.",
  socialsHeading: "Say hello",
  sitemapHeading: "Pages",
  copyright: `© ${site.year} ${site.name}`,
  madeBy: "Designed and built by Husnain Ali",
};

/* ---------- Accessibility labels (screen readers / keyboard) ---------- */
export const a11y = {
  skipLink: "Skip to main content",
};
