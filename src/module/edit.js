import { savedTasks, saveTasks } from './localStorage.js';

// Function to add a new task
export function addTask(description) {
  const task = {
    text: description,
    completed: false,
    index: savedTasks.length + 1,
  };

  savedTasks.push(task);
  saveTasks();
}

// Function to update the indexes of remaining tasks
function updateIndexes() {
  savedTasks.forEach((task, index) => {
    task.index = index + 1;
  });
}

// Function to delete a task
export function deleteTask(index) {
  savedTasks.splice(index, 1);
  updateIndexes();
  saveTasks();
}

// Function to edit a task description
export function editTask(index, newDescription) {
  savedTasks[index].text = newDescription;
  saveTasks();
}
