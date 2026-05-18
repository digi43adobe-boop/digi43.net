/**
 * Constants for the ambient hero video background.
 *
 * Lives in its own module (no "use client") so server components can
 * import the values directly without them being wrapped into a client
 * reference by the Next.js bundler.
 */
export const TECH_BG = {
  src: "https://videos.pexels.com/video-files/3129957/3129957-hd_1280_720_25fps.mp4",
  poster:
    "https://images.pexels.com/videos/3129957/free-video-3129957.jpg?auto=compress&cs=tinysrgb&w=1600",
} as const;
