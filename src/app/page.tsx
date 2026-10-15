import Hero from "@/components/home/Hero";
import SkillsStrip from "@/components/home/SkillsStrip";
import AboutPreview from "@/components/home/AboutPreview";
import Services from "@/components/home/Services";
import FeaturedWork from "@/components/home/FeaturedWork";
import Faq from "@/components/home/Faq";

/* Testimonials are left out until real client quotes exist — see
   src/content/site.ts `testimonials`. Add <Testimonials /> back here
   once they're filled in. */
export default function Home() {
  return (
    <>
      <Hero />
      <SkillsStrip />
      <AboutPreview />
      <Services />
      <FeaturedWork />
      <Faq />
    </>
  );
}
