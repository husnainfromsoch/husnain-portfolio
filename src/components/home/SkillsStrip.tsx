import Marquee from "@/components/Marquee";
import { marquee } from "@/content/site";

/** Full-bleed dark strip of tools and skills that scrolls forever. */
export default function SkillsStrip() {
  return (
    <section
      aria-label="Tools and platforms I work with"
      className="border-y border-ink/10 bg-ink py-7 text-paper sm:py-9"
    >
      <Marquee items={marquee} duration={42} />
    </section>
  );
}
