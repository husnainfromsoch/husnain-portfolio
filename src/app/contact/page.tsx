import type { Metadata } from "next";
import { contactPage, site } from "@/content/site";
import ContactHero from "@/components/contact/ContactHero";
import ContactCards from "@/components/contact/ContactCards";
import ContactBooking from "@/components/contact/ContactBooking";

export const metadata: Metadata = {
  title: `Contact — ${site.brandFull}`,
  description: contactPage.intro,
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactCards />
      <ContactBooking />
    </>
  );
}
