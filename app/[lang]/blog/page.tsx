import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";
import { getAllPosts } from "./posts";

export async function generateMetadata(
  props: PageProps<"/[lang]/blog">
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.blog.metaTitle,
    description: dict.blog.metaDescription,
    alternates: {
      canonical: `/${lang}/blog`,
      languages: {
        "vi-VN": "/vi/blog",
        "en-US": "/en/blog",
        "x-default": "/vi/blog",
      },
    },
  };
}

export default async function BlogIndexPage(
  props: PageProps<"/[lang]/blog">
) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const posts = getAllPosts();

  const dateFormatter = new Intl.DateTimeFormat(
    lang === "vi" ? "vi-VN" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />
      <main className="flex-1 bg-deep-space text-ghost-white">
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 border-b border-subtle-gray overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-deep-gradient opacity-70" />
          <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
          <div
            aria-hidden
            className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] bg-violet-glow blur-3xl opacity-60"
          />

          <div className="container-page relative">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-polar-blue">
              {dict.blog.kicker}
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-balance leading-[1.1] max-w-4xl">
              {dict.blog.title}
            </h1>
            <p className="mt-5 text-lg text-faded-silver max-w-2xl">
              {dict.blog.subtitle}
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container-page">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {posts.map((post) => {
                const c = post.content[lang as Locale];
                return (
                  <Link
                    key={post.slug}
                    href={`/${lang}/blog/${post.slug}`}
                    className="card-floating group flex flex-col p-7 no-underline"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="pill !text-polar-blue">{c.category}</span>
                      <span className="text-xs text-muted-text font-mono">
                        {dict.blog.readingMinutes.replace(
                          "{n}",
                          String(post.readingMinutes)
                        )}
                      </span>
                    </div>
                    <h2 className="mt-4 text-xl font-semibold text-ghost-white group-hover:text-polar-blue transition-colors leading-snug">
                      {c.title}
                    </h2>
                    <p className="mt-2 text-sm text-faded-silver leading-relaxed flex-1">
                      {c.excerpt}
                    </p>
                    <div className="mt-5 flex items-center justify-between text-xs text-muted-text">
                      <time dateTime={post.date}>
                        {dateFormatter.format(new Date(post.date))}
                      </time>
                      <span className="inline-flex items-center gap-1 text-polar-blue font-medium">
                        {dict.blog.readMore}
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
