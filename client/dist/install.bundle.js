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

/***/ "./src/js/install.js":
/*!***************************!*\
  !*** ./src/js/install.js ***!
  \***************************/
/***/ (() => {

eval("const butInstall = document.getElementById('buttonInstall');\n\n// TODO: Add an event handler to the `beforeinstallprompt` event\nwindow.addEventListener('beforeinstallprompt', (event) => {\n    console.log('hit')\n    console.log('event' + event)\n    event.preventDefault();\n    window.deferredPrompt = event;\n    butInstall.classList.toggle('hidden', false);\n});\n\n// TODO: Implement a click event handler on the `butInstall` element\nbutInstall.addEventListener('click', async () => {\n    const promptEvent = window.deferredPrompt;\n    if (!promptEvent) {\n        return;\n    }\n    promptEvent.prompt();\n\n    window.deferredPrompt = null;\n\n    butInstall.classList.toggle('hidden', true);\n});\n\n// TODO: Add an handler for the `appinstalled` event\nwindow.addEventListener('appinstalled', (event) => {\n    console.log('install hit')\n    window.deferredPrompt = null;\n});\n\n//# sourceURL=webpack://jate/./src/js/install.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/install.js"]();
/******/ 	
/******/ })()
;