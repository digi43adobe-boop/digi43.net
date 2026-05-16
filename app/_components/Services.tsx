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
    <section id="services" className="relative bg-code-canvas text-ghost-white py-24 lg:py-32 overflow-hidden border-t border-subtle-gray">
      <div aria-hidden className="absolute inset-0 bg-grid opacity-30" />
      <div aria-hidden className="absolute top-1/2 -translate-y-1/2 -left-40 h-[600px] w-[600px] rounded-full bg-violet-glow blur-3xl opacity-25" />

      <div className="container-page relative">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-polar-blue">
            Quy trình dịch vụ
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-balance leading-[1.15]">
            Đồng hành xuyên suốt vòng đời license của bạn
          </h2>
          <p className="mt-4 text-lg text-faded-silver text-balance">
            Từ khảo sát ban đầu đến gia hạn nhiều năm sau, mọi giai đoạn đều có
            một chuyên gia Digi43 phụ trách trực tiếp.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s) => (
            <div
              key={s.step}
              className="card-floating p-6"
            >
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
                Cam kết SLA cho khách hàng doanh nghiệp
              </h3>
              <p className="text-faded-silver">
                Phản hồi trong 15 phút · Khắc phục sự cố P1 trong 4 giờ · Báo
                cáo health-check license hàng quý.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { v: "15p", l: "Phản hồi" },
                { v: "4h", l: "Khắc phục P1" },
                { v: "99.9%", l: "Uptime portal" },
              ].map((x) => (
                <div key={x.l} className="rounded-xl bg-white/[0.04] border border-subtle-gray p-3 text-center">
                  <p className="text-xl font-bold text-ghost-white">{x.v}</p>
                  <p className="text-[10px] text-muted-text uppercase tracking-wider mt-1">{x.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
