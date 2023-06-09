import './style.css';

const listContainer = document.querySelector('.container');


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


const displayTask = (tasks) => {
  listContainer.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('div');
    listItem.classList.add('list');
    listItem.draggable = true;

    const content = document.createElement('div');
    content.classList.add('content');


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


    content.appendChild(checkbox);
    content.appendChild(description);


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

