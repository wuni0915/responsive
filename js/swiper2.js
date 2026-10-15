// 비쥬얼 스와이퍼
const visualSw = new Swiper(".visualSwiper", 
    // function이 아닌 바로 객체가 들어간다
    {
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
        // 끝까지가도 다시 움직이게 함
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    }
);

const proSw = new Swiper(".proSwiper", {
    slidesPerView: 3.5,
    spaceBetween: 30,
})