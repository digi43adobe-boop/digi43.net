"use client";

import { useEffect, useRef, useState } from "react";

export function NewsCarousel({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const update = () => {
      setCanPrev(el.scrollLeft > 4);
      setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  function scrollByCards(direction: 1 | -1) {
    const el = scrollRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = firstCard?.offsetWidth ?? 320;
    // 16px gap between cards
    el.scrollBy({ left: direction * (cardWidth + 16), behavior: "smooth" });
  }

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="-mx-5 px-5 md:mx-0 md:px-0 flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children}
      </div>

      <button
        type="button"
        aria-label="Previous"
        onClick={() => scrollByCards(-1)}
        disabled={!canPrev}
        className="hidden md:inline-flex absolute -left-5 top-[34%] -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full border border-subtle-gray bg-deep-space/90 text-ghost-white backdrop-blur transition hover:border-polar-blue hover:text-polar-blue disabled:opacity-30 disabled:hover:border-subtle-gray disabled:hover:text-ghost-white disabled:cursor-not-allowed shadow-lg shadow-black/40"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button
        type="button"
        aria-label="Next"
        onClick={() => scrollByCards(1)}
        disabled={!canNext}
        className="hidden md:inline-flex absolute -right-5 top-[34%] -translate-y-1/2 h-11 w-11 items-center justify-center rounded-full border border-subtle-gray bg-deep-space/90 text-ghost-white backdrop-blur transition hover:border-polar-blue hover:text-polar-blue disabled:opacity-30 disabled:hover:border-subtle-gray disabled:hover:text-ghost-white disabled:cursor-not-allowed shadow-lg shadow-black/40"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
