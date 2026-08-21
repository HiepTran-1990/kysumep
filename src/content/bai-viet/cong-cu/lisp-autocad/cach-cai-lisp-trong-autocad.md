---
tieu_de: "Cách cài và dùng file LISP trong AutoCAD"
mo_ta: "Hướng dẫn từng bước nạp file .lsp vào AutoCAD, cài tự động chạy mỗi lần mở, và xử lý các lỗi thường gặp khi LISP không chạy."
danh_muc: "cong-cu/lisp-autocad"
the: ["LISP", "AutoCAD", "tự động hóa"]
ngay_dang: 2026-08-20
noi_bat: true
---

> ⚠️ **Đây là bài mẫu.** Anh vào `/admin/` sửa lại bằng nội dung thật rồi xóa dòng này.

LISP là ngôn ngữ lập trình có sẵn trong AutoCAD, giúp gộp nhiều thao tác lặp đi lặp lại thành một lệnh duy nhất.

## Tóm tắt nhanh

- Cách 1: lệnh `APPLOAD` — nạp thủ công, tắt CAD là mất
- Cách 2: thư mục Startup Suite — tự nạp mỗi lần mở CAD
- Cách 3: file `acaddoc.lsp` — dành cho người dùng nâng cao

## Cách 1 — Nạp bằng lệnh APPLOAD

1. Gõ `APPLOAD` rồi Enter
2. Chọn file `.lsp` cần nạp → bấm **Load**
3. Gõ tên lệnh của LISP để chạy

## Cách 2 — Tự động nạp mỗi lần mở AutoCAD

1. Gõ `APPLOAD`
2. Bấm nút **Contents...** ở khung **Startup Suite**
3. **Add** → chọn file `.lsp` → **Close**

Từ nay mở AutoCAD là LISP tự nạp sẵn.

## Ví dụ một đoạn LISP đơn giản

```lisp
(defun c:HELLO ()
  (princ "\nChao anh em ky su MEP!")
  (princ)
)
```

Nạp xong gõ `HELLO` để chạy thử.

## Những lỗi thường gặp

| Lỗi | Nguyên nhân | Cách xử lý |
|---|---|---|
| Gõ lệnh báo `Unknown command` | LISP chưa được nạp | Nạp lại bằng `APPLOAD` |
| Nạp xong tắt CAD là mất | Chưa cho vào Startup Suite | Làm theo Cách 2 |
| Báo lỗi `; error: bad argument type` | Chọn sai đối tượng | Đọc kỹ hướng dẫn của từng lệnh |
| Đường dẫn có tiếng Việt có dấu | AutoCAD không đọc được | Để file trong thư mục tên không dấu |

## Câu hỏi thường gặp

**Hỏi:** LISP có chạy được trên AutoCAD LT không?
**Đáp:** Không. AutoCAD LT không hỗ trợ AutoLISP.
