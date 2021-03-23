/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/api-handler.js":
/*!****************************!*\
  !*** ./src/api-handler.js ***!
  \****************************/
/*! exports provided: getGames, getGameById, getCommentsOfGame */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGames\", function() { return getGames; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getGameById\", function() { return getGameById; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getCommentsOfGame\", function() { return getCommentsOfGame; });\n//TODO: #1 implementar api. Mirar en documentación\r\nconst endpoint = 'http://localhost:3000';\r\n\r\nconst getGames = async () => {\r\n  const response = await fetch(`${endpoint}/games`);\r\n  return response.json();\r\n}\r\n\r\nconst getGameById = async (gameId) => {\r\n  const response = await fetch(`${endpoint}/games/${gameId}`);\r\n  return response.json();\r\n}\r\n\r\nconst getCommentsOfGame = async (gameId) => {\r\n  const response = await fetch(`${endpoint}/games/${gameId}/comments?_expand=user`);\r\n  return response.json();\r\n}\r\n\n\n//# sourceURL=webpack:///./src/api-handler.js?");

/***/ }),

/***/ "./src/details.js":
/*!************************!*\
  !*** ./src/details.js ***!
  \************************/
/*! exports provided: drawGame, drawComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawGame\", function() { return drawGame; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawComments\", function() { return drawComments; });\n/* harmony import */ var _api_handler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-handler.js */ \"./src/api-handler.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\r\n\r\n\r\nasync function drawGame(gameId) {\r\n    let game = await Object(_api_handler_js__WEBPACK_IMPORTED_MODULE_0__[\"getGameById\"])(gameId);\r\n    document.getElementById('game-name-title').innerHTML = game.name;\r\n    // TODO: #4 breadcrumb???? Let's use jQuery!!\r\n    $(\".breadcrumb span\").html(`Game ${game.id}`);\r\n    document.getElementById('game-image').src = game.image;\r\n    document.getElementById('game-image').alt = game.name;\r\n  \r\n    document.getElementById('metacritic-score').innerHTML = game.scores.metacritic;\r\n    document.getElementById('user-score').innerHTML = game.scores.userScore;\r\n  \r\n    document.getElementById('summary').innerHTML = game.summary;\r\n  \r\n    document.getElementById('platform').innerHTML = game.platform;\r\n    document.getElementById('release-date').innerHTML = game.relaseDate;\r\n  \r\n  }\r\n  \r\n  // TODO: #2 Pedir ayuda para generateCommentSnippet\r\n  async function drawComments(gameId) {\r\n    console.log(gameId)\r\n    let comments = await Object(_api_handler_js__WEBPACK_IMPORTED_MODULE_0__[\"getCommentsOfGame\"])(gameId);\r\n    document.getElementById('comments')\r\n        .appendChild(document.createElement('ul'))\r\n        .setAttribute('id', 'comments-list');\r\n    var i = 0;\r\n    for (i; i < comments.length; i++) {\r\n        document.getElementById('comments-list')\r\n            .appendChild(document.createElement('li')).innerHTML = Object(_functions_js__WEBPACK_IMPORTED_MODULE_1__[\"generateCommentSnippet\"])(comments[i]);\r\n    }\r\n  }\r\n  \n\n//# sourceURL=webpack:///./src/details.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: generateCommentSnippet, generateGameSnippet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateCommentSnippet\", function() { return generateCommentSnippet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"generateGameSnippet\", function() { return generateGameSnippet; });\nfunction generateCommentSnippet(comment) {\r\n    return `<div class=\"row\">\r\n      <div class=\"col col-2\">\r\n        <div class=\"image-container text-right\">\r\n          <img class=\"avatar rounded\" src=\"${comment.user.image}\" alt=\"${comment.user.name}\" />\r\n        </div>\r\n      </div>\r\n      <div class=\"col col-10\">\r\n        <div class=\"user-name-container\">\r\n          <h4 class=\"text-muted\">${comment.user.name}</h4>\r\n        </div>\r\n        <div class=\"comment-body-container\">\r\n          ${comment.body}\r\n        </div>\r\n        <div class=\"date-container\">\r\n          Comment date: <b>${comment.commentDate}</b>\r\n        </div>\r\n      </div>\r\n    </div>`;\r\n  }\r\n  \r\n  // TODO: #4 Dar más información que una lista (imagen, nombre, primeros 100 caracteres de summary)\r\n  function generateGameSnippet(game) {\r\n    return `<div class=\"game-snippet\">\r\n    <a href=\"/detail.html?id=${game.id}\">\r\n      <div class=\"game-snippet-container\">\r\n        <img class=\"img-thumbnail\" id=\"game-${game.id}\" src=\"${game.image}\" alt=\"Cover of game ${game.name}\" />\r\n      </div>\r\n      <h3 class=\"game-name\">${game.name}</h3>\r\n    </a>\r\n  </div>`;\r\n  }\n\n//# sourceURL=webpack:///./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: drawListGames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawListGames\", function() { return drawListGames; });\n/* harmony import */ var _api_handler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api-handler.js */ \"./src/api-handler.js\");\n/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions.js */ \"./src/functions.js\");\n\r\n\r\n\r\nasync function drawListGames() { \r\n  let games = await Object(_api_handler_js__WEBPACK_IMPORTED_MODULE_0__[\"getGames\"])();\r\n  const newDiv = document.createElement('div');\r\n  newDiv.setAttribute('id', 'games-list');\r\n  newDiv.setAttribute('class', 'row');\r\n  document.getElementById('games').appendChild(newDiv);\r\n\r\n  var i = 0;\r\n  for (i; i < games.length; i++) {\r\n    let snippetContainer = document.createElement('div');\r\n    snippetContainer.setAttribute('class', 'col-6 col-sm-3');\r\n\r\n    document.getElementById('games-list')\r\n    .appendChild(snippetContainer).innerHTML = Object(_functions_js__WEBPACK_IMPORTED_MODULE_1__[\"generateGameSnippet\"])(games[i]);\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ 0:
/*!*********************************************!*\
  !*** multi ./src/index.js ./src/details.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/index.js */\"./src/index.js\");\nmodule.exports = __webpack_require__(/*! ./src/details.js */\"./src/details.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js_./src/details.js?");

/***/ })

/******/ });