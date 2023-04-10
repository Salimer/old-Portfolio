let hamburger = document.querySelector('#nav');
let div = document.querySelector('.mobile-menu');
let logo = document.querySelector('#logo');
let allOtherSections = document.querySelectorAll('section');

hamburger.addEventListener('click', function () {
    div.classList.toggle('show');
    hamburger.classList.toggle('hide');
    logo.classList.toggle('hide');
    for (let i = 0; i < allOtherSections.length; i++) {
        allOtherSections[i].classList.toggle('hide');
    }
});
