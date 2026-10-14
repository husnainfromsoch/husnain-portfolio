"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/* Module-level guard: React's dev-mode Strict Mode mounts this effect
   twice in a row. Without this, two Lenis instances briefly both attach
   wheel/touch listeners, which is what made scrolling feel heavy and
   stuttery. Only one instance is ever allowed to run at a time. */
let activeLenis: Lenis | null = null;

/** Lenis smooth scrolling. Disabled automatically for anyone who has
 *  "reduce motion" turned on in their system settings. */
export default function SmoothScroll() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || activeLenis) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    activeLenis = lenis;

    let frame = 0;
    const raf = (time: number) => {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    };
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      activeLenis = null;
    };
  }, []);

  return null;
}
