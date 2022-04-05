const passwordInput = document.getElementById('password');
const background = document.getElementById('background');

passwordInput.addEventListener('input', (event) => {
  const input = event.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;

  console.log(blurValue);

  background.style.filter = `blur(${blurValue > 0 ? blurValue : 0}px)`;
});
