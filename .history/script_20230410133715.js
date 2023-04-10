let hamburger = document.querySelector('#nav');
let div = document.querySelector('.mobile-menu');
let logo = document.querySelector('#logo');
let x = document.querySelector('#x');
let navItems = document.querySelectorAll('.mobile-menu li a');
let allOtherSections = document.querySelectorAll('section, main, footer ul');

hamburger.addEventListener('click', function () {
  div.classList.toggle('show');
//   hamburger.classList.toggle('hide');
//   logo.classList.toggle('hide');
//   document.querySelector('body').classList.toggle('body-background');
//   allOtherSections.forEach((element) => {
//     element.classList.toggle('hide');
//   });
});

x.addEventListener('click', () => {
  div.classList.toggle('show');
//   hamburger.classList.toggle('hide');
//   logo.classList.toggle('hide');
//   document.querySelector('body').classList.toggle('body-background');
//   allOtherSections.forEach((element) => {
//     element.classList.toggle('hide')
//   })
});

  navItems.forEach((element) => {
    navItems.addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.toggle('show');
        // div.classList.toggle('show');
    })
    
    // hamburger.classList.toggle('hide');
    // logo.classList.toggle('hide');
    // document.querySelector('body').classList.toggle('body-background');

    // allOtherSections.forEach((element) => {
    //   element.classList.toggle('hide');
    // });
  });
