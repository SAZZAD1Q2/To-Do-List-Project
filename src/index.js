import './style.css';

import { saveTasks, savedTasks } from './modules/edit.js';

const taskInput = document.getElementById('input');
const addButton = document.getElementById('button');
const todoList = document.getElementById('todo-list');

const completeButton = document.querySelector('.complete');

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
  savedTasks.forEach((task, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.dataset.index = index;
    li.appendChild(checkbox);
    li.innerHTML += `${task.text} <button class="remove-button">X</button> <button class="edit-button">Edit</button>`;
    todoList.appendChild(li);

    const removeButton = li.querySelector('.remove-button');
    removeButton.addEventListener('click', () => {
      removeTask(li);

      // window.location.reload();
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
  // window.location.reload();

  if (taskValue === '') {
    return;
  }

  const task = {
    text: taskValue,
    completed: false,
    index: savedTasks.length + 1,
  };

  savedTasks.push(task);
  saveTasks();

  const li = document.createElement('li');
  const checkbox = document.createElement('input');
  li.style.listStyle = 'none';
  checkbox.type = 'checkbox';
  checkbox.dataset.index = task.index - 1;
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
function markTaskAsUncompleted(taskElement) {
  taskElement.classList.remove('completed');
  const checkbox = taskElement.querySelector('input[type="checkbox"]');
  checkbox.checked = false;
}

function removeCompletedTasks() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function () { // add event listener to checkbox
      if (this.checked) {
        const li = this.parentNode;
        if (li.classList.contains('completed')) {
          markTaskAsUncompleted(li);
        }
        removeTask(li);
      }
    });
    if (checkbox.checked) { // check if checkbox is initially checked
      const li = checkbox.parentNode;
      if (li.classList.contains('completed')) {
        markTaskAsUncompleted(li);
      }
      removeTask(li);
    }
  });
}

completeButton.addEventListener('click', removeCompletedTasks);

function completeTasks() {
  const tasks = Array.from(document.querySelectorAll('li'));
  const completedTasks = tasks.filter((task) => {
    return task.classList.contains('completed');
  });
  completedTasks.forEach((task) => {
    removeTask(task);
  });
}

completeButton.addEventListener('click', completeTasks);


addButton.addEventListener('click', addTask);

completeButton();
