Dự án Website TimTroNhanh

Đây là một dự án website tĩnh (static website) mô phỏng một nền tảng tìm kiếm và đăng tin cho thuê phòng trọ. Trang web cho phép người dùng tìm kiếm, lọc kết quả, xem chi tiết phòng trọ, và đăng tin cho thuê mới.

Sản phẩm này được thực hiện trong khuôn khổ Bài tập lớn của sinh viên Trường Đại học Giao thông Vận tải.

Hình ảnh Demo


Trang Chủ

Trang Danh Sách (Lọc)





Trang Chi Tiết

Trang Đăng Tin





Chức năng chính

Dự án có 2 luồng nghiệp vụ chính cho 2 đối tượng người dùng:

1. Dành cho Người Tìm Trọ

Tìm kiếm (Trang chủ):

Tìm kiếm theo Tỉnh/Thành phố.

Tìm kiếm theo Quận/Huyện (danh sách được cập nhật động dựa trên Tỉnh/Thành phố đã chọn - logic index.js).

Tìm kiếm theo Mức giá.

Khi gửi, form sẽ chuyển hướng đến trang danh sách kèm theo tham số trên URL (ví dụ: listings.html?city=Hà Nội).

Lọc & Sắp xếp (Trang danh sách):

Trang tự động đọc tham số city từ URL để hiển thị kết quả ban đầu (listings.js).

Lọc kết quả động (client-side) theo Mức giá.

Sắp xếp kết quả động (client-side) theo "Giá tăng dần" hoặc "Giá giảm dần".

Tất cả các thao tác lọc/sắp xếp đều được xử lý ngay lập tức mà không cần tải lại trang.

Xem chi tiết (Trang chi tiết):

Hiển thị thông tin chi tiết, tiện nghi, và thông tin liên hệ của phòng trọ.

Bao gồm một thư viện ảnh nhỏ (cho phép click vào ảnh thumbnail để xem ảnh lớn - logic details.js).

2. Dành cho Người Cho Thuê

Đăng tin (Trang đăng tin):

Cung cấp một biểu mẫu (form) chi tiết được chia làm 4 phần: Thông tin cơ bản, Địa điểm & Giá, Hình ảnh, và Thông tin liên hệ.

Form động: Ô chọn Quận/Huyện tự động cập nhật dựa trên Tỉnh/Thành phố (post.js).

Xác thực dữ liệu (Validation): Sử dụng thuộc tính required của HTML5 và logic JavaScript (ví dụ: giá phải > 500.000đ) để đảm bảo dữ liệu đầu vào.

Công nghệ sử dụng

Dự án này được xây dựng hoàn toàn bằng các công nghệ front-end cơ bản (Vanilla):

HTML5: Sử dụng cho cấu trúc ngữ nghĩa (semantic structure) của các trang web.

CSS3: Tự viết 100% (trong css/style.css) theo phương pháp utility-class (mô phỏng Tailwind CSS) để tạo giao diện hiện đại và đồng nhất.

JavaScript (ES6+): Sử dụng JavaScript thuần (Vanilla JS) để xử lý toàn bộ logic động của website. Không sử dụng bất kỳ thư viện hay framework nào (như JQuery, React, Vue).

Cấu trúc thư mục

Dự án được tổ chức theo cấu trúc thư mục rõ ràng, tách biệt các tài nguyên:

/TimTroNhanh
|
|-- index.html           (Trang chủ)
|-- listings.html        (Trang danh sách)
|-- post.html            (Trang đăng tin)
|-- details-1.html
|-- ... (các file details khác)
|
|-- css/
|   |-- style.css        (File CSS duy nhất)
|
|-- js/
|   |-- index.js         (Logic cho trang chủ)
|   |-- listings.js      (Logic cho trang danh sách)
|   |-- post.js          (Logic cho trang đăng tin)
|   |-- details.js       (Logic cho trang chi tiết)
|
|-- images/
    |-- (Chứa tất cả ảnh demo và ảnh của dự án)


Thành viên nhóm

Nguyễn Bình Minh (Nhóm trưởng)

Nguyễn Xuân Long (Thành viên)
