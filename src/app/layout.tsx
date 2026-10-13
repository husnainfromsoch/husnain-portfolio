import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import { a11y, site } from "@/content/site";

/* Inter with the optical-size axis: big headings render as Inter Display,
   body text as regular Inter — one font file for the whole site. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.brandFull}`,
  },
  description:
    "Freelance Shopify designer and automation specialist. I build and redesign Shopify stores, build custom websites on GoHighLevel, Webflow and WordPress, automate manual business processes with n8n, run social media marketing and set up Claude Code for teams.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <a href="#main" className="skip-link">
          {a11y.skipLink}
        </a>
        <SmoothScroll />
        <Navbar />
        <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
