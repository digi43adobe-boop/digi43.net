import "server-only";
import { cookies } from "next/headers";

const COOKIE_NAME = "digi43_admin";
const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 7; // 7 days

function getSecret(): string {
  const s = process.env.AUTH_SECRET;
  if (!s || s.length < 16) {
    throw new Error("AUTH_SECRET env var must be set (>= 16 chars).");
  }
  return s;
}

function getAdminPassword(): string {
  const p = process.env.ADMIN_PASSWORD;
  if (!p) {
    throw new Error("ADMIN_PASSWORD env var must be set.");
  }
  return p;
}

function b64url(input: ArrayBuffer | Uint8Array): string {
  const bytes = input instanceof Uint8Array ? input : new Uint8Array(input);
  let str = "";
  for (let i = 0; i < bytes.length; i++) str += String.fromCharCode(bytes[i]);
  return btoa(str).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function sign(payload: string): Promise<string> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, new TextEncoder().encode(payload));
  return b64url(sig);
}

async function buildToken(): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + COOKIE_MAX_AGE_SECONDS;
  const payload = `admin.${exp}`;
  const sig = await sign(payload);
  return `${payload}.${sig}`;
}

async function verifyToken(token: string): Promise<boolean> {
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [sub, expStr, sig] = parts;
  const exp = Number(expStr);
  if (!Number.isFinite(exp) || exp < Math.floor(Date.now() / 1000)) return false;
  const expectedSig = await sign(`${sub}.${expStr}`);
  // constant-time-ish compare
  if (sig.length !== expectedSig.length) return false;
  let diff = 0;
  for (let i = 0; i < sig.length; i++) {
    diff |= sig.charCodeAt(i) ^ expectedSig.charCodeAt(i);
  }
  return diff === 0;
}

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies();
  const c = store.get(COOKIE_NAME);
  if (!c?.value) return false;
  return verifyToken(c.value);
}

export async function loginWithPassword(password: string): Promise<boolean> {
  if (password !== getAdminPassword()) return false;
  const token = await buildToken();
  const store = await cookies();
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: COOKIE_MAX_AGE_SECONDS,
  });
  return true;
}

export async function logout(): Promise<void> {
  const store = await cookies();
  store.set(COOKIE_NAME, "", {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}
