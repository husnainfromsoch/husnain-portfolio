import Hero from "@/components/home/Hero";
import SkillsStrip from "@/components/home/SkillsStrip";
import AboutPreview from "@/components/home/AboutPreview";
import Services from "@/components/home/Services";
import FeaturedWork from "@/components/home/FeaturedWork";
import Testimonials from "@/components/home/Testimonials";
import Faq from "@/components/home/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <SkillsStrip />
      <AboutPreview />
      <Services />
      <FeaturedWork />
      <Testimonials />
      <Faq />
    </>
  );
}
