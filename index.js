// =======================================================
// index.js - Xử lý Form Tìm Kiếm trên Trang Chủ
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Lấy tham chiếu đến Form và các ô chọn
    const searchForm = document.querySelector('form');
    // Lưu ý: Các thẻ <select> chưa có ID, ta sẽ lấy chúng bằng cách truy vấn
    const citySelect = searchForm.querySelector('select:nth-child(1)'); // Tỉnh/Thành phố
    const districtSelect = searchForm.querySelector('select:nth-child(2)'); // Quận/Huyện
    const priceSelect = searchForm.querySelector('select:nth-child(3)'); // Mức giá

    // 2. Thêm sự kiện lắng nghe khi form được submit
    searchForm.addEventListener('submit', (event) => {
        // Ngăn chặn hành vi submit form mặc định (chuyển hướng qua GET)
        event.preventDefault();

        // 3. Lấy giá trị đã chọn
        const selectedCity = citySelect.value;
        // const selectedDistrict = districtSelect.value; // Tạm thời bỏ qua nếu không cần lọc sâu
        // const selectedPrice = priceSelect.value; // Tạm thời bỏ qua nếu không cần lọc sâu

        // 4. Kiểm tra xem người dùng đã chọn Tỉnh/Thành phố chưa
        if (selectedCity === 'Chọn Tỉnh/Thành phố') {
            alert('Vui lòng chọn Tỉnh/Thành phố để bắt đầu tìm kiếm.');
            return; // Dừng quá trình submit nếu chưa chọn
        }

        // 5. Chuẩn bị URL đích (listings.html) với tham số tìm kiếm
        // EncodeURIComponent giúp đảm bảo các ký tự tiếng Việt hoặc đặc biệt được truyền đúng
        const queryParams = new URLSearchParams({
            city: selectedCity,
            // Thêm các tham số khác nếu cần, ví dụ:
            // district: selectedDistrict,
            // price: selectedPrice
        }).toString();

        // 6. Chuyển hướng đến trang listings.html kèm theo tham số
        window.location.href = `listings.html?${queryParams}`;
    });
    
    
    // Bổ sung: Logic tùy chọn để tự động điền Quận/Huyện theo Tỉnh/Thành phố
    citySelect.addEventListener('change', () => {
        // Ở môi trường thực tế, đoạn code này sẽ gọi API để tải danh sách Quận/Huyện
        // Dưới đây là ví dụ đơn giản (bạn có thể phát triển thêm)
        let optionsHtml = '<option>Chọn Quận/Huyện</option>';
        const city = citySelect.value;
        
        if (city === 'Hà Nội') {
             optionsHtml += '<option value="cau-giay">Cầu Giấy</option>';
             optionsHtml += '<option value="dong-da">Đống Đa</option>';
        } else if (city === 'TP. Hồ Chí Minh') {
             optionsHtml += '<option value="quan-1">Quận 1</option>';
             optionsHtml += '<option value="binh-thanh">Bình Thạnh</option>';
        }
        
        districtSelect.innerHTML = optionsHtml;
    });
});

// Trích đoạn code quan trọng từ index.js
searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedCity = citySelect.value;
    
    // ... kiểm tra và xử lý lỗi

    // Chuẩn bị URL đích
    const queryParams = new URLSearchParams({
        city: selectedCity, // Đảm bảo tên thành phố được gửi đi
    }).toString();

    // Chuyển hướng
    window.location.href = `listings.html?${queryParams}`;
});