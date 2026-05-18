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
 * Renders a single `<video>` element on both server and client.
 * The `poster` attribute means the user sees the image instantly, and
 * if the browser blocks autoplay (mobile data-saver, OS-level
 * `prefers-reduced-motion`, slow network) the poster stays visible —
 * graceful fallback without an SSR/hydration mismatch.
 *
 * - autoplay + muted + playsInline = mobile-safe.
 * - preload="none" defers the network cost until the browser actually
 *   wants to play.
 * - IntersectionObserver pauses while off-screen to save battery / data.
 * - `prefers-reduced-motion: reduce` -> pause and freeze on the poster.
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
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        className="absolute inset-0 h-full w-full object-cover"
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 bg-deep-space"
        style={{ opacity: overlay }}
      />
    </div>
  );
}

/** Default background asset — replace by swapping these two strings. */
export const TECH_BG = {
  src: "https://videos.pexels.com/video-files/3129957/3129957-hd_1280_720_25fps.mp4",
  poster:
    "https://images.pexels.com/videos/3129957/free-video-3129957.jpg?auto=compress&cs=tinysrgb&w=1600",
} as const;
