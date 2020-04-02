

;(function(){
    var swiper = new Swiper('#swiper-main', {
        loop: true, 
        autoplay: {
            delay: 6000,
        },
        pagination: {
            el: '.swiper-pagination',
        },
       
    });
    // }); 
    var swiper2 = new Swiper('.swiper-section', {
        loop: true,  
        spaceBetween: 30,
        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }, 
        breakpoints: {
            0: { 
                slidesPerView: 1,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            }
        }
    }); 
    var swiper3 = new Swiper('.swiper-news', {
        loop: true, 
        slidesPerView: 3,
        spaceBetween: 30,
        autoplay: {
            delay: 10000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}());

  
       