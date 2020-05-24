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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/svg-turkey-map.js":
/*!*******************************!*\
  !*** ./src/svg-turkey-map.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

window.renderSvgTurkeyMap = function () {
  var elementId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'map-svg';
  var infoElementId = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.province-name';
  var element = document.getElementById(elementId);
  var info = document.querySelector(infoElementId);
  element.addEventListener('mouseover', function (event) {
    if (event.target.tagName === 'path' && event.target.parentNode.id !== 'south-cyprus') {
      info.innerHTML = ['<div>', event.target.parentNode.getAttribute('data-name'), '</div>'].join('');
    }
  });
  element.addEventListener('mousemove', function (event) {
    info.style.top = event.pageY + 25 + 'px';
    info.style.left = event.pageX + 'px';
  });
  element.addEventListener('mouseout', function (event) {
    info.innerHTML = '';
  });
  element.addEventListener('click', function (event) {
    if (event.target.tagName === 'path') {
      var parent = event.target.parentNode;
      var id = parent.getAttribute('id');

      if (id === 'south-cyprus') {
        return;
      }

      window.location.href = parent.getAttribute('data-plate-code') ? '#' + id + '-' + parent.getAttribute('data-plate-code') : '#' + id;
    }
  });
};

/***/ }),

/***/ "./src/svg-turkey-map.scss":
/*!*********************************!*\
  !*** ./src/svg-turkey-map.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./src/svg-turkey-map.js ./src/svg-turkey-map.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\Mevlut Canvar\temp-repos\svg-turkey-map\src\svg-turkey-map.js */"./src/svg-turkey-map.js");
module.exports = __webpack_require__(/*! C:\Users\Mevlut Canvar\temp-repos\svg-turkey-map\src\svg-turkey-map.scss */"./src/svg-turkey-map.scss");


/***/ })

/******/ });