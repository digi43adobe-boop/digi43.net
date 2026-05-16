export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-deep-space text-ghost-white pt-32 pb-24 lg:pt-40 lg:pb-32">
      {/* Deep blue gradient base */}
      <div aria-hidden className="absolute inset-0 bg-deep-gradient opacity-80" />
      {/* Grid overlay */}
      <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
      {/* Glowing orbs */}
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
              <span className="text-polar-blue">Microsoft Solutions Partner · Authorized Reseller</span>
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold tracking-tight text-balance leading-[1.05]">
              Giải pháp{" "}
              <span className="bg-gradient-to-r from-accent-pink via-cosmic-violet to-polar-blue bg-clip-text text-transparent">
                phần mềm bản quyền
              </span>
              <br className="hidden sm:block" />
              cho doanh nghiệp hiện đại
            </h1>

            <p className="max-w-2xl text-lg text-faded-silver text-balance">
              Digi43 là đối tác cung cấp phần mềm bản quyền chính hãng tại Việt
              Nam — từ Microsoft 365, Adobe Creative Cloud, Autodesk đến các
              giải pháp bảo mật và hạ tầng cloud. Tư vấn license, triển khai và
              hỗ trợ kỹ thuật bằng tiếng Việt.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a href="#contact" className="btn-primary">
                Nhận tư vấn miễn phí
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#products" className="btn-outline">
                Xem danh mục giải pháp
              </a>
            </div>

            <dl className="grid grid-cols-3 gap-6 pt-8 max-w-2xl border-t border-subtle-gray">
              <div className="pt-6">
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-text">Bản quyền</dt>
                <dd className="mt-2 text-xl font-semibold text-ghost-white">100% chính hãng</dd>
              </div>
              <div className="pt-6">
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-text">SLA phản hồi</dt>
                <dd className="mt-2 text-xl font-semibold text-ghost-white">15 phút</dd>
              </div>
              <div className="pt-6">
                <dt className="text-xs uppercase tracking-[0.18em] text-muted-text">Hỗ trợ tiếng Việt</dt>
                <dd className="mt-2 text-xl font-semibold text-ghost-white">24/7</dd>
              </div>
            </dl>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glow behind card */}
              <div aria-hidden className="absolute -inset-6 bg-blue-violet-orb opacity-25 blur-3xl rounded-full" />

              <div className="relative card-code overflow-hidden">
                {/* Top bar like an IDE */}
                <div className="flex items-center gap-2 px-5 py-3 border-b border-subtle-gray">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-5">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-muted-text">License Portfolio</p>
                      <p className="text-base font-semibold mt-1">Doanh nghiệp 250 nhân sự</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-spring-green/15 text-neon-green text-[11px] font-semibold px-2.5 py-1 border border-spring-green/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-neon-green" />
                      Active
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {[
                      {
                        name: "Microsoft 365 Business Premium",
                        seats: "250 users",
                        logo: "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg",
                      },
                      {
                        name: "Adobe Creative Cloud for Teams",
                        seats: "35 users",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/500px-Adobe_Creative_Cloud_rainbow_icon.svg.png",
                      },
                      {
                        name: "Autodesk AEC Collection",
                        seats: "18 users",
                        logo: "https://cdn.simpleicons.org/autodesk/ffffff",
                      },
                      {
                        name: "Windows 11 Enterprise",
                        seats: "250 devices",
                        logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/500px-Windows_logo_-_2012.svg.png",
                      },
                      {
                        name: "Kaspersky Endpoint Security",
                        seats: "280 endpoints",
                        logo: "https://cdn.simpleicons.org/kaspersky/5fed83",
                      },
                    ].map((row) => (
                      <div
                        key={row.name}
                        className="flex items-center gap-3 rounded-xl border border-subtle-gray bg-white/[0.03] hover:bg-white/[0.06] transition px-3 py-2.5"
                      >
                        <span className="h-8 w-8 shrink-0 rounded-md bg-white/[0.08] border border-subtle-gray grid place-items-center p-1.5">
                          <img src={row.logo} alt="" loading="lazy" className="h-full w-full object-contain" />
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-medium text-ghost-white">{row.name}</p>
                          <p className="text-xs text-muted-text">{row.seats}</p>
                        </div>
                        <svg className="text-neon-green shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center justify-between rounded-xl border border-interface-blue/40 bg-interface-blue/10 p-3.5">
                    <div>
                      <p className="text-[11px] text-polar-blue uppercase tracking-wider">Tiết kiệm hàng năm</p>
                      <p className="text-lg font-bold text-ghost-white mt-0.5">~ 320 triệu VND</p>
                    </div>
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-polar-blue" aria-hidden>
                      <path d="M3 17l6-6 4 4 8-8" />
                      <path d="M14 7h7v7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
