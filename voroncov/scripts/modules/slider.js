export function slider(){
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-nex",
          prevEl: ".swiper-button-pre",
        },
      });
      var swipere = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 70,
        navigation: {
          nextEl: ".swiper-button-ne",
          prevEl: ".swiper-button-pr",
        },
      });
      var swiperee = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 0,
        navigation: {
          nextEl: ".swiper-button-ne",
          prevEl: ".swiper-button-pr",
        },
      });
}