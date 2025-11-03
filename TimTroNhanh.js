// script.js

document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');

    // Hàm hiển thị trang dựa trên hash (#...)
    function showPage(pageId) {
        pages.forEach(page => {
            if (page.id === pageId) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });
        // Cuộn lên đầu trang
        window.scrollTo(0, 0); 
    }

    // Xử lý khi click vào link điều hướng
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Lấy hash từ href (vd: #listings)
            const targetHash = link.hash; 

            if (targetHash) {
                // event.preventDefault(); // Ngăn hành vi nhảy trang mặc định nếu chỉ muốn JS xử lý
                const targetPageId = targetHash.substring(1); // Bỏ dấu #
                showPage(targetPageId);
            }
        });
    });

    // Hiển thị trang ban đầu dựa trên URL hash (nếu có)
    const initialHash = window.location.hash;
    if (initialHash) {
        showPage(initialHash.substring(1));
    } else {
        // Nếu không có hash, hiển thị trang chủ
        showPage('home');
    }

    // Xử lý khi người dùng ấn nút Back/Forward của trình duyệt
    window.addEventListener('hashchange', function() {
        const currentHash = window.location.hash;
        if (currentHash) {
            showPage(currentHash.substring(1));
        } else {
            showPage('home');
        }
    });

    // --- Thêm các xử lý JS khác nếu cần ---
    // Ví dụ: Xử lý form tìm kiếm, gallery ảnh...
    const searchForm = document.querySelector('#home form');
    if(searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Ngăn gửi form
            // Chuyển hướng hoặc xử lý tìm kiếm ở đây
            alert('Đang thực hiện tìm kiếm (mockup)! Chuyển đến trang danh sách.');
            window.location.hash = '#listings'; // Chuyển sang trang danh sách
        });
    }

});
