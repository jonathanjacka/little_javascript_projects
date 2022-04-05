const range = document.getElementById('range');

range.addEventListener('input', ({ target }) => {
  const value = +target.value;
  const label = target.nextElementSibling;

  const range_width = getComputedStyle(target).getPropertyValue('width');
  const label_width = getComputedStyle(label).getPropertyValue('width');

  const num_width = +range_width.substring(0, range_width.length - 2);

  const num_label_width = +label_width.substring(0, label_width.length - 2);

  const max = +target.max;
  const min = +target.min;

  const left =
    value * (num_width / max) -
    num_label_width / 2 +
    mapNumbers(value, min, max, 10, -10);
  console.log(left);

  label.style.left = `${left}px`;

  label.innerHTML = value;
});

/* To account for the offset of left - solution function: https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers */

const mapNumbers = (number, inMin, inMax, outMin, outMax) =>
  ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
