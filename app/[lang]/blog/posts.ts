import type { Locale } from "../dictionaries";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "callout"; text: string };

export type LocalisedPost = {
  title: string;
  excerpt: string;
  category: string;
  blocks: Block[];
};

export type Post = {
  slug: string;
  date: string; // ISO 8601
  readingMinutes: number;
  /** Author display name (single-author site for now). */
  author: string;
  content: Record<Locale, LocalisedPost>;
};

export const POSTS: Post[] = [
  {
    slug: "software-license-compliance-vietnam-2025",
    date: "2026-05-10",
    readingMinutes: 7,
    author: "Digi43 Editorial",
    content: {
      vi: {
        title:
          "Tuân thủ bản quyền phần mềm tại Việt Nam năm 2026: những điều doanh nghiệp cần biết",
        excerpt:
          "Áp lực kiểm toán license đang gia tăng cùng với việc hãng phần mềm số hoá quy trình theo dõi. Hướng dẫn ngắn để doanh nghiệp Việt sẵn sàng.",
        category: "Compliance",
        blocks: [
          {
            type: "p",
            text: "Trong 2 năm trở lại đây, các nhà sản xuất phần mềm lớn như Microsoft, Adobe và Autodesk đã chuyển phần lớn quy trình theo dõi license sang nền tảng đám mây. Điều đó đồng nghĩa với việc các đợt audit không còn là chuyện hiếm gặp — và mọi cài đặt trong doanh nghiệp đều có thể được đối chiếu với database của hãng.",
          },
          { type: "h2", text: "Khung pháp lý áp dụng tại Việt Nam" },
          {
            type: "p",
            text: "Luật Sở hữu trí tuệ Việt Nam (sửa đổi 2022) và Nghị định 22/2018 đặt nền tảng cho việc xử lý vi phạm bản quyền phần mềm. Mức phạt có thể lên tới 500 triệu đồng cho tổ chức, kèm theo trách nhiệm bồi thường thiệt hại cho chủ sở hữu phần mềm.",
          },
          {
            type: "p",
            text: "Quan trọng không kém: hợp đồng phân phối của hãng thường có điều khoản chấm dứt một chiều nếu phát hiện vi phạm. Doanh nghiệp có thể mất quyền tiếp tục sử dụng dịch vụ ngay cả khi đã trả tiền cho năm hiện tại.",
          },
          { type: "h2", text: "Các tín hiệu thường kích hoạt một đợt audit" },
          {
            type: "ul",
            items: [
              "Số lượng activation vượt rõ rệt so với số seat đã mua (lệch nhiều quý liên tiếp)",
              "Email công ty bị chia sẻ qua nhiều domain hoặc nhiều quốc gia khác nhau",
              "Cài đặt phiên bản EDU/Student trên thiết bị doanh nghiệp",
              "Báo cáo nội bộ của nhân viên cũ (whistleblower)",
              "Bất thường trong báo cáo IP của Adobe Creative Cloud Activation Service",
            ],
          },
          { type: "h2", text: "Chuẩn bị cho audit: checklist 30 ngày" },
          {
            type: "ul",
            items: [
              "Xuất danh sách entitlement từ tất cả admin portal (Microsoft Admin Center, Adobe Admin Console, Autodesk Account)",
              "Đối chiếu với danh sách nhân sự hiện tại, đánh dấu các tài khoản không còn active",
              "Lưu trữ hợp đồng phân phối, hoá đơn VAT và certificate uỷ quyền của reseller",
              "Cấu hình SSO/SCIM để revoke tự động khi nhân sự nghỉ việc",
              "Thiết lập báo cáo định kỳ về consumption gửi tới lãnh đạo IT và tài chính",
            ],
          },
          {
            type: "callout",
            text: "Mẹo: lưu hoá đơn VAT và chứng từ ít nhất 5 năm — đó là khung thời gian các hãng có thể yêu cầu khi audit ngược.",
          },
          { type: "h2", text: "Vai trò của license management partner" },
          {
            type: "p",
            text: "Một đối tác triển khai phần mềm chuyên nghiệp như Digi43 đảm nhận phần việc bảo trì danh mục license — không chỉ là người bán. Chúng tôi duy trì single source of truth về số seat đang dùng, cảnh báo gia hạn, hỗ trợ chuẩn bị tài liệu cho audit, và đảm bảo mọi giao dịch đi qua kênh phân phối được hãng phê duyệt.",
          },
          {
            type: "p",
            text: "Nếu doanh nghiệp của bạn đang dùng license từ nhiều nguồn khác nhau và chưa có quy trình quản trị tập trung, hãy bắt đầu bằng một buổi license assessment — thường mất 1-2 tuần để có bức tranh rõ ràng.",
          },
        ],
      },
      en: {
        title:
          "Software license compliance in Vietnam 2026: what enterprises need to know",
        excerpt:
          "Audit pressure is rising as software vendors digitize their tracking pipelines. A short guide for Vietnamese enterprises to stay ready.",
        category: "Compliance",
        blocks: [
          {
            type: "p",
            text: "Over the past two years, major software manufacturers — Microsoft, Adobe, Autodesk — have moved most of their license-tracking workflows to cloud platforms. As a result, audits are no longer rare events, and every installation inside an organization can now be cross-referenced against the vendor's own database.",
          },
          { type: "h2", text: "Vietnam's regulatory framework" },
          {
            type: "p",
            text: "Vietnamese Intellectual Property Law (as amended in 2022) and Decree 22/2018 form the foundation for handling software copyright violations. Penalties for organizations can reach VND 500 million, on top of liability for damages owed to software copyright holders.",
          },
          {
            type: "p",
            text: "Just as important: vendor distribution contracts typically allow unilateral termination if a violation is detected. A company can lose the right to keep using a service mid-year, even if the annual fee has already been paid.",
          },
          { type: "h2", text: "Signals that commonly trigger an audit" },
          {
            type: "ul",
            items: [
              "Activations clearly exceeding the number of seats purchased over consecutive quarters",
              "Corporate emails shared across multiple unrelated domains or countries",
              "EDU or Student edition installs detected on enterprise devices",
              "Whistleblower reports from former employees",
              "Anomalies in Adobe Creative Cloud Activation Service IP reports",
            ],
          },
          { type: "h2", text: "30-day audit-readiness checklist" },
          {
            type: "ul",
            items: [
              "Export entitlements from every admin portal (Microsoft Admin Center, Adobe Admin Console, Autodesk Account)",
              "Reconcile against the current headcount; flag inactive accounts",
              "Archive distribution contracts, VAT invoices, and reseller authorization certificates",
              "Configure SSO/SCIM to auto-revoke entitlements at offboarding",
              "Set up recurring consumption reports for IT and finance leadership",
            ],
          },
          {
            type: "callout",
            text: "Tip: retain VAT invoices and supporting documentation for at least five years — that's the lookback window vendors will typically request during a back-audit.",
          },
          { type: "h2", text: "The role of a license management partner" },
          {
            type: "p",
            text: "A professional deployment partner such as Digi43 takes ownership of license portfolio maintenance — not just resale. We maintain a single source of truth for active seats, deliver renewal alerts, support audit documentation, and ensure every transaction flows through manufacturer-approved distribution channels.",
          },
          {
            type: "p",
            text: "If your organization currently sources licenses from multiple suppliers without centralized governance, start with a license assessment — it typically takes one to two weeks to deliver a clear baseline.",
          },
        ],
      },
    },
  },
  {
    slug: "adobe-creative-cloud-teams-vs-enterprise",
    date: "2026-05-03",
    readingMinutes: 6,
    author: "Digi43 Editorial",
    content: {
      vi: {
        title:
          "Adobe Creative Cloud for Teams hay Enterprise: chọn loại nào cho doanh nghiệp?",
        excerpt:
          "So sánh thực tế giữa hai gói thương mại của Adobe — từ identity management, quota lưu trữ tới mô hình hợp đồng.",
        category: "Adobe",
        blocks: [
          {
            type: "p",
            text: "Adobe Creative Cloud có hai dòng dành cho tổ chức: Teams và Enterprise. Tên gọi gợi ý sự khác biệt về quy mô, nhưng quyết định thực tế phụ thuộc vào nhiều yếu tố hơn — đặc biệt là cách doanh nghiệp quản lý identity và mức độ tuân thủ cần đạt.",
          },
          { type: "h2", text: "Khác biệt cốt lõi" },
          {
            type: "ul",
            items: [
              "Teams: quản trị qua Adobe Admin Console với tài khoản Adobe ID — phù hợp cho 1-100 người dùng",
              "Enterprise: tích hợp Federated ID hoặc Enterprise ID với Azure AD / Okta / Google Workspace, cho phép single sign-on",
              "Teams sử dụng kho lưu trữ cá nhân theo từng người dùng; Enterprise có Asset Library tập trung",
              "Hợp đồng Teams mua theo annual subscription qua reseller; Enterprise thường ký ETLA (Enterprise Term License Agreement) 1-3 năm",
            ],
          },
          { type: "h2", text: "Khi nào Teams là lựa chọn đúng?" },
          {
            type: "p",
            text: "Teams phù hợp với agency, studio thiết kế, phòng marketing 5-50 người. Triển khai nhanh, không yêu cầu hạ tầng identity sẵn có, mỗi user tự quản lý workspace riêng. Renewal đơn giản theo annual cycle.",
          },
          { type: "h2", text: "Khi nào Enterprise mới đáng đầu tư?" },
          {
            type: "p",
            text: "Doanh nghiệp >100 người, có Azure AD và yêu cầu provisioning tự động khi onboard/offboard nhân sự nên cân nhắc Enterprise. Lợi ích lớn nhất nằm ở phần governance: revocation tức thì, audit log đầy đủ, quản lý asset chia sẻ giữa các team.",
          },
          {
            type: "callout",
            text: "ETLA cho Enterprise thường yêu cầu cam kết 3 năm với usage forecast — cần làm tốt phần demand planning trước khi ký.",
          },
          { type: "h2", text: "Câu hỏi giúp quyết định nhanh" },
          {
            type: "ul",
            items: [
              "Doanh nghiệp đang dùng SSO cho các hệ thống khác chưa?",
              "Có nhân sự ra vào theo project (>= 10 thay đổi/tháng) không?",
              "Có nhu cầu chia sẻ asset xuyên phòng ban không?",
              "Có ngân sách dài hạn 3 năm cho Adobe không?",
              "Có yêu cầu compliance đặc thù (ISO, SOC 2) không?",
            ],
          },
          {
            type: "p",
            text: "Nếu trả lời 3/5 câu trên là “có”, Enterprise là lựa chọn đúng. Nếu không, Teams là lựa chọn pragmatic và tiết kiệm hơn. Digi43 hỗ trợ doanh nghiệp Việt đánh giá chi tiết và migrate giữa hai mô hình khi nhu cầu thay đổi.",
          },
        ],
      },
      en: {
        title:
          "Adobe Creative Cloud for Teams vs Enterprise: how to choose",
        excerpt:
          "A practical comparison of Adobe's two commercial tiers — identity management, storage, and contract model.",
        category: "Adobe",
        blocks: [
          {
            type: "p",
            text: "Adobe Creative Cloud has two organizational tiers: Teams and Enterprise. The naming hints at scale, but the real decision depends on more than headcount — particularly how your organization manages identity and what level of compliance you need.",
          },
          { type: "h2", text: "Core differences" },
          {
            type: "ul",
            items: [
              "Teams: managed via Adobe Admin Console with Adobe ID accounts — fits 1-100 users",
              "Enterprise: federated identity via Azure AD / Okta / Google Workspace with single sign-on",
              "Teams uses per-user personal storage; Enterprise provides centralized asset libraries",
              "Teams is purchased through annual subscription via a reseller; Enterprise typically signs an ETLA (Enterprise Term License Agreement) of 1–3 years",
            ],
          },
          { type: "h2", text: "When Teams is the right choice" },
          {
            type: "p",
            text: "Teams fits agencies, design studios, and marketing departments of 5-50 users. Quick to deploy, no prerequisite identity infrastructure, each user owns their workspace. Renewal stays simple on an annual cycle.",
          },
          { type: "h2", text: "When Enterprise is worth the investment" },
          {
            type: "p",
            text: "Organizations >100 users with Azure AD in place and a need for automated provisioning at onboarding/offboarding should consider Enterprise. The biggest gains are in governance: instant revocation, complete audit logs, shared assets across teams.",
          },
          {
            type: "callout",
            text: "An Enterprise ETLA usually requires a 3-year commitment with a usage forecast — strong demand planning is essential before signing.",
          },
          { type: "h2", text: "Quick decision questions" },
          {
            type: "ul",
            items: [
              "Is the organization already using SSO for other systems?",
              "Are people moving in and out frequently (>= 10 changes per month)?",
              "Is there a need to share creative assets across departments?",
              "Is there a 3-year Adobe budget available?",
              "Are there specific compliance requirements (ISO, SOC 2)?",
            ],
          },
          {
            type: "p",
            text: "If you answer “yes” to three or more, Enterprise is the right call. Otherwise, Teams is the more pragmatic, cost-effective option. Digi43 helps Vietnamese organizations evaluate the trade-offs in detail and migrate between tiers as requirements evolve.",
          },
        ],
      },
    },
  },
  {
    slug: "microsoft-365-copilot-rollout-smb",
    date: "2026-04-26",
    readingMinutes: 8,
    author: "Digi43 Editorial",
    content: {
      vi: {
        title:
          "Triển khai Microsoft 365 Copilot cho doanh nghiệp vừa và nhỏ: lộ trình thực dụng",
        excerpt:
          "Microsoft 365 Copilot không phải “bật là dùng”. Hướng dẫn ngắn về điều kiện tiên quyết, pilot rollout, và đo lường giá trị.",
        category: "Microsoft 365",
        blocks: [
          {
            type: "p",
            text: "Copilot là điểm sáng lớn nhất của Microsoft 365 trong hai năm qua. Tuy nhiên, từ góc nhìn triển khai thực tế, đa số doanh nghiệp vừa và nhỏ tại Việt Nam đánh giá thấp khâu chuẩn bị và bỏ qua phần đo lường giá trị sau rollout.",
          },
          { type: "h2", text: "Điều kiện tiên quyết" },
          {
            type: "ul",
            items: [
              "Người dùng cần license Microsoft 365 E3 hoặc E5 (Business Standard/Premium chưa đủ cho mọi tính năng Copilot)",
              "Microsoft 365 Copilot license riêng — mua add-on cho từng user cần dùng",
              "Tenant đã cấu hình Azure AD (Microsoft Entra ID)",
              "Dữ liệu nguồn (mail, file, Teams chat) đã được tổ chức tốt — Copilot truy cập tài liệu theo quyền hiện tại của user",
              "Chính sách DLP cơ bản đã có sẵn để tránh rò rỉ thông tin nhạy cảm",
            ],
          },
          { type: "h2", text: "Pilot rollout (4 tuần)" },
          {
            type: "p",
            text: "Đừng mua license cho toàn công ty ngay. Chọn 10-15 người ở các phòng ban khác nhau (sales, marketing, finance, ops). Đo lường thay đổi qua 4 tuần dựa trên: thời gian soạn email, thời gian tổng hợp report, số cuộc họp được tóm tắt tự động.",
          },
          { type: "h2", text: "Kèm theo enablement" },
          {
            type: "ul",
            items: [
              "1 buổi training kick-off 60 phút giới thiệu prompt cơ bản trong Outlook, Word, Excel, Teams",
              "Internal Slack/Teams channel cho user chia sẻ use case thành công",
              "Hằng tuần gửi “Prompt of the week” cho pilot users",
              "Office hours 30 phút mỗi tuần với champion phòng IT",
            ],
          },
          {
            type: "callout",
            text: "Pilot không đo bằng cảm tính. Mỗi user tự log 5 task họ dùng Copilot mỗi tuần — đó là dữ liệu để quyết định rollout rộng hay không.",
          },
          { type: "h2", text: "Quyết định rollout rộng" },
          {
            type: "p",
            text: "Sau 4 tuần pilot, đánh giá theo 3 tiêu chí: (1) tỉ lệ user dùng Copilot ít nhất 3 ngày/tuần, (2) số task tự đánh giá là “tiết kiệm thời gian rõ rệt”, (3) feedback định tính từ trưởng phòng. Nếu cả 3 đều tích cực, mở rộng theo tier — knowledge workers trước, sau đó các vai trò có quy trình giấy tờ.",
          },
          {
            type: "p",
            text: "Digi43 hỗ trợ doanh nghiệp Việt từ khâu cấu hình tenant, mua add-on Copilot đúng cách, thiết kế chương trình pilot, đến đo lường ROI sau 3-6 tháng. Liên hệ để được khảo sát miễn phí.",
          },
        ],
      },
      en: {
        title:
          "Rolling out Microsoft 365 Copilot in SMBs: a practical playbook",
        excerpt:
          "Microsoft 365 Copilot isn't plug-and-play. A short guide to prerequisites, a four-week pilot, and how to measure real value.",
        category: "Microsoft 365",
        blocks: [
          {
            type: "p",
            text: "Copilot has been the headline feature of Microsoft 365 for two years running. From a real-world deployment perspective, most Vietnamese SMBs still underestimate the preparation phase and skip the value-measurement step entirely.",
          },
          { type: "h2", text: "Prerequisites" },
          {
            type: "ul",
            items: [
              "Users need a Microsoft 365 E3 or E5 license (Business Standard/Premium isn't enough for the full Copilot surface)",
              "A separate Microsoft 365 Copilot add-on license per user",
              "Tenant configured with Azure AD (Microsoft Entra ID)",
              "Source data (mail, files, Teams chat) reasonably organized — Copilot honours each user's existing permissions",
              "Baseline DLP policies in place to prevent sensitive data leakage",
            ],
          },
          { type: "h2", text: "4-week pilot rollout" },
          {
            type: "p",
            text: "Don't license the whole company on day one. Pick 10-15 people across departments (sales, marketing, finance, ops). Measure change over four weeks: email drafting time, report compilation time, number of meetings auto-summarized.",
          },
          { type: "h2", text: "Enablement to bundle in" },
          {
            type: "ul",
            items: [
              "One 60-minute kick-off introducing core prompts in Outlook, Word, Excel, Teams",
              "Internal Slack/Teams channel for users to share winning use cases",
              "Weekly “Prompt of the week” email to pilot participants",
              "30-minute office hours each week with the IT champion",
            ],
          },
          {
            type: "callout",
            text: "A pilot can't be measured by gut feel. Ask each user to log five Copilot-assisted tasks per week — that data drives the rollout decision.",
          },
          { type: "h2", text: "Making the broader rollout call" },
          {
            type: "p",
            text: "After four weeks, assess against three criteria: (1) share of users engaging with Copilot at least three days per week, (2) number of tasks self-rated as “meaningful time saved,” (3) qualitative feedback from department heads. If all three trend positive, expand by tier — knowledge workers first, paperwork-heavy roles next.",
          },
          {
            type: "p",
            text: "Digi43 supports Vietnamese organizations from tenant configuration through Copilot add-on procurement, pilot design, and ROI measurement at the 3- and 6-month marks. Get in touch for a complimentary assessment.",
          },
        ],
      },
    },
  },
];

export function getAllPosts(): Post[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getAllSlugs(): string[] {
  return POSTS.map((p) => p.slug);
}
