const taskInput = document.getElementById('input');
const addButton = document.getElementById('button');
const todoList = document.getElementById('todo-list');
const removeTask = (event) => {
  const li = event.target.parentNode;
  todoList.removeChild(li);
};

const addTask = () => {
  const taskValue = taskInput.value.trim();

  const li = document.createElement('li');
  li.innerHTML = `${taskValue} <button class="remove-button">X</button>`;
  todoList.appendChild(li);

  taskInput.value = '';
  const removeButton = li.querySelector('.remove-button');
  removeButton.addEventListener('click', removeTask);
};

addButton.addEventListener('click', addTask);

export default taskInput;