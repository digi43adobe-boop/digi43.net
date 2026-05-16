type Logo = {
  src: string;
  alt: string;
  /** Use white-monochrome filter for logos that contain dark text/marks */
  mono?: boolean;
};

type Product = {
  category: string;
  title: string;
  description: string;
  features: string[];
  logos: Logo[];
};

const VL = (slug: string) =>
  `https://www.vectorlogo.zone/logos/${slug}/${slug}-icon.svg`;
const SI = (slug: string, color = "ffffff") =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

const products: Product[] = [
  {
    category: "Productivity & Collaboration",
    title: "Microsoft 365 & Copilot",
    description:
      "Bộ ứng dụng văn phòng đám mây kèm Teams, OneDrive, SharePoint và AI Copilot cho doanh nghiệp mọi quy mô.",
    features: [
      "Business Basic / Standard / Premium",
      "Enterprise E3 / E5",
      "Copilot for Microsoft 365",
    ],
    logos: [{ src: VL("microsoft"), alt: "Microsoft" }],
  },
  {
    category: "Creative Suite",
    title: "Adobe Creative Cloud for Teams",
    description:
      "Photoshop, Illustrator, Premiere Pro, After Effects... cho đội ngũ thiết kế, marketing và truyền thông.",
    features: ["Single App / All Apps", "Adobe Acrobat Pro", "Adobe Stock"],
    logos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_rainbow_icon.svg/500px-Adobe_Creative_Cloud_rainbow_icon.svg.png",
        alt: "Adobe Creative Cloud",
      },
    ],
  },
  {
    category: "Engineering & Design",
    title: "Autodesk AEC & M&E",
    description:
      "AutoCAD, Revit, Civil 3D, Inventor, 3ds Max — giải pháp BIM/CAD đầy đủ cho ngành xây dựng, cơ khí và sản xuất.",
    features: [
      "AEC Collection",
      "Product Design & Manufacturing",
      "Media & Entertainment",
    ],
    logos: [{ src: SI("autodesk"), alt: "Autodesk", mono: true }],
  },
  {
    category: "Cybersecurity",
    title: "Endpoint Security & EDR",
    description:
      "Bảo vệ thiết bị đầu cuối, email, server với Kaspersky, Bitdefender, Trend Micro, ESET. Triển khai và monitoring trọn gói.",
    features: [
      "Endpoint Detection & Response",
      "Mail Security",
      "Network & Web Gateway",
    ],
    logos: [
      { src: SI("kaspersky", "19B886"), alt: "Kaspersky" },
      { src: SI("bitdefender", "ED1C24"), alt: "Bitdefender" },
      { src: SI("trendmicro", "D71920"), alt: "Trend Micro" },
    ],
  },
  {
    category: "Operating System",
    title: "Bản quyền Windows & Windows Server",
    description:
      "Cung cấp key bản quyền Windows 11/10 Pro, Enterprise và Windows Server chính hãng cho doanh nghiệp. Xuất hoá đơn VAT, kích hoạt vĩnh viễn / theo gói Volume Licensing.",
    features: [
      "Windows 11 / 10 Pro · Enterprise",
      "Windows Server 2022 / 2025",
      "User CAL / Device CAL · Volume Licensing",
    ],
    logos: [
      {
        src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/500px-Windows_logo_-_2012.svg.png",
        alt: "Windows",
      },
    ],
  },
  {
    category: "Cloud Infrastructure",
    title: "AWS, Azure & Google Cloud",
    description:
      "Hỗ trợ mua credit, thiết kế kiến trúc và tối ưu chi phí FinOps cho các workload chạy trên cloud công cộng.",
    features: [
      "Reserved Instances / Savings Plans",
      "Cloud cost optimization",
      "Migration & Modernization",
    ],
    logos: [
      { src: VL("amazon_aws"), alt: "AWS" },
      { src: VL("microsoft_azure"), alt: "Azure" },
      { src: VL("google_cloud"), alt: "Google Cloud" },
    ],
  },
];

function LogoBadge({ logo, size = "lg" }: { logo: Logo; size?: "lg" | "sm" }) {
  const dim = size === "lg" ? "h-12 w-12" : "h-10 w-10";
  const img = size === "lg" ? "max-h-7 max-w-8" : "max-h-6 max-w-7";
  return (
    <span
      className={`inline-flex ${dim} items-center justify-center rounded-xl border border-subtle-gray bg-white/[0.06]`}
      title={logo.alt}
    >
      <img
        src={logo.src}
        alt={logo.alt}
        loading="lazy"
        className={`${img} object-contain ${logo.mono ? "logo-mono" : ""}`}
      />
    </span>
  );
}

export function Products() {
  return (
    <section
      id="products"
      className="relative bg-code-canvas py-24 lg:py-32 border-t border-subtle-gray"
    >
      <div aria-hidden className="absolute inset-0 bg-dots opacity-50 pointer-events-none" />
      <div className="container-page relative">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-polar-blue">
            Danh mục giải pháp
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-ghost-white text-balance leading-[1.2]">
            Một đối tác — đầy đủ phần mềm bản quyền cho doanh nghiệp
          </h2>
          <p className="mt-4 text-lg text-faded-silver text-balance">
            Các hãng phần mềm hàng đầu thế giới được Digi43 phân phối chính
            hãng, kèm dịch vụ triển khai, đào tạo và hỗ trợ kỹ thuật bằng tiếng
            Việt.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map((p) => {
            const isMulti = p.logos.length > 1;
            return (
              <article
                key={p.title}
                className="card-floating group relative flex flex-col p-7"
              >
                <div className="flex items-center gap-2">
                  {p.logos.map((logo) => (
                    <LogoBadge
                      key={logo.alt}
                      logo={logo}
                      size={isMulti ? "sm" : "lg"}
                    />
                  ))}
                </div>

                <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-muted-text">
                  {p.category}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-ghost-white">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-faded-silver leading-relaxed">
                  {p.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-faded-silver"
                    >
                      <svg
                        className="mt-0.5 shrink-0 text-polar-blue"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium link-accent"
                >
                  Tư vấn license phù hợp
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
