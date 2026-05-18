import "server-only";
import { sql } from "./db";
import { rowToPost, type Post, type PostRow } from "./types";

export async function getAllPosts(opts: { includeDrafts?: boolean } = {}): Promise<Post[]> {
  const rows = opts.includeDrafts
    ? ((await sql`
        SELECT slug, date, reading_minutes, author, thumbnail_url, published, content
        FROM posts
        ORDER BY date DESC
      `) as PostRow[])
    : ((await sql`
        SELECT slug, date, reading_minutes, author, thumbnail_url, published, content
        FROM posts
        WHERE published = true
        ORDER BY date DESC
      `) as PostRow[]);
  return rows.map(rowToPost);
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const rows = (await sql`
    SELECT slug, date, reading_minutes, author, thumbnail_url, published, content
    FROM posts
    WHERE slug = ${slug}
    LIMIT 1
  `) as PostRow[];
  if (rows.length === 0) return undefined;
  return rowToPost(rows[0]);
}

export async function getAllSlugs(): Promise<string[]> {
  const rows = (await sql`SELECT slug FROM posts WHERE published = true`) as {
    slug: string;
  }[];
  return rows.map((r) => r.slug);
}

export async function upsertPost(post: Post): Promise<void> {
  await sql`
    INSERT INTO posts (slug, date, reading_minutes, author, thumbnail_url, published, content)
    VALUES (
      ${post.slug},
      ${post.date},
      ${post.readingMinutes},
      ${post.author},
      ${post.thumbnailUrl},
      ${post.published},
      ${JSON.stringify(post.content)}::jsonb
    )
    ON CONFLICT (slug) DO UPDATE SET
      date = EXCLUDED.date,
      reading_minutes = EXCLUDED.reading_minutes,
      author = EXCLUDED.author,
      thumbnail_url = EXCLUDED.thumbnail_url,
      published = EXCLUDED.published,
      content = EXCLUDED.content,
      updated_at = NOW()
  `;
}

export async function deletePost(slug: string): Promise<void> {
  await sql`DELETE FROM posts WHERE slug = ${slug}`;
}

export async function renamePostSlug(oldSlug: string, newSlug: string): Promise<void> {
  await sql`UPDATE posts SET slug = ${newSlug}, updated_at = NOW() WHERE slug = ${oldSlug}`;
}
