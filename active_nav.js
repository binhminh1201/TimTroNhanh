<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chi Tiết Phòng - Studio cao cấp Cầu Giấy</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
    <style>
        body { font-family: 'Inter', sans-serif; }
        /* Thêm style cho border-transparent nếu style.css chưa có */
        .border-transparent { border-color: transparent; }
    </style>
</head>
<body class="bg-gray-100">

    <header class="bg-gradient-to-r from-indigo-700 to-purple-600 shadow-xl sticky top-0 z-50">
        <nav class="container mx-auto px-4 py-3 flex justify-between items-center">
            <a href="index.html" class="text-3xl font-logo text-white transform hover:scale-105 transition duration-300">TimTroNhanh</a>
            <div class="space-x-4 flex items-center" id="nav-links-container">
                <a href="index.html" class="nav-item text-white hover:text-gray-200 transition duration-300">Trang Chủ</a>
                <a href="listings.html" class="nav-item text-white hover:text-gray-200 transition duration-300">Danh Sách</a>
                <a href="post.html" class="nav-item text-white hover:text-gray-200 transition duration-300">Đăng Tin</a>
            </div>
        </nav>
    </header>
    <main class="container mx-auto px-4 py-8">

        <a href="listings.html" class="text-indigo-600 hover:underline mb-4 inline-block">&larr; Quay lại danh sách</a>
        <h1 class="text-3xl font-bold text-gray-800 mb-2">Studio cao cấp Cầu Giấy (HN)</h1>
        <p class="text-gray-500 text-sm mb-4">Địa chỉ: Đường Cầu Giấy, Cầu Giấy, Hà Nội</p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            
            <div class="md:col-span-2">
                <section class="mb-6">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden mb-4">
                        <img 
                            id="main-photo" 
                            src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/10/01/anh-pt5_1727753277.jpg" 
                            alt="Ảnh chính studio" 
                            class="w-full h-96 object-cover"
                        >
                    </div>

                    <div id="photo-gallery" class="grid grid-cols-4 gap-4">
                        <img 
                            src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/10/01/anh-pt5_1727753277.jpg" 
                            alt="Ảnh phòng 1" 
                            class="thumbnail w-full h-20 object-cover cursor-pointer border-2 border-indigo-600 rounded transition duration-300"
                            data-full-src="https://pt123.cdn.static123.com/images/thumbs/450x300/fit/2024/10/01/anh-pt5_1727753277.jpg"
                        >
                        <img 
                            src="https://phongtro123.com/uploads/images/2022/02/10/phong-tro-moi-xay-q10-h1.jpg" 
                            alt="Ảnh bếp" 
                            class="thumbnail w-full h-20 object-cover cursor-pointer border-2 border-transparent hover:border-indigo-600 rounded transition duration-300"
                            data-full-src="https://phongtro123.com/uploads/images/2022/02/10/phong-tro-moi-xay-q10-h1.jpg"
                        >
                         <img 
                            src="https://cdn.luxstay.com/users/359286/lQ55m146qL7t6e1Mv2p3D88k/thumb_1562914199_img_1562914195_81804.jpg" 
                            alt="Ảnh ban công" 
                            class="thumbnail w-full h-20 object-cover cursor-pointer border-2 border-transparent hover:border-indigo-600 rounded transition duration-300"
                            data-full-src="https://cdn.luxstay.com/users/359286/lQ55m146qL7t6e1Mv2p3D88k/thumb_1562914199_img_1562914195_81804.jpg"
                        >
                        <img 
                            src="https://phongtro123.com/uploads/images/2023/10/01/24_1696123961.jpg" 
                            alt="Ảnh phòng tắm" 
                            class="thumbnail w-full h-20 object-cover cursor-pointer border-2 border-transparent hover:border-indigo-600 rounded transition duration-300"
                            data-full-src="https://phongtro123.com/uploads/images/2023/10/01/24_1696123961.jpg"
                        >
                    </div>
                </section>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow h-fit">
                <p class="text-2xl text-red-600 font-bold mb-4">5.500.000 đ/tháng</p>
                <div class="space-y-3 text-sm mb-5">
                    <p><span class="font-semibold">Diện tích:</span> 35 m²</p>
                    <p><span class="font-semibold">Loại phòng:</span> Studio cao cấp</p>
                    <p><span class="font-semibold">Tình trạng:</span> Còn phòng</p>
                </div>
                <div class="border-t pt-4">
                    <p class="font-semibold mb-1">Thông tin liên hệ:</p>
                    <p class="text-gray-700">Chủ nhà: Anh Minh</p>
                    <p class="text-gray-700">Điện thoại: <a href="tel:0345228952" class="text-indigo-600 hover:underline">09345228952</a></p>
                </div>
            </div>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
            <h2 class="text-xl font-semibold mb-3">Mô tả chi tiết</h2>
            <p class="text-gray-700 mb-4">
                Studio cao cấp, thiết kế hiện đại, đầy đủ nội thất sang trọng tọa lạc tại khu vực trung tâm Cầu Giấy. Diện tích 35m2, không gian mở thoáng đãng, có khu vực bếp riêng biệt, ban công đón nắng.
            </p>
            <p class="text-gray-700 mb-4">
                Tiện nghi bao gồm: Máy lạnh Inverter, tủ lạnh lớn, TV màn hình phẳng, máy nước nóng, và máy giặt riêng trong phòng. Dịch vụ dọn phòng 1 lần/tuần.
            </p>
            <h3 class="font-semibold mb-2">Tiện nghi:</h3>
            <ul class="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>An ninh 24/7 với khóa vân tay, thẻ từ, camera giám sát</li>
                <li>Giờ giấc tự do, Không chung chủ</li>
                <li>Internet/Wifi cáp quang tốc độ cao (đã bao gồm trong phí dịch vụ)</li>
                <li>Chỗ để xe máy an toàn, có bảo vệ</li>
            </ul>
        </div>
        
    </main>

    <footer class="bg-gray-800 text-gray-300 mt-12 py-8">
        <div class="container mx-auto px-4 text-center text-sm">
            &copy; 2025 TimTroNhanh. 
        </div>
    </footer>

    <script src="details.js"></script>
    <script src="active_nav.js"></script> 
</body>
</html>