import Image from "next/image";
import { RiLinkedinFill, RiTwitterXLine } from "react-icons/ri";
import { ArrowUpRight } from "@/components/icons";

export interface VoiceTestimonialItem {
  /** Client photo in /public, e.g. "/images/testimonials/anna.jpg". Initial is shown if empty. */
  image?: string;
  name: string;
  jobtitle: string;
  text: string;
  /** Link to the client's LinkedIn / X / website. Icon is hidden if empty. */
  social?: string;
}

interface VoiceTestimonialProps {
  testimonials: VoiceTestimonialItem[];
}

function SocialIcon({ url }: { url: string }) {
  if (url.includes("linkedin.com")) return <RiLinkedinFill size={18} />;
  if (url.includes("twitter.com") || url.includes("x.com"))
    return <RiTwitterXLine size={18} />;
  return <ArrowUpRight className="size-[18px]" />;
}

function Card({ t }: { t: VoiceTestimonialItem }) {
  return (
    <li className="relative flex flex-col rounded-2xl bg-black p-5 text-paper transition-transform duration-300 hover:-translate-y-1">
      {t.social && (
        <a
          href={t.social}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.name} profile`}
          className="absolute right-5 top-5 text-paper transition-colors hover:text-accent"
        >
          <SocialIcon url={t.social} />
        </a>
      )}

      <div className="flex items-center pr-7">
        {t.image ? (
          <Image
            src={t.image}
            alt={t.name}
            width={48}
            height={48}
            sizes="48px"
            className="size-11 shrink-0 rounded-full object-cover sm:size-12"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent font-display text-lg font-bold text-on-accent sm:size-12"
          >
            {t.name.replace(/[^A-Za-z]/g, "").charAt(0) || "•"}
          </span>
        )}
        <div className="flex min-w-0 flex-col pl-3">
          <span className="font-display text-base font-medium">{t.name}</span>
          <span className="text-xs text-paper/75 sm:text-sm">{t.jobtitle}</span>
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed sm:text-[15px]">{t.text}</p>
    </li>
  );
}

/** Static grid of black testimonial cards — no marquee, no audio. */
export function VoiceTestimonial({ testimonials }: VoiceTestimonialProps) {
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t, i) => (
        <Card key={i} t={t} />
      ))}
    </ul>
  );
}

export default VoiceTestimonial;
