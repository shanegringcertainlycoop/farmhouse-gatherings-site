import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Arriving at /#inquire from another page could land at the top of the
// homepage rather than at the section — the enquiry form sits ~9400px down, so
// the miss is total rather than cosmetic.
//
// Two things make the browser's own on-load anchor jump unreliable here:
// `scroll-behavior: smooth` on <html> applies to that jump, turning it into a
// long animation; and hydration plus late-loading images reflow the document
// while it is in flight. Rather than depend on either, re-apply the scroll
// explicitly with `behavior: "instant"`, which opts out of the CSS smooth
// scrolling for this one jump and is deterministic regardless of layout shift.
//
// In-page nav clicks keep their smooth scroll; only the cross-page arrival is
// instant, which is what you want when landing on a deep link anyway. Runs
// after mount and again after window load, once images have settled.
export function useHashScroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const scrollToHash = () => {
      let el: Element | null = null;
      try {
        el = document.querySelector(hash);
      } catch {
        return; // malformed selector (e.g. "#123") — nothing to do
      }
      el?.scrollIntoView({ behavior: "instant", block: "start" });
    };

    const raf = requestAnimationFrame(scrollToHash);
    // Images without intrinsic dimensions finish late and push content down.
    // If load already fired (fast cache hit), the listener never runs — the
    // rAF above covers that case.
    window.addEventListener("load", scrollToHash);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("load", scrollToHash);
    };
  }, [hash]);
}
