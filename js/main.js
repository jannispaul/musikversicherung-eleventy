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

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_mobile_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @modules/mobile-nav */ "./resources/js/modules/mobile-nav/index.js");
/* harmony import */ var _modules_mobile_nav__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_mobile_nav__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_lazyload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/lazyload */ "./resources/js/modules/lazyload/index.js");
/* harmony import */ var _modules_cookie_notice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/cookie-notice */ "./resources/js/modules/cookie-notice/index.js");
// Import local modules




/***/ }),

/***/ "./resources/js/modules/cookie-notice/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/modules/cookie-notice/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// import $$ from "@utilities/selectors";
var cookieNotice = function cookieNotice() {
  var cookiesAccepted = true; // When in client browser, run getCookie to look for "cookiesAccepted"

  function checkCookie() {
    var name = "cookiesAccepted";
    var localCookie = getCookie(name);
    localCookie ? cookiesAccepted = localCookie : cookiesAccepted = false; // cookiesAccepted = getCookie(name);

    console.log("yo");
  }

  checkCookie(); // Initializing function to set a cookie

  function setCookie(name, value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  } // Initializing function to get a cookie


  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");

    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];

      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }

      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }

    return "";
  } // On click, set cookiesAccepted to true and run setCookie


  function acceptCookies() {
    cookiesAccepted = true;
    var cookieName = "cookiesAccepted";
    var cookieValue = true;
    var daysValid = 365;
    setCookie(cookieName, cookieValue, daysValid);
    document.querySelector(["data-cookie-notice"]).setAttribute("hidden", "");
  }
};

/* harmony default export */ __webpack_exports__["default"] = (cookieNotice);

/***/ }),

/***/ "./resources/js/modules/lazyload/index.js":
/*!************************************************!*\
  !*** ./resources/js/modules/lazyload/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");
/* harmony import */ var _utilities_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @utilities/helpers */ "./resources/js/utilities/helpers/index.js");



var Lazyload = function Lazyload() {
  // lazyload our images
  var images = _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].wrapper.querySelectorAll("[data-lazy]");

  if (Object(_utilities_helpers__WEBPACK_IMPORTED_MODULE_1__["exists"])(images)) {
    // options
    var options = {
      threshold: 0.5
    };

    var preloadImage = function preloadImage(img) {
      // find and store the image's data-lazy attribute
      // commented out for now, but if you want to go the extra mile, then you can do all the srcset attribute stuff on the images ;)
      // const srcset = img.dataset.srcset
      var src = img.dataset.lazy;
      img.src = src; // img.srcset = srcset
      // add a class of loaded
      // we can then use this as a hook for fade-in animations etc

      img.classList.add("loaded");
    };

    var lazyLoad = new IntersectionObserver(function (entries, lazyLoad) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          preloadImage(entry.target);
          lazyLoad.unobserve(entry.target);
        }
      });
    }, options);
    images.forEach(function (image) {
      lazyLoad.observe(image);
    });
  }
}();

/* harmony default export */ __webpack_exports__["default"] = (Lazyload);

/***/ }),

/***/ "./resources/js/modules/mobile-nav/index.js":
/*!**************************************************!*\
  !*** ./resources/js/modules/mobile-nav/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// import $$ from "@utilities/selectors";
// const MobileNav = (function MobileNav() {
//   $$.mobileNavToggle.addEventListener("click", function() {
//     this.classList.toggle("menu-toggle-active");
//     $$.mobileNav.classList.toggle("menu-visible");
//     // set aria-expanded attribute on menu toggle button
//     if (this.getAttribute("aria-expanded") === "false") {
//       this.setAttribute("aria-expanded", "true");
//     } else {
//       this.setAttribute("aria-expanded", "false");
//     }
//   });
// })();
// export default MobileNav;

/***/ }),

/***/ "./resources/js/utilities/helpers/index.js":
/*!*************************************************!*\
  !*** ./resources/js/utilities/helpers/index.js ***!
  \*************************************************/
/*! exports provided: page, exists */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "page", function() { return page; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exists", function() { return exists; });
/* harmony import */ var _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @utilities/selectors */ "./resources/js/utilities/selectors/index.js");

/**
 * @description Test if the body id is something
 * @param  		{string}
 * @return 		{bool}
 *
 */

var page = function page(name) {
  if (!name) {
    return _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].body.getAttribute('id');
  }

  return _utilities_selectors__WEBPACK_IMPORTED_MODULE_0__["default"].body.getAttribute('id') == name;
};
/**
 * @description Check if element exists the page
 * @param  		{string} Element selector
 * @param  		{string} Minimum number of elements
 * @return 		{bool}
 */


var exists = function exists(el, limit) {
  return el.length > 0;
};



/***/ }),

/***/ "./resources/js/utilities/selectors/index.js":
/*!***************************************************!*\
  !*** ./resources/js/utilities/selectors/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var $$ = {
  body: document.querySelector("body"),
  wrapper: document.getElementById("wrapper"),
  header: document.getElementById("header"),
  nav: document.getElementById("nav"),
  hero: document.getElementById("hero"),
  main: document.getElementById("main"),
  containerCentre: document.getElementById("container-centre"),
  containerRight: document.getElementById("container-right"),
  preFooter: document.getElementById("pre-footer"),
  footer: document.getElementById("footer"),
  //   mobileNav: document.getElementById("mobile-nav"),
  //   mobileNavToggle: document.getElementById("mobile-nav-toggle"),
  acceptCookies: document.querySelector("[data-accept-cookies]")
};
/* harmony default export */ __webpack_exports__["default"] = ($$);

/***/ }),

/***/ "./resources/sass/main.scss":
/*!**********************************!*\
  !*** ./resources/sass/main.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!***************************************************************!*\
  !*** multi ./resources/js/main.js ./resources/sass/main.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jay/Downloads/11tty startter w tailwind/skeleventy-master/resources/js/main.js */"./resources/js/main.js");
module.exports = __webpack_require__(/*! /Users/jay/Downloads/11tty startter w tailwind/skeleventy-master/resources/sass/main.scss */"./resources/sass/main.scss");


/***/ })

/******/ });