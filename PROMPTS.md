# Prompts để làm việc với digi43.net trong session AI mới

Tập hợp prompt ready-to-copy cho các tác vụ thường gặp. Copy đoạn cần dùng → paste vào Claude Code, Cursor, ChatGPT, Gemini... → tiếp tục công việc.

---

## 0. Cách dùng

1. **Trước mọi prompt cụ thể bên dưới**, paste prompt §1 ("Master onboarding") để agent hiểu context.
2. Sau đó paste prompt cụ thể của tác vụ (§2–§8).
3. Đối với **Claude Code / Cursor** (có quyền đọc file local) — agent sẽ tự đọc `PROJECT-CONTEXT.md`.
4. Đối với **Claude web / ChatGPT / Gemini** (không có quyền local) — agent có thể tự `WebFetch` từ:
   `https://raw.githubusercontent.com/digi43adobe-boop/digi43.net/main/PROJECT-CONTEXT.md`

---

## 1. Master onboarding (paste ĐẦU TIÊN trong mọi session mới)

```
Tôi đang vận hành website digi43.net — landing page B2B của
CÔNG TY TNHH DIGI43 MEDIA (Đà Nẵng), cung cấp giải pháp phần
mềm bản quyền cho doanh nghiệp.

Repo local: /Users/thanhnguyenquang/Documents/CLAUDE CODE/digi43.net
Repo GitHub: https://github.com/digi43adobe-boop/digi43.net
Production: https://digi43.net

Trước khi bắt đầu, hãy đọc file PROJECT-CONTEXT.md trong repo
(hoặc fetch từ
https://raw.githubusercontent.com/digi43adobe-boop/digi43.net/main/PROJECT-CONTEXT.md
nếu không có quyền đọc file local) để hiểu:
- Tech stack: Next.js 16 + React 19 + Tailwind v4 + TypeScript
- Bilingual VI/EN với app/[lang]/ routing và dictionary JSON
- Auto-deploy: push lên main → Vercel build → live ở digi43.net
- Web3Forms backend cho contact form
- Cloudflare DNS, Vercel hosting
- Các gotchas Next.js 16 (đặc biệt "use client" không export plain data)

Sau khi đọc xong, báo cho tôi biết bạn đã sẵn sàng.
Không thực hiện thay đổi nào cho đến khi tôi đưa task cụ thể.
```

---

## 2. Thêm bài blog mới

```
Thêm bài blog mới vào digi43.net.

Topic: [ghi topic ở đây — VD: "Microsoft 365 vs Google Workspace cho SMB Việt Nam"]
Category: [Compliance | Adobe | Microsoft 365 | Autodesk | Cloud | Security]
Tone: chuyên gia, B2B, viết bởi đội ngũ Digi43 (third-person).
Độ dài: ~1200-1500 chữ mỗi ngôn ngữ. Reading time ~6-8 phút.

Yêu cầu:
1. Viết cả 2 phiên bản tiếng Việt và tiếng Anh (KHÔNG dịch word-by-word,
   viết native trong từng ngôn ngữ).
2. Cấu trúc bài: intro → 2-3 h2 sections → callout nếu cần → conclusion.
3. Thêm CTA cuối bài kết nối với Digi43 (qua call-to-action có sẵn trong layout).
4. Cập nhật file app/[lang]/blog/posts.ts — thêm 1 object mới vào array POSTS
   theo đúng pattern của 3 bài đã có. Slug phải URL-friendly (lowercase, dash).
5. Date set theo hôm nay (ISO 8601).
6. Verify với `npm run build` rồi commit + push.

Sau khi push, sitemap sẽ tự update (đã wire trong app/sitemap.ts).
```

---

## 3. Đổi text / copy trên website

```
Tôi muốn đổi text trên website digi43.net.

Vị trí: [VD: "Hero headline", "Tagline footer", "Mục dịch vụ License Mgmt step 02"]
Text hiện tại: "[copy exact text hiện đang hiển thị]"
Text mới (VI): "[text tiếng Việt mới]"
Text mới (EN): "[text tiếng Anh mới — KHÔNG dịch máy, viết native]"

Yêu cầu:
1. Tìm key tương ứng trong app/[lang]/dictionaries/vi.json và en.json.
2. Sửa cả 2 file. Nếu chỉ đổi 1 ngôn ngữ thì giải thích vì sao,
   nhưng MẶC ĐỊNH sửa cả 2 để giữ parity.
3. Verify build pass (`npm run build`).
4. Commit với message rõ ràng (theo conventional commit style).
5. Push lên main → Vercel tự deploy.

Báo lại đường dẫn URL cụ thể tôi nên check sau khi deploy xong.
```

---

## 4. Sửa bug / fix lỗi tôi vừa thấy

```
Tôi gặp lỗi trên digi43.net.

Mô tả: [mô tả bug — VD: "Trên mobile, menu hamburger không đóng sau khi
        click vào 1 item"]
Trang gặp lỗi: [URL — VD: https://digi43.net/vi]
Screenshot (nếu có): [paste hoặc upload]
Trình duyệt / device: [VD: Chrome Mac, Safari iPhone 13, etc.]

Yêu cầu:
1. Đọc PROJECT-CONTEXT.md trước.
2. Reproduce bug bằng cách inspect code liên quan.
3. Trước khi sửa, GIẢI THÍCH cho tôi nguyên nhân ở mức non-tech
   (vì tôi không phải dev).
4. Đề xuất giải pháp gọn nhất, không refactor những phần không liên quan.
5. Sau khi tôi đồng ý → apply fix, verify build, commit, push.
```

---

## 5. Thêm section / feature mới

```
Tôi muốn thêm section / feature mới vào digi43.net.

Tên feature: [VD: "Pricing table cho Microsoft 365 plans"]
Mục tiêu kinh doanh: [VD: "Giảm số inquiry hỏi giá sơ bộ,
                       cho lead tự assess trước khi liên hệ"]
Vị trí trên site: [VD: "trang chủ, giữa Solutions và LicenseManagement",
                   hoặc "trang riêng /vi/pricing"]
Tham khảo (nếu có): [link đến site tham khảo, VD adobe.com/business/plans]

Yêu cầu:
1. Đọc PROJECT-CONTEXT.md trước.
2. Trước khi code, thảo luận với tôi về:
   - Cấu trúc / layout đề xuất
   - Bilingual content draft (VI + EN)
   - Có cần thêm route mới hay nhúng vào trang hiện tại
   - Impact đến nav / footer / sitemap
3. Sau khi tôi confirm → implement theo đúng conventions của codebase
   (Tailwind utility classes, dark theme, dictionary-driven).
4. Bilingual: thêm vào cả vi.json và en.json.
5. Update sitemap.ts nếu có route mới.
6. Verify build pass + commit + push.
```

---

## 6. Update DNS / domain

```
Tôi cần thay đổi DNS hoặc domain config cho digi43.net.

Yêu cầu cụ thể: [VD: "Add MX record cho Google Workspace mới mua",
                hoặc "Add subdomain blog.digi43.net trỏ về Vercel"]

Domain digi43.net dùng Cloudflare DNS (NS: ariella/ram.ns.cloudflare.com).
Zone ID: 018652caf273b5a1c9e22bddf812a2ba

Yêu cầu:
1. Đọc PROJECT-CONTEXT.md để hiểu current DNS state (mục §6 và §8).
2. LIỆT KÊ records hiện có liên quan trước khi đề xuất thay đổi.
3. Giải thích các trade-off (VD: thay đổi MX sẽ ảnh hưởng email routing
   thế nào).
4. Đề xuất command Cloudflare API cụ thể.

LƯU Ý quan trọng:
- KHÔNG xoá record "google-site-verification=..." (mất GSC ownership).
- KHÔNG đụng record SPF / DKIM / DMARC nếu không hiểu rõ.
- Nếu cần API token để apply, tôi sẽ cung cấp riêng (đừng request trong code).

Sau khi tôi confirm các record cần thay → tôi tự apply qua Cloudflare
dashboard, HOẶC cung cấp API token để bạn apply qua curl.
```

---

## 7. Pre-review checklist (sắp apply Adobe Partner / Microsoft Partner)

```
Tôi sắp gửi hồ sơ đăng ký làm đối tác / distributor (Adobe VIP Marketplace,
Microsoft Partner Network, hoặc tương tự).

Yêu cầu:
1. Đọc PROJECT-CONTEXT.md.
2. Audit toàn bộ website digi43.net từ góc nhìn của reviewer:
   - Có self-claim sai sự thật không? (VD "Authorized Partner" mà chưa có)
   - Có dùng trademark vendor mà không có disclaimer không?
   - Có grey-market language không? (kích hoạt vĩnh viễn, account share,
     key crack, premium account, etc.)
   - Có thông tin pháp lý đầy đủ? (MST, địa chỉ, hotline, email business)
   - Có Terms / Privacy / About đầy đủ?
   - SPF / DKIM / DMARC đã setup chưa?
   - Có blog / content thể hiện chuyên môn thật không?
   - Có HTTPS, custom domain (không phải .vercel.app), poster image đẹp?
3. Báo cáo theo format:
   ✅ Pass — đã ổn
   🟡 Recommend — nên cải thiện, không blocking
   🔴 Block — bắt buộc fix trước khi submit
4. KHÔNG tự sửa, chỉ report. Tôi sẽ quyết định sửa cái nào.
```

---

## 8. Performance / SEO optimization

```
Tôi muốn audit performance và SEO của digi43.net.

Yêu cầu:
1. Đọc PROJECT-CONTEXT.md trước.
2. Chạy / phân tích:
   - PageSpeed Insights (https://pagespeed.web.dev/) cho https://digi43.net/vi
     và https://digi43.net/en
   - Lighthouse score (Performance, Accessibility, Best Practices, SEO)
   - Bundle size analysis (`npm run build` xem chunk sizes)
3. Báo cáo top 3-5 vấn đề có impact lớn nhất, mỗi vấn đề kèm:
   - Mô tả non-tech
   - Lý do nó quan trọng
   - Effort fix (S/M/L)
   - Expected impact
4. KHÔNG sửa, chỉ recommend. Tôi sẽ chọn cái nào fix.
```

---

## 9. Tips chung

- **Luôn yêu cầu agent đọc PROJECT-CONTEXT.md trước.** Đó là canonical source of truth.
- **Yêu cầu giải thích trước khi sửa** — đặc biệt nếu bạn không phải dev.
- **Verify build pass** trước khi push (`npm run build`).
- **Mỗi commit là 1 thay đổi rõ ràng** — tránh commit "fix lung tung".
- **Mặc định bilingual** — mọi text thay đổi đều cần update cả 2 dictionary.
- **Sensitive credentials** (API token, password) — KHÔNG paste vào prompt
  trừ khi agent cần dùng ngay; sau khi xong nên rotate.

---

## 10. Khi cần help liên quan ngoài codebase

| Vấn đề | Liên hệ |
|---|---|
| Cloudflare DNS / SSL | Cloudflare support hoặc dashboard |
| Vercel deploy issues | Vercel dashboard logs |
| Email không nhận được lead form | Check Vercel env var `NEXT_PUBLIC_WEB3FORMS_KEY` |
| Email business `sales@digi43.net` | Cloudflare Email Routing dashboard |
| Domain registration / renewal | Domain registrar trực tiếp |
| Google Search Console | https://search.google.com/search-console (login `digi43adobe@gmail.com`) |
