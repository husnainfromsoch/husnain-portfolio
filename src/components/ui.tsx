import Link from "next/link";
import type { ReactNode } from "react";

/** Standard page gutter + max width. Every section uses this. */
export function Container({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1280px] px-5 sm:px-8 ${className}`}>
      {children}
    </div>
  );
}

/** Small uppercase label that sits above a section heading. */
export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <p
      className={`flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] ${
        tone === "dark" ? "text-muted" : "text-paper/50"
      }`}
    >
      <span className="size-1.5 rounded-full bg-accent" aria-hidden="true" />
      {children}
    </p>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "accent" | "ink" | "outline" | "paper";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "accent",
  className = "",
}: ButtonProps) {
  const styles = {
    accent: "bg-accent text-white",
    ink: "bg-ink text-paper",
    paper: "bg-paper text-ink",
    outline: "border border-ink/20 text-ink hover:border-ink",
  }[variant];

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-[var(--radius-pill)] px-7 py-3.5 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5 ${styles} ${className}`}
    >
      {children}
    </Link>
  );
}
