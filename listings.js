const listingsData = [
    {
        id: 1,
        title: "Phòng trọ khép kín Cầu Giấy (HN)",
        price: 2500000, 
        area: 20,
        location: "Cầu Giấy, Hà Nội",
        cityCode: "Hà Nội",
        priceRange: "1m-3m",
        imageUrl: "https://congchungnguyenhue.com/Uploaded/Images/Original/2024/01/16/chinh-chu-cho-thue-phong-tro-khep-kin-tai-ngo-44-tran-thai-tong-cau-giay-phong-tang-2-va-tang-3-dep_1601213519.jpg",
        detailsUrl: "details-1.html"
    },
    {
        id: 2,
        title: "Căn hộ mini Quận 1 đầy đủ NT (HCM)",
        price: 4000000,
        area: 30,
        location: "Quận 1, TP. Hồ Chí Minh",
        cityCode: "TP. Hồ Chí Minh",
        priceRange: "3m-5m",
        imageUrl: "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2025/05/09/img-0602_1746775446.jpg",
        detailsUrl: "details-2.html"
    },
    {
        id: 3,
        title: "Phòng trọ giá rẻ gần ĐH Bách Khoa (HN)",
        price: 1800000,
        area: 15,
        location: "Hai Bà Trưng, Hà Nội",
        cityCode: "Hà Nội",
        priceRange: "1m-3m",
        imageUrl: "https://cdnnews.mogi.vn/news/wp-content/uploads/2023/04/10134340/phong-tro-quan-10-4.jpg",
        detailsUrl: "details-3.html"
    },
    {
        id: 4,
        title: "Studio cao cấp Cầu Giấy (HN)",
        price: 5500000,
        area: 35,
        location: "Cầu Giấy, Hà Nội",
        cityCode: "Hà Nội",
        priceRange: "5m+",
        imageUrl: "https://cdn.thehappystay.vn/thumb_xx368/upload/2019/09/22/can-ho-studio-cao-cap-tai-trung-hoa-cau-giay644.jpg",
        detailsUrl: "details-4.html"
    },
    {
        id: 5,
        title: "Phòng trọ sinh viên Ngũ Hành Sơn (Đà Nẵng)",
        price: 2800000,
        area: 25,
        location: "Ngũ Hành Sơn, Đà Nẵng",
        cityCode: "Đà Nẵng",
        priceRange: "1m-3m",
        imageUrl: "https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/10/01/anh-pt5_1727753277.jpg",
        detailsUrl: "details-5.html"
    }, 
  {
  id: 6,
  title: "Studio full nội thất, mới tinh, Chùa Láng",
  price: 4200000,
  area: 30,
  location: "Chùa Láng, Quận Đống Đa, Hà Nội",
  cityCode: "Hà Nội",
  priceRange: "3m-5m",
  imageUrl: "https://cloud.muaban.net/cdn-cgi/image/format=auto,quality=85/images/thumb-detail/2025/10/04/134/5315de2d9b5d4e7eaa7e1aabec84a229.jpg",
  detailsUrl: "details-6.html"
},
{
  id: 7,
  title: "Cho thuê căn 1N1K Time City, full đồ đẹp",
  price: 9500000,
  area: 53,
  location: "KĐT Time City, Quận Hai Bà Trưng, Hà Nội",
  cityCode: "Hà Nội",
  priceRange: "7m-10m",
  imageUrl: "https://file4.batdongsan.com.vn/resize/1275x717/2025/08/05/20250805104920-a2c0_wm.jpg",
  detailsUrl: "details-7.html"
},
{
  id: 8,
  title: "Căn hộ dịch vụ 1PN Tây Hồ, view hồ",
  price: 8000000,
  area: 45,
  location: "Quảng An, Quận Tây Hồ, Hà Nội",
  cityCode: "Hà Nội",
  priceRange: "7m-10m",
  imageUrl: "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2025/11/03/1_1762141695.jpg",
  detailsUrl: "details-8.html"
},
{
  id: 9,
  title: "Phòng trọ SV Gò Vấp, có gác, gần ĐH Công Nghiệp",
  price: 2500000,
  area: 20,
  location: "Nguyễn Văn Lượng, Quận Gò Vấp, TP. HCM",
  cityCode: "TP. Hồ Chí Minh",
  priceRange: "1m-3m",
  imageUrl: "https://pt123.cdn.static123.com/images/thumbs/900x600/fit/2023/03/09/z3880411686181-9752c8ab5423055af962be337b7dfade_1678349520.jpg",
D  detailsUrl: "details-9.html"
},
{
  id: 10,
  title: "Căn hộ studio Sơn Trà, đi bộ ra biển",
  price: 4500000,
  area: 35,
  location: "An Hải Bắc, Quận Sơn Trà, Đà Nẵng",
  cityCode: "Đà Nẵng",
  priceRange: "3m-5m",
  imageUrl: "https://cloud.muaban.net/cdn-cgi/image/format=auto,quality=85/images/thumb-detail/2025/11/02/143/f4a9b13012104ac7a34744910101c41d.jpg",
  detailsUrl: "details-10.html"
}
];

// 2. Tham chiếu đến các phần tử DOM
const container = document.getElementById('listing-container');
const priceFilter = document.getElementById('price-filter');
const sortBy = document.getElementById('sort-by');

// 3. Hàm định dạng giá tiền (ví dụ: 2500000 -> 2.500.000)
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN').format(amount);
}

// 4. Hàm tạo HTML cho một thẻ tin đăng
function createListingCard(listing) {
    const formattedPrice = formatCurrency(listing.price);
    
    return `
                <div class="bg-white rounded-lg shadow overflow-hidden h-full"> 
            <img src="${listing.imageUrl}" alt="${listing.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="font-semibold text-lg mb-1 text-indigo-700">${listing.title}</h3>
                <p class="text-red-600 font-bold mb-2">${formattedPrice} đ/tháng</p>
                <p class="text-gray-600 text-sm mb-1">Diện tích: ${listing.area} m²</p>
                <p class="text-gray-600 text-sm">Địa chỉ: ${listing.location}</p>
                <a href="${listing.detailsUrl}" class="inline-block mt-3 text-indigo-600 hover:underline text-sm">Xem chi tiết &rarr;</a>
            </div>
        </div>
    `;
}

// 5. Hàm chính để lọc, sắp xếp và hiển thị
function renderListings() {
    let currentListings = [...listingsData]; // Bắt đầu với bản sao của dữ liệu gốc

    // --- LẤY THAM SỐ LỌC BAN ĐẦU TỪ URL ---
    const urlParams = new URLSearchParams(window.location.search);
    const urlCity = urlParams.get('city'); // Lấy giá trị của tham số 'city'

    // LỌC 1: LỌC THEO THÀNH PHỐ TỪ URL (nếu có)
    if (urlCity && urlCity !== 'Chọn Tỉnh/Thành phố') { 
        // Lọc danh sách theo cityCode (đã được chuẩn hóa để khớp với giá trị <option>)
        currentListings = currentListings.filter(listing => listing.cityCode === urlCity);
        
        // Cập nhật tiêu đề trang để người dùng biết họ đang xem gì
        const header = document.querySelector('h1');
        if (header) {
            header.textContent = `Phòng Trọ tại ${urlCity}`;
        }
    } else {
        // Đảm bảo tiêu đề trang trở về mặc định nếu không có tham số
        const header = document.querySelector('h1');
         if (header && header.textContent !== 'Tìm Kiếm Phòng Trọ Phù Hợp') {
            header.textContent = 'Tất Cả Phòng Trọ';
        }
    }


    // LỌC 2: LỌC THEO MỨC GIÁ (từ control trên trang listings)
    const selectedPriceRange = priceFilter.value;
    if (selectedPriceRange !== 'all') {
        currentListings = currentListings.filter(listing => listing.priceRange === selectedPriceRange);
    }

    // SẮP XẾP DỮ LIỆU
    const sortValue = sortBy.value;
    if (sortValue === 'price-asc') {
        currentListings.sort((a, b) => a.price - b.price); 
    } else if (sortValue === 'price-desc') {
        currentListings.sort((a, b) => b.price - a.price); 
    }

    // HIỂN THỊ DỮ LIỆU
    if (currentListings.length > 0) {
        const html = currentListings.map(createListingCard).join('');
        container.innerHTML = html;
    } else {
  
        const cityDisplay = urlCity && urlCity !== 'Chọn Tỉnh/Thành phố' ? ` tại ${urlCity}` : '';
        container.innerHTML = `<p class="text-center col-span-full text-gray-600 p-8">Không tìm thấy phòng trọ nào phù hợp${cityDisplay} với tiêu chí lọc.</p>`;
    }
}

// 6. Gán sự kiện
priceFilter.addEventListener('change', renderListings);
sortBy.addEventListener('change', renderListings);

// 7. Chạy lần đầu khi tải trang
document.addEventListener('DOMContentLoaded', renderListings);
