import type { Locale } from "../[lang]/dictionaries";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "image"; src: string; alt?: string };

export type LocalisedPost = {
  title: string;
  excerpt: string;
  category: string;
  blocks: Block[];
};

export type Post = {
  slug: string;
  date: string;
  readingMinutes: number;
  author: string;
  thumbnailUrl: string;
  published: boolean;
  content: Record<Locale, LocalisedPost>;
};

export type PostRow = {
  slug: string;
  date: string;
  reading_minutes: number;
  author: string;
  thumbnail_url: string;
  published: boolean;
  content: Record<Locale, LocalisedPost>;
};

export function rowToPost(row: PostRow): Post {
  return {
    slug: row.slug,
    date: typeof row.date === "string" ? row.date : new Date(row.date).toISOString(),
    readingMinutes: row.reading_minutes,
    author: row.author,
    thumbnailUrl: row.thumbnail_url,
    published: row.published,
    content: row.content,
  };
}
