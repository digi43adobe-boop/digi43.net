import { Logo } from "./Logo";

const links = {
  "Giải pháp": [
    "Microsoft 365 & Copilot",
    "Adobe Creative Cloud",
    "Autodesk AEC / M&E",
    "Cybersecurity",
    "Backup & DR",
    "Cloud Infrastructure",
  ],
  "Dịch vụ": [
    "Tư vấn license",
    "Triển khai & Migration",
    "Đào tạo người dùng",
    "Hỗ trợ kỹ thuật 24/7",
    "License Management Portal",
  ],
  "Công ty": ["Về Digi43", "Đối tác hãng", "Tin tức & Blog", "Tuyển dụng", "Liên hệ"],
};

export function Footer() {
  return (
    <footer className="relative bg-ink-950 text-ink-300">
      <div className="container-page py-16 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4 space-y-5">
            <Logo variant="light" />
            <p className="text-sm leading-relaxed text-ink-300 max-w-sm">
              Digi43 là đối tác cung cấp giải pháp phần mềm bản quyền cho doanh
              nghiệp Việt Nam — phân phối Microsoft, Adobe, Autodesk và nhiều
              hãng phần mềm hàng đầu thế giới.
            </p>
            <ul className="space-y-2 text-sm text-ink-300">
              <li className="flex gap-2">
                <span className="text-ink-400 shrink-0">Địa chỉ:</span>
                <span>03 Quang Trung, P. Hải Châu, TP. Đà Nẵng</span>
              </li>
              <li className="flex gap-2">
                <span className="text-ink-400 shrink-0">Hotline:</span>
                <a href="tel:+84905711739" className="hover:text-white transition">
                  0905 711 739
                </a>
              </li>
              <li className="flex gap-2">
                <span className="text-ink-400 shrink-0">Email:</span>
                <a href="mailto:sales@digi43.net" className="hover:text-white transition">
                  sales@digi43.net
                </a>
              </li>
            </ul>
            <div className="flex gap-3 pt-1">
              <a
                href="https://www.facebook.com/digi43official/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-ink-200 hover:bg-white/10 hover:text-white transition"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-8">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold text-white">{title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {items.map((item) => (
                    <li key={item}>
                      <a href="#" className="text-sm text-ink-300 hover:text-white transition">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-ink-400 leading-relaxed">
            © {new Date().getFullYear()} CÔNG TY TNHH DIGI43 MEDIA · MST: 0402269843
            <br className="md:hidden" />
            <span className="hidden md:inline"> · </span>
            Bản quyền thuộc về Digi43 Media.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-400">
            <a href="#" className="hover:text-white transition">Điều khoản dịch vụ</a>
            <a href="#" className="hover:text-white transition">Chính sách bảo mật</a>
            <a href="#" className="hover:text-white transition">Cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
