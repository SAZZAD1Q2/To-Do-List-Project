import './style.css';

const taskInput = document.getElementById('input');
const addButton = document.getElementById('button');
const todoList = document.getElementById('todo-list');
const completeButton = document.querySelector('.complete');

let savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(savedTasks));
}

function updateIndexes() {
  savedTasks.forEach((task, index) => {
    task.index = index;
  });
}

function removeTask(li) {
  const index = Array.prototype.indexOf.call(todoList.children, li);
  savedTasks.splice(index, 1);
  updateIndexes();
  saveTasks();

  li.remove();
}

function editTask(li) {
  const taskValue = li.firstChild.nextSibling.textContent.trim();

  const popupDiv = document.createElement('div');
  popupDiv.classList.add('popup');
  const heading = document.createElement('h2');
  heading.textContent = 'Edit task';
  const input = document.createElement('input');
  input.type = 'text';
  input.value = taskValue;

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';
  saveButton.addEventListener('click', () => {
    const editedTaskValue = input.value.trim();
    if (editedTaskValue !== '') {
      li.firstChild.nextSibling.nodeValue = editedTaskValue;

      const index = parseInt(li.querySelector('input[type="checkbox"]').dataset.index, 10);

      savedTasks[index].text = editedTaskValue;
      saveTasks();
      popupDiv.remove();
    }
  });
  popupDiv.appendChild(heading);
  popupDiv.appendChild(input);
  popupDiv.appendChild(saveButton);
  document.body.appendChild(popupDiv);
}

function renderTasks() {
  todoList.innerHTML = '';

  savedTasks.forEach((task) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.dataset.index = task.index;
    li.appendChild(checkbox);
    li.innerHTML += `${task.text} <button class="remove-button">X</button> <button class="edit-button">Edit</button>`;
    todoList.appendChild(li);

    const removeButton = li.querySelector('.remove-button');
    removeButton.addEventListener('click', () => {
      removeTask(li);
    });

    const editButton = li.querySelector('.edit-button');
    editButton.addEventListener('click', () => {
      editTask(li);
    });
  });
}

function addTask() {
  const taskValue = taskInput.value.trim();

  if (taskValue === '') {
    return;
  }

  const task = {
    text: taskValue,
    completed: false,
    index: savedTasks.length,
  };

  savedTasks.push(task);
  saveTasks();

  renderTasks();

  taskInput.value = '';
}

function removeCompletedTasks() {
  savedTasks = savedTasks.filter((task) => !task.completed);
  updateIndexes();
  saveTasks();
  renderTasks();
}

completeButton.addEventListener('click', removeCompletedTasks);

addButton.addEventListener('click', addTask);

renderTasks();
