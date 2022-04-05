const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'No Rating';
sendBtn.disabled = true;

ratings.forEach((item) => {
  item.addEventListener('click', ({ target }) => {
    removeActive();
    item.classList.add('active');
    selectedRating = item.lastElementChild.innerText;
    console.log(selectedRating);
    sendBtn.disabled = false;
  });
});

const removeActive = () =>
  ratings.forEach((item) => item.classList.remove('active'));

sendBtn.addEventListener('click', () => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank you!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support!</p>
    `;
});
