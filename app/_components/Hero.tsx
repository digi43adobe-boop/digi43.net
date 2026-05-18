type HeroDict = {
  badge: string;
  title: string;
  titleAccent: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  stats: {
    licensing: { label: string; value: string };
    sla: { label: string; value: string };
    support: { label: string; value: string };
  };
  dashboard: {
    title: string;
    subtitle: string;
    statusActive: string;
    tabs: { inventory: string; renewals: string; users: string };
    metrics: {
      totalSeats: string;
      utilization: string;
      upcomingRenewal: string;
    };
    renewalLabel: string;
    footer: string;
  };
};

const LICENSE_ROWS = [
  {
    name: "Microsoft 365 Business Premium",
    used: 248,
    total: 250,
    logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg",
  },
  {
    name: "Adobe Creative Cloud for Teams",
    used: 32,
    total: 35,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/500px-Adobe_Creative_Cloud_rainbow_icon.svg.png",
  },
  {
    name: "Autodesk AEC Collection",
    used: 16,
    total: 18,
    logo: "https://cdn.simpleicons.org/autodesk/ffffff",
  },
  {
    name: "Windows 11 Enterprise",
    used: 247,
    total: 250,
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/500px-Windows_logo_-_2012.svg.png",
  },
];

export function Hero({ dict }: { dict: HeroDict }) {
  return (
    <section className="relative isolate overflow-hidden bg-deep-space text-ghost-white pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div aria-hidden className="absolute inset-0 bg-deep-gradient opacity-80" />
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1100px] bg-violet-glow blur-3xl opacity-70"
      />
      <div
        aria-hidden
        className="absolute bottom-0 right-[-200px] h-[460px] w-[460px] rounded-full bg-blue-violet-orb blur-3xl opacity-40 animate-float-slow"
      />
      <div
        aria-hidden
        className="absolute top-1/3 -left-32 h-[380px] w-[380px] rounded-full bg-vapor-trail blur-3xl opacity-30"
      />

      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-7">
            <span className="pill">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-neon-green opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-neon-green" />
              </span>
              <span className="text-polar-blue">{dict.badge}</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight text-balance leading-[1.05]">
              {dict.title}{" "}
              <span className="bg-gradient-to-r from-accent-pink via-cosmic-violet to-polar-blue bg-clip-text text-transparent">
                {dict.titleAccent}
              </span>
            </h1>

            <p className="max-w-2xl text-lg text-faded-silver text-balance">
              {dict.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="#contact" className="btn-primary">
                {dict.ctaPrimary}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#products" className="btn-outline">
                {dict.ctaSecondary}
              </a>
            </div>

            <dl className="grid grid-cols-3 gap-6 pt-8 max-w-2xl border-t border-subtle-gray">
              <div className="pt-6">
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-text">
                  {dict.stats.licensing.label}
                </dt>
                <dd className="mt-2 text-xl font-semibold text-ghost-white">
                  {dict.stats.licensing.value}
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-text">
                  {dict.stats.sla.label}
                </dt>
                <dd className="mt-2 text-xl font-semibold text-ghost-white">
                  {dict.stats.sla.value}
                </dd>
              </div>
              <div className="pt-6">
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-text">
                  {dict.stats.support.label}
                </dt>
                <dd className="mt-2 text-xl font-semibold text-ghost-white">
                  {dict.stats.support.value}
                </dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5 relative">
            <LicenseDashboard dict={dict.dashboard} />
          </div>
        </div>
      </div>
    </section>
  );
}

function LicenseDashboard({ dict }: { dict: HeroDict["dashboard"] }) {
  const totalUsed = LICENSE_ROWS.reduce((s, r) => s + r.used, 0);
  const totalSeats = LICENSE_ROWS.reduce((s, r) => s + r.total, 0);
  const utilization = Math.round((totalUsed / totalSeats) * 100);

  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      <div aria-hidden className="absolute -inset-6 bg-blue-violet-orb opacity-25 blur-3xl rounded-full" />

      <div className="relative rounded-2xl border border-subtle-gray bg-deep-space/90 backdrop-blur overflow-hidden shadow-[0_24px_80px_-20px_rgba(0,0,0,0.6)]">
        {/* Dashboard chrome */}
        <div className="flex items-center justify-between gap-3 px-5 py-3.5 border-b border-subtle-gray bg-white/[0.02]">
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.18em] text-muted-text">
              {dict.title}
            </p>
            <p className="text-sm font-medium text-ghost-white truncate">
              {dict.subtitle}
            </p>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-spring-green/15 text-neon-green text-[11px] font-semibold px-2.5 py-1 border border-spring-green/30">
            <span className="h-1.5 w-1.5 rounded-full bg-neon-green animate-pulse" />
            {dict.statusActive}
          </span>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-1 px-3 pt-3 border-b border-subtle-gray">
          {[
            { id: "inv", label: dict.tabs.inventory, active: true },
            { id: "ren", label: dict.tabs.renewals, active: false },
            { id: "usr", label: dict.tabs.users, active: false },
          ].map((t) => (
            <span
              key={t.id}
              className={`px-3 py-2 text-xs font-medium rounded-t-md border-b-2 -mb-px ${
                t.active
                  ? "text-ghost-white border-polar-blue bg-white/[0.04]"
                  : "text-muted-text border-transparent"
              }`}
            >
              {t.label}
            </span>
          ))}
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-3 gap-px bg-subtle-gray border-b border-subtle-gray">
          {[
            { label: dict.metrics.totalSeats, value: totalSeats.toLocaleString() },
            { label: dict.metrics.utilization, value: `${utilization}%` },
            { label: dict.metrics.upcomingRenewal, value: dict.renewalLabel },
          ].map((m) => (
            <div key={m.label} className="bg-deep-space p-3.5">
              <p className="text-[10px] uppercase tracking-wider text-muted-text">
                {m.label}
              </p>
              <p className="mt-1 text-base font-semibold text-ghost-white truncate">
                {m.value}
              </p>
            </div>
          ))}
        </div>

        {/* License rows */}
        <ul className="px-4 py-4 space-y-2.5">
          {LICENSE_ROWS.map((row) => {
            const pct = Math.round((row.used / row.total) * 100);
            const tone =
              pct >= 95
                ? "bg-amber-400"
                : pct >= 80
                ? "bg-polar-blue"
                : "bg-neon-green";
            return (
              <li
                key={row.name}
                className="flex items-center gap-3 rounded-lg border border-subtle-gray bg-white/[0.025] px-3 py-2.5"
              >
                <span className="h-8 w-8 shrink-0 rounded-md bg-white/[0.08] border border-subtle-gray grid place-items-center p-1.5">
                  <img src={row.logo} alt="" loading="lazy" className="h-full w-full object-contain" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p className="truncate text-sm font-medium text-ghost-white">
                      {row.name}
                    </p>
                    <p className="shrink-0 text-xs text-muted-text tabular-nums">
                      {row.used}/{row.total}
                    </p>
                  </div>
                  <div className="mt-1.5 h-1 rounded-full bg-subtle-gray overflow-hidden">
                    <div
                      className={`h-full ${tone}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Footer */}
        <div className="flex items-center gap-2 px-5 py-3 border-t border-subtle-gray bg-white/[0.02]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-polar-blue shrink-0" aria-hidden>
            <path d="M12 2a10 10 0 0 1 10 10c0 5.5-10 10-10 10S2 17.5 2 12A10 10 0 0 1 12 2z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
          <p className="text-xs text-muted-text truncate">{dict.footer}</p>
        </div>
      </div>
    </div>
  );
}
