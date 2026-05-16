type Product = {
  category: string;
  title: string;
  description: string;
  features: string[];
  badge?: string;
  tone: string;
  iconPath: string;
};

const products: Product[] = [
  {
    category: "Productivity & Collaboration",
    title: "Microsoft 365 & Copilot",
    description:
      "Bộ ứng dụng văn phòng đám mây kèm Teams, OneDrive, SharePoint và AI Copilot cho doanh nghiệp mọi quy mô.",
    features: ["Business Basic / Standard / Premium", "Enterprise E3 / E5", "Copilot for Microsoft 365"],
    badge: "Bán chạy",
    tone: "from-sky-500 to-blue-600",
    iconPath:
      "M3 7a2 2 0 0 1 2-2h6v14H5a2 2 0 0 1-2-2V7zm10-2h6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6V5z",
  },
  {
    category: "Creative Suite",
    title: "Adobe Creative Cloud for Teams",
    description:
      "Photoshop, Illustrator, Premiere Pro, After Effects... cho đội ngũ thiết kế, marketing và truyền thông.",
    features: ["Single App / All Apps", "Adobe Acrobat Pro", "Adobe Stock"],
    tone: "from-pink-500 to-red-600",
    iconPath: "M12 3l9 4-9 4-9-4 9-4zm0 8l9 4-9 4-9-4 9-4z",
  },
  {
    category: "Engineering & Design",
    title: "Autodesk AEC & M&E",
    description:
      "AutoCAD, Revit, Civil 3D, Inventor, 3ds Max — giải pháp BIM/CAD đầy đủ cho ngành xây dựng, cơ khí và sản xuất.",
    features: ["AEC Collection", "Product Design & Manufacturing", "Media & Entertainment"],
    tone: "from-amber-500 to-orange-600",
    iconPath: "M3 21V3h18v18H3zm6-6h6V9H9v6z",
  },
  {
    category: "Cybersecurity",
    title: "Endpoint Security & EDR",
    description:
      "Bảo vệ thiết bị đầu cuối, email, server với Kaspersky, Bitdefender, Trend Micro, ESET. Triển khai và monitoring trọn gói.",
    features: ["Endpoint Detection & Response", "Mail Security", "Network & Web Gateway"],
    badge: "Tuân thủ",
    tone: "from-emerald-500 to-teal-600",
    iconPath: "M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z",
  },
  {
    category: "Backup & Disaster Recovery",
    title: "Veeam & Acronis",
    description:
      "Sao lưu, phục hồi và bảo vệ dữ liệu cho VMware, Hyper-V, Microsoft 365, cloud workloads. RPO/RTO tối ưu.",
    features: ["Veeam Data Platform", "Acronis Cyber Protect", "Microsoft 365 Backup"],
    tone: "from-lime-500 to-emerald-600",
    iconPath:
      "M21 12a9 9 0 1 1-3-6.7L21 8M21 3v5h-5",
  },
  {
    category: "Cloud Infrastructure",
    title: "AWS, Azure & Google Cloud",
    description:
      "Hỗ trợ mua credit, thiết kế kiến trúc và tối ưu chi phí FinOps cho các workload chạy trên cloud công cộng.",
    features: ["Reserved Instances / Savings Plans", "Cloud cost optimization", "Migration & Modernization"],
    tone: "from-violet-500 to-indigo-600",
    iconPath:
      "M7 18a4 4 0 0 1-.88-7.9 6 6 0 0 1 11.77 1.36A4.5 4.5 0 0 1 17 21H8a4.5 4.5 0 0 1-1-3z",
  },
];

export function Products() {
  return (
    <section id="products" className="relative bg-ink-50 py-24 lg:py-32">
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
            Danh mục giải pháp
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-950 text-balance">
            Một đối tác — đầy đủ phần mềm bản quyền cho doanh nghiệp
          </h2>
          <p className="mt-4 text-lg text-ink-600 text-balance">
            Hơn 40 hãng phần mềm hàng đầu thế giới được Digi43 phân phối chính
            hãng, kèm dịch vụ triển khai, đào tạo và hỗ trợ kỹ thuật bằng tiếng
            Việt.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => (
            <article
              key={p.title}
              className="card-hover group relative flex flex-col rounded-2xl border border-ink-100 bg-white p-6"
            >
              <div className="flex items-center justify-between">
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${p.tone} text-white shadow-sm`}
                  aria-hidden
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={p.iconPath} />
                  </svg>
                </span>
                {p.badge && (
                  <span className="rounded-full bg-brand-50 text-brand-700 text-[11px] font-semibold px-2.5 py-1 border border-brand-100">
                    {p.badge}
                  </span>
                )}
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-500">
                {p.category}
              </p>
              <h3 className="mt-1 text-xl font-bold text-ink-950">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-600 leading-relaxed">{p.description}</p>
              <ul className="mt-4 space-y-1.5">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-ink-700">
                    <svg className="mt-0.5 shrink-0 text-brand-600" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                Tư vấn license phù hợp
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
