const services = [
  {
    step: "01",
    title: "Tư vấn license",
    desc: "Khảo sát hiện trạng, phân loại người dùng, đề xuất gói license tối ưu chi phí và đúng nhu cầu sử dụng.",
  },
  {
    step: "02",
    title: "Mua sắm & cung cấp",
    desc: "Cung cấp license chính hãng, xuất hoá đơn VAT, ký hợp đồng nguyên tắc dài hạn cho doanh nghiệp.",
  },
  {
    step: "03",
    title: "Triển khai & migrate",
    desc: "Cài đặt, cấu hình, di chuyển dữ liệu (mail, file, identity) và đào tạo người dùng cuối tại văn phòng.",
  },
  {
    step: "04",
    title: "Quản trị & gia hạn",
    desc: "Portal quản lý license tập trung, nhắc gia hạn tự động, báo cáo định kỳ và hỗ trợ kỹ thuật 24/7.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative bg-ink-950 text-white py-24 lg:py-32 overflow-hidden">
      <div aria-hidden className="absolute inset-0 hero-grid opacity-30" />
      <div aria-hidden className="absolute top-1/2 -translate-y-1/2 -left-40 h-[500px] w-[500px] rounded-full bg-brand-700/30 blur-[100px]" />

      <div className="container-page relative">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-300">
            Quy trình dịch vụ
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
            Đồng hành xuyên suốt vòng đời license của bạn
          </h2>
          <p className="mt-4 text-lg text-ink-200 text-balance">
            Từ khảo sát ban đầu đến gia hạn nhiều năm sau, mọi giai đoạn đều có
            một chuyên gia Digi43 phụ trách trực tiếp.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.step}
              className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
            >
              <span className="text-4xl font-black bg-gradient-to-br from-brand-200 to-brand-500 bg-clip-text text-transparent">
                {s.step}
              </span>
              <h3 className="mt-4 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-ink-200 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-brand-600/30 to-brand-900/30 p-8 lg:p-10 backdrop-blur-sm">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-2">
              <h3 className="text-2xl lg:text-3xl font-bold">
                Cam kết SLA cho khách hàng doanh nghiệp
              </h3>
              <p className="text-ink-200">
                Phản hồi trong 15 phút · Khắc phục sự cố P1 trong 4 giờ · Báo
                cáo health-check license hàng quý.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[
                { v: "15p", l: "Phản hồi" },
                { v: "4h", l: "Khắc phục P1" },
                { v: "99.9%", l: "Uptime portal" },
              ].map((x) => (
                <div key={x.l} className="rounded-xl bg-white/5 border border-white/10 p-4 text-center">
                  <p className="text-2xl font-bold">{x.v}</p>
                  <p className="text-[11px] text-ink-300 uppercase tracking-wider mt-1">{x.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
