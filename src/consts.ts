export const SITE = {
  ten: 'Kỹ Sư MEP',
  tenMien: 'https://kysumep.com',
  khauHieu: 'Kiến thức thiết kế & thi công MEP — chia sẻ miễn phí',
  moTa: 'Chia sẻ miễn phí kiến thức thiết kế và thi công hệ thống MEP: file tính toán, LISP AutoCAD, tool Revit, hồ sơ nghiệm thu. Dành cho kỹ sư mới vào nghề.',
  tacGia: 'Trần Đại Hiệp',
  email: 'trandaihiep1990@gmail.com',
  dienThoai: '0938 038 491',
  giayPhep: 'CC BY-NC 4.0',
  giayPhepLink: 'https://creativecommons.org/licenses/by-nc/4.0/deed.vi',
};

export type DanhMuc = {
  slug: string;
  ten: string;
  moTa: string;
  icon: string;
  con?: DanhMuc[];
};

export const DANH_MUC: DanhMuc[] = [
  {
    slug: 'vao-nghe',
    ten: 'Vào nghề MEP',
    icon: '🎓',
    moTa: 'Nghề MEP làm gì, học gì, lộ trình phát triển — dành cho sinh viên và kỹ sư mới ra trường.',
  },
  {
    slug: 'thiet-ke-mep',
    ten: 'Thiết kế MEP',
    icon: '📐',
    moTa: 'Kiến thức và phương pháp tính toán thiết kế các hệ thống cơ điện công trình.',
    con: [
      { slug: 'thiet-ke-mep/dien', ten: 'Hệ thống điện', icon: '⚡', moTa: 'Phụ tải, chọn dây, tủ điện, chống sét, nối đất.' },
      { slug: 'thiet-ke-mep/cap-thoat-nuoc', ten: 'Cấp thoát nước', icon: '💧', moTa: 'Cấp nước, thoát nước, bể chứa, bơm, nước nóng.' },
      { slug: 'thiet-ke-mep/pccc', ten: 'Phòng cháy chữa cháy', icon: '🔥', moTa: 'Sprinkler, họng nước, báo cháy, tăng áp hút khói.' },
      { slug: 'thiet-ke-mep/dieu-hoa-thong-gio', ten: 'Điều hòa & thông gió', icon: '❄️', moTa: 'Tải lạnh, ống gió, VRV/Chiller, thông gió.' },
    ],
  },
  {
    slug: 'file-tinh-toan',
    ten: 'File tính toán',
    icon: '📊',
    moTa: 'Bảng tính Excel thiết kế MEP, kèm hướng dẫn sử dụng chi tiết.',
  },
  {
    slug: 'cong-cu',
    ten: 'Công cụ tự động',
    icon: '🔧',
    moTa: 'Công cụ giúp xử lý công việc lặp đi lặp lại trong AutoCAD và Revit.',
    con: [
      { slug: 'cong-cu/lisp-autocad', ten: 'LISP AutoCAD', icon: '📝', moTa: 'Lệnh vẽ nhanh, thống kê, đánh số tự động.' },
      { slug: 'cong-cu/revit', ten: 'Tool & Dynamo Revit', icon: '🏢', moTa: 'Tự động hóa mô hình và xuất thống kê từ Revit.' },
    ],
  },
  {
    slug: 'ho-so-giay-to',
    ten: 'Hồ sơ & giấy tờ',
    icon: '📋',
    moTa: 'Biểu mẫu, quy trình nghiệm thu, hồ sơ hoàn công, thẩm duyệt PCCC.',
  },
   {
    slug: 'thi-cong-mep',
    ten: 'Thi công MEP',
    icon: '🏗️',
    moTa: 'Biện pháp thi công, kinh nghiệm hiện trường, xử lý sự cố.',
    con: [
      { slug: 'thi-cong-mep/dien', ten: 'Thi công điện', icon: '⚡', moTa: 'Biện pháp lắp đặt tủ điện, đi dây, thang máng cáp, kinh nghiệm nghiệm thu hệ điện.' },
      { slug: 'thi-cong-mep/cap-thoat-nuoc', ten: 'Thi công cấp thoát nước', icon: '💧', moTa: 'Biện pháp thi công ống cấp thoát nước, thử áp, kinh nghiệm xử lý sự cố hiện trường.' },
      { slug: 'thi-cong-mep/pccc', ten: 'Thi công PCCC', icon: '🔥', moTa: 'Biện pháp thi công hệ PCCC, thử nghiệm, nghiệm thu và thẩm duyệt tại hiện trường.' },
      { slug: 'thi-cong-mep/dieu-hoa-thong-gio', ten: 'Thi công điều hòa & thông gió', icon: '❄️', moTa: 'Biện pháp lắp đặt ống gió, ống đồng, kinh nghiệm chạy thử và cân chỉnh hệ ĐHKK.' },
    ],
  },
  {
    slug: 'tieu-chuan',
    ten: 'Tiêu chuẩn & quy chuẩn',
    icon: '📖',
    moTa: 'Diễn giải và hướng dẫn áp dụng TCVN, QCVN trong thiết kế MEP.',
  },
];

export const DANH_MUC_PHANG: DanhMuc[] = DANH_MUC.flatMap((d) => [d, ...(d.con ?? [])]);

export function timDanhMuc(slug: string) {
  return DANH_MUC_PHANG.find((d) => d.slug === slug);
}

export function ngayVN(d: Date) {
  return new Intl.DateTimeFormat('vi-VN', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(d);
}

/** Bỏ dấu tiếng Việt để tạo địa chỉ web sạch: "Phụ tải" -> "phu-tai" */
export function slugHoa(s: string) {
  return s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'd')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
