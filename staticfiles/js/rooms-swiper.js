var width = window.innerWidth;
var views = 3;
if (width<600){
    views=1.2
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: views,
    spaceBetween: 5,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });