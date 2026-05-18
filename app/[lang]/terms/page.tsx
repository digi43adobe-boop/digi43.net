import type { Metadata } from "next";
import { LegalPage, type LegalCopy } from "../_legal/legal-page";
import type { Locale } from "../dictionaries";

const COPY: Record<Locale, LegalCopy> = {
  vi: {
    title: "Điều khoản dịch vụ",
    lastUpdated: "Cập nhật lần cuối: 18 / 05 / 2026",
    sections: [
      {
        heading: "Phạm vi áp dụng",
        body: [
          "Điều khoản này áp dụng cho mọi dịch vụ do CÔNG TY TNHH DIGI43 MEDIA (MST 0402269843, gọi tắt là “Digi43”) cung cấp thông qua website digi43.net, các kênh liên lạc trực tiếp và hợp đồng được ký với khách hàng doanh nghiệp.",
          "Bằng việc sử dụng dịch vụ, khách hàng đồng ý chấp thuận đầy đủ các điều khoản dưới đây.",
        ],
      },
      {
        heading: "Mô tả dịch vụ",
        body: [
          "Digi43 là đối tác triển khai giải pháp phần mềm doanh nghiệp tại Việt Nam, cung cấp các dịch vụ bao gồm tư vấn license, mua sắm thông qua kênh phân phối được hãng phê duyệt, triển khai và provisioning người dùng, gia hạn, tối ưu chi phí và hỗ trợ kỹ thuật.",
          "Mọi license phần mềm được phân phối bởi Digi43 đều có chứng từ hợp lệ và được cung cấp theo điều khoản của nhà sản xuất phần mềm tương ứng.",
        ],
      },
      {
        heading: "Tuân thủ pháp luật và bản quyền",
        body: [
          "Khách hàng cam kết sử dụng phần mềm đúng theo phạm vi license đã mua, tuân thủ điều khoản EULA của hãng và Luật Sở hữu trí tuệ Việt Nam.",
          "Digi43 không hỗ trợ, không phân phối phần mềm không có bản quyền, key crack, tài khoản dùng chung hoặc các hình thức sử dụng vi phạm bản quyền.",
        ],
      },
      {
        heading: "Báo giá và thanh toán",
        body: [
          "Báo giá được Digi43 cung cấp riêng cho từng dự án dựa trên quy mô, thời hạn license và yêu cầu dịch vụ kèm theo. Đơn giá có hiệu lực trong thời hạn ghi trên báo giá.",
          "Phương thức thanh toán, lịch thanh toán và điều khoản công nợ được quy định cụ thể trong hợp đồng. Digi43 xuất hoá đơn VAT đầy đủ cho mọi giao dịch.",
        ],
      },
      {
        heading: "Gia hạn và huỷ dịch vụ",
        body: [
          "Digi43 sẽ thông báo gia hạn ít nhất 60 ngày trước ngày hết hạn của license. Khách hàng có quyền lựa chọn gia hạn, điều chỉnh số lượng hoặc dừng dịch vụ.",
          "License đã được kích hoạt không được hoàn lại, trừ khi có thoả thuận khác trong hợp đồng hoặc theo chính sách của hãng phần mềm.",
        ],
      },
      {
        heading: "Giới hạn trách nhiệm",
        body: [
          "Digi43 cam kết cung cấp dịch vụ theo SLA đã thoả thuận. Trong mọi trường hợp, tổng trách nhiệm bồi thường của Digi43 không vượt quá tổng phí dịch vụ mà khách hàng đã trả cho giao dịch liên quan trong 12 tháng gần nhất.",
          "Digi43 không chịu trách nhiệm về tổn thất gián tiếp, mất dữ liệu hay mất lợi nhuận phát sinh từ việc sử dụng phần mềm bên thứ ba.",
        ],
      },
      {
        heading: "Luật áp dụng",
        body: [
          "Điều khoản này được điều chỉnh và giải thích theo pháp luật Việt Nam. Mọi tranh chấp phát sinh sẽ được giải quyết tại Trung tâm Trọng tài Quốc tế Việt Nam (VIAC) hoặc Toà án có thẩm quyền tại TP. Đà Nẵng.",
        ],
      },
      {
        heading: "Liên hệ",
        body: [
          "Mọi thắc mắc liên quan đến điều khoản dịch vụ, vui lòng liên hệ sales@digi43.net hoặc hotline 0905 711 739.",
        ],
      },
    ],
  },
  en: {
    title: "Terms of Service",
    lastUpdated: "Last updated: 18 May 2026",
    sections: [
      {
        heading: "Scope",
        body: [
          "These terms apply to all services provided by DIGI43 MEDIA Co., Ltd. (Tax ID 0402269843, hereafter “Digi43”) through the website digi43.net, direct communication channels, and contracts signed with enterprise customers.",
          "By using our services, the customer accepts these terms in full.",
        ],
      },
      {
        heading: "Service description",
        body: [
          "Digi43 is an enterprise software solutions partner based in Vietnam, providing license advisory, procurement through manufacturer-approved distribution channels, deployment and user provisioning, renewal management, cost optimization, and technical support.",
          "All software licenses distributed by Digi43 carry valid documentation and are supplied subject to the terms of the respective software vendor.",
        ],
      },
      {
        heading: "Legal and copyright compliance",
        body: [
          "The customer agrees to use software strictly within the scope of purchased licenses and to comply with each vendor's EULA and Vietnamese Intellectual Property Law.",
          "Digi43 does not support or distribute unlicensed software, key cracks, shared accounts, or any usage that infringes copyright.",
        ],
      },
      {
        heading: "Quotation and payment",
        body: [
          "Quotations are tailored to each project based on scope, license term, and accompanying services. Pricing is valid for the period stated on the quotation.",
          "Payment method, schedule, and credit terms are specified in the contract. Digi43 issues full VAT invoices for all transactions.",
        ],
      },
      {
        heading: "Renewal and cancellation",
        body: [
          "Digi43 will notify the customer of upcoming renewals at least 60 days before the license expiration date. The customer may renew, resize, or discontinue the service at that point.",
          "Activated licenses are non-refundable except where otherwise agreed in contract or under the software vendor's policy.",
        ],
      },
      {
        heading: "Limitation of liability",
        body: [
          "Digi43 commits to deliver services according to the agreed SLA. In all cases, Digi43's total liability shall not exceed the total service fees paid by the customer for the relevant transaction within the most recent 12 months.",
          "Digi43 is not liable for indirect losses, data loss, or loss of profit arising from the use of third-party software.",
        ],
      },
      {
        heading: "Governing law",
        body: [
          "These terms are governed by Vietnamese law. Any disputes shall be settled at the Vietnam International Arbitration Centre (VIAC) or at the competent court in Da Nang.",
        ],
      },
      {
        heading: "Contact",
        body: [
          "For questions regarding these terms, please contact sales@digi43.net or call +84 905 711 739.",
        ],
      },
    ],
  },
};

export async function generateMetadata(
  props: PageProps<"/[lang]/terms">
): Promise<Metadata> {
  const { lang } = await props.params;
  const title = lang === "en" ? "Terms of Service" : "Điều khoản dịch vụ";
  return {
    title,
    alternates: {
      canonical: `/${lang}/terms`,
      languages: {
        "vi-VN": "/vi/terms",
        "en-US": "/en/terms",
        "x-default": "/vi/terms",
      },
    },
  };
}

export default async function Page(props: PageProps<"/[lang]/terms">) {
  const { lang } = await props.params;
  return <LegalPage lang={lang} copy={COPY} />;
}
