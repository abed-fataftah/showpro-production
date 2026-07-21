"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Single motion-controller island (F-008): scroll-reveal + header condense.
// Progressive enhancement — content is fully visible without JS, and all motion
// is skipped under prefers-reduced-motion.
export function ScrollFX() {
  const pathname = usePathname();

  // Header condense — mount once.
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-js", "");
    const onScroll = () => {
      if (window.scrollY > 40) root.setAttribute("data-scrolled", "");
      else root.removeAttribute("data-scrolled");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll reveals — re-scan per route (App Router client nav).
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.setAttribute("data-inview", ""));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute("data-inview", "");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );

    const vh = window.innerHeight;
    els.forEach((el) => {
      if (el.hasAttribute("data-inview")) return;
      // On-screen at load → reveal immediately (never hidden, so no flash).
      if (el.getBoundingClientRect().top < vh * 0.9) {
        el.setAttribute("data-inview", "");
      } else {
        el.setAttribute("data-armed", "");
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}