// Navigation menu popup 
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

// Form validation
const form = document.querySelector('#form');
const errorElement = document.querySelector('.form-validation-message');
const emailInput = form.elements.user_email;
const submit = document.querySelector('#get-in-touch-button');

function showError(event) {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    errorElement.textContent = '*The email address should be in lowercase.';
    event.preventDefault();
  }
  if (!emailInput.validity.valid) {
    errorElement.textContent = '*Please enter the required information.';
    event.preventDefault();
  }
  setTimeout(() => {
    errorElement.textContent = '';
  }, 3000);
}

submit.addEventListener('click', showError);

// SAVE FORM INPUT IN LOCAL STORAGE
const fullNameInput = form.full_name;
const firstNameInput = form.first_name;
const lastNameInput = form.last_name;
const messageInput = form.user_message;

let formObj = {
  fullName:"",
  firstName: "",
  lastName: "",
  email: "",
  message: ""
}

// check the local storage obj 
if (JSON.parse(localStorage.getItem('formStorage'))) {
  formObj = JSON.parse(localStorage.getItem('formStorage'));
  fullNameInput.value = formObj.fullName;
  firstNameInput.value = formObj.firstName;
  emailInput.value = formObj.email;
};

fullNameInput.addEventListener("input", (event) => {
  formObj.fullName = fullNameInput.value;
  localStorage.setItem('formStorage.fullName', formObj.fullname));
})

// function setFormInput() {
//   fullNameInput.value = localStorage.getItem('formObj.fullName');
// }

formObj.addEventListener("storage", (event) => {
    fullNameInput.value = event.fullName;
})
