import { NextResponse, type NextRequest } from "next/server";

const LOCALES = ["vi", "en"] as const;
const DEFAULT_LOCALE = "vi";
const COOKIE_NAME = "NEXT_LOCALE";

type Locale = (typeof LOCALES)[number];

function pickLocaleFromAcceptLanguage(header: string | null): Locale {
  if (!header) return DEFAULT_LOCALE;
  // Parse Accept-Language: e.g. "en-US,en;q=0.9,vi;q=0.8"
  const entries = header
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().split(";");
      const q = params
        .map((p) => p.trim())
        .find((p) => p.startsWith("q="));
      const quality = q ? parseFloat(q.slice(2)) : 1;
      return { tag: tag.toLowerCase(), quality };
    })
    .sort((a, b) => b.quality - a.quality);

  for (const { tag } of entries) {
    if (tag.startsWith("vi")) return "vi";
    if (tag.startsWith("en")) return "en";
  }
  return DEFAULT_LOCALE;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Already has a locale prefix?
  const hasLocale = LOCALES.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  );
  if (hasLocale) return NextResponse.next();

  // Prefer explicit cookie choice (set by the language switcher)
  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value as
    | Locale
    | undefined;
  const fromCookie =
    cookieLocale && (LOCALES as readonly string[]).includes(cookieLocale)
      ? cookieLocale
      : null;

  const locale =
    fromCookie ??
    pickLocaleFromAcceptLanguage(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, static assets, and metadata files
  matcher: [
    "/((?!_next/|api/|favicon\\.ico|icon\\.png|apple-icon\\.png|opengraph-image|robots\\.txt|sitemap\\.xml|.*\\.(?:png|jpg|jpeg|gif|svg|webp|ico|css|js|woff2?)$).*)",
  ],
};
