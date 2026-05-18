import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "../../dictionaries";
import { Navbar } from "../../../_components/Navbar";
import { Footer } from "../../../_components/Footer";
import { VideoBackground } from "../../../_components/VideoBackground";
import { TECH_BG } from "../../../_components/video-bg-config";
import { getAllPosts, getPostBySlug } from "../../../lib/posts";
import type { Block } from "../../../lib/types";

export const dynamic = "force-dynamic";

export async function generateMetadata(
  props: PageProps<"/[lang]/blog/[slug]">
): Promise<Metadata> {
  const { lang, slug } = await props.params;
  if (!hasLocale(lang)) return {};
  const post = await getPostBySlug(slug);
  if (!post) return {};
  const c = post.content[lang as Locale];

  return {
    title: c.title,
    description: c.excerpt,
    alternates: {
      canonical: `/${lang}/blog/${slug}`,
      languages: {
        "vi-VN": `/vi/blog/${slug}`,
        "en-US": `/en/blog/${slug}`,
        "x-default": `/vi/blog/${slug}`,
      },
    },
    openGraph: {
      title: c.title,
      description: c.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      tags: [c.category],
      images: post.thumbnailUrl ? [{ url: post.thumbnailUrl }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: c.title,
      description: c.excerpt,
      images: post.thumbnailUrl ? [post.thumbnailUrl] : undefined,
    },
  };
}

export default async function BlogPostPage(
  props: PageProps<"/[lang]/blog/[slug]">
) {
  const { lang, slug } = await props.params;
  if (!hasLocale(lang)) notFound();
  const post = await getPostBySlug(slug);
  if (!post || !post.published) notFound();
  const dict = await getDictionary(lang);
  const c = post.content[lang as Locale];

  const dateFormatter = new Intl.DateTimeFormat(
    lang === "vi" ? "vi-VN" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  const allPosts = await getAllPosts();
  const related = allPosts
    .filter(
      (p) =>
        p.slug !== post.slug && p.content[lang as Locale].category === c.category
    )
    .slice(0, 2);
  const sidebar = related.length
    ? related
    : allPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />
      <main className="flex-1 bg-deep-space text-ghost-white">
        <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 border-b border-subtle-gray overflow-hidden">
          <VideoBackground src={TECH_BG.src} poster={TECH_BG.poster} overlay={0.78} />
          <div
            aria-hidden
            className="absolute -top-40 right-[-10%] h-[500px] w-[700px] bg-blue-violet-orb blur-3xl opacity-20 mix-blend-screen"
          />

          <div className="container-page relative max-w-3xl">
            <Link
              href={`/${lang}/blog`}
              className="inline-flex items-center text-sm text-faded-silver hover:text-polar-blue transition"
            >
              {dict.blog.backToBlog}
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="pill !text-polar-blue">{c.category}</span>
              <span className="text-xs text-muted-text">
                {dict.blog.publishedOn}{" "}
                <time dateTime={post.date}>
                  {dateFormatter.format(new Date(post.date))}
                </time>
              </span>
              <span className="text-xs text-muted-text">·</span>
              <span className="text-xs text-muted-text font-mono">
                {dict.blog.readingMinutes.replace(
                  "{n}",
                  String(post.readingMinutes)
                )}
              </span>
              <span className="text-xs text-muted-text">·</span>
              <span className="text-xs text-muted-text">{post.author}</span>
            </div>

            <h1 className="mt-5 text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-balance leading-[1.15]">
              {c.title}
            </h1>
            <p className="mt-5 text-lg text-faded-silver leading-relaxed">
              {c.excerpt}
            </p>
          </div>
        </section>

        {post.thumbnailUrl && (
          <section className="border-b border-subtle-gray bg-code-canvas/40">
            <div className="container-page max-w-4xl py-10 lg:py-12">
              <div className="overflow-hidden rounded-2xl border border-subtle-gray">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.thumbnailUrl}
                  alt=""
                  className="w-full aspect-[16/9] object-cover"
                />
              </div>
            </div>
          </section>
        )}

        <section className="py-16 lg:py-20">
          <div className="container-page max-w-3xl">
            <article className="space-y-5 text-base lg:text-lg text-faded-silver leading-relaxed">
              {c.blocks.map((b, i) => (
                <RenderBlock key={i} block={b} />
              ))}
            </article>
          </div>
        </section>

        <section className="relative bg-code-canvas py-16 lg:py-20 border-t border-subtle-gray overflow-hidden">
          <div aria-hidden className="absolute -top-24 left-1/4 h-[300px] w-[400px] bg-violet-glow blur-3xl opacity-25" />
          <div className="container-page relative max-w-4xl">
            <div className="rounded-[24px] border border-subtle-gray bg-deep-space p-8 lg:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-ghost-white text-balance max-w-xl mx-auto">
                {dict.blog.ctaTitle}
              </h2>
              <div className="mt-8">
                <Link href={`/${lang}#contact`} className="btn-primary">
                  {dict.blog.ctaButton}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {sidebar.length > 0 && (
          <section className="py-16 lg:py-20 border-t border-subtle-gray">
            <div className="container-page">
              <h2 className="text-xl lg:text-2xl font-semibold text-ghost-white">
                {dict.blog.relatedTitle}
              </h2>
              <div className="mt-6 grid md:grid-cols-2 gap-5">
                {sidebar.map((p) => {
                  const pc = p.content[lang as Locale];
                  return (
                    <Link
                      key={p.slug}
                      href={`/${lang}/blog/${p.slug}`}
                      className="card-floating group flex flex-col overflow-hidden no-underline"
                    >
                      <div className="relative aspect-[16/9] overflow-hidden bg-code-canvas">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.thumbnailUrl}
                          alt=""
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-6">
                        <span className="pill !text-polar-blue w-fit">
                          {pc.category}
                        </span>
                        <h3 className="mt-3 text-lg font-semibold text-ghost-white group-hover:text-polar-blue transition leading-snug">
                          {pc.title}
                        </h3>
                        <p className="mt-2 text-sm text-faded-silver line-clamp-2">
                          {pc.excerpt}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}

function RenderBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return <p className="text-faded-silver">{block.text}</p>;
    case "h2":
      return (
        <h2 className="!mt-12 !mb-3 text-2xl lg:text-3xl font-bold text-ghost-white tracking-tight leading-snug">
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3 className="!mt-8 !mb-2 text-xl font-semibold text-ghost-white">
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="!my-4 space-y-2.5 list-none">
          {block.items.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-faded-silver">
              <svg
                className="mt-2 shrink-0 text-polar-blue"
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="currentColor"
                aria-hidden
              >
                <circle cx="3" cy="3" r="3" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <aside className="!my-8 rounded-2xl border border-polar-blue/30 bg-interface-blue/10 px-5 py-4">
          <div className="flex items-start gap-3">
            <svg
              className="shrink-0 mt-1 text-polar-blue"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 8v4M12 16h.01" />
            </svg>
            <p className="text-base text-faded-silver !m-0">{block.text}</p>
          </div>
        </aside>
      );
  }
}
