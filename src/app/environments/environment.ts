export const environment = {
  production: false,
  khachang: 'Unknown',
  khachhang_id: 101,
  pathdev: '',
  ApiEndpoint: {
    BASE: 'https://localhost:5001/api',

    // Authorization: Xác thực người dùng
    DangNhap: '/Authorization/Login',
    DangKy: '/Authorization/DK',
    DoiMatKhau: '/Authorization/DMK',
    TaiKhoan:'/Authorization/GetTK',
    BanTin:'/Authorization/FGetNews',
    ThemBanTin:'/Authorization/FAddNews',
    CapNhatBanTin:'/Authorization/FUpdateNews',
    XoaBanTin:'/Authorization/FDeleteNews',
    BanTinChiTiet:'/Authorization/FGetDetailNews',

    HT_2401_DOWNLOADTAILIEUPUBLIC: "api/UploadFile/GetHt2401DownloadTaiLieuPublic",
    // Portal: Tin tức

    Portal: '/Portal/portal',
    PortalBaiViet: '/Portal/PostPtBaiViet',
    PT_6001_GET_HINHANH: '/Portal/GetPt6001HinhAnh',
    PostPtBaiVietHinhAnh: '/Portal/PostPtBaiVietHinhAnh',

    // SystemManager: Quản lý hệ thống
    f2000QuanLyDangNhap: '/SystemManager/f2000QuanLyDangNhap',
    f2001QuanLyThaoTac: '/SystemManager/f2001QuanLyThaoTac',
    f2003QuanLyNguoiDung: '/SystemManager/f2003QuanLyNguoiDung',
    f2010QuanLyLayOutContainer: '/SystemManager/f2010QuanLyLayOutContainer',
    // QuanLyEmail: '/SystemManager/QuanLyEmail',
    QuanLyMenu: '/SystemManager/QLM',
    DonViHanhChinh: '/SystemManager/DonViHanhChinh',
    QuanLyDonVi: '/SystemManager/QLDV',
    QuanLyTaiKhoan: '/SystemManager/QLTK',
    QuanLyChuDe: '/SystemManager/QLCDE',
    PhanQuyen: '/SystemManager/PQ',
    QuanLyCauHinhEmail: '/SystemManager/QLCHE',
    GuiMail: '/SystemManager/GuiMailTest',
    TemplateMail: '/SystemManager/TemplateEmail',
    QuanLyKhachHang: '/SystemManager/QLKH',
    QuanLyThaoTac: '/SystemManager/LogActivity',
    QuanLyPortal: '/SystemManager/QLP',
    QuanLyLayout: '/SystemManager/QLL',
    QuanLyCongDan: '/SystemManager/QLCD',
    KiemTraQuyenTruyCap: '/SystemManager/KiemTraQuyenTruyCap',
    QlMenu: '/SystemManager/QLMENU',
    // ThongKe
    ThongKe: '/ThongKe/ThongKe',


    //Upload file
    UploadDocument: '/UploadFile/UploadFile',
    UploadMultipleFormFile: '/UploadFile/UploadMultipleFormFile',
    UploadDocumentVersion2: '/UploadFile/UploadFileVersion2',
    GetDocument: '/UploadFile/GetFile', // Lấy file không cần đăng nhập
    DownloadDocument: '/UploadFile/DownloadFile', // Lấy file cần đăng nhập
    DownloadTemplate: '/UploadFile/DownloadTemplate', //lấy file mẫu
    UploadTemplate_PhuongTienDo: '/UploadFile/UploadTemplatePhuongngTienDo', //up file mẫu phương tiện đo
    UploadTemplate_DichVu: '/UploadFile/UploadTemplateDichVu', //up file mẫu Dịch vụ

    // FormDong: Form động
    FormDong: '/FormDong/FormDong',
    FormDongJson: '/FormDong/FormDongJson',
    FORM_DONG: '/FormDong/FormDong',


    //PGAPI: PostgreSQL Api
    AuthorizationGet: '/Authorization/AuthorizationGet',

    // Diễn đàn
    DienDan_LayDuLieu: '/DienDan/LayDuLieu',
    DienDan_ReplyUp: '/DienDan/ReplyUp',
    DienDan_LikeUp: '/DienDan/LikeUp',

  },
  envi_key: {
    accounts: 'FCAC',
    token: '_cloud',
    khachhang: '_cloudkhachhang',
    portal: '_cloudportal',
    url: '_cloudurl',
    config: '_cloudConfig',
  },
  THAOTACFORMDONG: {
    THEM: 1,
    SUA: 2,
    XOA: 3
  },

  DATE_FORMATS: {
    parse: {
      dateInput: 'DD/MM/YYYY'
    },
    display: {
      dateInput: 'DD/MM/YYYY',
      monthYearLabel: 'YYYY',
      dateA11yLabel: 'LL',
      monthYearA11yLabel: 'YYYY'
    }
  },
};
