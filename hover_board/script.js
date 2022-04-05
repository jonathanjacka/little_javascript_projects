const container = document.getElementById('container');

const colors = generateRandomColors(10);

function generateRandomColors(num) {
  const colorsArr = [];
  for (let i = 0; i < num; i++) {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorsArr.push(randomColor);
  }
  return colorsArr;
}

const SQUARES = 300;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');

  square.addEventListener('mouseover', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = '#1d1d1d';
  element.style.boxShadow = '0 0 2px #000';
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length - 1)];
}
