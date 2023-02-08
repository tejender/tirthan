var width = window.innerWidth;
if (width<=500){
  var slideCount = 1
}
if(width>500){
  var slideCount = 3
}

console.log(width);
console.log(slideCount);
var swiper = new Swiper(".mySwiper", {
  slidesPerView: slideCount,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});