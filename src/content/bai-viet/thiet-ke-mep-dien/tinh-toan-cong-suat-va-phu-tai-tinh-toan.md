---
tieu_de: 'BÀI 2: TÍNH TOÁN CÔNG SUẤT VÀ PHỤ TẢI TÍNH TOÁN'
slug: tinh-toan-cong-suat-va-phu-tai-tinh-toan
mo_ta: Hướng dẫn tính toán công suất và phụ tải tính toán hệ thống điện, giúp kỹ sư MEP xác định phụ tải chính xác, lựa chọn thiết bị và dây dẫn phù hợp.
danh_muc: thiet-ke-mep/dien
the: []
ngay_dang: 2026-08-30
ngay_cap_nhat: 2026-08-30
anh_bia: ''
tac_gia: Trần Đại Hiệp
noi_bat: false
tai_lieu: []
---

Công suất tính toán cho nhà ở và công trình công cộng được xác định theo số lượng và công suất của thiết bị điện dự kiến lắp đặt trong công trình, áp dụng hệ số sử dụng lớn nhất K<sub>u</sub>, hệ số đồng thời K<sub>s</sub> và hệ số yêu cầu K<sub>yc</sub>.

1. Công suất của phụ tải chiếu sáng

Công suất của phụ tải chiếu sáng được tính toán theo số lượng và công suất của các bộ đèn chiếu sáng trong công trình theo công thức sau:

![Công suất](pasted-image-1788054804318.png)

Trong đó:

K<sub>yc</sub> - Hệ số yêu cầu đối với phụ tải chiếu sáng trong công trình, áp dụng theo bảng 1

P<sub>di</sub> - Công suất điện định mức của bộ đèn thứ i.

Bảng 1 - hệ số yêu cầu cho phụ tải chiếu sáng, xem bảng 220.42 tiêu chuẩn NEC 2008

![Bảng 1](pasted-image-1788055122897.png)

Chú thích: Hệ số yêu cầu cho bảng này không áp dụng cho các phụ tải tính toán của các lộ ra hoặc phụ tải tiêu thụ ở các khu vực mà chiếu sáng toàn bộ được sử dụng trong một khoản thời gian( ví dụ như các phòng mổ, phòng khiêu vũ hoặc phòng ăn, các khu vực trong bệnh viện, nhà nghỉ, khách sạn).

Khi chưa có thiết kế chiếu sáng cho công trình thì phụ tải chiếu sáng được xác định dựa trên suất phụ tải chiếu sáng trên đơn vị diện tích sàn (m2). Suất phụ tải chiếu sáng phụ thuộc vào kiểu chiếu sáng, loại đèn sử dụng, chỉ số địa điểm chiếu sáng và độ rọi yêu cầu. Suất phụ tải biểu kiến áp dụng cho các công việc khác nhau ứng với chiếu sáng bằng đèn huỳnh quang với máng đèn công nghiệp có bù hệ số công suất cosφ tới trị số 0,86 được trong bảng 2

Bảng 2 - Suất phụ tải biểu kiến chiếu sáng

![Bảng 2](pasted-image-1788055657616.png)

2. Công suất tính toán đối với các ổ cắm điện P<sub>oc</oc>

Ổ cắm dùng cho thiết bị điện cụ thể phải được tính toán theo công suất điện định mức của các thiết bị điện đó.

Khi không có số liệu cụ thể về thiết bị điện sử dụng ổ cắm hoặc ứng dụng cụ thể của ổ cắm thì công suất mạch ổ cắm được xác định như sau:

- Đối với nhà làm việc, trụ sở, văn phòng công suất phụ tải từ các ổ căm điện phải được tính toán với suất phụ tải không nhỏ hơn 25 VA/m2 sàn, xem điều 220.14 tiêu chuẩn NEC 2008.

Theo QCXDVN 01-2008 thì chỉ tiêu cấp điện ổ cắm được tính:

![QCXDVN 01-2008](pasted-image-1788056238876.png)

- Đối với nhà ở và công trình công cộng khác, công suất cho mỗi ổ cắm đơn không nhỏ hơn 180A hoặc đối với mỗi đơn vị ổ cắm trên một giá kẹp. Đối với thiết bị chứa ổ cắm cấu tạo từ 4 đơn vị ổ cắm trở lên thì công suất ổ cắm được tính toán không nhỏ hơn 90 VA trên mỗi đơn vị ổ cắm, xem điều 220.14 tiêu chuẩn NEC 2008.

3. Tính toán công suất

Đối với thiết bị bếp dùng điện khu bếp của khách sạn, nhà hàng, ... không phải bếp của căn hộ gia đình thì cho phép tính toán công suất của các thiết bị nấu nướng công nghiệp dùng điện, các thiết bị rửa chén đĩa, bộ đun nước và các thiết bị bếp khác theo bảng 3. Hệ số yêu cầu này được áp dụng tất cả các thiết bị có bộ điều khiển hoặc ngắt điện được dùng như thiết bị bếp. Hệ số nhu cầu này không được áp dụng cho các thiết bị làm nóng không gian, thông gió hoặc thiết bị điều hòa không khí. Tuy nhiên, phụ tải tính toán cho lộ dây không được nhỏ hơn tổng hai phụ tải bếp lớn nhất.

Bảng 3 - Hệ số yêu cầu đối với các thiết bị bếp

![Bảng 3](pasted-image-1788058947963.png)

**Công suất tính toán cho nhà ở riêng biệt, căn hộ trong nhà ở tập thể hoặc nhà chung cư được xác định theo công thức**

![](20260830-100402.png)

Trong đó:

K<sub>s</sub> - Hệ số đồng thời của phụ tải nhà ở riêng biệt, căn hộ; K<sub>s</sub> = 0,5-0,6

P<sub>yci</sub> - Công suất yêu cầu kW của thiết bị điện tử thứ i

**Công suất tính toán cho nhà ở tập thể, nhà chung cư, nhà trọ được xác định theo công thức:**

![Công suất](pasted-image-1788059809408.png)

Trong đó:

P<sub>ĐL</sub> - Công suất tính toán kW của phụ tải động lực trong công trình

P<sub>CH</sub> - Công suất tính toán kW của phụ tải khối căn hộ trong công trình

Công suất tính toán của phụ tải khối căn hộ được xác định theo công thức:

![Cong suat](pasted-image-1788060079887.png)

Trong đó:

P<sub>chi</sub> - Công suất tính toán kW của căn hộ thứ i

n - Số căn hộ trong tòa nhà

K<sub>s</sub> - Hệ số đồng thời của phụ tải khối căn hộ, được xác định theo bảng 4.

Bảng 4 - Hệ số đồng thời trong nhà tập thể, chung cư

![Bảng 4](20260830-102916.png)

**Công suất tính toán của phụ tải động lực trong công trình được tính như sau:**

![Công suất](20260830-103026.png)

Trong đó: 

P<sub>ĐL</sub> - Công suất tính toán kW của phụ tải động lực;

P<sub>TM</sub> - Công suất tính toán kW của nhóm phụ tải thang máy trong công trình;

P<sub>BT</sub> - Công suất tính toán kW của nhóm phụ tải bơm nước, thông gió trong công trình;

P<sub>ĐH</sub> - Công suất tính toán kW của phụ tải điều hòa trung tâm hoặc bán trung tâm trong công trình.

**Công suất tính toán của nhóm phụ tải bơm nước, thông gió (động cơ bơm nước, quạt thông gió và các thiết bị khác) được xác định theo biểu thức sau:**

![Công suất](20260830-103604.png)

Trong đó:

K<sub>yc</sub> - Hệ số sử dụng lớn nhất của nhóm phụ tải bơm nước, thông gió theo bảng 5;

n - Số động cơ;

P<sub>bti</sub> Công suất điện định mức kW của động cơ bơm nước, quạt thông gió thứ i.

Bảng 5 - Hệ số yêu cầu K<sub>yc</sub> của nhóm phụ tải bơm nước, thông gió

![](20260830-104011.png)

Công suất tính toán của nhóm phụ tải thang máy được tính theo công thức:

![Công suất](20260830-104136.png)

Trong đó:

P<sub>TM</sub> - Công suất tính toán kW của nhóm phụ tải thang máy;

P<sub>ni</sub> - Công suất điện định mức kW của động cơ kéo thang máy thứ i;

P<sub>gi</sub> - Công suất kW tiêu thụ của các khí cụ điều khiển và các đèn điện trong thang máy thứ i, nếu không có số liệu cụ thể có thể lấy giá trị P<sub>gi</sub> = 0,1P<sub>ni</sub>;

P<sub>vi</sub> - Hệ số gián đoạn của động cơ theo lí lịch thang máy thứ i nếu không có số liệu cụ thể có thể lấy giá trị của P<sub>vi</sub> = 1;

K<sub>yc</sub> - Hệ số yêu cầu của nhóm phụ tải thang máy, với nhà ở xác định theo bảng 6.

Bảng 6 - Hệ số yêu cầu K<sub>yc</sub> của thang máy trong các công trình nhà ở

![](20260830-104939.png)

![](20260830-105001.png)

**Công suất tính toán kW của điều hòa trung tâm hoặc bán trung tâm**

Công suất tính toán của phụ tải điều hòa trung tâm hoặc bán trung tâm sẽ được tính toán quy đổi từ yêu cầu công suất trao đổi nhiệt của hệ thống điều hòa trung tâm hoặc bán trung tâm và các thiết bị tiêu thụ điện khác của hệ thống.

![](20260830-105350.png)

Trong đó:

P<sub>TĐN</sub> - Công suất trao đổi nhiệt của hệ thống điều hòa (Btu, Hp)

K<sub>qđ</sub> - hệ số quy đổi từ công suất trao đổi nhiệt sang công suất điện (B<sub>tu</sub> = 0,09W; Hp = 0,736kW)

η - Hiệu suất làm việc của hệ thống điều hòa

P<sub>yci</sub> - công suất yêu cầu của các thiết bị tiêu thụ điện khác của hệ thống điều hòa.
