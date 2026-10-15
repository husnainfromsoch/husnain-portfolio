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
  email: "husnainshopifyd@gmail.com",
  phone: "+92 324 4763035",
  location: "Working with clients in Sweden, UAE, US & Estonia",
  calendlyUrl: "[TODO: your Calendly or booking link]",
  availability: "Available for projects",
  year: 2026,
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Case Study", href: "/work" },
  { label: "Contact", href: "/contact" },
];

/* The orange button in the top-right corner of every page */
export const navCta = { label: "Let's talk", href: "/contact" };

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
  badge: site.role,
  availability: site.availability,
  /* Each item is one line of the big heading. The word in `highlight`
     is shown in the accent colour. */
  headline: ["Hi, I'm Husnain.", "I build stores", "that sell."],
  highlight: "sell.",
  intro:
    "I'm a freelancer who builds and rescues Shopify stores, builds custom websites, automates your manual admin with n8n, runs your social media and sets up Claude Code for your team.",
  primaryCta: { label: "Start a project", href: "/contact" },
  secondaryCta: { label: "See my work", href: "/work" },
  socialProof: {
    /* Replace [TODO] with your real numbers, e.g. "30+" and "4.9" */
    value: "70+",
    label: "Happy clients",
    rating: "[TODO]/5",
  },
  /* Big photo of you on the right */
  portrait: {
    src: "/images/Husnain-Hero.jpg",
    alt: "Husnain speaking on stage at a founders summit, with website analytics on the screen behind him",
  },
  /* Two small tilted previews of your work that float over the photo */
  previews: [
    { src: "/images/Husnain-hero-2.jpg", alt: "Husnain working on a laptop in a coffee shop" },
    { src: "/images/Hero-3rd.jpg", alt: "A website homepage I designed, shown on a laptop" },
  ],
};

/* -------------------------------- MARQUEE -------------------------------- */
export const marqueeLabel = "Tools & platforms I work with every day";

/* `logo` picks the icon shown before each name. Available logos:
   shopify, figma, webflow, gohighlevel, wordpress, claude, vercel,
   github, n8n, social */
export const marquee = [
  { name: "Shopify", logo: "shopify" },
  { name: "Figma", logo: "figma" },
  { name: "Webflow", logo: "webflow" },
  { name: "GoHighLevel", logo: "gohighlevel" },
  { name: "WordPress", logo: "wordpress" },
  { name: "Claude", logo: "claude" },
  { name: "Vercel", logo: "vercel" },
  { name: "GitHub", logo: "github" },
  { name: "n8n", logo: "n8n" },
  { name: "Social media", logo: "social" },
] as const;

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
    alt: "Husnain speaking on stage at a founders summit, with website analytics on the screen behind him",
  },
  stats: [
    { value: "70+", label: "Projects delivered" },
    { value: "4+", label: "Years freelancing" },
    { value: "10", label: "Countries I work in" },
  ],
};

/* ------------------------------ ABOUT PAGE ------------------------------- */
export const aboutPage = {
  hero: {
    eyebrow: "About me",
    heading: "The person who actually does the work.",
    intro:
      "I'm Husnain, a freelancer building Shopify stores, websites, automations, social media and AI setups for small businesses that want to sell more and work less. No agency, no account manager between us, just me.",
    portrait: {
      src: "/images/Husnain-hero-2.jpg",
      alt: "Husnain working on a laptop in a coffee shop",
    },
  },
  story: {
    eyebrow: "My story",
    heading: "How I got here",
    paragraphs: [
      "I started out freelancing on small fixes: a broken checkout here, a slow page there. Fixing those problems one store at a time taught me more about what actually drives sales than any course did.",
      "Over time, clients kept asking for the same things beyond the store itself: a proper website, something to stop them typing orders into spreadsheets by hand, help keeping their social media alive. So I built the skills to do all of it properly instead of referring it out.",
      "Today I work with small businesses across Sweden, the UAE, the US and Estonia. Different time zones, same job: understand what's actually slowing a business down, then build the thing that fixes it.",
    ],
    /* Small scrolling photo gallery next to the story text. Each image
       drifts at its own speed as you scroll past this section. */
    gallery: {
      leftTop: {
        src: "/images/about/My story-section left top side image.jpg",
        alt: "Husnain at work, top-left photo in the story gallery",
      },
      leftBottom: {
        src: "/images/about/My story-section left bottom side image.jpg",
        alt: "Husnain at work, bottom-left photo in the story gallery",
      },
      right: {
        src: "/images/about/My story-section right side image.jpg",
        alt: "Husnain at work, right-side photo in the story gallery",
      },
    },
  },
  process: {
    eyebrow: "How I work",
    heading: "Five steps, every project",
    sub: "No surprises. You'll always know what's happening and what's next.",
    steps: [
      {
        number: "01",
        title: "First call",
        description:
          "We talk through what's not working and what you want instead. I ask direct questions so I understand the real problem, not just the symptom.",
      },
      {
        number: "02",
        title: "Plan & fixed price",
        description:
          "You get a clear plan and a fixed price before any work starts. No hourly surprises, no scope that quietly grows.",
      },
      {
        number: "03",
        title: "Build",
        description:
          "I build it myself, start to finish. You'll get regular updates, not silence until the big reveal.",
      },
      {
        number: "04",
        title: "Review together",
        description:
          "We go through the result together. Anything that's off gets fixed before launch, not after.",
      },
      {
        number: "05",
        title: "Launch & support",
        description:
          "I launch it, show you how to use it, and stay reachable after. If something breaks, you message me directly.",
      },
    ],
  },
  tools: {
    eyebrow: "Tools I use",
    heading: "What I build with",
    sub: "The platforms and tools I reach for most, picked to fit the job rather than the other way round.",
  },
  stats: {
    eyebrow: "In numbers",
    heading: "A quick snapshot",
    items: [
      { value: "70+", label: "Projects delivered" },
      { value: "4+", label: "Years freelancing" },
      { value: "10", label: "Countries I work in" },
      { value: "5", label: "Services, one freelancer" },
    ],
  },
};

/* -------------------------------- SERVICES ------------------------------- */
export const services = [
  {
    slug: "shopify",
    number: "01",
    /* icon options: "store" | "automation" | "website" | "social" | "terminal" */
    icon: "store",
    title: "Shopify stores",
    short:
      "New stores built from scratch, and redesigns of tired stores that get visitors but not sales.",
    tags: ["New builds", "Redesigns", "Speed & mobile"],
    /* Card image. Swap for a real screenshot in public/images/services/ */
    thumbnail: {
      src: "/images/services/shopify.svg",
      alt: "Illustration of a Shopify product page with an Add to cart button and a new order notification",
    },
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
    slug: "websites",
    number: "02",
    icon: "website",
    title: "Custom websites",
    short:
      "Fast, clean business websites built on the platform that fits how you work.",
    tags: ["GoHighLevel", "Webflow", "WordPress"],
    thumbnail: {
      src: "/images/services/websites.svg",
      alt: "Illustration of three website layouts built on GoHighLevel, Webflow and WordPress",
    },
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
  {
    slug: "automation",
    number: "03",
    icon: "automation",
    title: "n8n automation",
    short:
      "Order confirmations, data entry into sheets, follow-ups and status updates, built in n8n so the repetitive internal work runs on its own.",
    tags: ["Confirmations", "Data entry", "Follow-ups"],
    thumbnail: {
      src: "/images/services/automation.svg",
      alt: "Illustration of an automated workflow: new order, row added to a sheet, email sent, team notified",
    },
    description:
      "Order confirmations typed out by hand. Data copied into spreadsheets. Follow-ups someone has to remember. Status updates chased over WhatsApp. I map those processes and rebuild them as n8n workflows that run themselves, quietly, in the background.",
    includes: [
      "Automated order and booking confirmations",
      "Removing manual data entry into sheets and CRMs",
      "Automatic follow-up sequences for leads and customers",
      "Internal status updates and team notifications",
      "Connecting the tools you already pay for",
      "A written map of every process before I build it",
      "Workflows you own, on your n8n account or self-hosted",
    ],
    forWho:
      "Best for small teams where one or two people spend hours a week on repetitive admin.",
  },
  {
    slug: "social",
    number: "04",
    icon: "social",
    title: "Social media marketing",
    /* TODO (Husnain): check this matches exactly what you offer */
    short:
      "A clear content plan, posts designed to fit your brand, and accounts that are run consistently instead of whenever there's time.",
    tags: ["Content plan", "Post design", "Scheduling"],
    thumbnail: {
      src: "/images/services/social.svg",
      alt: "Illustration of a phone showing a branded social media profile with a grid of posts",
    },
    description:
      "Most small businesses know they should be posting, but it always slips behind the real work. I plan your content, design posts that look like your brand, and keep your accounts active and consistent, so social media actually supports your sales.",
    includes: [
      "Profile setup and clean-up",
      "A monthly content plan",
      "Post and story design in your brand style",
      "Captions written for your audience",
      "Scheduling and consistent posting",
      "A simple monthly report on what worked",
    ],
    forWho:
      "Best for small businesses that know social media matters but never have the time to do it properly.",
  },
  {
    slug: "claude-code",
    number: "05",
    icon: "terminal",
    title: "Claude Code setup",
    /* TODO (Husnain): check this matches exactly what you offer */
    short:
      "Claude Code installed, configured and taught your business, so you and your team get real work out of AI from day one.",
    tags: ["Setup", "Custom skills", "Team training"],
    thumbnail: {
      src: "/images/services/claude-code.svg",
      alt: "Illustration of a terminal window running Claude Code with a project instruction file",
    },
    description:
      "Claude Code is powerful, but out of the box it doesn't know your business, your tools or how you like things done. I set it up properly: project instructions, custom skills for your repeated tasks, and connections to the tools you already use. Then I show you how to use it day to day.",
    includes: [
      "Installation on your machines",
      "Project instruction files (CLAUDE.md) written for your business",
      "Custom skills for your repeated tasks",
      "Connections to the tools you already use",
      "Safe permission settings",
      "A hands-on training session",
    ],
    forWho:
      "Best for founders and small teams who want to use AI for real work, not just chat with it.",
  },
] as const;

export const servicesSection = {
  eyebrow: "What I do",
  heading: "Five ways I help your business grow",
  sub: "Stores, websites, automations, social media and AI setup. Every project is done by me personally, so it gets my full focus.",
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
  sub: "A few projects that show how I work and what changed for the business afterwards.",
  cta: { label: "View all projects", href: "/work" },
};

export const workPage = {
  eyebrow: "Case studies",
  heading: "Every project, start to finish",
  sub: "Filter by service to see the kind of work closest to what you need.",
  filterAll: "All work",
  filterLabel: "Filter case studies",
  empty: "No case studies in this category yet.",
  backLabel: "All case studies",
  problemLabel: "The problem",
  solutionLabel: "What I built",
  resultsLabel: "The results",
  nextLabel: "Next case study",
};

/* ------------------------------ TESTIMONIALS ----------------------------- */
export const testimonialsSection = {
  eyebrow: "Kind words",
  heading: "What clients say",
  sub: "Real feedback from the people I've worked with.",
};

/* ⚠️ PLACEHOLDER CONTENT — every name, photo, quote and voice note below is
   stock / sample content for design preview only. Replace with real clients
   before the site goes live. To add one: copy a block and edit it.
   - image:  photo in public/images/testimonials/
   - audio:  voice note file in public/audio/ (mp3, m4a or wav)
   - social: their LinkedIn or X link (leave "" to hide the icon) */
export const testimonials = [
  {
    name: "Erik Lindqvist",
    jobtitle: "Shopify store owner · Sweden",
    text: "Our old store looked dated and people left without buying. Husnain rebuilt it from the ground up. It finally feels like a brand customers can trust.",
    image: "/images/testimonials/placeholder-1.jpg",
    audio: "placeholder-1.wav",
    social: "https://www.linkedin.com/",
  },
  {
    name: "Omar Haddad",
    jobtitle: "Founder, e-commerce brand · UAE",
    text: "I was typing every order into a spreadsheet by hand. Now it all happens on its own, and I get my evenings back. Easily the best decision I made this year.",
    image: "/images/testimonials/placeholder-2.jpg",
    audio: "placeholder-2.wav",
    social: "https://www.linkedin.com/",
  },
  {
    name: "Daniel Reed",
    jobtitle: "Owner, local service business · US",
    text: "He built our website on GoHighLevel and connected it to our bookings. Clear communication, fast delivery, and no tech headaches for me.",
    image: "/images/testimonials/placeholder-3.jpg",
    audio: "placeholder-3.wav",
    social: "https://www.linkedin.com/",
  },
  {
    name: "Sara Ahmed",
    jobtitle: "Operations lead · UAE",
    text: "Follow-ups used to slip through the cracks every week. Husnain automated our status updates, so the whole team always knows where things stand.",
    image: "/images/testimonials/placeholder-4.jpg",
    audio: "placeholder-4.wav",
    social: "https://www.linkedin.com/",
  },
  {
    name: "Marcus Tamm",
    jobtitle: "Co-founder · Estonia",
    text: "Working directly with one person made all the difference. He understood what we needed, kept us updated, and delivered a Webflow site we are proud of.",
    image: "/images/testimonials/placeholder-5.jpg",
    audio: "placeholder-5.wav",
    social: "https://www.linkedin.com/",
  },
  {
    name: "Emma Karlsson",
    jobtitle: "Boutique owner · Sweden",
    text: "I launched my first Shopify store with Husnain. He explained every step simply and made the whole process feel easy.",
    image: "/images/testimonials/placeholder-6.jpg",
    audio: "placeholder-6.wav",
    social: "https://www.linkedin.com/",
  },
  {
    name: "Jonas Berg",
    jobtitle: "Marketing manager · Sweden",
    text: "Our WordPress site was slow and hard to update. Now it is fast, clean, and I can change things myself without calling anyone.",
    image: "/images/testimonials/placeholder-7.jpg",
    audio: "placeholder-7.wav",
    social: "https://www.linkedin.com/",
  },
  {
    name: "Lucas Moreno",
    jobtitle: "Founder · US",
    text: "Order confirmations, invoices, reminders. Husnain automated all of it. I would recommend him to any small business owner.",
    image: "/images/testimonials/placeholder-8.jpg",
    audio: "placeholder-8.wav",
    social: "https://www.linkedin.com/",
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
    q: "What is a Claude Code setup?",
    a: "Claude Code is an AI assistant that can work directly with your files and tools. I install it, write instructions so it understands your business, build custom skills for the tasks you repeat, and train you to use it. You end up with an AI helper that actually knows how you work.",
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

/* -------------------------------- CONTACT -------------------------------- */
export const contactPage = {
  eyebrow: "Get in touch",
  heading: "Let's talk about your project.",
  intro:
    "Pick whichever way suits you. Email, LinkedIn or WhatsApp, I read everything myself and reply personally, usually within a day.",
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
    heading: "Got a store or a process that needs fixing?",
    sub: "Tell me what's not working. I'll tell you honestly whether I'm the right person for it, and what it would take.",
    primaryCta: { label: "Email me", href: `mailto:${site.email}` },
    secondaryCta: { label: "Message on WhatsApp", href: "https://wa.me/923244763035" },
  },
  booking: {
    eyebrow: "Book a call",
    heading: "Pick a time that works for you",
    sub: "Grab 20 minutes on my calendar and we'll talk through what you need.",
    /* TODO (Husnain): once you have a Cal.com account, paste your event
       link here, e.g. "https://cal.com/husnain/intro-call". The embed
       below will start working automatically once this is filled in. */
    calLink: "",
    placeholder: "My booking calendar is going live here soon. In the meantime, email or WhatsApp me to find a time.",
  },
};

export const footer = {
  /* Closing call to action that sits at the top of the footer block */
  cta: {
    heading: "Let's build the thing that finally sells.",
    sub: "Tell me what's not working. I'll reply with an honest answer on whether I'm the right person for it.",
    primaryCta: { label: "Start a project", href: "/contact" },
  },
  tagline:
    "I'm Husnain, a freelancer building Shopify stores, websites, automations, social media and AI setups for small businesses that want to sell more and work less.",
  socialsHeading: "Say hello",
  sitemapHeading: "Pages",
  copyright: `© ${site.year} ${site.brandFull}`,
  madeBy: "Designed and built by Husnain",
};

/* ---------- Accessibility labels (screen readers / keyboard) ---------- */
export const a11y = {
  skipLink: "Skip to main content",
};
