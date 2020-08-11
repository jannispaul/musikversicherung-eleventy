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
/* harmony import */ var _modules_cookie_notice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @modules/cookie-notice */ "./resources/js/modules/cookie-notice/index.js");
/* harmony import */ var _modules_notice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @modules/notice */ "./resources/js/modules/notice/index.js");
/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @modules/forms */ "./resources/js/modules/forms/index.js");
// Import local modules
 // import "@modules/lazyload";



 // import "@modules/anfrage";

/***/ }),

/***/ "./resources/js/modules/cookie-notice/index.js":
/*!*****************************************************!*\
  !*** ./resources/js/modules/cookie-notice/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    var cookieNotice = document.querySelector("[data-cookie-notice]"); // Check if cookieNotice is defined

    if (cookieNotice) {
      // Add hidden class
      cookieNotice.classList.add("hidden"); // remove display:flex class

      cookieNotice.classList.remove("md:flex");
    }
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

/***/ "./resources/js/modules/forms/index.js":
/*!*********************************************!*\
  !*** ./resources/js/modules/forms/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = function forms() {
  // This script handles form pages called tabs, adding instruments to the list and saves the form's state to localstorage and loads it
  // Set variables
  // Current tab is set to be the first tab (0)
  var currentTab = 0; // Display the current tab

  showTab(currentTab); // Instrument counter starts with 0 instrument

  var instrumentCount = 0; // Increment instrument count

  var incrementInstrumentCount = function incrementInstrumentCount() {
    return instrumentCount++;
  }; // DOM-Elements as variables


  var totalValueLabel = document.querySelector("[data-totalValue]");
  var totalValueInput = document.querySelector('input[name="gesamtWert"]');
  var organizationLabel = document.querySelector("label[data-organization]");
  var organizationSelect = document.querySelector("select[data-organization]");
  var customOrganizationLabel = document.querySelector("label[data-customorganization]");
  var customOrganizationInput = document.querySelector("input[data-customorganization]");
  var imSoundSection = document.querySelector("div[data-imsoundsection]");
  var sinfonimasection = document.querySelector("div[data-sinfonimasection]");
  var customCountryLabel = document.querySelector("label[data-customCountry]");
  var customCountryInput = document.querySelector("input[data-customCountry]");
  var musikerhaftpflichtLabel = document.querySelector("div[data-musikerhaftpflicht]");
  var probeRaumOrtLabel = document.querySelector("div[data-proberaumort]");
  var probeRaumBeschreibungLabel = document.querySelector("label[data-proberaumbeschreibung]"); // Add instrument

  function addInstrument() {
    // Increment instrument count
    incrementInstrumentCount(); // Single instrument html to add more instruments

    var singleInstrument = "<div class=\"single-instrument flex flex-wrap md:flex-no-wrap items-end mb-x1p5 md:mb-x0p5\">\n  <label class=\"flex md:flex-grow flex-col items-start flex-none md:flex-auto w-full md:w-1/2 md:mr-x0p5\">\n    Instrument / Zubeh\xF6r ".concat(instrumentCount, "\n    <input\n      name=\"instrument").concat(instrumentCount, "\"\n      type=\"text\"\n      class=\"w-full \"\n      autofocus />\n  </label>\n  <label\n    class=\"flex flex-col flex-grow-0 flex-1 order-1 mr-x0p5 w-2/6 md:w-auto\n    md:w-1/6\">\n    Wert in \u20AC\n    <input\n      type=\"number\"\n      name=").concat("value" + instrumentCount, "\n      pattern=\"d*\"/>\n  </label>\n  <div class=\"toggle flex order-2 md:order-2\">\n    <input\n      type=\"radio\"\n      name=").concat("valueType" + instrumentCount, "\n      value=\"Neuwert\"\n      id=").concat("neuwert" + instrumentCount, " />\n    <label\n      class=\"option overlap flex-1 small\"\n      for=").concat("neuwert" + instrumentCount, ">\n      <p>Neuwert</p>\n    </label>\n    <!-- <label for=\"Zeitwert\"> -->\n    <input\n      type=\"radio\"\n      name=").concat("valueType" + instrumentCount, "\n      value=\"Zeitwert\"\n      id=").concat("zeitwert" + instrumentCount, " />\n    <label\n      class=\"option flex-1 small\"\n      for=").concat("zeitwert" + instrumentCount, ">\n      <p>Zeitwert</p>\n    </label>\n  </div>\n</div>"); // Add to DOM after class singleInstrument

    if (storageID === "anfrage-form") {
      document.querySelector(".instrument-list").insertAdjacentHTML("beforeend", singleInstrument);
    }
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

    if (n == 1 && !validateForm()) return false; // Hide the current tab if its not the last:

    if (n !== tabs.length) {
      tabs[currentTab].style.display = "none";
    } // Increase or decrease the current tab by 1:


    currentTab = currentTab + n; // if you have reached the end of the form...

    if (currentTab >= tabs.length) {
      // ... the form gets submitted:
      //   document.getElementById("form").submit();
      document.querySelector("form").dispatchEvent(new Event("submit", {
        bubbles: true
      }));
      return false;
    } // Otherwise, display the correct tab:


    showTab(currentTab);
    window.scrollTo({
      top: 0
    });
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
      if (instrumentCount < 10) {
        // Add instrument
        addInstrument(); // Set focus to newly created instrument field

        document.querySelector(".single-instrument:last-of-type input").focus();
      } else {
        document.querySelector('button[data-name="addInstrument"]').setAttribute("disabled", "disabled");
      } // Get existing data from localStorage


      var saved = localStorage.getItem(storageID);
      saved = saved ? JSON.parse(saved) : {}; // Save the insrumentCounter to it

      saved.instrumentCount = instrumentCount; // Save the object back to localStorage

      localStorage.setItem(storageID, JSON.stringify(saved));
    }
  }); // Conditional fields based on drop downs

  document.addEventListener("change", function (event) {
    // Reveal Sinfonima fields and section
    if (event.target.matches("#SINFONIMA")) {
      // Hide totalValue field
      sinfonimaState();
      return;
    }

    if (event.target.matches("#IAMSOUND")) {
      // Reveal IMSOUND fields and section
      iamsoundState();
      return;
    } // If residency is in other country show custom country input


    if (event.target.matches("select[data-residency]")) {
      if (event.target.value === "anderes Land") showElement(customCountryLabel, customCountryInput); // if it is not another country hide custom country input

      if (event.target.value !== "anderes Land") hideElement(customCountryLabel, customCountryInput);
    } // If organization is set to sonstige show custom input


    if (event.target.matches("select[data-organization]")) {
      if (event.target.value === "Sonstige") showElement(customOrganizationLabel, customOrganizationInput); // If organization is not set to sonstige hide custom input

      if (event.target.value !== "Sonstige") hideElement(customOrganizationLabel, customOrganizationInput);
    } // If proberaum vorhanden show if


    if (event.target.matches("input[name='proberaum']")) {
      if (event.target.value === "ja") showElement(probeRaumOrtLabel); // If proberaum is not used hide further proberaum inputs

      if (event.target.value !== "ja") hideElement(probeRaumOrtLabel) & hideElement(probeRaumBeschreibungLabel);
    } // If proberaum is not in an inhabitat building show description input


    if (event.target.matches("input[name='bewohnt']")) {
      if (event.target.value !== "ja") showElement(probeRaumBeschreibungLabel); // If proberaum is in a inhabitat building hide description input

      if (event.target.value === "ja") hideElement(probeRaumBeschreibungLabel);
    } // If verdient Geld changes


    if (event.target.matches("input[name='verdient-geld']")) {
      if (event.target.value === "ja") showElement(musikerhaftpflichtLabel); // If organization is not set to sonstige hide custom input

      if (event.target.value !== "ja") hideElement(musikerhaftpflichtLabel);
    }
  });

  function showElement(element, requiredElement) {
    if (element.classList.contains("hidden")) {
      element.classList.remove("hidden");

      if (requiredElement) {
        requiredElement.setAttribute("required", "required");
      }
    }
  }

  function hideElement(element, nonRequiredElement) {
    if (!element.classList.contains("hidden")) {
      element.classList.add("hidden");

      if (nonRequiredElement) {
        nonRequiredElement.removeAttribute("required", "required");
      }
    }
  } // Automatically saving form
  // Variables


  if (document.querySelector("[data-auto-save]")) {
    var storageID = document.querySelector("[data-auto-save]").id;
  } // Methods

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
    addInstrument(); // Get localStorage data

    var saved = localStorage.getItem(storageID);
    if (!saved) return;
    saved = JSON.parse(saved); // Check if instruments had been added previously

    if (saved.instrumentCount != instrumentCount) {
      // Add instruments until the count is equal
      while (instrumentCount <= saved.instrumentCount) {
        // Add instrument
        addInstrument();
      }
    }

    if (saved.proberaum === "ja") showElement(probeRaumOrtLabel); // Get all of the form fields

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
    restoreState(saved);
  };

  function restoreState(saved) {
    // console.log(saved);
    if (saved.versicherungstyp === "SINFONIMA") sinfonimaState();
    if (saved.versicherungstyp === "IAMSOUND") iamsoundState();
    if (saved.wohnsitz === "anderes Land") showElement(customCountryLabel, customCountryInput);
  }

  function sinfonimaState() {
    // Hide imsound input, show organization in tab 2 and sinfonima section
    hideElement(totalValueLabel, totalValueInput);
    showElement(organizationLabel, organizationSelect);
    hideElement(imSoundSection);
    showElement(sinfonimasection);
    if (organizationSelect.value === "Sonstige") showElement(customOrganizationLabel);
  }

  function iamsoundState() {
    // Reveal the hidden totalValue field for IM SOUND, hide sinfonima seciton
    showElement(totalValueLabel, totalValueInput);
    hideElement(organizationLabel, organizationSelect);
    showElement(imSoundSection);
    hideElement(sinfonimasection);
    hideElement(customOrganizationLabel, customOrganizationInput);
  }
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
    event.preventDefault(); // Ignore forms that are actively being submitted

    if (event.target.classList.contains("submitting")) return; // Show submitting message

    var status = event.target.querySelector("[data-submit]");
    status.innerHTML = "Sendet..."; // Add form .submitting state class for styling

    event.target.classList.add("submitting"); // Confige fetch request options

    var requestOptions = {
      method: "POST",
      body: new FormData(event.target),
      redirect: "follow"
    };
    var requestUrl = "";
    var redirectUrl = "";
    storageID === "anfrage-form" ? requestUrl = "https://www.formbackend.com/f/1cf344532f65848f" : requestUrl = "https://www.formbackend.com/f/706ac99a74b44def";
    storageID === "anfrage-form" ? redirectUrl = "/danke/" : redirectUrl = "/schaden-gemeldet/"; // Post to formbackend

    fetch(requestUrl, requestOptions) // fetch("https://1454459a-1de0-4477-9d83-6534dee946eb.mock.pstmn.io/v1", requestOptions)
    .then(function (response) {
      // If response is ok
      if (response.ok) {
        // redirect to schaden-gemeldet page and remove
        window.location.href = redirectUrl; // Clear saved formdata from localstorage
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
    if (!event.target.matches("#nextBtn") && !event.target.matches("#prevBtn")) return; // If the clicked element has the right selector run function

    if (event.target.matches("#nextBtn")) {
      nextPrev(1);
    } else if (event.target.matches("#prevBtn")) {
      nextPrev(-1);
    }
  }, false);
}();

/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./resources/js/modules/mobile-nav/index.js":
/*!**************************************************!*\
  !*** ./resources/js/modules/mobile-nav/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
// import $$ from "@utilities/selectors";
var MobileNav = function MobileNav() {
  var mobileMenuButton = document.querySelector(".mobile-icon");
  var mobileMenu = document.querySelector(".mobile-menu");
  var mobileMenuContainer = document.querySelector(".mobile-menu-container");
  var main = document.querySelector("#main");
  var body = document.querySelector("body");
  mobileMenuButton.addEventListener("click", function () {
    mobileMenuContainer.classList.toggle("invisible");
    mobileMenuButton.classList.toggle("active");
    mobileMenu.classList.toggle("expanded");
    body.classList.toggle("fixed");
  });
}();

/* harmony default export */ __webpack_exports__["default"] = (MobileNav);

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

__webpack_require__(/*! /Users/jay/projects/musikversicherung-eleventy/resources/js/main.js */"./resources/js/main.js");
module.exports = __webpack_require__(/*! /Users/jay/projects/musikversicherung-eleventy/resources/sass/main.scss */"./resources/sass/main.scss");


/***/ })

/******/ });