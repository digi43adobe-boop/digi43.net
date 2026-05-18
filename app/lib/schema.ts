import "server-only";
import { sql } from "./db";

export async function ensureSchema(): Promise<void> {
  await sql`
    CREATE TABLE IF NOT EXISTS posts (
      slug TEXT PRIMARY KEY,
      date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      reading_minutes INTEGER NOT NULL DEFAULT 5,
      author TEXT NOT NULL DEFAULT 'Digi43 Editorial',
      thumbnail_url TEXT NOT NULL,
      published BOOLEAN NOT NULL DEFAULT true,
      content JSONB NOT NULL,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `;
  await sql`CREATE INDEX IF NOT EXISTS posts_date_idx ON posts (date DESC)`;
  await sql`CREATE INDEX IF NOT EXISTS posts_published_idx ON posts (published)`;
}
