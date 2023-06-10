import './style.css';
import { savedTasks } from './module/localStorage.js';
import { addTask, deleteTask, editTask } from './module/edit.js';

const addButton = document.getElementById('button');
const todoList = document.getElementById('todo-list');

// Function to render the task list
function renderTasks() {
  todoList.innerHTML = '';
  savedTasks.forEach((task, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    li.appendChild(checkbox);
    li.innerHTML += `${task.text} <button class="remove-button">X</button> <button class="edit-button">Edit</button>`;
    todoList.appendChild(li);

    const removeButton = li.querySelector('.remove-button');
    removeButton.addEventListener('click', () => {
      deleteTask(index);
      renderTasks();
    });

    const editButton = li.querySelector('.edit-button');
    editButton.addEventListener('click', () => {
      editTask(index, prompt('Enter new task description'));
      renderTasks();
    });
  });
}

// Function to handle the addition of a new task
function handleAddTask() {
  const taskInput = document.getElementById('inputTask');
  const taskValue = taskInput ? taskInput.value.trim() : '';

  if (taskValue) {
    addTask(taskValue);
    renderTasks();
    taskInput.value = '';
  }
}

addButton.addEventListener('click', handleAddTask);

renderTasks();
