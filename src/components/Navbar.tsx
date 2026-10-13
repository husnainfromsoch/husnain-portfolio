"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, navCta, site } from "@/content/site";
import { ArrowRight } from "@/components/icons";
import { RollingLabel } from "@/components/ui";

/** Round "H" monogram + brand name. Used in the navbar and footer. */
export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-2.5" aria-label={`${site.brandFull}, home`}>
      <span className="flex size-9 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-on-accent transition-transform duration-300 group-hover:rotate-[-8deg]">
        {site.name.charAt(0)}
      </span>
      <span className="font-display text-[1.35rem] font-bold leading-none tracking-[-0.04em]">
        {site.brand}
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-line transition-colors duration-300 ${
        scrolled || open ? "bg-paper/90 backdrop-blur-md" : "bg-paper"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid h-[72px] max-w-[1280px] grid-cols-[1fr_auto] items-center px-5 sm:px-8 md:grid-cols-[1fr_auto_1fr]"
      >
        <Logo />

        <ul className="hidden items-center gap-9 md:flex">
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-base font-medium transition-colors after:absolute after:-bottom-1.5 after:left-1/2 after:size-1 after:-translate-x-1/2 after:rounded-full after:bg-accent after:transition-opacity ${
                    active
                      ? "text-ink after:opacity-100"
                      : "text-ink/70 after:opacity-0 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-end gap-3">
          <Link
            href={navCta.href}
            className="group hidden items-center gap-2 rounded-cta bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-colors duration-300 hover:bg-ink hover:text-paper active:scale-[0.98] sm:inline-flex"
          >
            <RollingLabel>{navCta.label}</RollingLabel>
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-11 items-center justify-center rounded-full border border-line bg-card md:hidden"
          >
            <span className="relative block h-3 w-5">
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-ink transition-transform duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 block h-0.5 w-5 bg-ink transition-transform duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-paper md:hidden">
          <ul className="mx-auto max-w-[1280px] px-5 py-4 sm:px-8">
            {[{ label: "Home", href: "/" }, ...nav].map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-line py-4 font-display text-2xl font-bold tracking-[-0.03em]"
                >
                  {item.label}
                  <ArrowRight className="size-5 text-accent" />
                </Link>
              </li>
            ))}
            <li className="pt-5 pb-2">
              <Link
                href={navCta.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 rounded-cta bg-accent px-5 py-4 font-semibold text-on-accent"
              >
                {navCta.label}
                <ArrowRight className="size-4" />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
