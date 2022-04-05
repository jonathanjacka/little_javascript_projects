const textElement = document.getElementById('text');
const speedElement = document.getElementById('speed');

const text = 'We love to program!';

let idx = 1;
let speed = 300 / speedElement.value;

const writeText = () => {
  textElement.innerText = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    idx = 1;
  }
  setTimeout(writeText, speed);
};

writeText();

speedElement.addEventListener(
  'input',
  (event) => (speed = 300 / event.target.value)
);
