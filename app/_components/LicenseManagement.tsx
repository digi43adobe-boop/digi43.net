type LicenseDict = {
  kicker: string;
  title: string;
  subtitle: string;
  tiles: { step: string; title: string; desc: string }[];
  sla: {
    title: string;
    subtitle: string;
    metrics: { v: string; l: string }[];
  };
};

export function LicenseManagement({ dict }: { dict: LicenseDict }) {
  return (
    <section
      id="services"
      className="relative bg-code-canvas text-ghost-white py-24 lg:py-32 overflow-hidden border-t border-subtle-gray"
    >
      <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
      <div aria-hidden className="absolute top-1/2 -translate-y-1/2 -left-40 h-[600px] w-[600px] rounded-full bg-violet-glow blur-3xl opacity-25" />

      <div className="container-page relative">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-polar-blue">
            {dict.kicker}
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-balance leading-[1.15]">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-faded-silver text-balance">
            {dict.subtitle}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {dict.tiles.map((s) => (
            <div key={s.step} className="card-floating p-6">
              <span className="text-4xl font-extrabold font-mono bg-gradient-to-br from-polar-blue via-cosmic-violet to-accent-pink bg-clip-text text-transparent">
                {s.step}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ghost-white">{s.title}</h3>
              <p className="mt-2 text-sm text-faded-silver leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 relative overflow-hidden rounded-[24px] border border-subtle-gray bg-deep-space p-8 lg:p-10">
          <div aria-hidden className="absolute -top-20 -right-20 h-[300px] w-[300px] bg-blue-violet-orb blur-3xl opacity-30" />
          <div className="relative grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-2">
              <h3 className="text-2xl lg:text-3xl font-bold text-ghost-white">
                {dict.sla.title}
              </h3>
              <p className="text-faded-silver">{dict.sla.subtitle}</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {dict.sla.metrics.map((x) => (
                <div
                  key={x.l}
                  className="rounded-xl bg-white/[0.04] border border-subtle-gray p-3 text-center"
                >
                  <p className="text-xl font-bold text-ghost-white">{x.v}</p>
                  <p className="text-[10px] text-muted-text uppercase tracking-wider mt-1">
                    {x.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
