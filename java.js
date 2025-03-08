let icon = document.querySelector('.icon');
let nav = document.querySelector('.navbar');
let bars = document.querySelector('.fa-bars');
let xmark = document.querySelector('.fa-xmark');

icon.addEventListener('click' , () => {
    bars.classList.toggle('active');
    xmark.classList.toggle('active');
    nav.classList.toggle('active')
})