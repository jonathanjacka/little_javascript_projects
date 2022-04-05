const resultElement = document.getElementById('result');
const lengthElement = document.getElementById('length');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const generateElement = document.getElementById('generate');
const clipboard = document.getElementById('clipboard');

//To find random integer: Math.floor(Math.random() * (max - min + 1)) + min;
const getRandomLower = () =>
  String.fromCharCode(Math.floor(Math.random() * (122 - 97 + 1)) + 97);

const getRandomUpper = () =>
  String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65);

const getRandomNumber = () =>
  String.fromCharCode(Math.floor(Math.random() * (57 - 48 + 1) + 48));

const getRandomSymbol = () => {
  const symbolsValues = [
    32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 58, 59, 60,
    61, 62, 63, 64, 91, 92, 93, 94, 95, 96, 123, 124, 125, 126,
  ];
  return String.fromCharCode(
    symbolsValues[Math.floor(Math.random() * symbolsValues.length)]
  );
};

clipboard.addEventListener('click', () => {
  textArea = document.createElement('textarea');
  const password = resultElement.innerText;

  if (!password) {
    return;
  }

  textArea.value = password;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  textArea.remove();
  alert('Password copied to clipboard!');
});

generateElement.addEventListener('click', () => {
  const length = +lengthElement.value;
  const hasLower = lowercaseElement.checked;
  const hasUpper = uppercaseElement.checked;
  const hasNumber = numbersElement.checked;
  const hasSymbol = symbolsElement.checked;

  resultElement.innerText = generatePassword(
    length,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol
  );
});

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

const generatePassword = (length, lower, upper, number, symbol) => {
  let generatedPassword = '';
  const typesCount = lower + upper + number + symbol;
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
  );

  if (typesCount === 0) {
    return '';
  }

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      generatedPassword += randomFunction[funcName]();
    });
  }
  generatedPassword = generatedPassword.slice(0, length);
  var passwordArr = generatedPassword.split('');

  passwordArr.sort(function () {
    return 0.5 - Math.random();
  });

  finalPassword = passwordArr.join('');
  return finalPassword;
};
