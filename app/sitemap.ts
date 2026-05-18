import type { MetadataRoute } from "next";

const BASE = "https://digi43.net";

// Paths kept in one place so adding a new page = one line edit.
type PathDef = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
};

const PATHS: PathDef[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return PATHS.flatMap(({ path, changeFrequency, priority }) => [
    {
      url: `${BASE}/vi${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          "vi-VN": `${BASE}/vi${path}`,
          "en-US": `${BASE}/en${path}`,
          "x-default": `${BASE}/vi${path}`,
        },
      },
    },
    {
      url: `${BASE}/en${path}`,
      lastModified,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          "vi-VN": `${BASE}/vi${path}`,
          "en-US": `${BASE}/en${path}`,
          "x-default": `${BASE}/vi${path}`,
        },
      },
    },
  ]);
}
