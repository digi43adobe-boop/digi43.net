"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** Direct URL of the looping background video (mp4). */
  src: string;
  /** Poster image shown before the video starts or as the mobile fallback. */
  poster: string;
  /** Opacity 0-1 of the dark scrim placed over the video for text contrast. */
  overlay?: number;
  className?: string;
};

/**
 * Decorative ambient video background.
 *
 * - Autoplays muted, looped, inline (mobile-safe).
 * - Honours `prefers-reduced-motion` by falling back to the poster image.
 * - Skips the video on small viewports where data cost outweighs aesthetic.
 * - Pauses while off-screen so it doesn't burn battery / bandwidth.
 */
export function VideoBackground({
  src,
  poster,
  overlay = 0.6,
  className = "",
}: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const desktopMq = window.matchMedia("(min-width: 768px)");
    const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      setIsDesktop(desktopMq.matches);
      setReduceMotion(motionMq.matches);
    };
    sync();

    desktopMq.addEventListener("change", sync);
    motionMq.addEventListener("change", sync);
    return () => {
      desktopMq.removeEventListener("change", sync);
      motionMq.removeEventListener("change", sync);
    };
  }, []);

  // Pause the video when its container scrolls out of view.
  useEffect(() => {
    const el = containerRef.current;
    const video = videoRef.current;
    if (!el || !video) return;

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
    io.observe(el);
    return () => io.disconnect();
  }, [isDesktop, reduceMotion]);

  const showVideo = isDesktop && !reduceMotion;

  return (
    <div
      ref={containerRef}
      aria-hidden
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      {showVideo ? (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={poster}
          alt=""
          loading="eager"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
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
