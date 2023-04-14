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

eval("const tasks = [\n  {\n    description: \"Task 1\",\n    completed: false,\n    index: 1\n  },\n  {\n    description: \"Task 2\",\n    completed: true,\n    index: 2\n  },\n  {\n    description: \"Task 3\",\n    completed: false,\n    index: 3\n  }\n];\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  const todoList = document.getElementById(\"todo-list\");\n  todoList.innerHTML = \"\";\n\n  tasks.sort((a, b) => a.index - b.index);\n\n  tasks.forEach((task) => {\n    const li = document.createElement(\"li\");\n    li.innerHTML = `${task.description} (${task.completed ? \"Completed\" : \"Incomplete\"})`;\n    todoList.appendChild(li);\n  });\n});\n\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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