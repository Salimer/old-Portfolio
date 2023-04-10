let hamburger = document.querySelector('#nav');
let div = document.querySelector('.mobile-menu');
let logo = document.querySelector('#logo');
let navItems = document.querySelectorAll('.mobile-menu li');
let allOtherSections = document.querySelectorAll('section, main, footer ul');

hamburger.addEventListener('click', function () {
  div.classList.toggle('show');
});

navItems.forEach((element) => {
    element.addEventListener('click', () => {
      div.classList.toggle('show');
    })
  });


