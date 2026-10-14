import type { Metadata } from "next";
import { aboutPage, site } from "@/content/site";
import AboutHero from "@/components/about/AboutHero";
import Story from "@/components/about/Story";
import Process from "@/components/about/Process";
import ToolsStrip from "@/components/about/ToolsStrip";
import Stats from "@/components/about/Stats";
import ContactCta from "@/components/home/ContactCta";

export const metadata: Metadata = {
  title: `About — ${site.brandFull}`,
  description: aboutPage.hero.intro,
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Story />
      <Process />
      <ToolsStrip />
      <Stats />
      <ContactCta />
    </>
  );
}
