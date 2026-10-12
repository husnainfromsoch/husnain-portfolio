# CLAUDE.md — Husnain Personal Portfolio

## Who this site is for
Personal brand website for **Husnain** (brand: "Vision Craft by Husnain"), a freelancer.
It must feel like ONE person's premium website — never like an agency or company.
Target clients: small businesses in Sweden, UAE, US and Estonia.

## Services (exactly these 3)
1. **Shopify** — new stores from scratch AND redesigns of outdated / poorly selling stores.
2. **Business process automation** — automating INTERNAL manual work (order confirmations,
   manual data entry into sheets, manual follow-ups, status updates). Never describe this as
   only "chat/DM auto-replies".
3. **Websites** — built on GoHighLevel (GHL), Webflow and WordPress.

## Design reference
- Screenshots of the reference site are in `/reference`. Look at them before building any page.
- Match the LAYOUT, spacing, section order and premium feel of the reference.
- Do NOT copy its text, images, logos or brand name. All copy is written fresh for Husnain.

## Design rules
- Bold, eye-catchy SOLID colors. **No gradients anywhere** (backgrounds, text or buttons).
- Colors live as CSS variables / Tailwind theme tokens in ONE place so they are easy to change.
  Starting palette (can change later):
  - `--ink` #0E0E0E (text, dark sections)
  - `--paper` #F4F1EA (main background)
  - `--accent` #FF5B1F (buttons, highlights, badges)
  - `--muted` #6B6B6B (secondary text)
- Large bold headings, generous whitespace, rounded image cards.
- Motion: Lenis smooth scroll, scroll-reveal on sections, subtle 3D tilt on hero images,
  infinite marquee strips (client logos / skills), hover lift on cards.
- Respect `prefers-reduced-motion` (turn heavy motion off).
- Fully responsive, mobile first. Test 375px, 768px and 1440px widths.

## Voice & copy
- First person: "I", "me", "my". Never "we" or "our agency".
- Language: English, simple and confident, results-focused.
- Never invent numbers, client names, testimonials or results. Use clear placeholders like
  `[TODO: real number]` or `[TODO: client quote]` that Husnain will replace.

## Tech stack
- Next.js (App Router) + TypeScript + Tailwind CSS
- framer-motion and gsap (ScrollTrigger) for animation, lenis for smooth scroll
- next/image for all images, next/font for fonts
- Deployed on Vercel from GitHub (every push to `main` auto-deploys)

## Content structure (owner is non-technical — keep edits easy)
- ALL site text lives in `src/content/site.ts` (hero, about, services, pricing, FAQ,
  testimonials, contact info, social links).
- Each case study is its own file in `src/content/projects/` (title, client, country,
  service, problem, solution, results, images). Adding a project = adding one file.
- Images go in `public/images/`.
- Components must read from these content files — no hard-coded copy inside components.

## Pages
- `/` Home: hero (big name + title + "Available for projects" badge + tilted image collage
  + CTA) → logo/skills marquee → short about with stats → 3 services → featured case studies
  → testimonials → FAQ → big contact CTA
- `/about` Story, photo, how I work (process steps), tools I use, stats
- `/services` One detailed block per service: what's included, who it's for, CTA
- `/pricing` Packages per service ("Starting from" pricing), what's included, FAQ, CTA
- `/work` Grid of all case studies (6–8) with service filter
- `/work/[slug]` Case study detail: problem → solution → results, before/after images
- `/contact` Contact form + Calendly/booking link + email + socials
- Shared: sticky navbar, footer, custom 404

## Working rules
- Build ONE phase/page at a time, then stop and summarize so Husnain can review.
- Explain changes in simple non-technical language.
- Run `npm run build` after each phase and fix all errors before saying it's done.
- Commit after each completed phase with a clear message. Push only when asked.
