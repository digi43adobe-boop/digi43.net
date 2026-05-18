import { notFound } from "next/navigation";
import { getDictionary, hasLocale, type Locale } from "../dictionaries";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";

export type LegalSection = { heading: string; body: string[] };
export type LegalCopy = {
  title: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export async function LegalPage({
  lang,
  copy,
}: {
  lang: string;
  copy: Record<Locale, LegalCopy>;
}) {
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);
  const c = copy[lang];

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />
      <main className="flex-1 bg-deep-space text-ghost-white">
        <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 border-b border-subtle-gray overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-deep-gradient opacity-60" />
          <div aria-hidden className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[800px] bg-violet-glow blur-3xl opacity-50" />

          <div className="container-page relative">
            <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-bold tracking-tight text-balance leading-[1.15]">
              {c.title}
            </h1>
            <p className="mt-3 text-sm text-muted-text font-mono">
              {c.lastUpdated}
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-20">
          <div className="container-page max-w-3xl">
            <div className="space-y-10">
              {c.sections.map((s, i) => (
                <div key={i}>
                  <h2 className="text-xl lg:text-2xl font-semibold text-ghost-white">
                    {String(i + 1).padStart(2, "0")}. {s.heading}
                  </h2>
                  <div className="mt-3 space-y-3 text-base text-faded-silver leading-relaxed">
                    {s.body.map((p, j) => (
                      <p key={j}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
