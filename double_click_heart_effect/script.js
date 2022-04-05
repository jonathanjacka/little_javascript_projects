const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let click1,
  click2 = 0;

let likeCount = 0;

//Easier to use 'dblclick' as event, but I wanted to try and write my own check for 'double click' event
loveMe.addEventListener('click', (event) => {
  if (isDoubleClick(event)) {
    createHeart(event);
  }
});

const createHeart = (event) => {
  const heartIcon = document.createElement('i');
  heartIcon.classList.add('fas');
  heartIcon.classList.add('fa-heart');

  const x = event.clientX;
  const y = event.clientY;

  const leftOffset = event.target.offsetLeft;
  const topOffset = event.target.offsetTop;

  const mouseX = x - leftOffset;
  const mouseY = y - topOffset;

  heartIcon.style.top = `${mouseY}px`;
  heartIcon.style.left = `${mouseX}px`;

  loveMe.appendChild(heartIcon);

  likeCount++;
  times.innerText = likeCount;

  setTimeout(() => heartIcon.remove(), 1000);
};

const isDoubleClick = (event) => {
  let result = false;

  !click1 ? (click1 = event.timeStamp) : (click2 = event.timeStamp);

  if (Math.abs(click1 - click2) < 800) {
    click1 = 0;
    click2 = 0;
    return true;
  }
  click2 = click1;
  click1 = 0;
  return false;
};
