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