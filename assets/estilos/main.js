const section = document.querySelector('header > nav');
let prevY = window.scrollY;

// console.log(div.innerHTML)
window.addEventListener('scroll', function(){
    if(prevY > window.scrollY) {
        section.classList.remove('off')
    } else {
        section.classList.add('off')
    }

    if (window.scrollY > 550) {
        section.classList.add('solid')
    } else{
        section.classList.remove('solid')
    }
    prevY = window.scrollY
})

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
    },
    breakpoints: {
    620: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    680: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    920: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1240: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  } 
});