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
 * `src` and `poster` are wired through `data-*` attributes and promoted
 * onto the real DOM after mount. This sidesteps a quirk in the current
 * React 19 + Turbopack pipeline where `src`/`poster` set declaratively on
 * `<video>` inside a Client Component are dropped from the SSR HTML.
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

    // Promote data-* attributes to real ones so the browser starts loading.
    const realSrc = video.getAttribute("data-src");
    const realPoster = video.getAttribute("data-poster");
    if (realPoster && !video.poster) video.poster = realPoster;
    if (realSrc && !video.src) {
      video.src = realSrc;
      video.load();
    }

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
        data-src={src}
        data-poster={poster}
        className="absolute inset-0 h-full w-full object-cover"
        style={{
          backgroundImage: `url("${poster}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
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
