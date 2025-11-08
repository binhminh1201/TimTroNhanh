// =======================================================
// details.js - Xử lý chức năng Thư viện ảnh (Image Gallery)
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lấy các phần tử cần thiết từ DOM
    const mainPhoto = document.getElementById('main-photo');
    const thumbnails = document.querySelectorAll('.thumbnail');

    // 2. Thêm hàm xử lý sự kiện cho từng ảnh nhỏ
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            
            // Lấy đường dẫn ảnh lớn từ thuộc tính data-full-src
            const fullSrc = thumbnail.getAttribute('data-full-src');
            
            // 3. Thay đổi ảnh chính
            mainPhoto.src = fullSrc;
            
            // 4. Cập nhật viền (active state) cho ảnh nhỏ
            // Loại bỏ viền ở tất cả ảnh nhỏ (đặt lại về border-transparent)
            thumbnails.forEach(t => {
                t.classList.remove('border-indigo-600');
                t.classList.add('border-transparent');
            });
            
            // Thêm viền cho ảnh nhỏ vừa được click (đánh dấu ảnh đang được xem)
            thumbnail.classList.remove('border-transparent');
            thumbnail.classList.add('border-indigo-600');
        });
    });
});