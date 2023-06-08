export const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

export function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(savedTasks));
}
const todoList = document.getElementById('todo-list');
export function removeTask(li) {
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

export function editTask(li) {
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

export function renderTasks() {
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
      window.location.reload();
    });

    const editButton = li.querySelector('.edit-button');
    editButton.addEventListener('click', () => {
      editTask(li);
    });
  });
}