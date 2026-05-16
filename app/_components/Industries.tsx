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

const commitments = [
  {
    v: "Chính hãng",
    l: "License xuất hoá đơn VAT, có chứng nhận uỷ quyền từ hãng",
    iconPath: "M9 12l2 2 4-4M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    v: "15 phút",
    l: "SLA phản hồi yêu cầu hỗ trợ qua hotline, email hoặc Zalo",
    iconPath: "M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM12 6v6l4 2",
  },
  {
    v: "24/7",
    l: "Đội ngũ kỹ thuật tiếng Việt sẵn sàng xử lý sự cố",
    iconPath: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
  },
  {
    v: "Tối ưu chi phí",
    l: "Tư vấn lựa chọn gói EA / CSP / Volume Licensing phù hợp",
    iconPath: "M3 17l6-6 4 4 8-8M14 7h7v7",
  },
];

export function Industries() {
  return (
    <section className="relative bg-deep-space py-24 lg:py-32 border-t border-subtle-gray">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-polar-blue">
            Lĩnh vực phục vụ
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-ghost-white text-balance leading-[1.15]">
            Giải pháp phù hợp cho mọi ngành nghề
          </h2>
          <p className="mt-4 text-lg text-faded-silver text-balance">
            Từ doanh nghiệp lớn đến startup tăng trưởng nhanh — Digi43 tư vấn
            license phù hợp với đặc thù vận hành của từng lĩnh vực.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {industries.map((ind) => (
            <div
              key={ind.name}
              className="card-floating group p-6 text-center"
            >
              <span className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.04] border border-subtle-gray text-polar-blue group-hover:bg-polar-blue/15 group-hover:border-polar-blue/40 transition">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d={ind.icon} />
                </svg>
              </span>
              <p className="mt-3 text-sm font-medium text-ghost-white">{ind.name}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {commitments.map((s) => (
            <div
              key={s.v}
              className="card-floating p-6"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-interface-blue/15 ring-1 ring-interface-blue/30 text-polar-blue">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d={s.iconPath} />
                </svg>
              </span>
              <p className="mt-4 text-xl font-semibold text-ghost-white tracking-tight">
                {s.v}
              </p>
              <p className="mt-1 text-sm text-faded-silver leading-relaxed">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
