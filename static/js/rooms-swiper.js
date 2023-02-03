var width = window.innerWidth;
var views = 3;
if (width<600){
    views=2
}

var swiper = new Swiper(".mySwiper", {
    slidesPerView: views,
    spaceBetween: 25,
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