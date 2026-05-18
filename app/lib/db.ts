import "server-only";
import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let cached: NeonQueryFunction<false, false> | null = null;

function getClient(): NeonQueryFunction<false, false> {
  if (cached) return cached;
  const connectionString =
    process.env.POSTGRES_URL ??
    process.env.DATABASE_URL ??
    process.env.POSTGRES_URL_NON_POOLING;
  if (!connectionString) {
    throw new Error(
      "Missing Postgres connection string. Set POSTGRES_URL (Vercel Postgres) or DATABASE_URL."
    );
  }
  cached = neon(connectionString);
  return cached;
}

// Proxy that forwards both tagged-template calls and string calls to the lazy client.
type SqlClient = NeonQueryFunction<false, false>;

export const sql: SqlClient = new Proxy((() => {}) as unknown as SqlClient, {
  apply(_target, _thisArg, args: unknown[]) {
    const client = getClient();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (client as any)(...args);
  },
  get(_target, prop) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (getClient() as any)[prop];
  },
});
