/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\n  const removeTask = (event) => {\n    const li = event.target.parentNode;\n    todoList.removeChild(li);\n  };\n\n  const editTask = (event) => {\n    const li = event.target.parentNode;\n    const taskValue = li.firstChild.textContent.trim();\n    const newTaskValue = prompt('Edit task:', taskValue);\n    if (newTaskValue !== null && newTaskValue.trim() !== '') {\n      li.firstChild.textContent = newTaskValue.trim();\n    }\n    else {\n      return;\n    }\n  };\n\n  const addTask = () => {\n    const taskValue = taskInput.value.trim();\n\n    const li = document.createElement('li');\n    const checkbox = document.createElement('input');\n    checkbox.type = 'checkbox';\n    li.appendChild(checkbox);\n    li.innerHTML += `${taskValue} <button class=\"remove-button\">X</button> <button class=\"edit-button\">Edit</button>`;\n    todoList.appendChild(li);\n\n    taskInput.value = '';\n    const removeButton = li.querySelector('.remove-button');\n    const editButton = li.querySelector('.edit-button');\n    removeButton.addEventListener('click', removeTask);\n    editButton.addEventListener('click', editTask);\n  };\n\n  const removeCompletedTasks = () => {\n    const checkboxes = document.querySelectorAll('input[type=\"checkbox\"]');\n    checkboxes.forEach((checkbox) => {\n      if (checkbox.checked) {\n        const li = checkbox.parentNode;\n        todoList.removeChild(li);\n      }\n    });\n  };\n\n  addButton.addEventListener('click', addTask);\n  completeButton.addEventListener('click', removeCompletedTasks);\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;