const container = document.querySelector('.container');
const signUpBtn = document.querySelector('.green-bg button');
const submitBtn = document.querySelector('.signup-form button');

signUpBtn.addEventListener('click', () => {
  container.classList.toggle('form-change');
});

submitBtn.addEventListener('click', (event) => {
  event.preventDefault();
});
