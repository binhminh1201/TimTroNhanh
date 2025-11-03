// =======================================================
// post.js - Xử lý logic Form Đăng Tin
// Bao gồm: Tự động điền Quận/Huyện dựa trên Tỉnh/Thành phố
// =======================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dữ liệu mẫu (Giả định dữ liệu này được tải từ API/Cơ sở dữ liệu)
    const locations = {
        "Hà Nội": [
            "Ba Đình",
            "Cầu Giấy",
            "Đống Đa",
            "Hai Bà Trưng",
            "Hoàn Kiếm",
            "Hoàng Mai",
            "Hà Đông",
            "Long Biên",
            "Tây Hồ"
        ],
        "TP. Hồ Chí Minh": [
            "Quận 1",
            "Quận 3",
            "Quận 5",
            "Quận 7",
            "Quận 10",
            "Quận Bình Thạnh",
            "Quận Gò Vấp",
            "Thành phố Thủ Đức",
            "Quận Tân Bình"
        ],
        "Đà Nẵng": [
            "Hải Châu",
            "Thanh Khê",
            "Sơn Trà",
            "Ngũ Hành Sơn",
            "Liên Chiểu",
            "Cẩm Lệ",
            "Hòa Vang"
        ]
    };
    
    // 2. Lấy tham chiếu đến các ô chọn (select boxes)
    const citySelect = document.getElementById('city');
    const districtSelect = document.getElementById('district');

    // 3. Hàm xử lý khi Tỉnh/Thành phố thay đổi
    function populateDistricts() {
        const selectedCity = citySelect.value;
        
        // Xóa tất cả các tùy chọn cũ
        districtSelect.innerHTML = '<option value="">Chọn Quận/Huyện</option>';
        
        if (selectedCity && selectedCity !== "") {
            const districts = locations[selectedCity];
            
            if (districts) {
                // Thêm các tùy chọn Quận/Huyện mới
                districts.forEach(district => {
                    const option = document.createElement('option');
                    option.value = district; // Giá trị option (dùng để gửi đi)
                    option.textContent = district; // Nội dung hiển thị
                    districtSelect.appendChild(option);
                });
            }
        }
        
        // Đảm bảo ô Quận/Huyện được kích hoạt lại (nếu ban đầu bị disable)
        districtSelect.disabled = !selectedCity; 
    }

    // 4. Thêm sự kiện lắng nghe (Event Listener)
    citySelect.addEventListener('change', populateDistricts);

    // 5. Cài đặt trạng thái ban đầu (Ví dụ: disable ô Quận/Huyện khi chưa chọn Tỉnh/Thành phố)
    districtSelect.disabled = true;

    // ********* TÙY CHỌN: Thêm Logic Kiểm Tra Form Client-Side *********
    const postForm = document.querySelector('form');
    postForm.addEventListener('submit', (event) => {
        // Ví dụ kiểm tra đơn giản: đảm bảo giá không phải là số âm
        const priceInput = document.getElementById('price');
        if (priceInput.value < 500000) {
            alert('Giá cho thuê phải tối thiểu là 500.000 VND.');
            event.preventDefault(); // Ngăn chặn form submit
            priceInput.focus();
        }
    });

});