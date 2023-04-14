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

  tasks.sort((a, b) => a.index - b.index);

  tasks.forEach((task) => {
    const li = document.createElement('li');
    li.innerHTML = `${task.description} (${task.completed ? 'Completed' : 'Incomplete'})`;
    todoList.appendChild(li);
  });
});
