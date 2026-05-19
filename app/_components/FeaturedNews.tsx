import Link from "next/link";
import type { Locale } from "../[lang]/dictionaries";
import { getAllPosts } from "../lib/posts";

export type FeaturedNewsDict = {
  kicker: string;
  title: string;
  subtitle: string;
  viewAll: string;
  readMore: string;
  readingMinutes: string;
  empty: string;
};

export async function FeaturedNews({
  dict,
  lang,
}: {
  dict: FeaturedNewsDict;
  lang: Locale;
}) {
  let posts: Awaited<ReturnType<typeof getAllPosts>> = [];
  try {
    posts = (await getAllPosts()).slice(0, 3);
  } catch {
    // DB unreachable — render empty state silently.
  }

  const dateFormatter = new Intl.DateTimeFormat(
    lang === "vi" ? "vi-VN" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <section
      id="news"
      className="relative bg-deep-space py-24 lg:py-32 border-t border-subtle-gray overflow-hidden"
    >
      <div
        aria-hidden
        className="absolute -top-32 right-[10%] h-[400px] w-[600px] bg-violet-glow blur-3xl opacity-20 mix-blend-screen pointer-events-none"
      />

      <div className="container-page relative">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-polar-blue">
              {dict.kicker}
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-ghost-white text-balance leading-[1.15]">
              {dict.title}
            </h2>
            <p className="mt-4 text-lg text-faded-silver text-balance">
              {dict.subtitle}
            </p>
          </div>
          <Link
            href={`/${lang}/blog`}
            className="btn-outline self-start sm:self-auto shrink-0"
          >
            {dict.viewAll}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {posts.length === 0 ? (
          <p className="mt-12 text-center text-faded-silver">{dict.empty}</p>
        ) : (
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((post) => {
              const c = post.content[lang];
              return (
                <Link
                  key={post.slug}
                  href={`/${lang}/blog/${post.slug}`}
                  className="card-floating group flex flex-col overflow-hidden no-underline"
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-code-canvas">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={post.thumbnailUrl}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-deep-space/80 via-deep-space/10 to-transparent"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="pill !text-polar-blue">{c.category}</span>
                      <span className="text-xs text-muted-text font-mono">
                        {dict.readingMinutes.replace(
                          "{n}",
                          String(post.readingMinutes)
                        )}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-ghost-white group-hover:text-polar-blue transition-colors leading-snug line-clamp-2">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-faded-silver leading-relaxed flex-1 line-clamp-2">
                      {c.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-xs text-muted-text">
                      <time dateTime={post.date}>
                        {dateFormatter.format(new Date(post.date))}
                      </time>
                      <span className="inline-flex items-center gap-1 text-polar-blue font-medium">
                        {dict.readMore}
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden
                        >
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
