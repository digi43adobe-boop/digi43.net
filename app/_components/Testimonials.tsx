const testimonials = [
  {
    quote:
      "Digi43 giúp chúng tôi chuẩn hoá toàn bộ license Microsoft 365 và Adobe trong 6 tuần, tiết kiệm 28% chi phí so với năm trước. Đội ngũ kỹ thuật phản hồi cực nhanh.",
    author: "Anh Trần Minh Khôi",
    role: "Giám đốc CNTT",
    company: "Tập đoàn FMCG niêm yết HoSE",
  },
  {
    quote:
      "Quy trình tư vấn chuyên nghiệp, đề xuất rõ ràng giữa các phương án EA, CSP và Open Value. Phòng tài chính chúng tôi đặc biệt thích báo cáo chu kỳ gia hạn.",
    author: "Chị Nguyễn Thị Lan Phương",
    role: "CFO",
    company: "Công ty xây dựng top 10 Việt Nam",
  },
  {
    quote:
      "Migrate 1.200 mailbox từ Google Workspace sang Microsoft 365 cuối tuần, không downtime. Digi43 thực sự là đối tác chiến lược về phần mềm bản quyền của chúng tôi.",
    author: "Anh Phạm Quốc Bảo",
    role: "Head of Infrastructure",
    company: "Ngân hàng TMCP",
  },
];

export function Testimonials() {
  return (
    <section className="relative bg-ink-50 py-24 lg:py-32">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
            Khách hàng nói gì
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-950 text-balance">
            Sự tin cậy được xây dựng qua từng dự án
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.author}
              className="card-hover flex flex-col rounded-2xl border border-ink-100 bg-white p-7"
            >
              <svg className="text-brand-300" width="40" height="32" viewBox="0 0 40 32" fill="currentColor" aria-hidden>
                <path d="M0 32V20C0 9 6 1 18 0v6C12 8 9 12 9 17h9v15H0zm22 0V20C22 9 28 1 40 0v6c-6 2-9 6-9 11h9v15H22z" />
              </svg>
              <blockquote className="mt-4 flex-1 text-ink-700 leading-relaxed">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 pt-6 border-t border-ink-100">
                <p className="font-semibold text-ink-950">{t.author}</p>
                <p className="text-sm text-ink-500">
                  {t.role} · {t.company}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
