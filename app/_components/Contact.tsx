"use client";

import { useState } from "react";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type Status = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const formEl = e.currentTarget;
    const formData = new FormData(formEl);

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
    if (!accessKey) {
      setStatus("error");
      setErrorMsg(
        "Form chưa được cấu hình. Vui lòng gọi hotline 0905 711 739 hoặc email sales@digi43.net."
      );
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "Yêu cầu báo giá mới từ digi43.net");
    formData.append("from_name", "Digi43 Landing Page");

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        formEl.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message ?? "Có lỗi xảy ra. Vui lòng thử lại.");
      }
    } catch {
      setStatus("error");
      setErrorMsg(
        "Không thể kết nối tới máy chủ. Vui lòng kiểm tra mạng và thử lại."
      );
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-code-canvas py-24 lg:py-32 border-t border-subtle-gray overflow-hidden"
    >
      <div aria-hidden className="absolute -top-32 right-1/4 h-[500px] w-[500px] bg-violet-glow blur-3xl opacity-25" />

      <div className="container-page relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-polar-blue">
              Liên hệ Digi43
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-ghost-white text-balance leading-[1.15]">
              Nhận báo giá license trong 24 giờ
            </h2>
            <p className="mt-4 text-lg text-faded-silver">
              Để lại thông tin, đội ngũ tư vấn của Digi43 sẽ liên hệ với bạn
              trong vòng 24 giờ làm việc kèm theo bảng so sánh các phương án
              license phù hợp nhất.
            </p>

            <div className="mt-10 space-y-4">
              <ContactItem
                title="Hotline doanh nghiệp"
                value="0905 711 739"
                href="tel:+84905711739"
                iconPath="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
              <ContactItem
                title="Email tư vấn"
                value="sales@digi43.net"
                href="mailto:sales@digi43.net"
                iconPath="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 0l8 7 8-7"
              />
              <ContactItem
                title="Văn phòng Đà Nẵng"
                value="03 Quang Trung, P. Hải Châu, TP. Đà Nẵng"
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
            <div className="card-floating p-6 lg:p-10">
              {status === "success" ? (
                <div className="py-16 text-center">
                  <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full bg-spring-green/20 ring-1 ring-spring-green/40 text-neon-green">
                    <svg
                      width="28"
                      height="28"
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
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-ghost-white">
                    Cảm ơn bạn đã liên hệ!
                  </h3>
                  <p className="mt-2 text-faded-silver">
                    Yêu cầu đã được gửi tới sales@digi43.net.
                    <br />
                    Đội ngũ Digi43 sẽ gọi lại trong vòng 24 giờ làm việc.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-sm font-medium link-accent"
                  >
                    Gửi yêu cầu khác
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  {/* Honeypot for bots */}
                  <input
                    type="checkbox"
                    name="botcheck"
                    style={{ display: "none" }}
                    tabIndex={-1}
                    aria-hidden="true"
                  />

                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Họ và tên"
                      name="name"
                      placeholder="Nguyễn Văn A"
                      required
                    />
                    <Field
                      label="Số điện thoại"
                      name="phone"
                      type="tel"
                      placeholder="0901 234 567"
                      required
                    />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Email công ty"
                      name="email"
                      type="email"
                      placeholder="ban@congty.vn"
                      required
                    />
                    <Field
                      label="Tên doanh nghiệp"
                      name="company"
                      placeholder="Công ty TNHH ..."
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-faded-silver mb-1.5">
                      Giải pháp quan tâm
                    </label>
                    <select name="solution" className="input-field" defaultValue="Microsoft 365 / Copilot">
                      <option className="bg-deep-space">Microsoft 365 / Copilot</option>
                      <option className="bg-deep-space">Adobe Creative Cloud</option>
                      <option className="bg-deep-space">Autodesk (AutoCAD, Revit...)</option>
                      <option className="bg-deep-space">Bảo mật endpoint (Kaspersky / Bitdefender / Trend Micro)</option>
                      <option className="bg-deep-space">Backup & DR (Veeam / Acronis)</option>
                      <option className="bg-deep-space">Cloud (AWS / Azure / Google Cloud)</option>
                      <option className="bg-deep-space">Khác / Tư vấn tổng thể</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-faded-silver mb-1.5"
                    >
                      Mô tả nhu cầu (tuỳ chọn)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Số lượng license, thời điểm triển khai, yêu cầu đặc thù..."
                      className="input-field resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-400 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="btn-primary w-full justify-center py-3.5 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      <>
                        <svg
                          className="animate-spin"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          aria-hidden
                        >
                          <path d="M21 12a9 9 0 1 1-6.2-8.6" />
                        </svg>
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        Gửi yêu cầu báo giá
                        <svg
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
                          <path d="M5 12h14M13 5l7 7-7 7" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted-text text-center">
                    Bằng việc gửi form, bạn đồng ý với{" "}
                    <a href="#" className="link-accent">
                      chính sách bảo mật
                    </a>{" "}
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
      <label
        htmlFor={name}
        className="block text-sm font-medium text-faded-silver mb-1.5"
      >
        {label} {required && <span className="text-accent-pink">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="input-field"
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
      <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-interface-blue/15 ring-1 ring-interface-blue/30 text-polar-blue">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d={iconPath} />
        </svg>
      </span>
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-text">
          {title}
        </p>
        <p className="mt-0.5 text-base font-medium text-ghost-white">{value}</p>
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
