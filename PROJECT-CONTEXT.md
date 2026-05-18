# Digi43.net — Project Context

> **Mục đích của file này** — Tóm tắt toàn bộ trạng thái dự án để:
> 1. Founder / non-tech team có thể tra cứu nhanh
> 2. Bất kỳ Claude session mới nào có thể pick up công việc ngay
> 3. Developer mới onboard hiểu được kiến trúc trong 10 phút

**Cập nhật lần cuối**: 18 / 05 / 2026

---

## 1. Tóm tắt cho founder (tiếng Việt)

**Digi43.net** là website chính thức của CÔNG TY TNHH DIGI43 MEDIA — cung cấp giải pháp phần mềm bản quyền cho doanh nghiệp (Adobe, Microsoft, Autodesk, AWS, etc.).

Website được build và vận hành **tự động hoàn toàn**:
- Code lưu ở GitHub → push code lên thì Vercel tự deploy
- Domain `digi43.net` được trỏ qua Cloudflare DNS, cấp SSL miễn phí
- Form contact submit thẳng email về `sales@digi43.net`
- Bài blog mới thêm vào file `posts.ts` thì tự xuất hiện ngoài site

**Bạn không cần đụng vào code** trong các trường hợp thông thường. Chỉ cần biết:
- Đổi text → chỉnh trong file `app/[lang]/dictionaries/{vi,en}.json`
- Thêm bài blog → thêm 1 object vào `app/[lang]/blog/posts.ts`
- Đổi DNS → vào Cloudflare dashboard
- Đổi env var → vào Vercel dashboard

Phần kỹ thuật sâu hơn, gọi Claude hoặc dev.

---

## 2. Accounts & ownership

| Service | Account / ID | Sở hữu |
|---|---|---|
| GitHub | `digi43adobe-boop` | Digi43 Media |
| Vercel | `digi43adobe-4596` (team: `digi43s-projects`) | Digi43 Media |
| Cloudflare | account chứa zone `digi43.net` | Digi43 Media |
| Google Search Console | `digi43adobe@gmail.com` | Digi43 Media |
| Domain registrar | đã đăng ký, hiện đang trỏ NS về Cloudflare | Digi43 Media |
| Email (Cloudflare Email Routing) | forwarding `sales@digi43.net` → mailbox nội bộ | Digi43 Media |
| Web3Forms (form-handler) | access key dạng `025f2474-…` (set sẵn trên Vercel env) | Digi43 Media |

**Lưu ý quan trọng**: nếu thay đổi nhân sự, transfer ownership của các account trên TRƯỚC khi người cũ rời đi. Đặc biệt là GitHub repo + Vercel + GSC.

---

## 3. URLs

| URL | Mục đích |
|---|---|
| https://digi43.net | Production (auto-detect language → /vi hoặc /en) |
| https://digi43.net/vi | Tiếng Việt landing page |
| https://digi43.net/en | English landing page |
| https://digi43.net/{vi,en}/about | About us |
| https://digi43.net/{vi,en}/blog | Insights / blog index |
| https://digi43.net/{vi,en}/blog/[slug] | Bài blog chi tiết |
| https://digi43.net/{vi,en}/terms | Terms of Service |
| https://digi43.net/{vi,en}/privacy | Privacy Policy |
| https://digi43.net/sitemap.xml | Sitemap (Google đã submit) |
| https://digi43.net/robots.txt | Robots directives |
| https://digi43-net.vercel.app | Vercel default URL (fallback) |
| https://github.com/digi43adobe-boop/digi43.net | Repo |

---

## 4. Tech stack

- **Framework**: Next.js **16.2.6** (App Router, React **19**, Turbopack)
- **Styling**: Tailwind CSS **v4** với custom dark theme (GitHub "Midnight Command Center" palette)
- **Language**: TypeScript
- **Font**: Inter (latin + vietnamese subset, via `next/font/google`)
- **i18n**: file-based với `app/[lang]/` segment + dictionary JSON + `proxy.ts` để Accept-Language detect
- **Form backend**: Web3Forms (free tier, gửi mail thẳng về `sales@digi43.net`)
- **Hosting**: Vercel (auto-deploy từ GitHub main branch)
- **DNS**: Cloudflare
- **CDN**: Vercel Edge + Cloudflare proxy disabled (DNS only — để Vercel cấp SSL được)

> ⚠️ Đây là **Next.js 16** với các breaking changes — đặc biệt `middleware.ts` đã đổi thành `proxy.ts`, `params` là Promise (cần `await`), và "use client" modules không được export plain JS data (xem mục 7 dưới).

---

## 5. Repository structure

```
digi43.net/
├── app/
│   ├── [lang]/                          ← bilingual routes (/vi, /en)
│   │   ├── layout.tsx                   ← root layout với <html lang> và metadata
│   │   ├── page.tsx                     ← homepage (Hero + Solutions + LicenseMgmt + ...)
│   │   ├── opengraph-image.tsx          ← OG image dynamic per locale
│   │   ├── dictionaries.ts              ← getDictionary() loader + types
│   │   ├── dictionaries/
│   │   │   ├── vi.json                  ← Vietnamese copy
│   │   │   └── en.json                  ← English copy
│   │   ├── about/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx                 ← Blog index (list all posts)
│   │   │   ├── posts.ts                 ← BLOG POST DATA (edit here to add posts)
│   │   │   └── [slug]/page.tsx          ← Blog post detail
│   │   ├── terms/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── _legal/legal-page.tsx        ← shared layout for Terms/Privacy
│   ├── _components/                     ← React components, kept out of routing
│   │   ├── Navbar.tsx                   ← top nav (client component)
│   │   ├── Hero.tsx                     ← homepage hero with license dashboard mockup
│   │   ├── Solutions.tsx                ← 3 solution group cards
│   │   ├── LicenseManagement.tsx        ← 4-step deployment process + SLA
│   │   ├── WhyUs.tsx                    ← 6 differentiators
│   │   ├── Industries.tsx               ← sectors served + commitments
│   │   ├── FAQ.tsx                      ← B2B FAQ
│   │   ├── Contact.tsx                  ← form → Web3Forms
│   │   ├── Footer.tsx                   ← legal footer
│   │   ├── Partners.tsx                 ← logo strip
│   │   ├── Logo.tsx                     ← Digi43 brand mark (from Cloudinary)
│   │   ├── LangSwitcher.tsx             ← VI | EN pill toggle
│   │   ├── VideoBackground.tsx          ← ambient video wrapper (client)
│   │   └── video-bg-config.ts           ← TECH_BG constants (non-client, see §7)
│   ├── globals.css                      ← Tailwind theme tokens + components utilities
│   ├── sitemap.ts                       ← generates sitemap.xml (bilingual + blog)
│   ├── robots.ts                        ← robots.txt
│   ├── favicon.ico                      ← favicon (Digi43 D-mark)
│   ├── icon.png                         ← 32x32 favicon
│   └── apple-icon.png                   ← 180x180 Apple touch icon
├── proxy.ts                             ← Accept-Language detection + locale redirect
├── next.config.ts                       ← image remotePatterns (Cloudinary, simpleicons)
├── tsconfig.json
├── package.json
└── PROJECT-CONTEXT.md                   ← THIS FILE
```

---

## 6. How to do common tasks

### Đổi text trên website (không cần code)

Mở 1 trong 2 file dictionary:
- `app/[lang]/dictionaries/vi.json` (tiếng Việt)
- `app/[lang]/dictionaries/en.json` (tiếng Anh)

Tìm key tương ứng, sửa value, commit, push → tự deploy.

**Ví dụ**: muốn đổi headline Hero → tìm `hero.title` và `hero.titleAccent` trong vi.json.

### Đổi số điện thoại / email / địa chỉ

Sửa trong cả 2 file dictionary ở các section `nav.phone`, `contact.info.*`, `footer.*`, và đồng thời sửa `tel:` link trong:
- `app/_components/Navbar.tsx`
- `app/_components/Contact.tsx`
- `app/_components/Footer.tsx`

### Thêm bài blog mới

Mở `app/[lang]/blog/posts.ts` → thêm 1 object vào array `POSTS`:

```ts
{
  slug: "url-friendly-slug",       // dùng làm URL: /blog/url-friendly-slug
  date: "2026-06-15",              // ISO date
  readingMinutes: 6,
  author: "Digi43 Editorial",
  content: {
    vi: { title, excerpt, category, blocks: [...] },
    en: { title, excerpt, category, blocks: [...] },
  },
},
```

Block types: `p`, `h2`, `h3`, `ul`, `callout` (xem 3 bài hiện có để follow pattern).

Push → Vercel rebuild → bài tự xuất hiện trên `/blog`.

### Đổi DNS

Login Cloudflare dashboard → zone `digi43.net` → DNS tab.

Records hiện có:
- `A @ → 76.76.21.21` (Vercel apex)
- `A www → 76.76.21.21` (handled bởi Vercel redirect)
- `MX route1/2/3.mx.cloudflare.net` (Email Routing)
- `TXT digi43.net → v=spf1 include:_spf.mx.cloudflare.net ~all` (SPF)
- `TXT _dmarc → v=DMARC1; p=none; rua=...` (DMARC)
- `TXT cf2024-1._domainkey → v=DKIM1; ...` (DKIM cho Email Routing)
- `TXT digi43.net → google-site-verification=LRiIQsvMm_...` (GSC verification)
- `CNAME 2fa, otp → cname.vercel-dns.com` (cho các project khác)

⚠️ **Đừng xoá `google-site-verification` TXT** — sẽ mất GSC ownership.

### Đổi environment variable trên Vercel

Vercel dashboard → project `digi43-net` → Settings → Environment Variables.

Hiện đang có:
- `NEXT_PUBLIC_WEB3FORMS_KEY` = (Web3Forms access key, dùng cho contact form)

### Trigger redeploy mà không cần commit

Vercel dashboard → project → Deployments → bấm "Redeploy" trên deployment mới nhất.

Hoặc commit empty: `git commit --allow-empty -m "trigger redeploy" && git push`.

---

## 7. Known gotchas (cho dev sau này)

### `"use client"` modules không được export plain data

Trong Next.js 16, nếu 1 file có directive `"use client"`, mọi export từ file đó được treat như "client reference" khi import vào server component. Plain JS objects/constants sẽ về `undefined` ở SSR.

**Pattern đúng**: tách constants/utilities sang file riêng (không có `"use client"`).

Ví dụ thực tế đã gặp: `TECH_BG` ban đầu ở cùng file với `VideoBackground` (client) → khi Hero (server) import và pass làm prop → undefined. Đã tách sang `_components/video-bg-config.ts`.

### `middleware.ts` đã đổi tên thành `proxy.ts`

Next.js 16 deprecated `middleware` convention. File ở root project, export function tên `proxy` (không phải `middleware`).

### `params` là Promise

```tsx
// Đúng:
export default async function Page(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;
}

// Sai (Next.js 15 cũ):
// const { lang } = props.params;
```

### Pexels CDN trả 403 nếu fetch trực tiếp từ server

Vercel SSR có thể bị block khi fetch pexels.com (Pexels CORS rules). Nên dùng video Pexels URL như client-side asset (đặt trong `<video src>`) — browser fetch trực tiếp, không qua Vercel.

### Vercel cache có thể HIT cũ ~5-10 phút sau deploy

Nếu test deploy mới mà thấy version cũ → hoặc đợi, hoặc Vercel dashboard → Deployments → "Purge cache".

---

## 8. Email auth state (SPF / DKIM / DMARC)

| Layer | Status | Notes |
|---|---|---|
| **SPF** | ✅ Active | `v=spf1 include:_spf.mx.cloudflare.net ~all` (cho Cloudflare Email Routing) |
| **DKIM** | ✅ Active | Cloudflare auto-managed (`cf2024-1._domainkey.digi43.net`) |
| **DMARC** | ✅ Monitoring | `p=none; rua/ruf=mailto:sales@digi43.net; adkim=r; aspf=r` |

**Roadmap email auth**:
1. Sau 1-2 tháng theo dõi DMARC report → upgrade `p=none` → `p=quarantine`
2. Sau 3-4 tháng → upgrade tiếp lên `p=reject` (chặn cứng email giả mạo)
3. Khi mua Google Workspace cho `@digi43.net` → update SPF include thêm `_spf.google.com`, add DKIM selector mới của Google, update DMARC `pct=100`

---

## 9. SEO state

| Item | Status |
|---|---|
| Sitemap | https://digi43.net/sitemap.xml (16 URLs, bilingual với hreflang alternates) |
| Robots | https://digi43.net/robots.txt |
| Google Search Console | ✅ Verified (Domain property), sitemap submitted, 4 URL indexing requested |
| hreflang tags | ✅ trên mọi page (`vi-VN`, `en-US`, `x-default`) |
| og:image | ✅ dynamic per-locale qua `next/og` |
| og:locale + alternateLocale | ✅ |
| canonical URLs | ✅ |
| Bing Webmaster Tools | ❌ chưa setup (optional, gợi ý làm sau) |

---

## 10. Roadmap / pending items

### Nên làm trong 30-90 ngày

- [ ] Submit sitemap vào **Bing Webmaster Tools** (5 phút setup)
- [ ] Setup **LinkedIn Company Page** cho Digi43 và cross-link
- [ ] Viết thêm 3-5 bài blog (tăng SEO long-tail)
- [ ] Theo dõi DMARC report → khi sạch, upgrade lên `p=quarantine`
- [ ] Add **Google Analytics 4** ID nếu muốn track conversion chi tiết
- [ ] Real customer testimonials section (chờ có 2-3 case study)

### Khi business grow

- [ ] Mua **Google Workspace** cho email `@digi43.net` thực sự
- [ ] Trang `/partners` hoặc `/enterprise` riêng cho distributor inquiry
- [ ] Pricing calculator hoặc quote builder (giảm friction)
- [ ] Apply Adobe VIP Marketplace / Microsoft Solutions Partner Network
- [ ] **Đăng ký nhãn hiệu "Digi43"** với Cục Sở hữu trí tuệ VN

### Nice-to-have

- [ ] Dark/light mode toggle (hiện chỉ có dark)
- [ ] Search functionality cho blog
- [ ] RSS feed (cho blog subscribers + parser)
- [ ] Email newsletter capture
- [ ] Web push notifications cho bài blog mới

---

## 11. Sensitive credentials reference

**KHÔNG paste raw credentials vào file này.** Reference các nơi credentials đang lưu:

| Credential | Location |
|---|---|
| Web3Forms access key | Vercel env var `NEXT_PUBLIC_WEB3FORMS_KEY` |
| Cloudflare API token | User's personal note (đã từng dùng để add DNS records, nên rotate định kỳ) |
| Vercel API token | Vercel CLI auth (`~/Library/Application Support/com.vercel.cli/auth.json` trên Mac) |
| GitHub PAT | gh CLI keyring |
| Google account password | User's password manager |

**Best practice**: dùng password manager (1Password, Bitwarden) cho tất cả credentials trên.

---

## 12. Contact for help

- **Đối với code**: mở session Claude Code mới, dùng prompt:
  > "Tôi đang làm việc với repo digi43.net. Đọc file PROJECT-CONTEXT.md trong repo để hiểu context, rồi giúp tôi [task cụ thể]."
- **Đối với business / partner inquiries**: `sales@digi43.net`
- **Đối với DNS / email issues**: Cloudflare support hoặc reach out đến network admin

---

*File này nên được update mỗi khi có thay đổi lớn (thêm route mới, đổi stack, đổi env var, đổi domain registrar, etc.)*
