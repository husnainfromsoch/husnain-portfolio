import { aboutPage, marquee } from "@/content/site";
import { Container, SectionIntro } from "@/components/ui";
import { Sparkle } from "@/components/icons";
import Reveal from "@/components/Reveal";
import Marquee from "@/components/Marquee";

export default function ToolsStrip() {
  const { tools } = aboutPage;

  return (
    <section className="border-b border-line py-20 sm:py-28">
      <Container>
        <SectionIntro eyebrow={tools.eyebrow} icon={Sparkle} heading={tools.heading} sub={tools.sub} />
      </Container>

      <Reveal delay={0.1} className="mt-12 sm:mt-16">
        <Marquee items={marquee} />
      </Reveal>
    </section>
  );
}
