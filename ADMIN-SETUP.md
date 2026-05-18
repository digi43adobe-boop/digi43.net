# Dashboard Tin tức — hướng dẫn cài đặt 1 lần

Sau khi pull code này lên Vercel, làm theo các bước dưới:

## 1. Provision Postgres + Blob trên Vercel

1. Vào Vercel dashboard → project `digi43-net` → tab **Storage**.
2. Bấm **Create Database** → chọn **Postgres** (Neon). Vercel sẽ tự gắn các env var `POSTGRES_URL` vào project.
3. Quay lại tab Storage, bấm **Create** → chọn **Blob**. Vercel tự gắn `BLOB_READ_WRITE_TOKEN`.

## 2. Thêm 2 env var thủ công

Vào Settings → Environment Variables, thêm:

| Tên             | Giá trị                                            |
| --------------- | -------------------------------------------------- |
| `ADMIN_PASSWORD`| mật khẩu mạnh bạn tự chọn (ít nhất 16 ký tự)       |
| `AUTH_SECRET`   | chuỗi ngẫu nhiên 32+ ký tự (xem cách sinh bên dưới)|

Sinh `AUTH_SECRET` nhanh trên máy:

```bash
openssl rand -base64 32
```

Copy kết quả, paste vào ô giá trị. Bật cả 3 environment (Production, Preview, Development) cho cả 2 biến.

## 3. Deploy

Vercel sẽ tự deploy lại sau khi đổi env var. Đợi build xong.

## 4. Khởi tạo schema + seed 3 bài viết cũ (chạy 1 lần)

Mở Terminal trên máy bạn, chạy:

```bash
curl -X POST https://digi43.net/api/admin/init \
  -H "x-admin-password: MAT_KHAU_BAN_VUA_DAT"
```

Kết quả mong đợi:

```json
{ "ok": true, "inserted": 3 }
```

Nếu bạn đã chạy 1 lần rồi (đã seed), kết quả sẽ là `"inserted": 0` — đó là bình thường.

## 5. Đăng nhập

Mở `https://digi43.net/admin` → nhập `ADMIN_PASSWORD` → vào dashboard.

Từ đây bạn có thể:
- **+ Bài viết mới**: tạo bài mới (có thumbnail, song ngữ VI/EN, đăng/lưu nháp)
- **Sửa**: chỉnh bài đã có
- **Xoá**: xoá bài
- **Xem**: mở bài trên trang công khai

## Cú pháp viết nội dung trong khung "Nội dung"

Mỗi dòng = 1 đoạn văn bản thường. Để tạo định dạng đặc biệt, bắt đầu dòng bằng:

- `## ` → tiêu đề lớn (H2)
- `### ` → tiêu đề nhỏ (H3)
- `- ` hoặc `* ` → mục danh sách (gom các dòng liền kề thành 1 list)
- `> ` → khối highlight nổi bật (callout)

Dòng trống = ngắt block. Soạn ở tab "Tiếng Việt" và "English" tách biệt.

## Troubleshooting

- **"Mật khẩu không đúng"** → kiểm tra `ADMIN_PASSWORD` trên Vercel, deploy lại nếu vừa đổi.
- **Lỗi khi upload ảnh** → kiểm tra Storage → Blob đã được tạo và `BLOB_READ_WRITE_TOKEN` đã có trong env vars.
- **Bài viết không hiện trên trang công khai** → kiểm tra checkbox "Hiển thị công khai" ở cuối form. Có thể đang ở trạng thái nháp.
- **Cần đổi mật khẩu admin** → đổi `ADMIN_PASSWORD` trên Vercel rồi redeploy. Mọi session cũ sẽ tự hết hạn sau 7 ngày, hoặc đổi `AUTH_SECRET` để vô hiệu hoá ngay lập tức.
