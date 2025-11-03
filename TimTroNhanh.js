
document.addEventListener('DOMContentLoaded', function() {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('.nav-link');


    function showPage(pageId) {
        pages.forEach(page => {
            if (page.id === pageId) {
                page.classList.add('active');
            } else {
                page.classList.remove('active');
            }
        });

        window.scrollTo(0, 0); 
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Lấy hash từ href (vd: #listings)
            const targetHash = link.hash; 

            if (targetHash) {
             
                const targetPageId = targetHash.substring(1); 
                showPage(targetPageId);
            }
        });
    });


    const initialHash = window.location.hash;
    if (initialHash) {
        showPage(initialHash.substring(1));
    } else {

        showPage('home');
    }


    window.addEventListener('hashchange', function() {
        const currentHash = window.location.hash;
        if (currentHash) {
            showPage(currentHash.substring(1));
        } else {
            showPage('home');
        }
    });



    const searchForm = document.querySelector('#home form');
    if(searchForm) {
        searchForm.addEventListener('submit', function(event) {
            event.preventDefault(); 
           
            alert('Đang thực hiện tìm kiếm (mockup)! Chuyển đến trang danh sách.');
            window.location.hash = '#listings'; 
        });
    }

});
