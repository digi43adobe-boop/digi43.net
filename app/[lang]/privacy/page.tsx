import type { Metadata } from "next";
import { LegalPage, type LegalCopy } from "../_legal/legal-page";
import type { Locale } from "../dictionaries";

const COPY: Record<Locale, LegalCopy> = {
  vi: {
    title: "Chính sách bảo mật",
    lastUpdated: "Cập nhật lần cuối: 18 / 05 / 2026",
    sections: [
      {
        heading: "Cam kết bảo mật",
        body: [
          "CÔNG TY TNHH DIGI43 MEDIA (MST 0402269843) tôn trọng và bảo vệ quyền riêng tư của mọi khách hàng và người truy cập website digi43.net. Chính sách này mô tả cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân.",
        ],
      },
      {
        heading: "Thông tin chúng tôi thu thập",
        body: [
          "Khi bạn điền form liên hệ trên digi43.net, chúng tôi thu thập các thông tin bạn chủ động cung cấp: họ tên, email công ty, số điện thoại, tên doanh nghiệp, quy mô nhân sự, giải pháp quan tâm và mô tả nhu cầu.",
          "Hệ thống tự động ghi nhận thông tin kỹ thuật giới hạn để vận hành website: địa chỉ IP, loại trình duyệt, thời gian truy cập.",
        ],
      },
      {
        heading: "Mục đích sử dụng thông tin",
        body: [
          "Thông tin liên hệ được sử dụng duy nhất cho mục đích: phản hồi yêu cầu báo giá, tư vấn giải pháp, gửi bản đề xuất kỹ thuật và hỗ trợ trao đổi với đội ngũ kinh doanh của Digi43.",
          "Chúng tôi không sử dụng thông tin của bạn cho hoạt động marketing tự động hay gửi spam.",
        ],
      },
      {
        heading: "Chia sẻ thông tin với bên thứ ba",
        body: [
          "Form liên hệ trên website được xử lý qua Web3Forms (form-handler service) và Vercel (hosting). Nội dung form được chuyển tới hộp thư sales@digi43.net của Digi43.",
          "Chúng tôi không bán, không cho thuê và không chia sẻ thông tin cá nhân của bạn với bất kỳ bên thứ ba nào cho mục đích thương mại.",
          "Trong trường hợp có yêu cầu hợp pháp từ cơ quan nhà nước có thẩm quyền, chúng tôi sẽ phối hợp theo quy định của pháp luật Việt Nam.",
        ],
      },
      {
        heading: "Lưu trữ thông tin",
        body: [
          "Thông tin liên hệ được lưu giữ trong hộp thư doanh nghiệp của Digi43 và hệ thống CRM nội bộ trong thời gian cần thiết để phục vụ quan hệ kinh doanh, hoặc lâu hơn nếu pháp luật yêu cầu.",
          "Khách hàng có quyền yêu cầu xoá thông tin của mình bằng cách gửi yêu cầu tới sales@digi43.net.",
        ],
      },
      {
        heading: "Cookie",
        body: [
          "Website digi43.net sử dụng cookie kỹ thuật để ghi nhớ tuỳ chọn ngôn ngữ (Việt / Anh) và đảm bảo trải nghiệm cá nhân hoá cơ bản. Cookie không chứa thông tin nhận diện cá nhân.",
        ],
      },
      {
        heading: "Quyền của bạn",
        body: [
          "Bạn có quyền: yêu cầu truy cập, chỉnh sửa hoặc xoá thông tin cá nhân; rút lại sự đồng ý xử lý dữ liệu; khiếu nại với cơ quan có thẩm quyền.",
          "Mọi yêu cầu vui lòng gửi tới sales@digi43.net. Chúng tôi sẽ phản hồi trong vòng 30 ngày làm việc.",
        ],
      },
      {
        heading: "Liên hệ",
        body: [
          "Đầu mối phụ trách bảo mật dữ liệu: sales@digi43.net · Hotline 0905 711 739 · Văn phòng 03 Quang Trung, P. Hải Châu, TP. Đà Nẵng.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: 18 May 2026",
    sections: [
      {
        heading: "Our commitment",
        body: [
          "DIGI43 MEDIA Co., Ltd. (Tax ID 0402269843) respects and protects the privacy of every customer and visitor of digi43.net. This policy describes how we collect, use, and protect personal information.",
        ],
      },
      {
        heading: "Information we collect",
        body: [
          "When you submit the contact form on digi43.net, we collect the information you actively provide: full name, business email, phone number, company name, company size, solution of interest, and project notes.",
          "Limited technical information is automatically logged to operate the site: IP address, browser type, and time of access.",
        ],
      },
      {
        heading: "How we use your information",
        body: [
          "Contact information is used solely to respond to quotation requests, advise on solutions, send technical proposals, and support communication with the Digi43 sales team.",
          "We do not use your information for automated marketing or unsolicited mailing.",
        ],
      },
      {
        heading: "Sharing with third parties",
        body: [
          "Form submissions on our website are processed via Web3Forms (form-handler service) and Vercel (hosting). The form contents are delivered to Digi43's mailbox sales@digi43.net.",
          "We do not sell, lease, or share your personal information with any third party for commercial purposes.",
          "Where a lawful request is made by a competent Vietnamese authority, we will cooperate as required by law.",
        ],
      },
      {
        heading: "Data retention",
        body: [
          "Contact information is retained in Digi43's business mailbox and internal CRM for as long as required to maintain the business relationship, or longer where required by law.",
          "Customers may request deletion of their information by emailing sales@digi43.net.",
        ],
      },
      {
        heading: "Cookies",
        body: [
          "digi43.net uses functional cookies to remember your language preference (Vietnamese / English) and provide a basic personalised experience. These cookies do not contain personally identifying information.",
        ],
      },
      {
        heading: "Your rights",
        body: [
          "You have the right to: request access, correction, or deletion of your personal information; withdraw consent to processing; and lodge a complaint with the competent authority.",
          "All requests can be sent to sales@digi43.net. We will respond within 30 business days.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "Data privacy contact: sales@digi43.net · Hotline +84 905 711 739 · Office at 03 Quang Trung, Hai Chau Ward, Da Nang, Vietnam.",
        ],
      },
    ],
  },
};

export async function generateMetadata(
  props: PageProps<"/[lang]/privacy">
): Promise<Metadata> {
  const { lang } = await props.params;
  const title = lang === "en" ? "Privacy Policy" : "Chính sách bảo mật";
  return {
    title,
    alternates: {
      canonical: `/${lang}/privacy`,
      languages: {
        "vi-VN": "/vi/privacy",
        "en-US": "/en/privacy",
        "x-default": "/vi/privacy",
      },
    },
  };
}

export default async function Page(props: PageProps<"/[lang]/privacy">) {
  const { lang } = await props.params;
  return <LegalPage lang={lang} copy={COPY} />;
}
