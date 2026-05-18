type FAQDict = {
  kicker: string;
  title: string;
  items: { q: string; a: string }[];
};

export function FAQ({ dict }: { dict: FAQDict }) {
  return (
    <section
      id="faq"
      className="relative bg-code-canvas py-24 lg:py-32 border-t border-subtle-gray overflow-hidden"
    >
      <div aria-hidden className="absolute inset-0 bg-dots opacity-40 pointer-events-none" />

      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-polar-blue">
              {dict.kicker}
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-ghost-white text-balance leading-[1.15]">
              {dict.title}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-3">
            {dict.items.map((it, i) => (
              <details
                key={i}
                className="group card-floating p-0 overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 select-none">
                  <span className="text-base lg:text-lg font-semibold text-ghost-white">
                    {it.q}
                  </span>
                  <span className="shrink-0 inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.06] border border-subtle-gray text-polar-blue transition-transform group-open:rotate-45">
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
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="px-6 pb-6 -mt-2 text-sm text-faded-silver leading-relaxed">
                  {it.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
