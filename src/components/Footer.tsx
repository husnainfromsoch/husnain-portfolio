import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaRegEnvelope, FaWhatsapp } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { footer, nav, site, socials } from "@/content/site";
import { Logo } from "@/components/Navbar";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { Container } from "@/components/ui";
import Reveal from "@/components/Reveal";
import FooterHeadline from "@/components/FooterHeadline";

/* Which logo to draw for each entry in `socials` (see src/content/site.ts) */
const socialIcons: Record<string, IconType> = {
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  whatsapp: FaWhatsapp,
  email: FaRegEnvelope,
};

export default function Footer() {
  const pages = [
    ...nav,
    { label: "FAQ", href: "/#faq" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    /* One solid black block that closes the page. Flat top edge, sitting
       flush against the last section, so the footer reads as part of the
       page instead of a separate strip floating at the bottom. */
    <footer className="mt-20 bg-black text-paper sm:mt-24">
      <Container className="py-8 sm:py-10">
        {/* ---------- Closing call to action ---------- */}
        <Reveal>
          <div className="grid items-end gap-7 border-b border-paper/15 pb-8 md:grid-cols-[1.4fr_0.6fr] md:gap-12 md:pb-9">
            <FooterHeadline text={footer.cta.heading} />

            <div className="md:pb-2">
              <p className="max-w-sm text-[15px] leading-relaxed text-paper/70">
                {footer.cta.sub}
              </p>
              <Link
                href={footer.cta.primaryCta.href}
                className="group mt-6 inline-flex items-center gap-2 rounded-cta bg-accent px-7 py-3.5 text-sm font-semibold text-on-accent transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-paper hover:text-ink active:translate-y-0 active:scale-[0.98]"
              >
                {footer.cta.primaryCta.label}
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* ---------- Brand / pages / social ---------- */}
        <div className="grid gap-10 pt-8 md:grid-cols-[1.3fr_0.7fr_1.2fr] md:gap-10 md:pt-9">
          <Reveal>
            <div className="text-paper">
              <Logo />
              <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-paper/70">
                {footer.tagline}
              </p>
              <p className="mt-4 max-w-xs text-sm text-paper/50">{site.location}</p>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <nav aria-label="Footer">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/45">
                {footer.sitemapHeading}
              </p>
              <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2.5 md:grid-cols-1">
                {pages.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium text-paper/80 transition-colors hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Reveal>

          <Reveal delay={0.16}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-paper/45">
                {footer.socialsHeading}
              </p>
              {/* Each link is a full-width row: logo, name, what it's for. */}
              <ul className="mt-4 divide-y divide-paper/12">
                {socials.map((s) => {
                  const Icon = socialIcons[s.icon];
                  return (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="group flex items-center gap-4 py-3 transition-colors hover:text-accent"
                      >
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-small border border-paper/15 transition-colors duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
                          <Icon className="size-[1.1rem]" aria-hidden="true" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-base font-semibold leading-tight">
                            {s.label}
                          </span>
                          <span className="block text-sm text-paper/50">{s.note}</span>
                        </span>
                        <ArrowUpRight className="ml-auto size-4 text-paper/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>
        </div>
      </Container>
    </footer>
  );
}
