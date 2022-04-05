const container = document.querySelector('.container');
const URL = 'https://source.unsplash.com/random/';
const rows = 10;
const columns = 3;

const getRandomNum = (min = 300, max = 310) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const getRandomSize = () => `${getRandomNum()}x${getRandomNum()}`;

for (let i = 0; i < rows * columns; i++) {
  const img = document.createElement('img');
  img.src = `${URL}${getRandomSize()}`;
  container.appendChild(img);
}
