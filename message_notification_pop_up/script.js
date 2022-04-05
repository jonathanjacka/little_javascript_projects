const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Message 1',
  'Message 2',
  'Message 3',
  'Message 4',
  'Message 5',
];

const types = ['info', 'success', 'failure', 'pending'];

button.addEventListener('click', () => createNotification());

const createNotification = (message = null, type = null) => {
  const notification = document.createElement('div');
  notification.classList.add('toast');
  notification.innerText = message ? message : getRandomMessage();
  notification.classList.add(type ? type : getRandomType());
  toasts.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
};

const getRandomMessage = () =>
  messages[Math.floor(Math.random() * messages.length)];

const getRandomType = () => types[Math.floor(Math.random() * types.length)];
