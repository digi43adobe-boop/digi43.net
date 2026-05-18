"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { LangSwitcher } from "./LangSwitcher";

type Locale = "vi" | "en";

type NavDict = {
  solutions: string;
  platforms: string;
  services: string;
  whyUs: string;
  contact: string;
  about: string;
  phone: string;
  cta: string;
};

export function Navbar({ dict, lang }: { dict: NavDict; lang: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { label: dict.solutions, href: "#products" },
    { label: dict.platforms, href: "#partners" },
    { label: dict.services, href: "#services" },
    { label: dict.whyUs, href: "#why" },
    { label: dict.contact, href: "#contact" },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-subtle-gray bg-deep-space/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between gap-6">
        <Link href={`/${lang}`} aria-label="Digi43 home">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="btn-ghost">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LangSwitcher current={lang} />
          <a
            href="tel:+84905711739"
            className="text-sm font-medium text-faded-silver hover:text-polar-blue transition"
          >
            {dict.phone}
          </a>
          <a href="#contact" className="btn-primary">
            {dict.cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <LangSwitcher current={lang} />
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ghost-white hover:bg-white/5"
          >
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-subtle-gray bg-deep-space/95 backdrop-blur">
          <div className="container-page py-3 flex flex-col gap-1">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-faded-silver hover:bg-white/5 hover:text-polar-blue"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 justify-center"
            >
              {dict.cta}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
