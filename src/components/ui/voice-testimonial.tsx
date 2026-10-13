"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { RiLinkedinFill, RiTwitterXLine } from "react-icons/ri";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ArrowUpRight } from "@/components/icons";

export interface VoiceTestimonialItem {
  /** Client photo in /public, e.g. "/images/testimonials/anna.jpg". Initial is shown if empty. */
  image?: string;
  name: string;
  jobtitle: string;
  text: string;
  /** File name inside /public/audio, e.g. "anna.mp3". Player is hidden if empty. */
  audio?: string;
  /** Link to the client's LinkedIn / X / website. Icon is hidden if empty. */
  social?: string;
}

interface VoiceTestimonialProps {
  testimonials: VoiceTestimonialItem[];
  /** Seconds for one full loop of a row — bigger is slower. */
  duration?: number;
  playLabel?: string;
  pauseLabel?: string;
}

const BARS = 26;

/* Fixed bar heights + timings (no Math.random at render, so server and
   browser HTML always match). */
const bars = Array.from({ length: BARS }, (_, i) => ({
  height: 6 + ((i * 7) % 15),
  peak: 1.3 + ((i * 5) % 9) / 10,
  duration: 0.5 + ((i * 3) % 5) / 10,
  delay: ((i * 2) % 5) / 10,
}));

const barVariants = (b: (typeof bars)[number]): Variants => ({
  initial: { scaleY: 1, transition: { duration: 0.3 } },
  animate: {
    scaleY: [1, b.peak, 1],
    transition: {
      duration: b.duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay: b.delay,
    },
  },
});

function SocialIcon({ url }: { url: string }) {
  if (url.includes("linkedin.com")) return <RiLinkedinFill size={18} />;
  if (url.includes("twitter.com") || url.includes("x.com"))
    return <RiTwitterXLine size={18} />;
  return <ArrowUpRight className="size-[18px]" />;
}

type CardProps = {
  t: VoiceTestimonialItem;
  isPlaying: boolean;
  onToggle: () => void;
  /** Duplicate copy used for the seamless loop — hidden from screen readers */
  hidden?: boolean;
  animateBars: boolean;
  playLabel: string;
  pauseLabel: string;
};

function Card({ t, isPlaying, onToggle, hidden, animateBars, playLabel, pauseLabel }: CardProps) {
  const tab = hidden ? -1 : undefined;
  return (
    <li
      aria-hidden={hidden || undefined}
      className="relative flex w-[260px] shrink-0 flex-col rounded-2xl bg-black p-5 text-paper transition-transform duration-300 hover:-translate-y-1 sm:w-[320px]"
    >
      {t.social && (
        <a
          href={t.social}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={tab}
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

      {t.audio && (
        <div className="mt-4 flex h-14 items-center gap-3 rounded-xl bg-paper px-3 text-ink">
          <button
            type="button"
            onClick={onToggle}
            tabIndex={tab}
            aria-label={`${isPlaying ? pauseLabel : playLabel} ${t.name}`}
            aria-pressed={isPlaying}
            className={`flex size-9 shrink-0 items-center justify-center rounded-full transition-[transform,background-color] hover:scale-105 ${
              isPlaying ? "bg-accent text-on-accent" : "bg-ink text-paper"
            }`}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" fill="currentColor" className="size-4">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-0.5 size-4">
                <path d="M7 4.5v15a1 1 0 0 0 1.52.85l12-7.5a1 1 0 0 0 0-1.7l-12-7.5A1 1 0 0 0 7 4.5Z" />
              </svg>
            )}
          </button>
          <div aria-hidden="true" className="flex flex-1 items-center justify-between overflow-hidden">
            {bars.map((b, i) => (
              <motion.span
                key={i}
                className="block w-[3px] shrink-0 rounded-full bg-ink"
                style={{ height: b.height }}
                variants={barVariants(b)}
                initial="initial"
                animate={isPlaying && animateBars ? "animate" : "initial"}
              />
            ))}
          </div>
        </div>
      )}
    </li>
  );
}

/** Black testimonial cards with voice notes, scrolling in an endless marquee.
 *  Hover pauses a row; a playing voice note pauses everything. */
export function VoiceTestimonial({
  testimonials,
  duration = 60,
  playLabel = "Play voice note from",
  pauseLabel = "Stop voice note from",
}: VoiceTestimonialProps) {
  const [playing, setPlaying] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const reduced = useReducedMotion();

  /* Stop any audio when the section unmounts */
  useEffect(() => () => audioRef.current?.pause(), []);

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setPlaying(null);
  };

  const toggle = (index: number) => {
    if (playing === index) return stop();
    const file = testimonials[index]?.audio;
    if (!file) return;
    stop();
    const audio = new Audio(`/audio/${file}`);
    audio.addEventListener("ended", () => setPlaying(null));
    audioRef.current = audio;
    audio
      .play()
      .then(() => setPlaying(index))
      .catch((err) => console.error("Audio playback error:", err));
  };

  const items = testimonials.map((t, i) => ({ t, i }));
  const half = Math.ceil(items.length / 2);
  const cardProps = (i: number) => ({
    isPlaying: playing === i,
    onToggle: () => toggle(i),
    animateBars: !reduced,
    playLabel,
    pauseLabel,
  });

  /* Reduced motion: a still row people can swipe / scroll sideways */
  if (reduced) {
    return (
      <ul className="flex gap-5 overflow-x-auto px-4 pb-4 sm:px-8">
        {items.map(({ t, i }) => (
          <Card key={i} t={t} {...cardProps(i)} />
        ))}
      </ul>
    );
  }

  const row = (list: typeof items, reverse: boolean, className = "") => (
    <div className={`group flex overflow-hidden ${className}`}>
      <div
        className="animate-marquee flex min-w-max group-hover:[animation-play-state:paused] data-[paused=true]:[animation-play-state:paused]"
        data-paused={playing !== null}
        style={
          {
            "--marquee-duration": `${duration}s`,
            animationDirection: reverse ? "reverse" : "normal",
          } as React.CSSProperties
        }
      >
        {[false, true].map((hidden) => (
          <ul key={String(hidden)} className="flex shrink-0 items-stretch gap-4 pr-4">
            {list.map(({ t, i }) => (
              <Card key={i} t={t} hidden={hidden} {...cardProps(i)} />
            ))}
          </ul>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-4">
      {/* Phones: one row with everyone */}
      {row(items, false, "md:hidden")}
      {/* Tablet & desktop: two rows moving in opposite directions */}
      {row(items.slice(0, half), false, "hidden md:flex")}
      {row(items.slice(half), true, "hidden md:flex")}
    </div>
  );
}

export default VoiceTestimonial;
