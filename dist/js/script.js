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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_gallerySlider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/gallerySlider.js */ "./src/js/modules/gallerySlider.js");
/* harmony import */ var _modules_hamburger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/hamburger.js */ "./src/js/modules/hamburger.js");
/* harmony import */ var _modules_reviewsSlider_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/reviewsSlider.js */ "./src/js/modules/reviewsSlider.js");





try {
  Object(_modules_gallerySlider_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
} catch (error) {}
try {
  Object(_modules_reviewsSlider_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
} catch (error) {}
Object(_modules_hamburger_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

/***/ }),

/***/ "./src/js/modules/gallerySlider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/gallerySlider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const gallerySlider = () => {
  $(document).ready(function () {
    $('.gallery__slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      centerMode: true,
      centerPadding: '0',
      arrows: true,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      focusOnSelect: true
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (gallerySlider);

/***/ }),

/***/ "./src/js/modules/hamburger.js":
/*!*************************************!*\
  !*** ./src/js/modules/hamburger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hamburger = () => {
  const hamburger = document.querySelector('.hamburger'),
    hamburgerItem = hamburger.querySelectorAll('.hamburger__item'),
    menu = document.querySelector('.menu-mobile'),
    menuItems = document.querySelectorAll('.menu__link'),
    header = document.querySelector('.header'),
    classes = {
      menu: 'menu-mobile_active',
      wrap: 'menu__wrapper_active',
      hide: 'hide',
      left: 'hamburger__item_left',
      right: 'hamburger__item_right'
    };
  function changeClasses(obj, action) {}
  menuItems.forEach(i => {
    i.addEventListener('click', e => {
      menu.classList.remove('menu-mobile_active');
      header.classList.remove('header_active');
      hamburgerItem[2].classList.remove('hide');
      hamburgerItem[0].classList.remove('hamburger__item_left');
      hamburgerItem[1].classList.remove('hamburger__item_right');
    });
  });
  hamburger.addEventListener('click', e => {
    if (menu.classList.contains('menu-mobile_active')) {
      menu.classList.remove('menu-mobile_active');
      header.classList.remove('header_active');
      hamburgerItem[2].classList.remove('hide');
      hamburgerItem[0].classList.remove('hamburger__item_left');
      hamburgerItem[1].classList.remove('hamburger__item_right');
    } else {
      menu.classList.add('menu-mobile_active');
      header.classList.add('header_active');
      hamburgerItem[2].classList.add('hide');
      hamburgerItem[0].classList.add('hamburger__item_left');
      hamburgerItem[1].classList.add('hamburger__item_right');
    }
  });
  header.addEventListener('click', e => {
    if (e.target.classList.contains('header_active')) {
      menu.classList.remove('menu-mobile_active');
      header.classList.remove('header_active');
      hamburgerItem[2].classList.remove('hide');
      hamburgerItem[0].classList.remove('hamburger__item_left');
      hamburgerItem[1].classList.remove('hamburger__item_right');
    }
  });
};
/* harmony default export */ __webpack_exports__["default"] = (hamburger);

/***/ }),

/***/ "./src/js/modules/reviewsSlider.js":
/*!*****************************************!*\
  !*** ./src/js/modules/reviewsSlider.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const reviewsSlider = () => {
  $(document).ready(function () {
    $('.reviews__wrapper_mobile').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      variableWidth: true,
      centerMode: true,
      centerPadding: '0',
      arrows: false,
      focusOnSelect: true
    });
  });
};
/* harmony default export */ __webpack_exports__["default"] = (reviewsSlider);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map