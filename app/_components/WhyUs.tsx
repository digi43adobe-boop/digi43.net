const reasons = [
  {
    title: "Chứng nhận chính hãng",
    desc: "Đại lý uỷ quyền (Authorized Reseller) của Microsoft, Adobe, Autodesk, Kaspersky, Veeam... Xuất hoá đơn VAT đầy đủ.",
    iconPath: "M9 12l2 2 4-4M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
  {
    title: "Tối ưu chi phí license",
    desc: "Phân tích nhu cầu, đề xuất gói phù hợp, tận dụng chương trình EA / CSP / Volume Licensing để tiết kiệm tới 30% chi phí.",
    iconPath: "M3 17l6-6 4 4 8-8M14 7h7v7",
  },
  {
    title: "Triển khai trọn gói",
    desc: "Đội ngũ kỹ sư có chứng chỉ MCSE, MCSA, AWS, Azure... cài đặt, migrate dữ liệu, cấu hình bảo mật theo best practices.",
    iconPath: "M14.7 6.3a4 4 0 0 1-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 1 5.4-5.4l-2.5 2.5 1.4 1.4 2.5-2.5z",
  },
  {
    title: "Hỗ trợ 24/7 bằng tiếng Việt",
    desc: "Hotline, email và Zalo support trực tiếp. SLA cam kết phản hồi trong 15 phút cho khách hàng doanh nghiệp.",
    iconPath: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z",
  },
  {
    title: "Cam kết tuân thủ pháp lý",
    desc: "Đảm bảo doanh nghiệp tuân thủ Luật Sở hữu trí tuệ, Nghị định 22/2018 và sẵn sàng kiểm toán license bất cứ lúc nào.",
    iconPath: "M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",
  },
  {
    title: "Quản trị license tập trung",
    desc: "Portal Digi43 Cloud Manager: theo dõi seat đang dùng, chu kỳ gia hạn, cảnh báo hết hạn và xuất báo cáo cho lãnh đạo.",
    iconPath: "M3 3h7v9H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 16h7v5H3z",
  },
];

export function WhyUs() {
  return (
    <section id="why" className="relative bg-white py-24 lg:py-32">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              Vì sao chọn Digi43
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-950 text-balance">
              Đối tác phần mềm doanh nghiệp tin cậy của 500+ tổ chức
            </h2>
            <p className="mt-5 text-lg text-ink-600">
              Chúng tôi không chỉ bán license. Digi43 đồng hành cùng doanh
              nghiệp ở mọi giai đoạn — từ tư vấn, mua sắm, triển khai đến vận
              hành và tối ưu lâu dài.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink-950 px-5 py-3 text-sm font-semibold text-white hover:bg-ink-800 transition"
            >
              Đặt lịch tư vấn 1:1
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {reasons.map((r, i) => (
              <div
                key={r.title}
                className="card-hover rounded-2xl border border-ink-100 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-700">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d={r.iconPath} />
                    </svg>
                  </span>
                  <span className="text-xs font-semibold text-ink-400">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink-950">{r.title}</h3>
                <p className="mt-2 text-sm text-ink-600 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
