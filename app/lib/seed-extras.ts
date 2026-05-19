import "server-only";
import { upsertPost } from "./posts";
import type { Post } from "./types";

const UNSPLASH = (id: string) =>
  `https://images.unsplash.com/${id}?w=1600&q=80&auto=format&fit=crop`;

const EXTRA_POSTS: Post[] = [
  // 1 — Windows 11 Enterprise migration
  {
    slug: "windows-11-enterprise-migration-playbook",
    date: "2026-04-18T00:00:00.000Z",
    readingMinutes: 7,
    author: "Digi43 Editorial",
    thumbnailUrl: UNSPLASH("photo-1552664730-d307ca884978"),
    published: true,
    content: {
      vi: {
        title: "Triển khai Windows 11 Enterprise: lộ trình chuyển đổi sau khi Windows 10 EOL",
        excerpt:
          "Windows 10 đã hết hỗ trợ chính thức. Hướng dẫn rút gọn cho IT về phần cứng, mô hình license và pilot rollout cho doanh nghiệp 100-500 user.",
        category: "Microsoft 365",
        blocks: [
          {
            type: "p",
            text: "Windows 10 đã chính thức ngừng nhận update bảo mật miễn phí từ tháng 10/2025. Doanh nghiệp tiếp tục dùng phải mua Extended Security Updates (ESU) cho từng năm — chi phí tăng dần theo gói 12/24/36 tháng. Migration sang Windows 11 Enterprise vì thế chuyển từ \"nice to have\" sang yêu cầu bắt buộc trong 2026.",
          },
          { type: "h2", text: "Phần cứng — kiểm tra trước khi mua license" },
          {
            type: "ul",
            items: [
              "TPM 2.0 (Trusted Platform Module) — bắt buộc, không có miễn dịch",
              "CPU thuộc danh sách hỗ trợ của Microsoft (Intel 8th gen+ / AMD Ryzen 2000+)",
              "Tối thiểu 4GB RAM, 64GB ổ đĩa, Secure Boot capable",
              "DirectX 12, WDDM 2.0 driver",
              "Dùng PC Health Check hoặc Endpoint Configuration Manager để scan toàn bộ thiết bị trước",
            ],
          },
          { type: "h2", text: "Lựa chọn mô hình license" },
          {
            type: "p",
            text: "Doanh nghiệp Việt Nam phổ biến nhất là CSP (Cloud Solution Provider) qua reseller được Microsoft phê duyệt — tính theo tháng, không cam kết dài hạn. Doanh nghiệp >500 user thường cân nhắc EA (Enterprise Agreement) cam kết 3 năm để có giá tốt hơn và compliance pre-vetted.",
          },
          {
            type: "image",
            src: UNSPLASH("photo-1552664730-d307ca884978"),
            alt: "Đội ngũ IT thảo luận lộ trình triển khai Windows 11",
          },
          { type: "h2", text: "Pilot rollout 30 ngày" },
          {
            type: "ul",
            items: [
              "Chọn 1-2 phòng ban (10-20 user) — ưu tiên IT và 1 phòng nghiệp vụ điển hình",
              "Tuần 1: in-place upgrade trên máy đã pass PC Health Check",
              "Tuần 2-3: thu thập feedback về tương thích app, driver, VPN/SSO",
              "Tuần 4: chuẩn bị tài liệu Known Issues + FAQ cho rollout rộng",
            ],
          },
          {
            type: "callout",
            text: "Mẹo: dùng Microsoft 365 Apps for Enterprise cùng Win 11 — tránh được rất nhiều lỗi tương thích Office 2016/2019 trên máy mới.",
          },
          {
            type: "p",
            text: "Digi43 hỗ trợ assessment phần cứng, lập kế hoạch CSP/EA, triển khai SCCM/Intune và rollout pilot trong 30 ngày. Liên hệ để được tư vấn cụ thể theo quy mô doanh nghiệp.",
          },
        ],
      },
      en: {
        title: "Windows 11 Enterprise migration playbook after Windows 10 EOL",
        excerpt:
          "Windows 10 lost free security updates in late 2025. A short IT guide on hardware, license models, and a 30-day pilot rollout for 100-500-user organizations.",
        category: "Microsoft 365",
        blocks: [
          {
            type: "p",
            text: "Windows 10 stopped receiving free security updates in October 2025. Continuing to run it requires paid Extended Security Updates (ESU), priced per year on a sliding 12/24/36-month scale. Migrating to Windows 11 Enterprise has moved from nice-to-have to mandatory across 2026.",
          },
          { type: "h2", text: "Hardware — check before buying licenses" },
          {
            type: "ul",
            items: [
              "TPM 2.0 (Trusted Platform Module) — required, no workaround",
              "CPU on Microsoft's supported list (Intel 8th gen+ / AMD Ryzen 2000+)",
              "Minimum 4GB RAM, 64GB storage, Secure Boot capable",
              "DirectX 12, WDDM 2.0 driver",
              "Run PC Health Check or Endpoint Configuration Manager to inventory the fleet first",
            ],
          },
          { type: "h2", text: "Choosing a license model" },
          {
            type: "p",
            text: "For Vietnamese enterprises, CSP (Cloud Solution Provider) via a Microsoft-approved reseller is most common — monthly billing, no long-term commitment. Organizations above 500 users tend to evaluate EA (Enterprise Agreement) for a 3-year commitment with better pricing and pre-vetted compliance.",
          },
          {
            type: "image",
            src: UNSPLASH("photo-1552664730-d307ca884978"),
            alt: "IT team planning a Windows 11 deployment",
          },
          { type: "h2", text: "30-day pilot rollout" },
          {
            type: "ul",
            items: [
              "Pick 1-2 departments (10-20 users) — IT plus a representative business unit",
              "Week 1: in-place upgrade on devices that passed PC Health Check",
              "Weeks 2-3: collect feedback on app compatibility, drivers, VPN/SSO",
              "Week 4: finalize Known Issues + FAQ docs ahead of broader rollout",
            ],
          },
          {
            type: "callout",
            text: "Tip: pair Win 11 with Microsoft 365 Apps for Enterprise — it dodges a lot of Office 2016/2019 compatibility issues on new hardware.",
          },
          {
            type: "p",
            text: "Digi43 supports hardware assessment, CSP/EA planning, SCCM/Intune deployment, and the 30-day pilot. Get in touch for a sizing review.",
          },
        ],
      },
    },
  },

  // 2 — Autodesk AEC subscription
  {
    slug: "autodesk-aec-subscription-licensing-vietnam",
    date: "2026-04-12T00:00:00.000Z",
    readingMinutes: 6,
    author: "Digi43 Editorial",
    thumbnailUrl: UNSPLASH("photo-1487958449943-2429e8be8625"),
    published: true,
    content: {
      vi: {
        title: "Autodesk AEC Collection: chọn single-user, multi-user hay Flex cho doanh nghiệp xây dựng",
        excerpt:
          "Autodesk đã ngừng bán multi-user license từ 2021. Hướng dẫn ngắn về 3 mô hình hiện tại và cách công ty xây dựng/kiến trúc Việt Nam chọn đúng.",
        category: "Autodesk",
        blocks: [
          {
            type: "p",
            text: "Đa số công ty xây dựng và kiến trúc tại Việt Nam vẫn dùng AutoCAD, Revit và Civil 3D. Tuy nhiên mô hình license đã thay đổi đáng kể từ khi Autodesk loại bỏ multi-user (network license) từ 2021 và đẩy mạnh Flex token-based model. Chọn sai mô hình có thể tăng chi phí 40-60% so với phương án tối ưu.",
          },
          { type: "h2", text: "Ba mô hình hiện tại" },
          {
            type: "ul",
            items: [
              "Single-user subscription: gán theo tên người dùng, đăng nhập tối đa 3 máy nhưng chỉ 1 phiên đồng thời",
              "Premium plan: dành cho team từ 50+ user, có quản lý qua Autodesk Account Console với SSO",
              "Flex: trả theo token sử dụng, phù hợp khi user dùng không thường xuyên (<10 ngày/tháng)",
            ],
          },
          { type: "h2", text: "Khi nào Flex là lựa chọn đúng" },
          {
            type: "p",
            text: "Flex tính phí theo token tiêu thụ mỗi ngày một user mở phần mềm (ví dụ AutoCAD = 7 token/ngày). Doanh nghiệp mua trước gói token (500/1000/5000) dùng dần. Phù hợp với: kỹ sư backup, đối tác freelance, người dùng theo dự án.",
          },
          {
            type: "image",
            src: UNSPLASH("photo-1487958449943-2429e8be8625"),
            alt: "Bản vẽ thiết kế kiến trúc trên máy tính",
          },
          { type: "h2", text: "AEC Collection vs sản phẩm riêng lẻ" },
          {
            type: "p",
            text: "AEC Collection bundle gồm AutoCAD, Revit, Civil 3D, InfraWorks, Navisworks Manage và hơn 10 ứng dụng khác. Giá ~70-80% chi phí mua riêng lẻ AutoCAD + Revit. Hầu như mọi văn phòng AEC trên 5 người đều có ROI khi chọn Collection.",
          },
          {
            type: "callout",
            text: "Cảnh báo audit: Autodesk gửi license usage report cho admin hằng tháng. Sai số trên 10% là dấu hiệu audit có thể trong 6-12 tháng tới.",
          },
          {
            type: "p",
            text: "Digi43 phân phối Autodesk qua kênh được hãng phê duyệt, tư vấn mix Single-user + Flex để tối ưu chi phí, và hỗ trợ migrate khi doanh nghiệp đổi cách triển khai dự án.",
          },
        ],
      },
      en: {
        title: "Autodesk AEC Collection: single-user, premium, or Flex for VN construction firms",
        excerpt:
          "Autodesk retired multi-user network licenses in 2021. A short guide to the three current models and how Vietnamese construction firms should choose.",
        category: "Autodesk",
        blocks: [
          {
            type: "p",
            text: "Most construction and architecture firms in Vietnam still rely on AutoCAD, Revit, and Civil 3D. But the licensing model has changed significantly since Autodesk retired multi-user (network) licenses in 2021 and pushed the Flex token-based model. The wrong choice can inflate spend by 40-60% versus the optimal mix.",
          },
          { type: "h2", text: "The three current models" },
          {
            type: "ul",
            items: [
              "Single-user subscription: named user, signed in on up to 3 machines but only one concurrent session",
              "Premium plan: targeted at 50+ user teams, managed via Autodesk Account Console with SSO",
              "Flex: pay-per-token usage, suitable when users open software <10 days/month",
            ],
          },
          { type: "h2", text: "When Flex is the right call" },
          {
            type: "p",
            text: "Flex charges tokens consumed per user per day they launch a product (e.g. AutoCAD = 7 tokens/day). Companies prepay a token bundle (500/1000/5000) and draw down over time. Good fit: backup engineers, freelance partners, project-based users.",
          },
          {
            type: "image",
            src: UNSPLASH("photo-1487958449943-2429e8be8625"),
            alt: "Architectural drawings on a workstation",
          },
          { type: "h2", text: "AEC Collection vs individual products" },
          {
            type: "p",
            text: "AEC Collection bundles AutoCAD, Revit, Civil 3D, InfraWorks, Navisworks Manage and 10+ other apps. The price runs ~70-80% of buying AutoCAD + Revit individually. Almost any AEC office over five users sees ROI on the Collection.",
          },
          {
            type: "callout",
            text: "Audit watch: Autodesk emails monthly usage reports to admins. A discrepancy above 10% is a leading signal for an audit within 6-12 months.",
          },
          {
            type: "p",
            text: "Digi43 distributes Autodesk through manufacturer-approved channels, advises on Single-user + Flex mixes to optimize cost, and handles migrations as project delivery models evolve.",
          },
        ],
      },
    },
  },

  // 3 — Atlassian Cloud migration
  {
    slug: "atlassian-cloud-migration-server-eol",
    date: "2026-04-05T00:00:00.000Z",
    readingMinutes: 6,
    author: "Digi43 Editorial",
    thumbnailUrl: UNSPLASH("photo-1522071820081-009f0129c71c"),
    published: true,
    content: {
      vi: {
        title: "Migrate Jira/Confluence Server sang Cloud sau khi Atlassian Server EOL",
        excerpt:
          "Atlassian đã ngừng hỗ trợ Server từ tháng 2/2024. Doanh nghiệp Việt còn dùng Server cần migrate sang Cloud hoặc Data Center — đây là so sánh thực tế.",
        category: "Atlassian",
        blocks: [
          {
            type: "p",
            text: "Atlassian Server đã chính thức end-of-life từ 15/2/2024. Doanh nghiệp tiếp tục dùng vẫn vận hành được nhưng không nhận update bảo mật và không được Atlassian hỗ trợ. Phổ biến nhất trong 2026 là 2 hướng: lên Cloud hoặc chuyển sang Data Center (on-premise enterprise).",
          },
          { type: "h2", text: "Cloud vs Data Center: bảng so sánh nhanh" },
          {
            type: "ul",
            items: [
              "Cloud Standard: dưới 35.000 user, không cấu hình hạ tầng, update tự động",
              "Cloud Premium: SLA 99.9%, sandbox, audit log, IP allowlisting",
              "Cloud Enterprise: 50.000+ user, không downtime, advanced governance",
              "Data Center: cho doanh nghiệp yêu cầu data residency trong nội bộ, dùng cluster Linux/Windows",
            ],
          },
          {
            type: "image",
            src: UNSPLASH("photo-1522071820081-009f0129c71c"),
            alt: "Đội ngũ làm việc trên Jira board",
          },
          { type: "h2", text: "Lo ngại data residency cho doanh nghiệp Việt" },
          {
            type: "p",
            text: "Atlassian Cloud Premium trở lên cho phép pin data tại một region cụ thể. Hiện không có region Việt Nam — gần nhất là Singapore (ap-southeast-1). Cho hầu hết use case B2B Việt Nam, Singapore là chấp nhận được. Lĩnh vực ngân hàng / chính phủ thường chọn Data Center.",
          },
          { type: "h2", text: "Migration tooling" },
          {
            type: "ul",
            items: [
              "Jira Cloud Migration Assistant (JCMA) — chính thức của Atlassian",
              "Confluence Cloud Migration Assistant (CCMA)",
              "Trial run trên môi trường test trước, ít nhất 2 lần dry-run",
              "Plan downtime ~4-8 giờ cho doanh nghiệp 200-500 user",
            ],
          },
          {
            type: "callout",
            text: "Lưu ý: nhiều marketplace app không có bản Cloud tương đương — kiểm tra trước, không chờ đến lúc migrate mới phát hiện.",
          },
          {
            type: "p",
            text: "Digi43 hỗ trợ planning, license sizing và migration execution cho Jira/Confluence trên cả 3 tier Cloud. Liên hệ để được audit license Server hiện tại.",
          },
        ],
      },
      en: {
        title: "Migrating Jira/Confluence Server to Cloud after Atlassian Server EOL",
        excerpt:
          "Atlassian Server reached end-of-support in February 2024. Vietnamese organizations still on Server must migrate to Cloud or Data Center — here's the practical comparison.",
        category: "Atlassian",
        blocks: [
          {
            type: "p",
            text: "Atlassian Server officially reached end-of-life on 15 February 2024. Continuing to run it still works operationally, but security updates and Atlassian support are off the table. The two viable paths in 2026 are Cloud or Data Center (enterprise on-premise).",
          },
          { type: "h2", text: "Cloud vs Data Center: quick comparison" },
          {
            type: "ul",
            items: [
              "Cloud Standard: up to 35,000 users, no infrastructure work, automatic updates",
              "Cloud Premium: 99.9% SLA, sandbox, audit logs, IP allowlisting",
              "Cloud Enterprise: 50,000+ users, no downtime, advanced governance",
              "Data Center: for enterprises requiring on-prem data residency, deployed on a Linux/Windows cluster",
            ],
          },
          {
            type: "image",
            src: UNSPLASH("photo-1522071820081-009f0129c71c"),
            alt: "Team working on a Jira board",
          },
          { type: "h2", text: "Data residency concerns for VN enterprises" },
          {
            type: "p",
            text: "Cloud Premium and above lets you pin data to a specific region. There's no Vietnam region today — the closest is Singapore (ap-southeast-1). For most VN B2B use cases that's acceptable. Banking and government typically opt for Data Center instead.",
          },
          { type: "h2", text: "Migration tooling" },
          {
            type: "ul",
            items: [
              "Jira Cloud Migration Assistant (JCMA) — Atlassian's official tool",
              "Confluence Cloud Migration Assistant (CCMA)",
              "Always run trial migrations to a test site first — at least two dry-runs",
              "Plan ~4-8 hours of downtime for a 200-500 user environment",
            ],
          },
          {
            type: "callout",
            text: "Heads up: many marketplace apps have no Cloud equivalent — verify ahead of time, don't discover it mid-migration.",
          },
          {
            type: "p",
            text: "Digi43 supports planning, license sizing, and migration execution for Jira/Confluence across all three Cloud tiers. Get in touch for an audit of your current Server entitlements.",
          },
        ],
      },
    },
  },

  // 4 — M365 vs Google Workspace
  {
    slug: "microsoft-365-vs-google-workspace-vietnam-smb",
    date: "2026-03-28T00:00:00.000Z",
    readingMinutes: 7,
    author: "Digi43 Editorial",
    thumbnailUrl: UNSPLASH("photo-1552664730-d307ca884978"),
    published: true,
    content: {
      vi: {
        title: "Microsoft 365 hay Google Workspace cho doanh nghiệp Việt Nam 2026?",
        excerpt:
          "So sánh thực tế hai nền tảng productivity cho SMB và mid-market tại Việt Nam — tính cả tương thích Office, chi phí và yếu tố vận hành.",
        category: "Microsoft 365",
        blocks: [
          {
            type: "p",
            text: "Microsoft 365 và Google Workspace cùng phục vụ một mục tiêu — email công ty, văn phòng cộng tác, lưu trữ. Nhưng cho thị trường Việt Nam, lựa chọn không chỉ dựa trên giá. Yếu tố quyết định thường là tương thích Office, khả năng kết nối với hệ thống chính phủ, và quy trình đào tạo lại nhân sự.",
          },
          { type: "h2", text: "Bảng quyết định nhanh" },
          {
            type: "ul",
            items: [
              "Doanh nghiệp đã quen Word/Excel/PowerPoint nặng — chọn M365",
              "Đội ngũ thuần web, ít file attachment, ưu tiên real-time collab — chọn Workspace",
              "Có nhu cầu eSignature, in PDF, làm việc với cơ quan nhà nước — M365 (Acrobat tích hợp tốt hơn)",
              "Có file Excel macro/VBA phức tạp — bắt buộc M365",
              "Đội ngũ trẻ, làm quen Gmail từ đầu — Workspace dễ adopt hơn",
            ],
          },
          {
            type: "image",
            src: UNSPLASH("photo-1552664730-d307ca884978"),
            alt: "Đội ngũ văn phòng làm việc trên máy tính xách tay",
          },
          { type: "h2", text: "Chi phí so sánh (50 user)" },
          {
            type: "p",
            text: "M365 Business Standard ~12.5 USD/user/tháng (Office desktop + email + Teams + 1TB OneDrive). Workspace Business Standard ~12 USD/user/tháng (Gmail + Drive 2TB + Meet). Gần như tương đương — chênh lệch thực tế đến từ Copilot add-on (M365) và Gemini Business add-on (Workspace), cả hai ~20-30 USD/user/tháng.",
          },
          { type: "h2", text: "Yếu tố ít được tính đến" },
          {
            type: "ul",
            items: [
              "Tích hợp với phần mềm kế toán Việt Nam (MISA, Fast, Bravo) — đa số xuất ra Excel",
              "Hợp đồng điện tử với đối tác — DocuSign/Adobe Sign chạy tốt trên cả 2",
              "Đào tạo lại nhân sự — Workspace nếu user quen Gmail cá nhân sẽ tiết kiệm 1-2 tuần",
              "Migration cost — chuyển 50 user từ Workspace sang M365 hoặc ngược lại tốn 4-6 tuần và 200-300 USD/user",
            ],
          },
          {
            type: "callout",
            text: "Lời khuyên thực dụng: nếu chưa chuẩn hoá, chọn M365. Đại đa số khách hàng / đối tác Việt Nam vẫn gửi file Word/Excel.",
          },
          {
            type: "p",
            text: "Digi43 triển khai cả Microsoft 365 và Google Workspace qua kênh phân phối được hãng phê duyệt. Khảo sát 1-2 giờ là đủ để có khuyến nghị phù hợp với cách doanh nghiệp đang vận hành.",
          },
        ],
      },
      en: {
        title: "Microsoft 365 vs Google Workspace for Vietnamese SMBs in 2026",
        excerpt:
          "A practical comparison of the two productivity suites for SMBs and mid-market in Vietnam — covering Office compatibility, cost, and operational factors.",
        category: "Microsoft 365",
        blocks: [
          {
            type: "p",
            text: "Microsoft 365 and Google Workspace serve the same goal — corporate email, collaborative office, storage. But for Vietnam, the decision rarely comes down to price alone. The deciding factors are usually Office compatibility, ability to interact with government systems, and the retraining effort.",
          },
          { type: "h2", text: "Quick decision matrix" },
          {
            type: "ul",
            items: [
              "Heavy Word/Excel/PowerPoint dependency — pick M365",
              "Web-first team, light on attachments, real-time collab focus — pick Workspace",
              "eSignature, PDF workflows, dealing with government bodies — M365 (better Acrobat integration)",
              "Complex Excel macros/VBA — M365 only",
              "Younger team comfortable with Gmail — Workspace adopts faster",
            ],
          },
          {
            type: "image",
            src: UNSPLASH("photo-1552664730-d307ca884978"),
            alt: "Office team collaborating on laptops",
          },
          { type: "h2", text: "Cost comparison (50 users)" },
          {
            type: "p",
            text: "M365 Business Standard ~USD 12.5/user/month (desktop Office + mail + Teams + 1TB OneDrive). Workspace Business Standard ~USD 12/user/month (Gmail + 2TB Drive + Meet). Roughly equivalent — real differentiator is Copilot add-on (M365) versus Gemini Business add-on (Workspace), both ~USD 20-30/user/month.",
          },
          { type: "h2", text: "Often-overlooked factors" },
          {
            type: "ul",
            items: [
              "Integration with VN accounting software (MISA, Fast, Bravo) — most export to Excel",
              "Digital contracts with partners — DocuSign/Adobe Sign work on both",
              "User retraining — Workspace saves 1-2 weeks if your staff already uses personal Gmail",
              "Migration cost — moving 50 users either direction takes 4-6 weeks and USD 200-300/user",
            ],
          },
          {
            type: "callout",
            text: "Pragmatic call: if you're not already standardized, pick M365. The Vietnamese customer/partner ecosystem still defaults to Word/Excel attachments.",
          },
          {
            type: "p",
            text: "Digi43 deploys both Microsoft 365 and Google Workspace through manufacturer-approved channels. A one-to-two-hour assessment is enough to recommend the right fit for how your organization runs today.",
          },
        ],
      },
    },
  },

  // 5 — Adobe Acrobat for legal/finance
  {
    slug: "adobe-acrobat-legal-finance-workflows",
    date: "2026-03-21T00:00:00.000Z",
    readingMinutes: 5,
    author: "Digi43 Editorial",
    thumbnailUrl: UNSPLASH("photo-1450101499163-c8848c66ca85"),
    published: true,
    content: {
      vi: {
        title: "Adobe Acrobat Pro cho phòng pháp chế và tài chính: workflow thực tế",
        excerpt:
          "Ký số, redaction, audit trail và batch processing — những tính năng Acrobat Pro mà đội ngũ legal và finance Việt Nam dùng hằng ngày.",
        category: "Adobe",
        blocks: [
          {
            type: "p",
            text: "Adobe Acrobat Pro thường bị đánh đồng với \"phần mềm xem PDF\". Với phòng pháp chế và tài chính, nó là công cụ vận hành chính — không phải tiện ích phụ. Tại Việt Nam, hợp đồng điện tử có giá trị pháp lý từ Nghị định 130/2018 và Luật Giao dịch điện tử 2023, đẩy nhu cầu Acrobat Pro tăng mạnh.",
          },
          { type: "h2", text: "Bốn workflow quan trọng nhất" },
          {
            type: "ul",
            items: [
              "Ký số bằng chứng thư USB token (Viettel-CA, FPT-CA, BKAV-CA, MISA-eSign) — Acrobat tự động nhận trên Windows",
              "Redaction: xoá thông tin nhạy cảm trước khi gửi ra ngoài, không undo được",
              "Compare Documents: so sánh hai phiên bản hợp đồng, highlight khác biệt",
              "Batch Processing: chuyển hàng loạt 100+ file Excel/Word sang PDF chuẩn",
            ],
          },
          {
            type: "image",
            src: UNSPLASH("photo-1450101499163-c8848c66ca85"),
            alt: "Tài liệu pháp lý và hợp đồng trên bàn làm việc",
          },
          { type: "h2", text: "Acrobat vs DocuSign cho hợp đồng điện tử" },
          {
            type: "p",
            text: "Acrobat Sign (kèm trong Acrobat Pro Enterprise) đủ cho hầu hết doanh nghiệp Việt — gửi link ký, theo dõi trạng thái, lưu audit trail. DocuSign nhỉnh hơn ở tích hợp với Salesforce và workflow phức tạp đa bước. Với 90% doanh nghiệp Việt mid-market, Acrobat Sign tiết kiệm 30-40% chi phí.",
          },
          {
            type: "callout",
            text: "Quan trọng: Acrobat Pro Standard không có Sign add-on. Cần đặt riêng Acrobat Pro for Enterprise + Sign nếu muốn ký số chính thức.",
          },
          {
            type: "p",
            text: "Digi43 hỗ trợ provisioning Acrobat Pro for Enterprise, tích hợp với chứng thư số Việt Nam, và training cơ bản cho phòng legal/finance.",
          },
        ],
      },
      en: {
        title: "Adobe Acrobat Pro for legal and finance: practical workflows",
        excerpt:
          "Digital signatures, redaction, audit trail, and batch processing — the Acrobat Pro features legal and finance teams in Vietnam use every day.",
        category: "Adobe",
        blocks: [
          {
            type: "p",
            text: "Adobe Acrobat Pro is often lumped in as a \"PDF viewer.\" For legal and finance teams, it's core operational tooling — not a utility. In Vietnam, electronic contracts gained legal weight under Decree 130/2018 and the 2023 e-Transactions Law, pushing Acrobat Pro adoption upward.",
          },
          { type: "h2", text: "Four workflows that matter most" },
          {
            type: "ul",
            items: [
              "Digital signing with USB-token certificates (Viettel-CA, FPT-CA, BKAV-CA, MISA-eSign) — Acrobat auto-detects them on Windows",
              "Redaction: permanently strip sensitive data before sharing externally — no undo",
              "Compare Documents: diff two contract versions and highlight changes",
              "Batch Processing: convert 100+ Excel/Word files to a standard PDF format",
            ],
          },
          {
            type: "image",
            src: UNSPLASH("photo-1450101499163-c8848c66ca85"),
            alt: "Legal documents and contracts on a desk",
          },
          { type: "h2", text: "Acrobat vs DocuSign for e-contracts" },
          {
            type: "p",
            text: "Acrobat Sign (bundled with Acrobat Pro Enterprise) covers most VN enterprise needs — send-to-sign links, status tracking, audit trail retention. DocuSign edges ahead on Salesforce integration and complex multi-step workflows. For ~90% of mid-market companies in Vietnam, Acrobat Sign saves 30-40% versus DocuSign.",
          },
          {
            type: "callout",
            text: "Important: Acrobat Pro Standard does NOT include Sign. Order Acrobat Pro for Enterprise + Sign if formal digital signing is required.",
          },
          {
            type: "p",
            text: "Digi43 handles Acrobat Pro for Enterprise provisioning, integration with Vietnamese digital certificates, and baseline training for legal/finance teams.",
          },
        ],
      },
    },
  },

  // 6 — Azure FinOps
  {
    slug: "azure-finops-cost-optimization-vietnam",
    date: "2026-03-14T00:00:00.000Z",
    readingMinutes: 7,
    author: "Digi43 Editorial",
    thumbnailUrl: UNSPLASH("photo-1451187580459-43490279c0fa"),
    published: true,
    content: {
      vi: {
        title: "FinOps cho Azure: cắt 20-40% chi phí cloud mà không cần giảm workload",
        excerpt:
          "Reserved Instances, Savings Plans, autoshutdown và rightsizing — bốn kỹ thuật FinOps tạo impact lớn nhất cho doanh nghiệp Việt dùng Azure.",
        category: "Cloud",
        blocks: [
          {
            type: "p",
            text: "Doanh nghiệp Việt Nam mới chuyển lên Azure thường chi vượt budget 30-50% trong 6 tháng đầu — không phải vì dùng quá nhiều, mà vì giá pay-as-you-go đắt hơn 40-72% so với cam kết. FinOps không phải là cắt giảm workload, mà là tối ưu cấu trúc chi phí.",
          },
          { type: "h2", text: "Bốn đòn bẩy chính theo thứ tự ROI" },
          {
            type: "ul",
            items: [
              "Reserved Instances (RI) 1 năm cho VM ổn định — giảm 40-55%",
              "Savings Plans 3 năm cho compute không gắn region cụ thể — giảm 60-72%",
              "Auto-shutdown VM dev/test ngoài giờ làm việc — tiết kiệm 65% giờ chạy",
              "Rightsizing: scan và downgrade VM dưới 20% CPU sang size nhỏ hơn — tiết kiệm 30-50% trên VM đó",
            ],
          },
          {
            type: "image",
            src: UNSPLASH("photo-1451187580459-43490279c0fa"),
            alt: "Trung tâm dữ liệu cloud với các tủ rack server",
          },
          { type: "h2", text: "Sai lầm phổ biến nhất" },
          {
            type: "p",
            text: "Doanh nghiệp Việt thường mua RI 3 năm cho mọi VM ngay sau khi migrate — đó là sai lầm. Workload mới chạy 3-6 tháng đầu chưa ổn định, mua RI sớm sẽ kẹt với SKU sai. Khuyến nghị: chạy pay-as-you-go 3 tháng, phân tích usage báo cáo từ Cost Management, sau đó mua RI cho phần baseline ổn định.",
          },
          { type: "h2", text: "Setup báo cáo và cảnh báo" },
          {
            type: "ul",
            items: [
              "Budget alert 80% và 100% gửi tới IT manager và CFO",
              "Daily anomaly detection — Azure tự cảnh báo khi chi phí tăng đột biến",
              "Tag mọi resource theo cost center (project, department, environment)",
              "Báo cáo monthly cho ban giám đốc — phân tích theo tag",
            ],
          },
          {
            type: "callout",
            text: "Hybrid Benefit: nếu doanh nghiệp đã có Windows Server license, kích hoạt Azure Hybrid Benefit để tiết kiệm thêm 40% cho Windows VM.",
          },
          {
            type: "p",
            text: "Digi43 hỗ trợ FinOps assessment cho Azure — phân tích 30 ngày usage, đề xuất RI/Savings Plan mix, và setup báo cáo cost management. Thông thường tiết kiệm 25-40% trong tháng đầu.",
          },
        ],
      },
      en: {
        title: "FinOps for Azure: cut 20-40% of cloud spend without reducing workload",
        excerpt:
          "Reserved Instances, Savings Plans, auto-shutdown and rightsizing — the four FinOps levers with the biggest impact for Vietnamese enterprises on Azure.",
        category: "Cloud",
        blocks: [
          {
            type: "p",
            text: "Vietnamese organizations new to Azure typically overshoot budget by 30-50% in the first six months — not because they over-provision, but because pay-as-you-go pricing runs 40-72% higher than commitment-based options. FinOps isn't workload-cutting, it's cost-structure optimization.",
          },
          { type: "h2", text: "Four levers, ordered by ROI" },
          {
            type: "ul",
            items: [
              "1-year Reserved Instances (RI) for stable VMs — 40-55% off",
              "3-year Savings Plans for region-flexible compute — 60-72% off",
              "Auto-shutdown for dev/test VMs outside working hours — 65% of runtime saved",
              "Rightsizing: identify VMs under 20% CPU and downgrade — 30-50% saved on those VMs",
            ],
          },
          {
            type: "image",
            src: UNSPLASH("photo-1451187580459-43490279c0fa"),
            alt: "Cloud data center with server racks",
          },
          { type: "h2", text: "The most common mistake" },
          {
            type: "p",
            text: "Vietnamese companies often buy 3-year RIs for every VM right after migration — that's a mistake. New workloads aren't stable in months 0-6; locking in early traps you with the wrong SKU. Recommendation: run pay-as-you-go for three months, mine the Cost Management reports for steady-state workload, then buy RIs for the baseline.",
          },
          { type: "h2", text: "Reports and alerts to set up" },
          {
            type: "ul",
            items: [
              "Budget alerts at 80% and 100% — routed to the IT lead and CFO",
              "Daily anomaly detection — Azure flags unusual spend spikes automatically",
              "Tag every resource by cost center (project, department, environment)",
              "Monthly executive report sliced by tag",
            ],
          },
          {
            type: "callout",
            text: "Hybrid Benefit: if you own Windows Server licenses, activate Azure Hybrid Benefit to shave another 40% off Windows VM cost.",
          },
          {
            type: "p",
            text: "Digi43 runs FinOps assessments for Azure — 30-day usage analysis, RI/Savings Plan mix proposal, and Cost Management report wiring. Typical result: 25-40% saved within the first billing cycle.",
          },
        ],
      },
    },
  },

  // 7 — SAM basics
  {
    slug: "software-asset-management-basics-it-managers",
    date: "2026-03-07T00:00:00.000Z",
    readingMinutes: 6,
    author: "Digi43 Editorial",
    thumbnailUrl: UNSPLASH("photo-1556761175-5973dc0f32e7"),
    published: true,
    content: {
      vi: {
        title: "Software Asset Management (SAM) cơ bản cho IT manager — 5 bước đầu tiên",
        excerpt:
          "SAM không phải là dự án 6 tháng. Có thể bắt đầu trong 2 tuần với 5 hành động đơn giản — tiết kiệm chi phí và giảm rủi ro audit ngay.",
        category: "Compliance",
        blocks: [
          {
            type: "p",
            text: "Software Asset Management là quy trình theo dõi, đối soát và tối ưu danh mục license phần mềm doanh nghiệp đang sở hữu. Phần lớn IT manager Việt Nam hoãn SAM vì nghĩ phải triển khai tool đắt tiền (Snow, Flexera) — thực tế 80% giá trị đến từ quy trình, không phải tool.",
          },
          { type: "h2", text: "Năm bước trong 2 tuần" },
          {
            type: "ul",
            items: [
              "Bước 1: Tổng hợp danh sách license — xuất từ Microsoft Admin Center, Adobe Admin Console, Autodesk Account vào 1 Google Sheet",
              "Bước 2: Tổng hợp danh sách user thực tế — kết hợp HR active list + AD/Azure AD active accounts",
              "Bước 3: Đối soát — đánh dấu license gán cho user không active (nhân sự đã nghỉ, freelancer hết hợp đồng)",
              "Bước 4: Reclaim license — gỡ license khỏi user inactive, lưu lại danh sách reclaim làm bằng chứng",
              "Bước 5: Thiết lập quy trình monthly review — tài liệu hoá 4 bước trên thành SOP, gán owner",
            ],
          },
          {
            type: "image",
            src: UNSPLASH("photo-1556761175-5973dc0f32e7"),
            alt: "Họp đánh giá danh mục license phần mềm",
          },
          { type: "h2", text: "Khi nào nên đầu tư tool SAM chuyên nghiệp" },
          {
            type: "p",
            text: "Snow License Manager, Flexera One và ServiceNow SAM Pro chỉ đáng đầu tư khi: danh mục license >20 vendor, hoặc số user >500, hoặc có compliance requirement ISO/SOC 2 buộc audit trail. Doanh nghiệp dưới quy mô này dùng spreadsheet + quy trình tốt là đủ.",
          },
          {
            type: "callout",
            text: "Số liệu Gartner: doanh nghiệp triển khai SAM cơ bản trung bình tiết kiệm 25-30% chi phí phần mềm trong năm đầu. Lớn nhất đến từ reclaim license inactive và tránh mua trùng.",
          },
          {
            type: "p",
            text: "Digi43 hỗ trợ doanh nghiệp Việt thiết lập SAM cơ bản trong 2 tuần — không cần đầu tư tool. Phù hợp với mọi quy mô, từ 50 đến 1000+ user.",
          },
        ],
      },
      en: {
        title: "Software Asset Management (SAM) basics for IT managers — five first steps",
        excerpt:
          "SAM isn't a six-month project. You can start in two weeks with five simple actions — cutting cost and audit risk right away.",
        category: "Compliance",
        blocks: [
          {
            type: "p",
            text: "Software Asset Management is the practice of tracking, reconciling, and optimizing the software licenses an organization owns. Vietnamese IT managers often delay SAM expecting they need an expensive tool (Snow, Flexera) — in reality, 80% of the value comes from the process, not the tool.",
          },
          { type: "h2", text: "Five steps in two weeks" },
          {
            type: "ul",
            items: [
              "Step 1: Compile a license list — export from Microsoft Admin Center, Adobe Admin Console, Autodesk Account into a single Google Sheet",
              "Step 2: Compile a true user list — HR active roster crossed with AD/Azure AD active accounts",
              "Step 3: Reconcile — flag licenses assigned to inactive users (offboarded staff, contracts ended)",
              "Step 4: Reclaim — remove licenses from inactive users, save the reclaim list as evidence",
              "Step 5: Make it monthly — document the four steps above as an SOP, assign an owner",
            ],
          },
          {
            type: "image",
            src: UNSPLASH("photo-1556761175-5973dc0f32e7"),
            alt: "Software license portfolio review meeting",
          },
          { type: "h2", text: "When to invest in a dedicated SAM tool" },
          {
            type: "p",
            text: "Snow License Manager, Flexera One, and ServiceNow SAM Pro are worth it only when: portfolio spans 20+ vendors, headcount exceeds 500, or compliance requirements (ISO, SOC 2) mandate an audit trail. Smaller organizations stay efficient on a spreadsheet plus a sharp process.",
          },
          {
            type: "callout",
            text: "Gartner data: organizations rolling out basic SAM save 25-30% on software spend in year one on average. The biggest line item is reclaimed inactive licenses and avoided duplicate purchases.",
          },
          {
            type: "p",
            text: "Digi43 helps Vietnamese organizations stand up basic SAM in two weeks — no tool investment needed. Works at any scale from 50 to 1000+ users.",
          },
        ],
      },
    },
  },

  // 8 — EDR endpoint security
  {
    slug: "edr-endpoint-security-smb-vietnam",
    date: "2026-02-28T00:00:00.000Z",
    readingMinutes: 6,
    author: "Digi43 Editorial",
    thumbnailUrl: UNSPLASH("photo-1550751827-4bd374c3f58b"),
    published: true,
    content: {
      vi: {
        title: "Chọn EDR cho doanh nghiệp vừa và nhỏ: Defender for Business, CrowdStrike hay SentinelOne",
        excerpt:
          "Endpoint Detection and Response thay thế antivirus truyền thống. Hướng dẫn chọn EDR phù hợp cho SMB Việt Nam với budget 50-200 user.",
        category: "Security",
        blocks: [
          {
            type: "p",
            text: "Antivirus truyền thống (Kaspersky, Bitdefender, Symantec) chỉ phát hiện malware đã biết qua signature. EDR (Endpoint Detection and Response) phát hiện hành vi bất thường — kể cả ransomware chưa có trong database. Sau làn sóng ransomware tấn công doanh nghiệp Việt 2023-2025, EDR đã chuyển từ \"nice to have\" sang yêu cầu cơ bản.",
          },
          { type: "h2", text: "Ba lựa chọn phổ biến nhất tại Việt Nam" },
          {
            type: "ul",
            items: [
              "Microsoft Defender for Business: đã bundled trong Microsoft 365 Business Premium — phù hợp <300 user, không cần thêm license",
              "CrowdStrike Falcon Go: ~5-8 USD/endpoint/tháng, console cloud, threat intel của CrowdStrike",
              "SentinelOne Singularity Core: ~6-9 USD/endpoint/tháng, có rollback ransomware tự động",
            ],
          },
          {
            type: "image",
            src: UNSPLASH("photo-1550751827-4bd374c3f58b"),
            alt: "Bảng điều khiển cybersecurity với cảnh báo và threat intel",
          },
          { type: "h2", text: "Khi nào Defender for Business là lựa chọn đúng" },
          {
            type: "p",
            text: "Nếu doanh nghiệp đã có Microsoft 365 Business Premium (~22 USD/user/tháng), Defender for Business đã có sẵn — tiết kiệm 60-80% so với mua EDR third-party. Bao gồm anti-phishing, anti-ransomware, web protection, attack surface reduction. Đủ cho 80% SMB Việt Nam.",
          },
          { type: "h2", text: "Khi nào cần lên CrowdStrike/SentinelOne" },
          {
            type: "ul",
            items: [
              "Đã từng bị ransomware hoặc breach — cần threat hunting chuyên sâu",
              "Có yêu cầu compliance đặc thù (ISO 27001, PCI-DSS)",
              "Có team SOC nội bộ cần threat intelligence feeds chất lượng",
              "Số endpoint >300 và cần MDR (Managed Detection and Response) 24/7",
            ],
          },
          {
            type: "callout",
            text: "Đừng quên: license EDR phải bao gồm cả server, không chỉ laptop nhân viên. Server bị nhiễm ransomware là kịch bản tệ nhất.",
          },
          {
            type: "p",
            text: "Digi43 phân phối cả ba giải pháp qua kênh hãng phê duyệt — Microsoft Defender for Business kèm M365, CrowdStrike và SentinelOne với pricing volume. Khảo sát endpoint inventory miễn phí.",
          },
        ],
      },
      en: {
        title: "Choosing EDR for SMBs: Defender for Business, CrowdStrike, or SentinelOne",
        excerpt:
          "Endpoint Detection and Response replaces traditional antivirus. A short guide for Vietnamese SMBs with 50-200 endpoints to budget.",
        category: "Security",
        blocks: [
          {
            type: "p",
            text: "Traditional antivirus (Kaspersky, Bitdefender, Symantec) only catches known malware via signatures. EDR (Endpoint Detection and Response) flags suspicious behavior — including ransomware not yet in any database. After the 2023-2025 ransomware wave that hit Vietnamese businesses, EDR moved from nice-to-have to baseline.",
          },
          { type: "h2", text: "Three options most common in Vietnam" },
          {
            type: "ul",
            items: [
              "Microsoft Defender for Business: bundled with Microsoft 365 Business Premium — fits <300 users, no extra license",
              "CrowdStrike Falcon Go: ~USD 5-8/endpoint/month, cloud console, CrowdStrike threat intelligence",
              "SentinelOne Singularity Core: ~USD 6-9/endpoint/month, auto-rollback for ransomware",
            ],
          },
          {
            type: "image",
            src: UNSPLASH("photo-1550751827-4bd374c3f58b"),
            alt: "Cybersecurity dashboard with alerts and threat intel",
          },
          { type: "h2", text: "When Defender for Business is the right pick" },
          {
            type: "p",
            text: "If you already run Microsoft 365 Business Premium (~USD 22/user/month), Defender for Business is included — saving 60-80% versus a third-party EDR. It covers anti-phishing, anti-ransomware, web protection, and attack surface reduction. Sufficient for 80% of VN SMBs.",
          },
          { type: "h2", text: "When to step up to CrowdStrike or SentinelOne" },
          {
            type: "ul",
            items: [
              "Past ransomware or breach incident — you need deep threat hunting",
              "Specific compliance mandate (ISO 27001, PCI-DSS)",
              "Internal SOC that needs high-quality threat intelligence feeds",
              "300+ endpoints and need for 24/7 Managed Detection and Response (MDR)",
            ],
          },
          {
            type: "callout",
            text: "Don't forget: your EDR license must cover servers, not just user laptops. A server-side ransomware hit is the worst-case scenario.",
          },
          {
            type: "p",
            text: "Digi43 distributes all three through manufacturer-approved channels — Defender for Business bundled with M365, and CrowdStrike and SentinelOne with volume pricing. Endpoint inventory assessment is complimentary.",
          },
        ],
      },
    },
  },

  // 9 — Adobe ETLA negotiation
  {
    slug: "adobe-etla-negotiation-tactics",
    date: "2026-02-21T00:00:00.000Z",
    readingMinutes: 6,
    author: "Digi43 Editorial",
    thumbnailUrl: UNSPLASH("photo-1626785774573-4b799315345d"),
    published: true,
    content: {
      vi: {
        title: "Đàm phán Adobe ETLA: 5 điểm doanh nghiệp Việt cần biết trước khi ký",
        excerpt:
          "ETLA (Enterprise Term License Agreement) là hợp đồng 3 năm với Adobe — tiết kiệm 15-25% nhưng cũng dễ ký phải điều khoản bất lợi nếu không chuẩn bị.",
        category: "Adobe",
        blocks: [
          {
            type: "p",
            text: "Adobe ETLA là hợp đồng cam kết 3 năm cho doanh nghiệp >250 user — đổi lại được discount 15-25% so với annual subscription và một số tính năng Enterprise. Nhưng đây là hợp đồng chỉ có lợi khi đàm phán đúng. Năm điểm dưới đây quyết định ROI của ETLA.",
          },
          { type: "h2", text: "1. Demand forecast — sai 20% là mất 100k USD" },
          {
            type: "p",
            text: "ETLA tính theo số seat cam kết cho mỗi năm trong 3 năm. Forecast quá cao = trả tiền cho seat không dùng. Forecast quá thấp = phải mua bổ sung với giá retail. Khuyến nghị: dùng dữ liệu usage 12 tháng gần nhất, cộng forecast hiring HR, trừ attrition rate trung bình của ngành.",
          },
          { type: "h2", text: "2. True-up clause — bắt buộc đàm phán" },
          {
            type: "p",
            text: "True-up cho phép báo cáo thừa seat vào cuối năm 1 và 2 mà không bị phạt — Adobe sẽ tự rebalance vào cam kết năm tiếp theo. Không có true-up nghĩa là bị kẹt với số seat ban đầu trong cả 3 năm.",
          },
          {
            type: "image",
            src: UNSPLASH("photo-1626785774573-4b799315345d"),
            alt: "Làm việc trên dự án thiết kế sáng tạo",
          },
          { type: "h2", text: "3. Co-terming với hợp đồng hiện tại" },
          {
            type: "p",
            text: "Nếu doanh nghiệp đã có 50 seat Creative Cloud Teams chạy đến tháng 6 năm sau, đàm phán Adobe co-term — bắt đầu ETLA cùng ngày hết hạn Teams, tránh trả overlap 2 hợp đồng.",
          },
          { type: "h2", text: "4. Cap on price increase year 2 và 3" },
          {
            type: "ul",
            items: [
              "Đàm phán cap không quá 5% mỗi năm cho true-up SKUs",
              "Lock price cho seat baseline 3 năm — không bị tăng giá",
              "Yêu cầu Adobe document rõ ràng cách tính giá khi mở rộng giữa kỳ",
            ],
          },
          { type: "h2", text: "5. Exit clause" },
          {
            type: "p",
            text: "Mặc định ETLA không cho phép terminate. Đàm phán right-to-terminate trong trường hợp M&A, divestiture, hoặc dropping support cho sản phẩm là điều khoản hợp lý cần đặt lên bàn.",
          },
          {
            type: "callout",
            text: "Mẹo: yêu cầu Adobe present price comparison ETLA vs Teams renewal 3 năm — đó là benchmark để xác định ETLA có thực sự rẻ hơn cho case cụ thể.",
          },
          {
            type: "p",
            text: "Digi43 hỗ trợ doanh nghiệp Việt chuẩn bị bid materials, đàm phán với Adobe regional team, và review từng điều khoản trước khi ký. Liên hệ nếu đang trong giai đoạn cân nhắc ETLA.",
          },
        ],
      },
      en: {
        title: "Adobe ETLA negotiation: 5 things VN enterprises should know before signing",
        excerpt:
          "ETLA (Enterprise Term License Agreement) is a 3-year Adobe contract — 15-25% cheaper, but it's easy to sign unfavorable terms without preparation.",
        category: "Adobe",
        blocks: [
          {
            type: "p",
            text: "Adobe ETLA is a 3-year commitment for organizations above ~250 users — in exchange for a 15-25% discount versus annual subscription and additional Enterprise features. But it's only a win if negotiated well. The five points below decide ETLA ROI.",
          },
          { type: "h2", text: "1. Demand forecast — a 20% miss costs USD 100k" },
          {
            type: "p",
            text: "ETLA prices to a committed seat count per year across three years. Over-forecast and you pay for unused seats. Under-forecast and you buy overage at retail. Recommended approach: build on the last 12 months of usage data, add HR hiring forecast, subtract industry-average attrition.",
          },
          { type: "h2", text: "2. True-up clause — non-negotiable to include" },
          {
            type: "p",
            text: "A true-up clause lets you report seat surplus at year-end 1 and 2 with no penalty — Adobe rebalances the commitment forward. Without true-up you're stuck with the original number for all three years.",
          },
          {
            type: "image",
            src: UNSPLASH("photo-1626785774573-4b799315345d"),
            alt: "Working on a creative design project",
          },
          { type: "h2", text: "3. Co-terming with existing contracts" },
          {
            type: "p",
            text: "If you currently run 50 Creative Cloud Teams seats expiring in June next year, negotiate co-term — start ETLA on the same date Teams expires, avoiding overlap charges on two contracts.",
          },
          { type: "h2", text: "4. Cap year-2 and year-3 price increases" },
          {
            type: "ul",
            items: [
              "Negotiate a cap of no more than 5% per year on true-up SKUs",
              "Lock baseline-seat price for the full 3 years — no escalation",
              "Require Adobe to document the formula for mid-term expansion pricing",
            ],
          },
          { type: "h2", text: "5. Exit clause" },
          {
            type: "p",
            text: "By default ETLA does not allow termination. Negotiate a right-to-terminate clause covering M&A, divestiture, or product end-of-life — these are reasonable scenarios to put on the table.",
          },
          {
            type: "callout",
            text: "Tip: ask Adobe to present a side-by-side ETLA vs 3-year Teams renewal pricing. That's the benchmark for whether ETLA actually saves money in your scenario.",
          },
          {
            type: "p",
            text: "Digi43 helps Vietnamese enterprises prepare bid materials, negotiate with Adobe's regional team, and review every clause before signing. Get in touch if ETLA is currently on the table.",
          },
        ],
      },
    },
  },

  // 10 — Cloud compliance VN
  {
    slug: "cloud-compliance-checklist-vietnam-2026",
    date: "2026-02-14T00:00:00.000Z",
    readingMinutes: 8,
    author: "Digi43 Editorial",
    thumbnailUrl: UNSPLASH("photo-1451187580459-43490279c0fa"),
    published: true,
    content: {
      vi: {
        title: "Checklist tuân thủ pháp lý khi đưa data lên cloud: Việt Nam 2026",
        excerpt:
          "Nghị định 13/2023 về bảo vệ dữ liệu cá nhân, Luật An ninh mạng, và yêu cầu local hosting — checklist 10 điểm trước khi sign cloud contract.",
        category: "Compliance",
        blocks: [
          {
            type: "p",
            text: "Đưa workload lên AWS, Azure hoặc Google Cloud không đơn thuần là quyết định kỹ thuật — đó là quyết định pháp lý. Nghị định 13/2023 của Chính phủ về bảo vệ dữ liệu cá nhân (PDPD), kèm Luật An ninh mạng 2018 và các thông tư hướng dẫn, đã thay đổi nhiều giả định cũ về cloud cho doanh nghiệp Việt Nam.",
          },
          { type: "h2", text: "Mười điểm checklist trước khi migrate" },
          {
            type: "ul",
            items: [
              "1. Phân loại data theo PDPD: data cá nhân (PII), data nhạy cảm (health, financial), data nội bộ thường",
              "2. Xác định data nào bắt buộc lưu tại Việt Nam — chủ yếu là data ngành ngân hàng, viễn thông, y tế công",
              "3. Chọn region cloud gần nhất nếu không bắt buộc trong nước — Singapore (ap-southeast-1) cho AWS/Azure/GCP",
              "4. Ký Data Processing Agreement (DPA) với cloud vendor — kèm điều khoản tuân thủ PDPD",
              "5. Thiết lập consent flow cho user nếu xử lý PII — log lại consent và thời điểm",
            ],
          },
          {
            type: "image",
            src: UNSPLASH("photo-1451187580459-43490279c0fa"),
            alt: "Trung tâm dữ liệu với hệ thống lưu trữ doanh nghiệp",
          },
          {
            type: "ul",
            items: [
              "6. Đăng ký với Cục An toàn thông tin nếu xử lý data nhạy cảm trên cross-border infrastructure",
              "7. Thiết lập breach notification process — báo cáo trong 72 giờ theo PDPD",
              "8. Lưu trữ data audit log tối thiểu 24 tháng",
              "9. Định kỳ DPIA (Data Protection Impact Assessment) cho workload xử lý >10.000 PII subjects",
              "10. Có cơ chế xoá data theo yêu cầu user (right to erasure)",
            ],
          },
          { type: "h2", text: "Sai lầm phổ biến nhất" },
          {
            type: "p",
            text: "Nhiều doanh nghiệp Việt hiểu nhầm Nghị định 13/2023 yêu cầu toàn bộ data phải lưu tại Việt Nam — không đúng. Chỉ một số ngành đặc thù mới có yêu cầu này. Đa số B2B SaaS hoạt động bình thường với hosting Singapore + DPA + consent flow đầy đủ.",
          },
          {
            type: "callout",
            text: "Mức phạt theo PDPD: lên tới 5% doanh thu năm của tổ chức vi phạm. Compliance không phải chi phí — đó là quản trị rủi ro.",
          },
          {
            type: "p",
            text: "Digi43 phối hợp với cố vấn pháp lý hỗ trợ doanh nghiệp Việt review compliance trước migration, soạn thảo DPA template với cloud vendor, và thiết lập breach notification SOP. Liên hệ cho gói assessment 1-2 tuần.",
          },
        ],
      },
      en: {
        title: "Cloud compliance checklist for Vietnam 2026",
        excerpt:
          "Decree 13/2023 on personal data protection, the Cybersecurity Law, and local hosting requirements — a 10-point checklist before signing a cloud contract.",
        category: "Compliance",
        blocks: [
          {
            type: "p",
            text: "Moving workloads to AWS, Azure, or Google Cloud is no longer a purely technical decision — it's a legal one. Decree 13/2023 on Personal Data Protection (PDPD), alongside the 2018 Cybersecurity Law and its implementing circulars, has reset many old assumptions about cloud for Vietnamese organizations.",
          },
          { type: "h2", text: "Ten-point pre-migration checklist" },
          {
            type: "ul",
            items: [
              "1. Classify data under PDPD: personal (PII), sensitive (health, financial), routine internal",
              "2. Identify which data must remain inside Vietnam — primarily banking, telecom, public health data",
              "3. Pick the nearest cloud region when not domestically required — Singapore (ap-southeast-1) for AWS/Azure/GCP",
              "4. Sign a Data Processing Agreement (DPA) with the cloud vendor — include PDPD compliance clauses",
              "5. Stand up a consent flow if you process PII — log consent and timestamp",
            ],
          },
          {
            type: "image",
            src: UNSPLASH("photo-1451187580459-43490279c0fa"),
            alt: "Data center with enterprise storage infrastructure",
          },
          {
            type: "ul",
            items: [
              "6. Register with the Authority of Information Security if processing sensitive data on cross-border infrastructure",
              "7. Establish a breach notification process — 72-hour reporting under PDPD",
              "8. Retain data audit logs for at least 24 months",
              "9. Run periodic DPIAs (Data Protection Impact Assessments) for workloads handling >10,000 PII subjects",
              "10. Support data deletion on user request (right to erasure)",
            ],
          },
          { type: "h2", text: "The most common misunderstanding" },
          {
            type: "p",
            text: "Many Vietnamese enterprises read Decree 13/2023 as requiring all data to remain inside Vietnam — that's not accurate. Only specific sectors carry that requirement. The vast majority of B2B SaaS operations run normally on Singapore hosting with a proper DPA and consent flow.",
          },
          {
            type: "callout",
            text: "PDPD penalty ceiling: up to 5% of annual revenue for the offending organization. Compliance isn't overhead — it's risk management.",
          },
          {
            type: "p",
            text: "Digi43 works with legal advisors to support Vietnamese organizations on pre-migration compliance reviews, DPA template drafting with cloud vendors, and breach notification SOP setup. Get in touch for a one-to-two-week assessment package.",
          },
        ],
      },
    },
  },
];

export async function seedExtras(): Promise<{ upserted: number; slugs: string[] }> {
  for (const p of EXTRA_POSTS) await upsertPost(p);
  return { upserted: EXTRA_POSTS.length, slugs: EXTRA_POSTS.map((p) => p.slug) };
}
