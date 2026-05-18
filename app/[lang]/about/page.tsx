import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getDictionary, hasLocale } from "../dictionaries";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";

export async function generateMetadata(
  props: PageProps<"/[lang]/about">
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);
  return {
    title: dict.about.metaTitle,
    alternates: {
      canonical: `/${lang}/about`,
      languages: {
        "vi-VN": "/vi/about",
        "en-US": "/en/about",
        "x-default": "/vi/about",
      },
    },
  };
}

export default async function AboutPage(props: PageProps<"/[lang]/about">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const a = dict.about;

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />
      <main className="flex-1 bg-deep-space text-ghost-white">
        {/* Hero */}
        <section className="relative isolate overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-24 border-b border-subtle-gray">
          <div aria-hidden className="absolute inset-0 bg-deep-gradient opacity-70" />
          <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
          <div
            aria-hidden
            className="absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] bg-violet-glow blur-3xl opacity-60"
          />

          <div className="container-page relative">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-polar-blue">
              {a.kicker}
            </p>
            <h1 className="mt-3 text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-balance leading-[1.1] max-w-4xl">
              {a.title}
            </h1>
            <p className="mt-6 text-lg lg:text-xl text-faded-silver max-w-3xl leading-relaxed">
              {a.lead}
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="relative py-20 lg:py-28 bg-deep-space">
          <div className="container-page">
            <div className="grid lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <h2 className="text-2xl lg:text-3xl font-bold text-ghost-white">
                  {a.story.title}
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-5 text-faded-silver text-base lg:text-lg leading-relaxed">
                {a.story.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="relative bg-code-canvas py-20 lg:py-28 border-y border-subtle-gray overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-dots opacity-40" />
          <div className="container-page relative">
            <h2 className="text-2xl lg:text-3xl font-bold text-ghost-white max-w-2xl">
              {a.values.title}
            </h2>
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {a.values.items.map((v, i) => (
                <div key={v.title} className="card-floating p-7">
                  <span className="text-sm font-mono text-muted-text">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-lg font-semibold text-ghost-white">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm text-faded-silver leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company info */}
        <section className="relative py-20 lg:py-28 bg-deep-space">
          <div className="container-page">
            <div className="rounded-[24px] border border-subtle-gray bg-code-canvas p-8 lg:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-ghost-white">
                {a.company.title}
              </h2>
              <dl className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
                <InfoItem label={a.company.taxLabel} value={a.company.tax} />
                <InfoItem label={a.company.founded} value={a.company.foundedValue} />
                <InfoItem label={a.company.hqLabel} value={a.company.hq} />
                <InfoItem
                  label={a.company.emailLabel}
                  value={a.company.email}
                  href={`mailto:${a.company.email}`}
                />
                <InfoItem
                  label={a.company.phoneLabel}
                  value={a.company.phone}
                  href={`tel:${a.company.phone.replace(/\s/g, "")}`}
                />
                <InfoItem label="Legal entity" value={a.company.name} />
              </dl>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative bg-code-canvas py-20 lg:py-28 border-t border-subtle-gray overflow-hidden">
          <div aria-hidden className="absolute -top-32 right-1/4 h-[400px] w-[400px] bg-blue-violet-orb blur-3xl opacity-25" />
          <div className="container-page relative text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-ghost-white max-w-2xl mx-auto text-balance">
              {a.cta.title}
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link href={`/${lang}#contact`} className="btn-primary">
                {a.cta.primary}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
              <a href={`mailto:${a.company.email}`} className="btn-outline">
                {a.cta.secondary}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}

function InfoItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  return (
    <div>
      <dt className="text-xs font-semibold uppercase tracking-wider text-muted-text">
        {label}
      </dt>
      <dd className="mt-1.5 text-base text-ghost-white font-medium">
        {href ? (
          <a href={href} className="link-accent">
            {value}
          </a>
        ) : (
          value
        )}
      </dd>
    </div>
  );
}
