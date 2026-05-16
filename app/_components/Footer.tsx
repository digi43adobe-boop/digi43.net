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
              nghiệp Việt Nam, được uỷ quyền chính thức bởi Microsoft, Adobe,
              Autodesk và 40+ hãng phần mềm hàng đầu thế giới.
            </p>
            <div className="flex gap-3 pt-2">
              {[
                { name: "Facebook", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
                { name: "LinkedIn", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 1 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" },
                { name: "YouTube", path: "M22.5 6.4a3 3 0 0 0-2.1-2.1C18.5 4 12 4 12 4s-6.5 0-8.4.3A3 3 0 0 0 1.5 6.4 31 31 0 0 0 1 12a31 31 0 0 0 .5 5.6 3 3 0 0 0 2.1 2.1C5.5 20 12 20 12 20s6.5 0 8.4-.3a3 3 0 0 0 2.1-2.1A31 31 0 0 0 23 12a31 31 0 0 0-.5-5.6zM10 15.5v-7l6 3.5z" },
              ].map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-ink-200 hover:bg-white/10 hover:text-white transition"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
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
          <p className="text-xs text-ink-400">
            © {new Date().getFullYear()} Digi43 Software Licensing. Bản quyền
            thuộc về Công ty TNHH Digi43.
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
