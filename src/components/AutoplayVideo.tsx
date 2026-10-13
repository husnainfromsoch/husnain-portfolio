"use client";

import { useEffect, useRef } from "react";

type Props = {
  src: string;
  poster: string;
  label: string;
  className?: string;
};

/** Silent looping background-style video. Stays paused on its poster
 *  frame for anyone who has "reduce motion" turned on. */
export default function AutoplayVideo({ src, poster, label, className }: Props) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (reduced.matches) video.pause();
      else video.play().catch(() => {});
    };
    sync();
    reduced.addEventListener("change", sync);
    return () => reduced.removeEventListener("change", sync);
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      src={src}
      poster={poster}
      aria-label={label}
      muted
      loop
      playsInline
      autoPlay
      preload="metadata"
    />
  );
}
