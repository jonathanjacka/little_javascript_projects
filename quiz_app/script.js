let numberOfQuestions = 5;

const getURL = (number = 5) =>
  `https://opentdb.com/api.php?amount=${number}&difficulty=easy&type=multiple`;

const quizData = [];

const getData = async () => {
  const response = await fetch(getURL());
  const data = await response.json();

  data.results.forEach((item) => {
    const newItem = getQuestion(
      item.question,
      item.correct_answer,
      item.incorrect_answers[0],
      item.incorrect_answers[1],
      item.incorrect_answers[2],
      item.correct_answer
    );

    quizData.push(newItem);
  });
  loadQuiz();
};

getData(5);

const getQuestion = (question, res1, res2, res3, res4, ans) => {
  const responses = shuffle([res1, res2, res3, res4]);

  const questionCard = {
    question: question,
    a: responses[0],
    b: responses[1],
    c: responses[2],
    d: responses[3],
    correct: '',
  };

  if (ans === questionCard.a) {
    questionCard.correct = 'a';
  } else if (ans === questionCard.b) {
    questionCard.correct = 'b';
  } else if (ans === questionCard.c) {
    questionCard.correct = 'c';
  } else {
    questionCard.correct = 'd';
  }

  return questionCard;
};

const getRandomNum = (maxValue) => Math.floor(Math.random() * maxValue);

const shuffle = (array) => {
  var currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = getRandomNum(currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const quiz = document.querySelector('.quiz-container');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const quizFooter = document.querySelector('.quiz-footer');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  quizFooter.innerHTML = `
    Number of questions remaining: ${numberOfQuestions}
  `;

  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  questionElement.innerHTML = currentQuizData.question;

  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
};

const deselectAnswers = () =>
  answerElements.forEach((element) => (element.checked = false));

const getSelectedResponse = () => {
  let response;

  answerElements.forEach((element) => {
    if (element.checked) {
      response = element.id;
    }
  });

  return response;
};

submitBtn.addEventListener('click', () => {
  const response = getSelectedResponse();
  console.log(response);

  if (response) {
    if (response === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      numberOfQuestions--;
      loadQuiz();
    } else {
      quiz.innerHTML = `
              <h2>Your final score was: ${score} correct out of ${quizData.length} questions.</h2>

              <button onclick="location.reload()">Reload</button>
          `;
    }
  }
});
