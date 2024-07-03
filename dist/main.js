/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initCarousel: () => (/* binding */ initCarousel)\n/* harmony export */ });\n// Function to initialize the carousel functionality\nfunction initCarousel() {\n    let slideIndex = 0; // Variable to keep track of the current slide index\n    const slides = document.querySelectorAll('.carousel-slide'); // Select all slides\n    const dots = document.querySelectorAll('.dot'); // Select all dots\n\n    // Function to show a specific slide\n    function showSlide(index) {\n        // Loop back to the first slide if the index exceeds the number of slides\n        if (index >= slides.length) {\n            slideIndex = 0;\n        } else if (index < 0) { // Loop back to the last slide if the index is negative\n            slideIndex = slides.length - 1;\n        } else {\n            slideIndex = index; // Set the slide index to the given index\n        }\n\n        // Move the carousel to show the current slide\n        document.querySelector('.carousel').style.transform = `translateX(-${slideIndex * 100}%)`;\n\n        // Update the active dot\n        dots.forEach((dot, i) => {\n            dot.classList.toggle('active', i === slideIndex);\n        });\n    }\n\n    // Add click event listener to the next button to show the next slide\n    document.querySelector('.next').addEventListener('click', () => showSlide(slideIndex + 1));\n    // Add click event listener to the previous button to show the previous slide\n    document.querySelector('.prev').addEventListener('click', () => showSlide(slideIndex - 1));\n\n    // Add click event listeners to the dots to jump to the respective slide\n    dots.forEach((dot, index) => {\n        dot.addEventListener('click', () => showSlide(index));\n    });\n\n    // Automatically advance to the next slide every 5 seconds\n    setInterval(() => showSlide(slideIndex + 1), 5000);\n\n    // Initial slide setup\n    showSlide(slideIndex);\n}\n\n\n//# sourceURL=webpack://odin-dynamic-ui/./src/carousel.js?");

/***/ }),

/***/ "./src/dropdown.js":
/*!*************************!*\
  !*** ./src/dropdown.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initDropdown: () => (/* binding */ initDropdown)\n/* harmony export */ });\n// js/dropdown.js\n\n// Function to initialize the dropdown menu functionality\nfunction initDropdown() {\n    // Select all elements with the class 'dropdown-btn' and add a click event listener to each\n    document.querySelectorAll('.dropdown-btn').forEach(button => {\n        button.addEventListener('click', () => {\n            // Toggle the 'visible' class on the dropdown content when the button is clicked\n            const dropdownContent = button.nextElementSibling;\n            dropdownContent.classList.toggle('visible');\n        });\n    });\n\n    // Select all anchor elements within the dropdown content and add a click event listener to each\n    document.querySelectorAll('.dropdown-content a').forEach(item => {\n        item.addEventListener('click', (event) => {\n            // Prevent the default link behavior\n            event.preventDefault();\n            // Change the background color of the body to the color specified in the data-color attribute\n            document.body.style.backgroundColor = item.getAttribute('data-color');\n            // Close the dropdown menu by removing the 'visible' class\n            item.parentElement.classList.remove('visible');\n        });\n    });\n}\n\n\n//# sourceURL=webpack://odin-dynamic-ui/./src/dropdown.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.js */ \"./src/dropdown.js\");\n/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.js */ \"./src/carousel.js\");\nalert('Keep Going...🍊🌊');\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    (0,_dropdown_js__WEBPACK_IMPORTED_MODULE_0__.initDropdown)();\n    (0,_carousel_js__WEBPACK_IMPORTED_MODULE_1__.initCarousel)();\n});\n\n\n//# sourceURL=webpack://odin-dynamic-ui/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;