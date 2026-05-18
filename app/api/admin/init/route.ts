import { NextResponse, type NextRequest } from "next/server";
import { ensureSchema } from "../../../lib/schema";
import { seedIfEmpty } from "../../../lib/seed";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const provided = request.headers.get("x-admin-password");
  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return NextResponse.json(
      { error: "ADMIN_PASSWORD env var not set on server." },
      { status: 500 }
    );
  }
  if (provided !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await ensureSchema();
    const result = await seedIfEmpty();
    return NextResponse.json({ ok: true, ...result });
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
