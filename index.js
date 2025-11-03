

document.addEventListener('DOMContentLoaded', () => {
   
    const searchForm = document.querySelector('form');
   
    const citySelect = searchForm.querySelector('select:nth-child(1)'); 
    const districtSelect = searchForm.querySelector('select:nth-child(2)'); 
    const priceSelect = searchForm.querySelector('select:nth-child(3)'); 

    
    searchForm.addEventListener('submit', (event) => {
       
        event.preventDefault();

       
        const selectedCity = citySelect.value;

        
        if (selectedCity === 'Chọn Tỉnh/Thành phố') {
            alert('Vui lòng chọn Tỉnh/Thành phố để bắt đầu tìm kiếm.');
            return; 
        }

        const queryParams = new URLSearchParams({
            city: selectedCity,
        }).toString();

        window.location.href = `listings.html?${queryParams}`;
    });
    
    citySelect.addEventListener('change', () => {
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

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const selectedCity = citySelect.value;
    
    const queryParams = new URLSearchParams({
        city: selectedCity, 
    }).toString();
    window.location.href = `listings.html?${queryParams}`;
});
