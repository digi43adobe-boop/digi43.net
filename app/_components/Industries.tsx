const industries = [
  { name: "Tài chính – Ngân hàng", icon: "M3 21h18M5 21V10l7-5 7 5v11M9 21v-7h6v7" },
  { name: "Sản xuất & FMCG", icon: "M3 21h18M4 21V8l4-3 4 3v13M12 21V12l4-3 4 3v9" },
  { name: "Giáo dục & Đào tạo", icon: "M22 10L12 5 2 10l10 5 10-5zM6 12v5c0 1 2 3 6 3s6-2 6-3v-5" },
  { name: "Xây dựng & BĐS", icon: "M3 21V8l9-5 9 5v13M9 21v-8h6v8" },
  { name: "Y tế & Dược phẩm", icon: "M12 2v20M2 12h20M8 8l8 8M16 8l-8 8" },
  { name: "Bán lẻ & TMĐT", icon: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0" },
  { name: "Logistics", icon: "M3 9h13l3 4h2v5h-2a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H3z" },
  { name: "Cơ quan nhà nước", icon: "M3 21h18M5 21V10l7-5 7 5v11M9 12h6M9 16h6" },
];

export function Industries() {
  return (
    <section className="relative bg-white py-24 lg:py-32 border-t border-ink-100">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
            Khách hàng tiêu biểu
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-950 text-balance">
            Tin dùng bởi các doanh nghiệp đa ngành
          </h2>
          <p className="mt-4 text-lg text-ink-600 text-balance">
            Từ tập đoàn niêm yết tới startup tăng trưởng nhanh, Digi43 hiểu rõ
            đặc thù license của từng lĩnh vực.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="card-hover group rounded-2xl border border-ink-100 bg-ink-50/40 p-6 text-center"
            >
              <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-ink-100 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d={ind.icon} />
                </svg>
              </span>
              <p className="mt-3 text-sm font-semibold text-ink-800">{ind.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { v: "500+", l: "Doanh nghiệp tin dùng" },
            { v: "120K+", l: "License đang quản lý" },
            { v: "40+", l: "Hãng phần mềm đối tác" },
            { v: "12 năm", l: "Kinh nghiệm thị trường" },
          ].map((s) => (
            <div
              key={s.l}
              className="rounded-2xl border border-ink-100 bg-gradient-to-br from-brand-50 to-white p-6 text-center"
            >
              <p className="text-3xl lg:text-4xl font-black text-brand-700 tracking-tight">
                {s.v}
              </p>
              <p className="mt-2 text-sm text-ink-600 font-medium">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
