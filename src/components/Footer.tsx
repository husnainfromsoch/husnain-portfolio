import Link from "next/link";
import { footer, nav, services, site, socials } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-8 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="font-display text-2xl font-extrabold tracking-tight"
            >
              {site.brand}
              <span className="text-accent">.</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
              {footer.tagline}
            </p>
            <p className="mt-6 text-sm text-paper/40">{site.location}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/40">
              Pages
            </h2>
            <ul className="mt-5 space-y-3">
              {[...nav, { label: "Contact", href: "/contact" }].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-paper/70 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-paper/40">
              Services
            </h2>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href="/services"
                    className="text-sm text-paper/70 transition-colors hover:text-accent"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-paper/40">
              Elsewhere
            </h2>
            <ul className="mt-5 space-y-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="text-sm text-paper/70 transition-colors hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-paper/10 pt-7 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <p>{site.email}</p>
        </div>
      </div>
    </footer>
  );
}
