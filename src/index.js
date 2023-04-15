import './style.css';

const taskInput = document.getElementById('input');
const addButton = document.getElementById('button');
const todoList = document.getElementById('todo-list');
const completeButton = document.querySelector('.complete');

const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(savedTasks));
}

function removeTask(li) {
  const index = Array.prototype.indexOf.call(todoList.children, li);
  savedTasks.splice(index, 1);
  saveTasks();

  // Update remaining tasks' indexes
  for (let i = index; i < todoList.children.length; i += 1) {
    const taskLi = todoList.children[i];
    const checkbox = taskLi.querySelector('input[type="checkbox"]');
    checkbox.setAttribute('data-index', i);
  }

  if (li.firstChild.nextSibling.checked) {
    li.style.display = 'none';
  } else {
    todoList.removeChild(li);
  }
}

function editTask(li) {
  const taskValue = li.firstChild.nextSibling.textContent.trim();

  const popupDiv = document.createElement('div');
  popupDiv.classList.add('popup');
  const heading = document.createElement('h2');
  heading.textContent = 'Edit task';
  const input = document.createElement('input');
  input.type = 'text';
  input.setAttribute('value', taskValue);

  const saveButton = document.createElement('button');
  saveButton.textContent = 'Save';
  saveButton.addEventListener('click', () => {
    const editedTaskValue = input.value.trim();
    if (editedTaskValue !== '') {
      li.firstChild.nextSibling.nodeValue = editedTaskValue;
      const index = Array.prototype.indexOf.call(todoList.children, li);
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
  savedTasks.forEach((task, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.setAttribute('data-index', index);
    li.appendChild(checkbox);
    li.innerHTML += `${task.text} <button class="remove-button">X</button> <button class="edit-button">Edit</button>`;
    todoList.appendChild(li);

    const removeButton = li.querySelector('.remove-button');
    removeButton.addEventListener('click', () => {
      removeTask(li);
      window.location.reload();
    });

    const editButton = li.querySelector('.edit-button');
    editButton.addEventListener('click', () => {
      editTask(li);
    });
  });
}

renderTasks();

function addTask() {
  const taskValue = taskInput.value.trim();

  if (taskValue === '') {
    return;
  }

  const task = {
    text: taskValue,
    completed: false,
  };

  savedTasks.push(task);
  saveTasks();

  window.location.reload();

  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  li.style.listStyle = 'none';
  checkbox.type = 'checkbox';
  checkbox.setAttribute('data-index', savedTasks.length - 1);
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

  taskInput.value = '';
}

// complete button

// remove task

// edit task

function removeCompletedTasks() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      const li = checkbox.parentNode;
      removeTask(li);
    }
  });
}

completeButton.addEventListener('click', removeCompletedTasks);

addButton.addEventListener('click', addTask);

completeButton();
