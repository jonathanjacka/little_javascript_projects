const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const xPos = event.clientX;
    const yPos = event.clientY;

    const buttonTop = event.target.offsetTop;
    const buttonLeft = event.target.offsetLeft;

    const xClick = xPos - buttonLeft;
    const yClick = yPos - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = yClick + 'px';
    circle.style.left = xClick + 'px';

    button.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
