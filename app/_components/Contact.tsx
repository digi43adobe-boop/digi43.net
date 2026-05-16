"use client";

import { useState } from "react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative bg-white py-24 lg:py-32">
      <div className="container-page">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600">
              Liên hệ Digi43
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-ink-950 text-balance">
              Nhận báo giá license trong 24 giờ
            </h2>
            <p className="mt-4 text-lg text-ink-600">
              Để lại thông tin, đội ngũ tư vấn của Digi43 sẽ liên hệ với bạn
              trong vòng 24 giờ làm việc kèm theo bảng so sánh các phương án
              license phù hợp nhất.
            </p>

            <div className="mt-10 space-y-5">
              <ContactItem
                title="Hotline doanh nghiệp"
                value="(028) 3999 9999"
                href="tel:+842839999999"
                iconPath="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
              <ContactItem
                title="Email tư vấn"
                value="sales@digi43.net"
                href="mailto:sales@digi43.net"
                iconPath="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 0l8 7 8-7"
              />
              <ContactItem
                title="Văn phòng TP.HCM"
                value="Toà nhà Bitexco, Q.1, TP.HCM"
                iconPath="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
              />
              <ContactItem
                title="Giờ làm việc"
                value="T2 – T6: 8:30 – 17:30 · Hỗ trợ kỹ thuật 24/7"
                iconPath="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zM12 6v6l4 2"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-ink-100 bg-gradient-to-br from-ink-50 to-white p-6 lg:p-10 shadow-sm">
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-ink-950">
                    Cảm ơn bạn đã liên hệ!
                  </h3>
                  <p className="mt-2 text-ink-600">
                    Đội ngũ Digi43 sẽ gọi lại trong vòng 24 giờ làm việc.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-brand-700 hover:underline"
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Họ và tên" name="name" placeholder="Nguyễn Văn A" required />
                    <Field label="Số điện thoại" name="phone" type="tel" placeholder="0901 234 567" required />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Email công ty" name="email" type="email" placeholder="ban@congty.vn" required />
                    <Field label="Tên doanh nghiệp" name="company" placeholder="Công ty TNHH ..." required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ink-800 mb-1.5">
                      Giải pháp quan tâm
                    </label>
                    <select
                      name="solution"
                      className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition"
                    >
                      <option>Microsoft 365 / Copilot</option>
                      <option>Adobe Creative Cloud</option>
                      <option>Autodesk (AutoCAD, Revit...)</option>
                      <option>Bảo mật endpoint (Kaspersky / Bitdefender / Trend Micro)</option>
                      <option>Backup & DR (Veeam / Acronis)</option>
                      <option>Cloud (AWS / Azure / Google Cloud)</option>
                      <option>Khác / Tư vấn tổng thể</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-ink-800 mb-1.5">
                      Mô tả nhu cầu (tuỳ chọn)
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Số lượng license, thời điểm triển khai, yêu cầu đặc thù..."
                      className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 hover:bg-brand-700 transition"
                  >
                    Gửi yêu cầu báo giá
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5" aria-hidden>
                      <path d="M5 12h14M13 5l7 7-7 7" />
                    </svg>
                  </button>

                  <p className="text-xs text-ink-500 text-center">
                    Bằng việc gửi form, bạn đồng ý với{" "}
                    <a href="#" className="underline hover:text-brand-700">chính sách bảo mật</a>{" "}
                    của Digi43.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-ink-800 mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-100 outline-none transition"
      />
    </div>
  );
}

function ContactItem({
  title,
  value,
  href,
  iconPath,
}: {
  title: string;
  value: string;
  href?: string;
  iconPath: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-700">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d={iconPath} />
        </svg>
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">{title}</p>
        <p className="mt-0.5 text-base font-semibold text-ink-900">{value}</p>
      </div>
    </div>
  );
  return href ? (
    <a href={href} className="block hover:opacity-80 transition">
      {content}
    </a>
  ) : (
    content
  );
}
