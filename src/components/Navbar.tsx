"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { nav, navCta, site } from "@/content/site";
import { ArrowRight } from "@/components/icons";
import { RollingLabel } from "@/components/ui";

/** Round "H" monogram + two-line wordmark. Used in the navbar and footer. */
export function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.brandFull}, home`}>
      <span className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-on-accent transition-transform duration-300 group-hover:rotate-[-8deg]">
        {site.name.charAt(0)}
        <span className="absolute inset-0 rounded-full ring-1 ring-ink/10 transition-[ring] duration-300" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.35rem] font-bold tracking-[-0.04em]">
          {site.brand}
        </span>
        <span className="mt-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] opacity-55">
          by {site.name}
        </span>
      </span>
    </Link>
  );
}

/** Desktop nav links with a soft pill that slides between them — sits
    under the active page by default, and follows the cursor on hover. */
function NavLinks() {
  const pathname = usePathname();
  const listRef = useRef<HTMLUListElement>(null);
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);
  const [highlighted, setHighlighted] = useState<string | undefined>(undefined);

  const activeHref = nav.find((item) => pathname.startsWith(item.href))?.href;

  const moveTo = (href: string) => {
    const el = listRef.current?.querySelector<HTMLElement>(`[data-href="${href}"]`);
    if (el) setPill({ left: el.offsetLeft, width: el.offsetWidth });
    setHighlighted(href);
  };

  useLayoutEffect(() => {
    if (activeHref) moveTo(activeHref);
    else {
      setPill(null);
      setHighlighted(undefined);
    }
    // re-measure on resize, since widths can shift
    const onResize = () => activeHref && moveTo(activeHref);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, activeHref]);

  return (
    <ul
      ref={listRef}
      onMouseLeave={() => activeHref && moveTo(activeHref)}
      className="relative hidden items-center gap-1 md:flex"
    >
      {pill && (
        <motion.span
          aria-hidden="true"
          className="absolute top-1/2 h-10 -translate-y-1/2 rounded-full bg-accent shadow-[0_6px_16px_rgba(252,54,45,0.3)]"
          animate={{ left: pill.left, width: pill.width }}
          transition={{ type: "spring", stiffness: 380, damping: 34, mass: 0.7 }}
        />
      )}
      {nav.map((item) => {
        const active = pathname.startsWith(item.href);
        const isHighlighted = highlighted === item.href;
        return (
          <li key={item.href} className="relative">
            <Link
              href={item.href}
              data-href={item.href}
              onMouseEnter={() => moveTo(item.href)}
              aria-current={active ? "page" : undefined}
              className={`relative z-10 block rounded-full px-4 py-2.5 text-[15px] font-medium transition-colors duration-200 ${
                isHighlighted ? "text-on-accent" : "text-ink/65 hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Navbar() {
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
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled || open
          ? "border-line bg-paper/90 shadow-[0_8px_24px_rgba(12,4,7,0.05)] backdrop-blur-md"
          : "border-transparent bg-paper"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto grid h-[76px] max-w-[1280px] grid-cols-[1fr_auto] items-center px-5 sm:px-8 md:grid-cols-[1fr_auto_1fr]"
      >
        <Logo />

        <NavLinks />

        <div className="flex items-center justify-end gap-3">
          <Link
            href={navCta.href}
            className="group hidden items-center gap-2 rounded-cta bg-accent px-6 py-3 text-sm font-semibold text-on-accent transition-[background-color,color,transform] duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-paper active:translate-y-0 active:scale-[0.98] sm:inline-flex"
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
