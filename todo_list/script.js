const form = document.getElementById('form');
const input = document.getElementById('input');
const todoList = document.getElementById('todos');

const toDos = JSON.parse(localStorage.getItem('toDos'));

if (toDos) {
  toDos.forEach((toDo) => {
    addToDo(toDo);
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  addToDo();
});

function addToDo(toDo) {
  let toDoText = input.value;

  if (toDo) {
    toDoText = toDo.text;
  }

  if (toDoText) {
    const toDoEl = document.createElement('li');

    if (toDo && toDo.completed) {
      toDoEl.classList.add('completed');
    }

    toDoEl.innerText = toDoText;

    toDoEl.addEventListener('click', () => {
      toDoEl.classList.toggle('completed');
      updateLS();
    });

    toDoEl.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      if (event.target.classList.contains('completed')) {
        toDoEl.remove();
        updateLS();
      }
    });

    todoList.appendChild(toDoEl);
    input.value = '';

    updateLS();
  }
}

function updateLS() {
  const list = document.querySelectorAll('li');

  const toDos = [];

  list.forEach((toDo) => {
    toDos.push({
      text: toDo.innerText,
      completed: toDo.classList.contains('completed'),
    });
  });

  localStorage.setItem('toDos', JSON.stringify(toDos));
}
