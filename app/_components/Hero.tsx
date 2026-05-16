export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 text-white pt-32 pb-24 lg:pt-40 lg:pb-32">
      <div aria-hidden className="absolute inset-0 hero-grid opacity-40" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1100px] rounded-full bg-brand-600/30 blur-[120px]"
      />
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-brand-500/20 blur-[100px]"
      />

      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-brand-100 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Microsoft Solutions Partner · Authorized Reseller
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-[1.05]">
              Giải pháp{" "}
              <span className="bg-gradient-to-r from-brand-200 via-white to-brand-200 bg-clip-text text-transparent">
                phần mềm bản quyền
              </span>{" "}
              cho doanh nghiệp hiện đại
            </h1>

            <p className="max-w-2xl text-lg text-ink-200 text-balance">
              Digi43 đồng hành cùng hơn 500+ doanh nghiệp Việt Nam trong việc
              chuẩn hoá license phần mềm, tối ưu chi phí và đảm bảo tuân thủ —
              từ Microsoft 365, Adobe Creative Cloud, Autodesk đến các giải pháp
              bảo mật và hạ tầng cloud.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-white text-ink-950 px-6 py-3.5 text-sm font-semibold shadow-lg shadow-brand-600/20 hover:bg-brand-100 transition"
              >
                Nhận tư vấn miễn phí
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#products"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/10 transition"
              >
                Xem danh mục giải pháp
              </a>
            </div>

            <dl className="grid grid-cols-3 gap-6 pt-6 max-w-xl">
              <div>
                <dt className="text-xs text-ink-300 uppercase tracking-wider">Doanh nghiệp</dt>
                <dd className="mt-1 text-2xl font-bold">500+</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-300 uppercase tracking-wider">Hãng đối tác</dt>
                <dd className="mt-1 text-2xl font-bold">40+</dd>
              </div>
              <div>
                <dt className="text-xs text-ink-300 uppercase tracking-wider">Hỗ trợ</dt>
                <dd className="mt-1 text-2xl font-bold">24/7</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-brand-400/40 to-brand-700/40 blur-2xl" aria-hidden />
              <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 backdrop-blur glow">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-ink-300">License Portfolio</p>
                    <p className="text-lg font-semibold">Doanh nghiệp 250 nhân sự</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-2.5 py-1">
                    Active
                  </span>
                </div>
                <div className="space-y-3">
                  {[
                    { name: "Microsoft 365 Business Premium", seats: "250 users", tone: "from-blue-500 to-cyan-500" },
                    { name: "Adobe Creative Cloud for Teams", seats: "35 users", tone: "from-red-500 to-pink-500" },
                    { name: "Autodesk AEC Collection", seats: "18 users", tone: "from-orange-500 to-amber-500" },
                    { name: "Kaspersky Endpoint Security", seats: "280 endpoints", tone: "from-emerald-500 to-teal-500" },
                    { name: "Veeam Backup & Replication", seats: "12 sockets", tone: "from-emerald-400 to-green-500" },
                  ].map((row) => (
                    <div
                      key={row.name}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3"
                    >
                      <span className={`h-9 w-9 shrink-0 rounded-lg bg-gradient-to-br ${row.tone} grid place-items-center text-[10px] font-bold`}>
                        {row.name.split(" ").slice(0, 1).map((w) => w[0]).join("")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium">{row.name}</p>
                        <p className="text-xs text-ink-300">{row.seats}</p>
                      </div>
                      <span className="text-xs text-emerald-300 font-medium">✓</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between rounded-xl bg-brand-600/20 border border-brand-400/30 p-3">
                  <div>
                    <p className="text-xs text-brand-200">Tiết kiệm hàng năm</p>
                    <p className="text-lg font-bold text-white">~ 320 triệu VND</p>
                  </div>
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-200" aria-hidden>
                    <path d="M3 17l6-6 4 4 8-8" />
                    <path d="M14 7h7v7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
