let hamburger = document.querySelector('#nav');
let div = document.querySelector('.mobile-menu');
let logo = document.querySelector('#logo');
let x = document.querySelector('#x');
let allOtherSections = document.querySelectorAll('section, main');

hamburger.addEventListener('click', function () {
    div.classList.toggle('show');
    hamburger.classList.toggle('hide');
    logo.classList.toggle('hide');
    allOtherSections.forEach((element) => {
        element.classList.toggle('hide');
    })
});

x.addEventListener('click', function () {
    div.classList.toggle('show');
    hamburger.classList.toggle('hide');
    logo.classList.toggle('hide');
    allOtherSections.forEach((element) => {
        element.classList.toggle('hide');
    })
})