# HƯỚNG DẪN — WEB kysumep.com

## Thư mục nào để làm gì

| Thư mục / file | Dùng để làm gì | Anh có cần đụng vào không? |
|---|---|---|
| `src/content/bai-viet/` | **Bài viết** của anh (file .md) | Không — CMS tự ghi vào đây |
| `src/content/tai-lieu/` | **Thông tin tài liệu** tải về | Không — CMS tự ghi |
| `public/files/` | **File thật** để người ta tải (Excel, LISP...) | ✅ **Có** — tải file lên đây qua GitHub |
| `public/images/` | Ảnh trong bài | Không — CMS tự tải lên |
| `public/admin/config.yml` | Cấu hình trang quản trị | Chỉ khi muốn thêm danh mục/thẻ mới |
| `src/consts.ts` | Tên web, danh mục, email | Chỉ khi đổi thông tin web |
| `src/pages/gioi-thieu.astro` | Trang Giới thiệu | ✅ **Có** — điền thông tin về anh |
| `src/styles/global.css` | Màu sắc, giao diện | Chỉ khi muốn đổi màu |
| `src/layouts/`, `src/components/`, `src/pages/` | Bộ máy của web | ❌ Không — nhờ Claude sửa |

## Quy trình đăng bài hàng ngày

1. Vào `kysumep.com/admin/` (hoặc `ten-du-an.pages.dev/admin/`)
2. **Bài viết** → **Viết bài mới**
3. Điền tiêu đề, địa chỉ web, mô tả, danh mục, thẻ → gõ nội dung
4. Bấm **Đăng**
5. Chờ ~1 phút, web tự cập nhật

## Đăng một file tải về

1. Lên GitHub → thư mục `public/files/` → **Add file** → **Upload files** → kéo thả (tối đa 25MB/file)
2. Vào `/admin/` → **Tài liệu tải về** → **Thêm mới**
3. Điền thông tin, ô "Đường dẫn file" ghi: `/files/ten-file.xlsx`
4. Vào bài viết tương ứng → ô "File tải về đi kèm" → nhập **mã tài liệu** (chính là ô slug đã đặt)

## Viết công thức toán

Gõ trong ô nội dung:

```
$$P_{tt} = K_{yc} \times \sum P_{d}$$
```

## Chèn code LISP

Bọc trong ba dấu backtick kèm chữ `lisp` — web tự tô màu và thêm nút "Sao chép".

## Cấu hình build trên Cloudflare Pages

| Mục | Giá trị |
|---|---|
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |

## Sau khi mua tên miền

1. Cloudflare Pages → project → **Custom domains** → thêm `kysumep.com`
2. Sửa `src/consts.ts`: `tenMien` đã đặt sẵn là `https://kysumep.com` — không cần đổi
3. Tạo email `lienhe@kysumep.com` rồi cập nhật trong `src/consts.ts`

## Việc cần làm ngay sau khi web chạy

- [ ] Điền trang **Giới thiệu** (`src/pages/gioi-thieu.astro`) — phần "Về tôi" và "Vì sao mình làm website này"
- [ ] Xóa 3 bài mẫu, viết bài thật
- [ ] Khai báo với Google Search Console, gửi `sitemap-index.xml`
