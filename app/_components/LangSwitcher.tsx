"use client";

import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

type Locale = "vi" | "en";

const COOKIE_NAME = "NEXT_LOCALE";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 365; // 1 year

function pathFor(currentPath: string, target: Locale) {
  // currentPath examples: "/vi", "/vi/about", "/en/contact"
  const segments = currentPath.split("/").filter(Boolean);
  if (segments[0] === "vi" || segments[0] === "en") {
    segments[0] = target;
  } else {
    segments.unshift(target);
  }
  return "/" + segments.join("/");
}

export function LangSwitcher({ current }: { current: Locale }) {
  const router = useRouter();
  const pathname = usePathname() || "/";
  const [pending, startTransition] = useTransition();

  const handle = (target: Locale) => {
    if (target === current || pending) return;
    // Persist the choice so proxy.ts honours it on next visit
    document.cookie = `${COOKIE_NAME}=${target}; path=/; max-age=${COOKIE_MAX_AGE}; samesite=lax`;
    startTransition(() => {
      router.push(pathFor(pathname, target));
    });
  };

  return (
    <div
      role="group"
      aria-label="Language"
      className="inline-flex items-center rounded-full border border-subtle-gray bg-white/[0.04] p-0.5"
    >
      {(["vi", "en"] as Locale[]).map((l) => {
        const active = current === l;
        return (
          <button
            key={l}
            type="button"
            onClick={() => handle(l)}
            aria-pressed={active}
            disabled={pending}
            className={`relative inline-flex items-center justify-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase transition-colors ${
              active
                ? "bg-white/15 text-ghost-white"
                : "text-muted-text hover:text-faded-silver"
            }`}
          >
            {l === "vi" ? "VI" : "EN"}
          </button>
        );
      })}
    </div>
  );
}
