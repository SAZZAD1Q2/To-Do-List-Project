const tasks = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'Completed TO Do list project',
    completed: true,
    index: 2,
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const todoList = document.getElementById('todo-list');
  todoList.innerHTML = '';
  todoList.style.listStyle = 'none';

  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.style.border = '1px solid #ddd';
    li.style.display = 'block';
    li.style.padding = '10px 0px 10px 50px';
    li.style.marginLeft = '-40px';
    li.style.marginRight = '50vw';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    li.appendChild(checkbox);
    li.innerHTML += task.description;
    todoList.appendChild(li);
  });
});
