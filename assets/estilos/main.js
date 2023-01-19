const section = document.querySelector('header > nav');
const navbarBrand = document.querySelector('header > nav > div > a');
let prevY = window.scrollY;

// console.log(div.innerHTML)
window.addEventListener('scroll', function(){
    if(prevY > window.scrollY) {
        section.classList.remove('off')
    } else {
        section.classList.add('off')
    }

    if (window.scrollY > 550) {
        section.classList.add('solid'),
        navbarBrand.classList.remove('text-light')
      } else{
        section.classList.remove('solid'),
        navbarBrand.classList.add('text-light')
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