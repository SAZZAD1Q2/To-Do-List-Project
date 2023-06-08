import './style.css';

const listContainer = document.querySelector('.container');

const tasks = [
  {
    index: 0,
    description: 'Read',
    completed: false,
  },
  {
    index: 1,
    description: 'Write',
    completed: false,
  },
  {
    index: 2,
    description: 'play ball',
    completed: false,
  },
  {
    index: 3,
    description: 'Watch tv',
    completed: false,
  },
];


const displayTask = (tasks) => {
  listContainer.innerHTML = '';

  tasks.forEach((task) => {
    const listItem = document.createElement('div');
    listItem.classList.add('list');
    listItem.draggable = true;

    const content = document.createElement('div');
    content.classList.add('content');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('box');

    const description = document.createElement('input');
    description.type = 'text';
    description.value = task.description;

    content.appendChild(checkbox);
    content.appendChild(description);

    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-ellipsis-vertical', 'icon');

    listItem.appendChild(content);
    listItem.appendChild(icon);

    listContainer.appendChild(listItem);
  });
};

displayTask(tasks);
