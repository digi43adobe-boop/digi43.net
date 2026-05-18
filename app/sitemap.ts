import type { MetadataRoute } from "next";
import { getAllPosts } from "./lib/posts";

const BASE = "https://digi43.net";

type PathDef = {
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
  lastModified?: Date;
};

const STATIC_PATHS: PathDef[] = [
  { path: "", changeFrequency: "weekly", priority: 1.0 },
  { path: "/about", changeFrequency: "monthly", priority: 0.7 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
  { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
  { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
];

function emit(
  path: string,
  lastModified: Date,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"],
  priority: number
): MetadataRoute.Sitemap {
  return [
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
  ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries = STATIC_PATHS.flatMap(({ path, changeFrequency, priority }) =>
    emit(path, now, changeFrequency, priority)
  );

  let postEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await getAllPosts();
    postEntries = posts.flatMap((post) =>
      emit(`/blog/${post.slug}`, new Date(post.date), "monthly", 0.6)
    );
  } catch {
    // DB not reachable at build — fall back to static entries only.
  }

  return [...staticEntries, ...postEntries];
}
