---
tieu_de: 'BÀI 2: THUẬT NGỮ VÀ CÁC ĐỊNH NGHĨA CƠ BẢN TRONG HỆ THỐNG ĐIỆN'
slug: thuat-ngu-va-cac-dinh-nghia-co-ban-trong-he-thong-dien
mo_ta: Tìm hiểu công suất đặt, hệ số sử dụng Ku, hệ số đồng thời Ks, hệ số yêu cầu Kyc, nối đất và các yêu cầu về tổn thất điện áp trong hệ thống điện.
danh_muc: thiet-ke-mep/dien
the: []
ngay_dang: 2026-08-25
ngay_cap_nhat: 2026-08-25
anh_bia: ''
tac_gia: Trần Đại Hiệp
noi_bat: false
tai_lieu: []
---

1. Công suất đặt (kW)

Công suất đặt là tổng công suất điện định mức của các thiết bị tiêu thụ điện trong hệ thống điện.

2. Hệ số sử dụng lớn nhất Ku

Hệ số sử dụng lớn nhất Ku là tỉ số giữa công suất yêu cầu lớn nhất _Pyc_ với công suất điện định mức Pđm của mỗi thiết bị tiêu thụ điện. Hệ số này cần được áp dụng cho từng tải riêng việt, nhất là cho các động cơ vì chúng ít khi chạy đầy tải. 

$$K_u = \frac{P_{yc}}{P_{dm}}$$

3. Hệ số đồng thời Ks

Hệ số đồng thời Ks được dùng để tính toán công suất của một nhóm thiết bị điện. Hệ số đồng thời Ks của nhóm thiết bị điện là tỉ số giữa công suất tính toán $P_{tt\Sigma}$ của nhóm thiết bị điện với tổng công suất yêu cầu của từng thiết bị điện với tổng công suất yêu cầu của từng thiết bị điện $\sum P_{yci}$ trong nhóm đó 

$$K_s = \frac{P_{tt\Sigma}}{\sum P_{yci}}$$

4. Hệ số yêu cầu Kyc

Hệ số yêu cầu của nhóm thiết bị điện là tỉ số giữa công suất tính toán của nhóm thiết bị điện với công suất đặt của nhóm thiết bị điện đó.

$$K_{yc} = \frac{P_{tt\Sigma}}{\sum P_{dmi}}$$

5. Nối đất thiết bị điện

Vỏ của thiết bị điện được nối dây bảo vệ "PE" trong mạng điện hạ áp 3 pha 5 dây hoặc được nối trực tiếp với trang bị nối đất

6. Nối trung tính thiết bị điện

Vỏ của thiết bị điện được nối với dây trung tính "N" trong mạng điện hạ áp 3 pha 4 dây.

7. Tổn thất điện áp

Tổn thất điện áp ở cực của các bóng đèn và của các thiết bị động lực đặt xa nhất so với điện áp định mức không vượt quá các trị số sau:

- Đối với chiếu sáng làm việc: 5%
- Đối với chiếu sáng sơ tán và chiếu sáng sự cố: 5%
- Đối với các thiết bị có điện áp từ 12V đến 24V: 10%
- Đối với động cơ điện: Làm việc dài hạn ở chế độ ổn định 5%, làm việc dài hạn ở chế độ sự cố 10%, khi khởi động động cơ: 15%

Chú thích: các lưới điện, kể cả điện lưới điện điều khiển từ xa và điều khiển tự động cần phải được kiểm tra với chế độ khởi động các động cơ điện. Các lưới điện chiếu sáng, khi ở chế độ sự cố, cho phép giảm điện áp tới 12% trị số điện áp định mức.
