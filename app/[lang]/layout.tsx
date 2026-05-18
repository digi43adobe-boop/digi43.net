import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import "../globals.css";
import { defaultLocale, getDictionary, hasLocale, locales } from "./dictionaries";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(
  props: LayoutProps<"/[lang]">
): Promise<Metadata> {
  const { lang } = await props.params;
  if (!hasLocale(lang)) return {};
  const dict = await getDictionary(lang);

  const ogLocaleMap = { vi: "vi_VN", en: "en_US" } as const;
  const alternateLocales = locales
    .filter((l) => l !== lang)
    .map((l) => ogLocaleMap[l]);

  return {
    metadataBase: new URL("https://digi43.net"),
    title: { default: dict.meta.title, template: dict.meta.titleTemplate },
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        "vi-VN": "/vi",
        "en-US": "/en",
        "x-default": `/${defaultLocale}`,
      },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `https://digi43.net/${lang}`,
      siteName: "Digi43",
      locale: ogLocaleMap[lang],
      alternateLocale: alternateLocales,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.title,
      description: dict.meta.description,
    },
    robots: { index: true, follow: true },
  };
}

export default async function RootLayout(props: LayoutProps<"/[lang]">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();

  return (
    <html
      lang={lang}
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        {props.children}
      </body>
    </html>
  );
}
