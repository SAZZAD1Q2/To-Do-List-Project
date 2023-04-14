import './style.css';

const taskInput = document.getElementById('input');
const addButton = document.getElementById('button');
const todoList = document.getElementById('todo-list');
const completeButton = document.querySelector('.complete');

// add task
document.addEventListener('DOMContentLoaded', () => {
  const removeTask = (event) => {
    const li = event.target.parentNode;
    todoList.removeChild(li);
  };

  const editTask = (event) => {
    const li = event.target.parentNode;
    const taskValue = li.firstChild.textContent.trim();
    const newTaskValue = prompt('Edit task:', taskValue);
    if (newTaskValue !== null && newTaskValue.trim() !== '') {
      li.firstChild.textContent = newTaskValue.trim();
    } else {
      return;
    }

    const popupDiv = document.createElement('div');
    popupDiv.classList.add('popup');
    const heading = document.createElement('h2');
    heading.textContent = 'Edit task';
    const input = document.createElement('input');
    input.type = 'text';
    input.value = newTaskValue.trim();
    const saveButton = document.createElement('button');
    saveButton.textContent = 'Save';
    saveButton.addEventListener('click', () => {
      const editedTaskValue = input.value.trim();
      if (editedTaskValue !== '') {
        li.firstChild.textContent = editedTaskValue;
        popupDiv.remove();
      }
    });
    popupDiv.appendChild(heading);
    popupDiv.appendChild(input);
    popupDiv.appendChild(saveButton);
    document.body.appendChild(popupDiv);
  };

  const addTask = () => {
    const taskValue = taskInput.value.trim();

    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    li.appendChild(checkbox);
    li.innerHTML += `${taskValue} <button class="remove-button">X</button> <button class="edit-button">Edit</button>`;
    todoList.appendChild(li);

    taskInput.value = '';
    const removeButton = li.querySelector('.remove-button');
    const editButton = li.querySelector('.edit-button');
    removeButton.addEventListener('click', removeTask);
    editButton.addEventListener('click', editTask);
  };

  const removeCompletedTasks = () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) {
        const li = checkbox.parentNode;
        todoList.removeChild(li);
      }
    });
  };

  addButton.addEventListener('click', addTask);
  completeButton.addEventListener('click', removeCompletedTasks);
});
