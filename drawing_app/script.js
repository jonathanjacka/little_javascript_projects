const canvas = document.getElementById('canvas');

const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const colorEl = document.getElementById('color');
const sizeEl = document.getElementById('size');
const clearEl = document.getElementById('clear');

const ctx = canvas.getContext('2d');

let size = 10;
let color = colorEl.value;
let isPressed = false;
let x;
let y;

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
};

const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

canvas.addEventListener('mousedown', (event) => {
  isPressed = true;
  x = event.offsetX;
  y = event.offsetY;
});

canvas.addEventListener('mouseup', (event) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (event) => {
  if (isPressed) {
    const x2 = event.offsetX;
    const y2 = event.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});

colorEl.addEventListener('change', (event) => {
  color = event.target.value;
});

increaseBtn.addEventListener('click', () => {
  size += 5;
  decreaseBtn.style.color = '#000';
  if (size >= 50) {
    size = 50;
    increaseBtn.style.color = '#f5f5f5';
  }
  sizeEl.innerText = size;
});

decreaseBtn.addEventListener('click', () => {
  size -= 5;
  increaseBtn.style.color = '#000';
  if (size <= 5) {
    size = 5;
    decreaseBtn.style.color = '#f5f5f5';
  }
  sizeEl.innerText = size;
});

clearEl.addEventListener('click', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
