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
  if (((fullNameInput.value === '' || (firstNameInput.value === '' && lastNameInput.value === '')) || emailInput.value === '' || messageInput.value === '')) {
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
const reset = document.querySelector('#reset');

const formObj = {
  fullName: '',
  firstName: '',
  lastName: '',
  email: '',
  message: '',
};

// check the local storage obj
if (localStorage.formStorage) {
  formObj.fullName = JSON.parse(localStorage.formStorage).fullName;
  formObj.firstName = JSON.parse(localStorage.formStorage).firstName;
  formObj.lastName = JSON.parse(localStorage.formStorage).lastName;
  formObj.email = JSON.parse(localStorage.formStorage).email;
  formObj.message = JSON.parse(localStorage.formStorage).message;
  fullNameInput.value = formObj.fullName;
  firstNameInput.value = formObj.firstName;
  lastNameInput
  emailInput.value = formObj.email;
  messageInput.value = formObj.message;
  if ((fullNameInput.value !== '' || firstNameInput.value !== '' || lastNameInput.value !== '' || emailInput.value !== '' || messageInput.value !== '')) reset.classList.add('show');
}

fullNameInput.addEventListener('input', () => {
  formObj.fullName = fullNameInput.value;
  localStorage.setItem('formStorage', JSON.stringify(formObj));
  if (fullNameInput.value !== '') reset.classList.add('show');
  else if (fullNameInput.value === '' && firstNameInput.value === '' && lastNameInput.value === '' && emailInput.value === '' && messageInput.value === '') reset.classList.remove('show');
});

firstNameInput.addEventListener('input', () => {
  formObj.firstName = firstNameInput.value;
  localStorage.setItem('formStorage', JSON.stringify(formObj));
  if (firstNameInput.value !== '') reset.classList.add('show');
  else if (fullNameInput.value === '' && firstNameInput.value === '' && lastNameInput.value === '' && emailInput.value === '' && messageInput.value === '') reset.classList.remove('show');
});

lastNameInput.addEventListener('input', () => {
  formObj.lastName = lastNameInput.value;
  localStorage.setItem('formStorage', JSON.stringify(formObj));
  if (lastNameInput.value !== '') reset.classList.add('show');
  else if (fullNameInput.value === '' && firstNameInput.value === '' && lastNameInput.value === '' && emailInput.value === '' && messageInput.value === '') reset.classList.remove('show');
});

emailInput.addEventListener('input', () => {
  formObj.email = emailInput.value;
  localStorage.setItem('formStorage', JSON.stringify(formObj));
  if (emailInput.value !== '') reset.classList.add('show');
  else if (fullNameInput.value === '' && firstNameInput.value === '' && lastNameInput.value === '' && emailInput.value === '' && messageInput.value === '') reset.classList.remove('show');
});

messageInput.addEventListener('input', () => {
  formObj.message = messageInput.value;
  localStorage.setItem('formStorage', JSON.stringify(formObj));
  if (messageInput.value !== '') reset.classList.add('show');
  else if (fullNameInput.value === '' && firstNameInput.value === '' && lastNameInput.value === '' && emailInput.value === '' && messageInput.value === '') reset.classList.remove('show');
});

reset.addEventListener('click', () => {
  if (localStorage.formStorage) {
    localStorage.clear();
    errorElement.textContent = 'Form data successfully cleared from local storage';
    setTimeout(() => {
      errorElement.textContent = '';
    }, 3000);
  }
  reset.classList.remove('show');
});
