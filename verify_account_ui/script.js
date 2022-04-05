const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
  code.addEventListener('keydown', (event) => {
    if (event.key >= 0 && event.key <= 9) {
      codes[idx].value = '';
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (event.key === 'Backspace') {
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
  });
});
