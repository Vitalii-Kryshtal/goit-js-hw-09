'use strict';

const head = document.querySelector('head');
const monseratFontLinks = `<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>;`;
head.insertAdjacentHTML('beforeEnd', monseratFontLinks);

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageInput = form.elements.message;
const formBtn = form.children[2];
const labelEmail = emailInput.parentElement;
const labelMessage = messageInput.parentElement;
const formBody = form.parentElement;
formBody.classList.add('form-body');
formBtn.classList.add('form-btn');
labelEmail.classList.add('form-label');
labelMessage.classList.add('form-label');
emailInput.classList.add('form-input');
messageInput.classList.add('form-message', 'form-input');

emailInput.addEventListener('focus', () => {
  emailInput.setAttribute('placeholder', 'Type area');
});
emailInput.addEventListener('blur', () => {
  emailInput.setAttribute('placeholder', '');
});
messageInput.addEventListener('focus', () => {
  messageInput.setAttribute('placeholder', 'Type area');
});
messageInput.addEventListener('blur', () => {
  messageInput.setAttribute('placeholder', '');
});

const formData = { email: '', message: '' };
form.addEventListener('input', () => {
  formData.email = emailInput.value;
  formData.message = messageInput.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

if (localStorage.getItem('feedback-form-state')) {
  const savedEmail = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email;
  const savedMessage = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
  formData.email = savedEmail;
  formData.message = savedMessage;
  emailInput.value = savedEmail;
  messageInput.value = savedMessage;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!emailInput.value || !messageInput.value) {
    alert(`Fill please all fields`);
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  form.reset();
});
