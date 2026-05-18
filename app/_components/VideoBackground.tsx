"use client";

import { useEffect, useRef } from "react";

type Props = {
  /** Direct URL of the looping background video (mp4). */
  src: string;
  /** Poster image shown before the video plays — also the mobile fallback. */
  poster: string;
  /** Opacity 0-1 of the dark scrim placed over the video for text contrast. */
  overlay?: number;
  className?: string;
};

/**
 * Decorative ambient video background.
 *
 * Renders a single `<video>` element on both server and client. The
 * `poster` attribute lets the browser show the image instantly; if
 * autoplay is denied (mobile data-saver, prefers-reduced-motion, slow
 * network) the poster stays in place — no SSR/hydration mismatch.
 *
 * - autoplay + muted + playsInline = mobile-safe.
 * - preload="none" defers the network cost until needed.
 * - IntersectionObserver pauses the video while off-screen.
 * - prefers-reduced-motion: reduce -> pause, leaving the poster.
 */
export function VideoBackground({
  src,
  poster,
  overlay = 0.6,
  className = "",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      video.pause();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            video.play().catch(() => undefined);
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.05 }
    );
    io.observe(video);
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-deep-space"
        style={{ opacity: overlay }}
      />
    </div>
  );
}
