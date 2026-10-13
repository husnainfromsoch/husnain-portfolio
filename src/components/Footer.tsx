import Link from "next/link";
import { footer, nav, site, socials } from "@/content/site";
import { Logo } from "@/components/Navbar";
import { ArrowUpRight } from "@/components/icons";
import { Container } from "@/components/ui";

export default function Footer() {
  const pages = [...nav, { label: "FAQ", href: "/#faq" }, { label: "Contact", href: "/contact" }];

  return (
    <footer className="pt-20 sm:pt-28">
      <Container>
        <div className="grid gap-14 md:grid-cols-[1.3fr_0.7fr_1fr] md:gap-10">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-base leading-relaxed text-ink/80">
              {footer.tagline}
            </p>
            <p className="mt-6 text-sm text-muted">{site.location}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-1">
              {pages.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="font-display text-xl font-semibold tracking-[-0.03em] transition-colors hover:text-accent-text sm:text-2xl"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <ul>
            {socials.map((s) => (
              <li key={s.label} className="border-b border-line">
                <a
                  href={s.href}
                  className="group flex items-center justify-between py-4 font-display text-xl font-semibold tracking-[-0.03em] transition-colors hover:text-accent-text sm:text-2xl"
                >
                  {s.label}
                  <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-line py-7 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.copyright}</p>
          <p>{site.email}</p>
        </div>
      </Container>
    </footer>
  );
}
