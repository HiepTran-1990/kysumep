---
tieu_de: 'BÀI 3: TÍNH TOÁN PHỤ TẢI ĐIỆN CÔNG SUẤT DÒNG ĐIỆN VÀ LỰA CHỌN THIẾT BỊ'
slug: tinh-toan-phu-tai-dien-cong-suat-dong-dien-va-lua-chon-thiet-bi
mo_ta: Hướng dẫn tính toán phụ tải điện, công suất, dòng điện và lựa chọn thiết bị điện phù hợp, đảm bảo an toàn, hiệu quả và đáp ứng yêu cầu thiết kế.
danh_muc: thiet-ke-mep/dien
the: []
ngay_dang: 2026-08-31
ngay_cap_nhat: 2026-08-31
anh_bia: ''
tac_gia: Trần Đại Hiệp
noi_bat: false
tai_lieu: []
---

Công suất tính toán tác dụng:

![cong-suat](pasted-image-1788178469510.png)

Công suất biểu kiến:

![Cong suat](pasted-image-1788178518535.png)

Dòng điện tính toán:

- Đối với mạng điện 1 pha:  ![Dong dien](pasted-image-1788178574606.png)
- Đối với mạng điện 3 pha: ![Dong dien](pasted-image-1788178618228.png)

Trong đó:

- P<sub>đ</sub> : Phụ tải đặt tác dụng (kW)
- P<sub>tt</sub> : Phụ tải tính toán tác dụng (kW)
- S<sub>tt</sub> : Phụ tải tính toán biểu kiến (kVA)
- I<sub>tt</sub> : Dòng điện tính toán (A)
- K<sub>đt</sub>: Hệ số đồng thời
- Cos<sub>φtb</sub> : Hệ số công suất trung bình 

Dây dẫn được chọn theo điều kiện phát nóng:

![Day dan](pasted-image-1788178970796.png)

Trong đó: 

- U<sub>đm</sub>, I<sub>tt</sub> : là điện áp định mức, dòng điện tính toán của tải.
- U<sub>cp</sub>, I<sub>cp</sub>: là điện áp, dòng điện cho phép của dây dẫn (do nhà sản xuất quy định)
- k<sub>1</sub> : là hệ số phụ thuộc nhiệt độ môi trường.
- k<sub>2</sub> : là hệ số phụ thuộc số cáp đặt song song.

Dây dẫn được kiểm tra theo điều kiện tổn thất điện áp cho phép:

![Dây dẫn](pasted-image-1788179269524.png)

Dòng ngắn mạch điện 3 pha:

![Dòng ngắn mạch 3 pha](20260831-192846.png)

Trong đó:

- U<sub>tb</sub> : Điện áp trung bình mạch điện
- RΣ, XΣ: Tổng điện trở và điện kháng đến điểm ngắn mạch
- IN3 : Dòng điện ngắn mạch 3 pha

Dòng điện ngắn mạch 1 pha

![](20260831-193443.png)

Trong đó:

- I<sub>N1</sub> : Dòng điện ngắn mạch 1 pha
- U<sub>tb</sub> : Điện áp trung bình mạch điện
- R<sub>1Σ</sub> : Điện trở, điện kháng thứ tự thuận
- R<sub>0Σ</sub> : Điện trở, điện kháng thứ tự không

Công suất tính toán cho công trình được xác định theo công thức:

![](20260831-193847.png)

Trong đó:

- P<sub>CH</sub> - Công suất tính toán của phụ tải khối căn hộ
- P<sub>ĐL</sub> - Công suất tính toán phụ tải động lực
- P<sub>DV</sub> - Công suất tính toán phụ tải khối dịch vụ

Công suất tính toán phụ tải khối căn hộ du lịch:

![](20260831-194219.png)

Trong đó:

- P<sub>chi</sub> - Công suất tính toán của căn hộ thứ i
- n - Số căn hộ trong tòa nhà
- K<sub>s</sub> - Hệ số đồng thời của phụ tải khối căn hộ khách sạn

Công suất tính toán cho 01 căn hộ điển hình được tính toán theo công thức:

![](20260831-194512.png)

Trong đó:

- P<sub>yci</sub> - Công suất yêu cầu (kW) của thiết bị điện thứ i
- K<sub>s</sub> - Hệ số đồng thời của phụ tải căn hộ, K<sub>s</sub> = 0.8
