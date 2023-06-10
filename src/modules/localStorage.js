// Get tasks from local storage or create an empty array
export const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Function to save tasks to local storage
export function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(savedTasks));
}
