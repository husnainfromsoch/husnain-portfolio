import Marquee from "@/components/Marquee";
import { marquee, marqueeLabel } from "@/content/site";

/** Light strip of the tools I use, scrolling forever. */
export default function SkillsStrip() {
  return (
    <section
      aria-label={marqueeLabel}
      className="border-b border-line pb-12 sm:pb-16"
    >
      <p className="px-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
        {marqueeLabel}
      </p>
      <div className="mt-8">
        <Marquee items={marquee} duration={45} />
      </div>
    </section>
  );
}
