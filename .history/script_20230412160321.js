const hamburger = document.querySelector('#nav');
const div = document.querySelector('.mobile-menu');
const navItems = document.querySelectorAll('.mobile-menu li');

hamburger.addEventListener('click', () => {
  div.classList.toggle('show');
});

navItems.forEach((element) => {
  element.addEventListener('click', () => {
    div.classList.toggle('show');
  });
});

const form = document.querySelector('#form');
const emailInput = form.elements['mail'];
const errorElement = document.querySelector('.form-validation-message');
const submit = document.querySelector('#get-in-touch-button')

function showError (event) {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    errorElement.textContent = "The email address should be in lowercase."
  }
}







// form.addEventListener('submit', (event) => {

//   // Stop the form from submitting
//   event.preventDefault();
// });

// // show a message with a type of the input
// function showMessage(input, message, type) {
//   // get the small element and set the message
//   const msg = input.parentNode.querySelector("small");
//   msg.innerText = message;
//   // update the class for the input
//   input.className = type ? "success" : "error";
//   return type;
// }