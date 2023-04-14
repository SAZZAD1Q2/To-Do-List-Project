const tasks = [
  {
    description: 'Task 1',
    completed: false,
    index: 1,
  },
  {
    description: 'Task 2',
    completed: true,
    index: 2,
  },
  {
    description: 'Task 3',
    completed: false,
    index: 3,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';
  todoList.style.listStyle= 'none';

  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    li.appendChild(checkbox);
    li.innerHTML += task.description;
    todoList.appendChild(li);
  });
});
