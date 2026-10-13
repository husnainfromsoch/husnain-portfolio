import Link from "next/link";
import type { ComponentType, ReactNode, SVGProps } from "react";
import { ArrowRight, Sparkle } from "@/components/icons";
import Reveal from "@/components/Reveal";
import { WordsReveal } from "@/components/TextReveal";

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

/** Pill-shaped label with a round accent icon that sits above a heading. */
export function Eyebrow({
  children,
  icon: Icon = Sparkle,
}: {
  children: ReactNode;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
}) {
  return (
    <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-paper py-1.5 pl-1.5 pr-4 text-xs font-semibold uppercase tracking-[0.2em] sm:text-xs">
      <span className="flex size-6 items-center justify-center rounded-full bg-accent text-on-accent">
        <Icon className="size-3.5" />
      </span>
      {children}
    </p>
  );
}

/** Big display heading used by every section.
    Plain-text headings reveal word by word as you scroll to them. */
export function Heading({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2";
}) {
  return (
    <Tag
      className={`font-display text-[clamp(2.25rem,5.2vw,4rem)] font-bold leading-[1.02] tracking-[-0.04em] ${className}`}
    >
      {typeof children === "string" ? <WordsReveal text={children} /> : children}
    </Tag>
  );
}

/** Centered eyebrow + heading + sub-text block. */
export function SectionIntro({
  eyebrow,
  icon,
  heading,
  sub,
}: {
  eyebrow: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  heading: string;
  sub?: string;
}) {
  return (
    <Reveal>
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <Eyebrow icon={icon}>{eyebrow}</Eyebrow>
        <Heading className="mt-6">{heading}</Heading>
        {sub && (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {sub}
          </p>
        )}
      </div>
    </Reveal>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "accent" | "ink" | "outline";
  arrow?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "accent",
  arrow = true,
  className = "",
}: ButtonProps) {
  const styles = {
    accent: "bg-accent text-on-accent hover:bg-ink hover:text-paper",
    ink: "bg-ink text-paper hover:bg-accent hover:text-on-accent",
    outline: "border border-ink/15 bg-card text-ink hover:border-ink",
  }[variant];

  return (
    <Link
      href={href}
      className={`group inline-flex items-center justify-center gap-2 rounded-cta px-7 py-3.5 text-sm font-semibold transition-[background-color,border-color,color,transform] duration-300 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] ${styles} ${className}`}
    >
      <RollingLabel>{children}</RollingLabel>
      {arrow && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}

/** Button label that rolls up on hover: the text slides out the top
    while an identical copy slides in from below. */
export function RollingLabel({ children }: { children: ReactNode }) {
  return (
    <span className="relative inline-flex overflow-hidden">
      <span className="block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
        {children}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 block translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0"
      >
        {children}
      </span>
    </span>
  );
}
