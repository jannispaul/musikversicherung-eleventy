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
/* harmony import */ var _modules_cookie_notice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/cookie-notice */ "./resources/js/modules/cookie-notice/index.js");
/* harmony import */ var _modules_notice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/notice */ "./resources/js/modules/notice/index.js");
/* harmony import */ var _modules_schaden_melden__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/schaden-melden */ "./resources/js/modules/schaden-melden/index.js");
// Import local modules
 // import "@modules/lazyload";





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
// const cookieNotice = (function cookieNotice() {
//   document.addEventListener(
//     "click",
//     function(event) {
//       // If the clicked element doesn't have the right selector, bail
//       if (!event.target.matches("[data-accept-cookies]")) return;
//       // Don't follow the link
//       event.preventDefault();
//       // Log the clicked element in the console
//       console.log(event.target);
//     },
//     false
//   );
// })();
// export default cookieNotice;
var cookieNotice = function cookieNotice() {
  // When in client browser, run getCookie to look for "cookiesAccepted"
  function checkCookie() {
    var name = "cookiesAccepted";
    var localCookie = getCookie(name);
    localCookie ? hideCookieNotice() : "";
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
    var cookieName = "cookiesAccepted";
    var cookieValue = true;
    var daysValid = 365;
    setCookie(cookieName, cookieValue, daysValid);
    hideCookieNotice();
  }

  function hideCookieNotice() {
    // Get cookieNotice element from dom
    var cookieNotice = document.querySelector("[data-cookie-notice]"); // Add hidden class

    cookieNotice.classList.add("hidden"); // remove display:flex class

    cookieNotice.classList.remove("md:flex");
  }

  document.addEventListener("click", function (event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches("[data-accept-cookies]")) return; // Run acceptCookies function

    acceptCookies(); // Don't follow the link
    // event.preventDefault();
    // Log the clicked element in the console
    // console.log(event.target);
  }, false);
}();

/* harmony default export */ __webpack_exports__["default"] = (cookieNotice);

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

/***/ "./resources/js/modules/notice/index.js":
/*!**********************************************!*\
  !*** ./resources/js/modules/notice/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var notice = function notice() {
  // When in client browser, run getCookie to look for "cookiesAccepted"
  function checkCookie() {
    var name = "hideNotice";
    var localCookie = getCookie(name);
    localCookie ? hideNotice() : "";
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
  } // On click, set hidenotice cookie


  function acceptNotice() {
    var cookieName = "hideNotice";
    var cookieValue = true;
    var daysValid = 10;
    setCookie(cookieName, cookieValue, daysValid);
    hideNotice();
  }

  function hideNotice() {
    // Get notice element from dom
    var notice = document.querySelector("[data-notice]"); // Add hidden class

    notice.classList.add("hidden"); // remove display:flex class

    notice.classList.remove("md:flex");
  }

  document.addEventListener("click", function (event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches("[data-hide-notice]")) return; // Run hideNotice function

    acceptNotice();
  }, false);
}();

/* harmony default export */ __webpack_exports__["default"] = (notice);

/***/ }),

/***/ "./resources/js/modules/schaden-melden/index.js":
/*!******************************************************!*\
  !*** ./resources/js/modules/schaden-melden/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var schadenMelden = function schadenMelden() {
  // This script handles form pages called tabs, adding instruments to the list and saves the form's state to localstorage
  // Set variables
  var currentTab = 0; // Current tab is set to be the first tab (0)

  showTab(currentTab); // Display the current tab

  var instrumentCount = 1; // Instrument counter starts with 1 instrument

  var incrementInstrumentCount = function incrementInstrumentCount() {
    return instrumentCount++;
  }; // Increment instrument count
  // Add instrument


  function addInstrument() {
    // Increment count
    incrementInstrumentCount(); // Single instrument html to add more instruments

    var singleInstrument = "<div class=\"single-instrument\">  \n        <label>\n          Instrument\n          <input oninput=\"this.className = ''\" name=\"instrument".concat(instrumentCount, "\"  autofocus />\n        </label>\n        <div class=\"switch\">\n          <p class=\"\">\n            <input type=\"radio\" name=\"type").concat(instrumentCount, "\" id=\"match_1").concat(instrumentCount, "\" value=\"neuwert\" checked>\n            <label for=\"match_1").concat(instrumentCount, "\">\n                Neuwert\n            </label>\n          </p>\n          <p class=\"\">\n              <input type=\"radio\" name=\"type").concat(instrumentCount, "\" id=\"match_2").concat(instrumentCount, "\" value=\"zeitwert\">\n              <label for=\"match_2").concat(instrumentCount, "\">\n                Zeitwert\n              </label>\n          </p>\n        </div>\n        <label>\n          Wert\n          <input oninput=\"this.className = ''\" name=\"value").concat(instrumentCount, "\"  />\n        </label>\n      </div>"); // Add to DOM

    document.querySelector(".instrument-list").insertAdjacentHTML("beforeend", singleInstrument);
  }

  function showTab(n) {
    // This function will display the specified tab of the form...
    var tabs = document.getElementsByClassName("tab");
    if (n === tabs.length) return;
    tabs[n].style.display = "block"; //... and fix the Previous/Next buttons:

    if (n == 0) {
      document.getElementById("prevBtn").style.display = "none";
    } else {
      document.getElementById("prevBtn").style.display = "inline";
    }

    if (n == tabs.length - 1) {
      document.getElementById("nextBtn").innerHTML = "Absenden";
    } else {
      document.getElementById("nextBtn").innerHTML = "Weiter";
    } //... and run a function that will display the correct step indicator:


    {
      {
        /*  fixStepIndicator(n);  */
      }
    }
  }

  function nextPrev(n) {
    // This function will figure out which tab to display
    var tabs = document.getElementsByClassName("tab"); // Exit the function if any field in the current tab is invalid:

    if (n == 1 && !validateForm()) return false; // Hide the current tab:
    // if (n !== tabs.length) {

    tabs[currentTab].style.display = "none"; // }
    // Increase or decrease the current tab by 1:

    currentTab = currentTab + n; // if you have reached the end of the form...

    if (currentTab >= tabs.length) {
      // ... the form gets submitted:
      //   document.getElementById("form").submit();
      document.getElementById("form").dispatchEvent(new Event("submit", {
        bubbles: true
      }));
      return false;
    } // Otherwise, display the correct tab:


    showTab(currentTab);
  }

  function validateForm() {
    // This function deals with validation of the form fields
    var tabs,
        requiredInputsInTab,
        i,
        valid = true;
    tabs = document.getElementsByClassName("tab");
    {
      {
        document.querySelectorAll("input[required]");
      }
    } // Set required inputs in tab

    requiredInputsInTab = tabs[currentTab].querySelectorAll("input[required], textarea[required]"); // A loop that checks every input field in the current tab:

    for (i = 0; i < requiredInputsInTab.length; i++) {
      // If a field is empty...
      if (requiredInputsInTab[i].value == "") {
        // if field doesnt have invalid class
        if (!requiredInputsInTab[i].classList.contains("invalid")) {
          // add an "invalid" class to the field:
          requiredInputsInTab[i].classList.add("invalid");
        } // and set the current valid status to false


        valid = false;
      }

      if ( // if field is checkbox and not checked
      requiredInputsInTab[i].type == "checkbox" && !requiredInputsInTab[i].checked) {
        // if field doesnt have invalid class
        if (!requiredInputsInTab[i].classList.contains("invalid")) {
          // add an "invalid" class to the field:
          requiredInputsInTab[i].classList.add("invalid");
        } // and set the current valid status to false


        valid = false;
      }

      if ( // if field is not empty and has invalid class
      !requiredInputsInTab[i].value == "" && requiredInputsInTab[i].type != "checkbox" && requiredInputsInTab[i].classList.contains("invalid")) {
        // remove the invalid class
        requiredInputsInTab[i].classList.remove("invalid");
      } else if ( // if field is a checkbox, checked and has invalid class
      requiredInputsInTab[i].type == "checkbox" && requiredInputsInTab[i].checked && requiredInputsInTab[i].classList.contains("invalid")) {
        requiredInputsInTab[i].classList.remove("invalid");
      }
    }

    return valid; // return the valid status
  } // Catch all clicks on form


  document.addEventListener("click", function (event) {
    // If user clicks "add instrument"-buttton
    if (event.target.matches('button[data-name="addInstrument"]')) {
      // Disable "add instrument" button at 10 slots
      if (instrumentCount > 9) {
        document.querySelector('button[data-name="addInstrument"]').setAttribute("disabled", "disabled");
      } // Add instrument


      addInstrument(); // Set focus to newly created instrument field

      document.querySelector(".single-instrument:last-of-type input").focus(); // Get existing data from localStorage

      var saved = localStorage.getItem(storageID);
      saved = saved ? JSON.parse(saved) : {}; // Save the insrumentCounter to it

      saved.instrumentCount = instrumentCount; // Save the object back to localStorage

      localStorage.setItem(storageID, JSON.stringify(saved));
    } // Show / hide input andd price calculation for IM SOUND


    var totalValueLabel = document.getElementById("totalValue");

    if (event.target.matches("[data-imsound]")) {
      // Reveal the hidden totalValue field...
      if (totalValueLabel.classList.contains("hidden")) {
        totalValueLabel.classList.remove("hidden");
        document.querySelector('input[name="totalValue"]').setAttribute("required", "required");
      }

      return;
    }

    if (event.target.matches("[data-sinfonima]")) {
      // Hide totalValue field
      if (!totalValueLabel.classList.contains("hidden")) {
        totalValueLabel.className += "hidden";
        totalValueLabel.removeAttribute("required");
        document.querySelector('input[name="totalValue"]').removeAttribute("required");
      }

      return;
    }
  }); // Automatically saving form
  // Variables

  var storageID = "form-auto-save"; // Methods

  /**
   * Get an ID for a field
   * @param  {Node}   field The field
   * @return {String}       The ID
   */

  var getName = function getName(field) {
    if (field.name.length > 0) {
      return field.name;
    }

    if (field.id.length > 0) {
      return field.id;
    }

    return null;
  }; // Load saved form data from localStorage


  var loadData = function loadData() {
    // Get localStorage data
    var saved = localStorage.getItem(storageID);
    if (!saved) return;
    saved = JSON.parse(saved); // Check if instruments had been added previously

    if (saved.instrumentCount != instrumentCount) {
      // Add instruments until the count is equal
      while (instrumentCount <= saved.instrumentCount) {
        // Add instrument
        addInstrument();
      }
    } // Get all of the form fields


    var fields = document.querySelectorAll("[data-auto-save] input, [data-auto-save] textarea, [data-auto-save] select"); // Loop through each field and load any saved data in localStorage

    Array.prototype.slice.call(fields).forEach(function (field) {
      // If the field has no usable ID, skip it
      var name = getName(field);
      if (!name) return; // Skip the files input as the File object cannot be stored in localstorage

      if (name == "files") return; // If there's no saved data in localStorage, skip it

      if (!saved[name]) return; // Set the field value to the saved data in localStorage
      // If it's a checkbox, set it's checked state
      // If it's a radio button and its value matches, set its checked state
      // Otherwise, set the value

      if (field.type === "checkbox") {
        field.checked = saved[name] === "on" ? true : false;
      } else if (field.type === "radio") {
        field.checked = saved[name] === field.value ? true : false;
      } else {
        field.value = saved[name];
      }
    });
  };
  /**
   * Handle input events
   * @param  {Event} event The event object
   */


  var inputHandler = function inputHandler(event) {
    // Only run for fields in the [data-auto-save] form
    if (!event.target.closest("[data-auto-save]")) return; // Get an ID for the field

    var name = getName(event.target);
    if (!name) return; // Get existing data from localStorage

    var saved = localStorage.getItem(storageID);
    saved = saved ? JSON.parse(saved) : {}; // Add the field to the localStorage object
    // If it's a checkbox, use on/off values
    // Otherwise, save the value

    if (event.target.type === "checkbox") {
      saved[name] = event.target.checked ? "on" : "off";
    } else {
      saved[name] = event.target.value;
    } // Save the object back to localStorage


    localStorage.setItem(storageID, JSON.stringify(saved));
  };
  /**
   * Handle submit events
   * @param  {Event} event The event object
   */


  var submitHandler = function submitHandler(event) {
    // Prevent default form submit
    // event.preventDefault();
    // Ignore forms that are actively being submitted
    if (event.target.classList.contains("submitting")) return; // Show submitting message

    var status = event.target.querySelector("[data-submit]");
    status.innerHTML = "Submitting..."; // Add form .submitting state class for styling

    event.target.classList.add("submitting"); // Confige fetch request options

    var requestOptions = {
      method: "POST",
      body: new FormData(event.target),
      redirect: "follow"
    }; // Post to formbackend
    // fetch("https://www.formbackend.com/f/706ac99a74b44def", requestOptions)

    fetch("https://1454459a-1de0-4477-9d83-6534dee946eb.mock.pstmn.io/v1", requestOptions).then(function (response) {
      // If response is ok
      if (response.ok) {
        // redirect to schaden-gemeldet page and remove
        window.location.href = "/schaden-gemeldet/"; // Clear saved formdata from localstorage
        // localStorage.removeItem(storageID);
      }
    }) // If there is an error log it to console and reidrect to fehler page
    ["catch"](function (error) {
      console.error("Error: ", error);
      window.location.href = "/fehler/";
    });
  }; // Inits & Event Listeners
  // Load saved data from storage


  loadData(); // Listen for input events

  document.addEventListener("input", inputHandler, false); // Listen for submit events
  //   document.addEventListener("submit", submitHandler, false);

  document.addEventListener("submit", submitHandler, false); // Listen for tab navigation button clicks

  document.addEventListener("click", function (event) {
    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches("#nextBtn") && !event.target.matches("#prevBtn")) return; //   If

    if (event.target.matches("#nextBtn")) {
      nextPrev(1);
    } else if (event.target.matches("#prevBtn")) {
      nextPrev(-1);
    }
  }, false);
}();

/* harmony default export */ __webpack_exports__["default"] = (schadenMelden);

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