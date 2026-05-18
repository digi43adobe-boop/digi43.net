import Link from "next/link";
import { Logo } from "./Logo";

type Locale = "vi" | "en";

type CompanyItem = { label: string; href: string };

type FooterDict = {
  tagline: string;
  address: string;
  addressValue: string;
  hotline: string;
  email: string;
  cols: {
    solutions: { title: string; items: string[] };
    services: { title: string; items: string[] };
    company: { title: string; items: CompanyItem[] };
  };
  legal: {
    copyright: string;
    terms: string;
    privacy: string;
    cookie: string;
    trademark: string;
  };
};

function localized(href: string, lang: Locale) {
  if (!href.startsWith("/")) return href;
  if (href === "/" || href.startsWith(`/${lang}`)) return href;
  return `/${lang}${href}`;
}

export function Footer({ dict, lang }: { dict: FooterDict; lang: Locale }) {
  const year = new Date().getFullYear();
  const copyright = dict.legal.copyright.replace("{year}", String(year));

  return (
    <footer className="relative bg-midnight-ink text-faded-silver border-t border-subtle-gray">
      <div className="container-page py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-5">
            <Logo />
            <p className="text-sm leading-relaxed text-faded-silver max-w-sm">
              {dict.tagline}
            </p>
            <ul className="space-y-2 text-sm text-faded-silver">
              <li className="flex gap-2">
                <span className="text-muted-text shrink-0">{dict.address}:</span>
                <span>{dict.addressValue}</span>
              </li>
              <li className="flex gap-2">
                <span className="text-muted-text shrink-0">{dict.hotline}:</span>
                <a href="tel:+84905711739" className="link-accent">
                  0905 711 739
                </a>
              </li>
              <li className="flex gap-2">
                <span className="text-muted-text shrink-0">{dict.email}:</span>
                <a href="mailto:sales@digi43.net" className="link-accent">
                  sales@digi43.net
                </a>
              </li>
            </ul>
            <div className="flex gap-3 pt-1">
              <a
                href="https://www.facebook.com/digi43official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-subtle-gray bg-white/[0.04] text-faded-silver hover:bg-white/[0.08] hover:text-polar-blue transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            <FooterColumn
              title={dict.cols.solutions.title}
              items={dict.cols.solutions.items.map((label) => ({ label, href: "#products" }))}
              lang={lang}
            />
            <FooterColumn
              title={dict.cols.services.title}
              items={dict.cols.services.items.map((label) => ({ label, href: "#services" }))}
              lang={lang}
            />
            <FooterColumn
              title={dict.cols.company.title}
              items={dict.cols.company.items}
              lang={lang}
            />
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-subtle-gray space-y-3">
          <p className="text-[11px] text-muted-text leading-relaxed">
            {dict.legal.trademark}
          </p>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-xs text-muted-text leading-relaxed">{copyright}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-text">
              <Link href={`/${lang}/terms`} className="hover:text-polar-blue transition">
                {dict.legal.terms}
              </Link>
              <Link href={`/${lang}/privacy`} className="hover:text-polar-blue transition">
                {dict.legal.privacy}
              </Link>
              <a href="#" className="hover:text-polar-blue transition">
                {dict.legal.cookie}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
  lang,
}: {
  title: string;
  items: CompanyItem[];
  lang: Locale;
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-ghost-white">{title}</h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => {
          const isAnchor = item.href.startsWith("#") || item.href.startsWith("http");
          return (
            <li key={item.label}>
              {isAnchor ? (
                <a
                  href={item.href}
                  className="text-sm text-faded-silver hover:text-polar-blue transition"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  href={localized(item.href, lang)}
                  className="text-sm text-faded-silver hover:text-polar-blue transition"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
