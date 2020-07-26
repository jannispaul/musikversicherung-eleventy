const anfrage = (function anfrage() {
  // This script handles form pages called tabs, adding instruments to the list and saves the form's state to localstorage

  // Set variables
  // var currentTab = 1; // Current tab is set to be the first tab (0)
  // showTab(currentTab); // Display the current tab

  let instrumentCount = 1; // Instrument counter starts with 1 instrument
  let incrementInstrumentCount = () => instrumentCount++; // Increment instrument count

  // Add instrument
  function addInstrument() {
    // Increment count
    incrementInstrumentCount();

    // Single instrument html to add more instruments
    let singleInstrument = `<div class="single-instrument">  
        <label>
          Instrument
          <input oninput="this.className = ''" name="instrument${instrumentCount}"  autofocus />
        </label>
        <div class="switch">
          <p class="">
            <input type="radio" name="type${instrumentCount}" id="match_1${instrumentCount}" value="neuwert" checked>
            <label for="match_1${instrumentCount}">
                Neuwert
            </label>
          </p>
          <p class="">
              <input type="radio" name="type${instrumentCount}" id="match_2${instrumentCount}" value="zeitwert">
              <label for="match_2${instrumentCount}">
                Zeitwert
              </label>
          </p>
        </div>
        <label>
          Wert
          <input oninput="this.className = ''" name="value${instrumentCount}"  />
        </label>
      </div>`;
    // Add to DOM
    document
      .querySelector(".instrument-list")
      .insertAdjacentHTML("beforeend", singleInstrument);
  }

  // function showTab(n) {
  //   // This function will display the specified tab of the form...
  //   var tabs = document.getElementsByClassName("tab");
  //   if (n === tabs.length) return;
  //   tabs[n].style.display = "block";
  //   //... and fix the Previous/Next buttons:
  //   if (n == 0) {
  //     document.getElementById("prevBtn").style.display = "none";
  //   } else {
  //     document.getElementById("prevBtn").style.display = "inline";
  //   }
  //   if (n == tabs.length - 1) {
  //     document.getElementById("nextBtn").innerHTML = "Absenden";
  //   } else {
  //     document.getElementById("nextBtn").innerHTML = "Weiter";
  //   }
  //   //... and run a function that will display the correct step indicator:
  //   {
  //     {
  //       /*  fixStepIndicator(n);  */
  //     }
  //   }
  // }

  // function nextPrev(n) {
  //   // This function will figure out which tab to display
  //   var tabs = document.getElementsByClassName("tab");
  //   // Exit the function if any field in the current tab is invalid:
  //   if (n == 1 && !validateForm()) return false;
  //   // Hide the current tab:
  //   // if (n !== tabs.length) {
  //   tabs[currentTab].style.display = "none";
  //   // }
  //   // Increase or decrease the current tab by 1:
  //   currentTab = currentTab + n;
  //   // if you have reached the end of the form...
  //   if (currentTab >= tabs.length) {
  //     // ... the form gets submitted:
  //     //   document.getElementById("form").submit();
  //     document
  //       .getElementById("form")
  //       .dispatchEvent(new Event("submit", { bubbles: true }));
  //     return false;
  //   }
  //   // Otherwise, display the correct tab:
  //   showTab(currentTab);
  // }

  // function validateForm() {
  //   // This function deals with validation of the form fields
  //   var tabs,
  //     requiredInputsInTab,
  //     i,
  //     valid = true;
  //   tabs = document.getElementsByClassName("tab");
  //   {
  //     {
  //       document.querySelectorAll("input[required]");
  //     }
  //   }
  //   // Set required inputs in tab
  //   requiredInputsInTab = tabs[currentTab].querySelectorAll(
  //     "input[required], textarea[required]"
  //   );

  //   // A loop that checks every input field in the current tab:
  //   for (i = 0; i < requiredInputsInTab.length; i++) {
  //     // If a field is empty...
  //     if (requiredInputsInTab[i].value == "") {
  //       // if field doesnt have invalid class
  //       if (!requiredInputsInTab[i].classList.contains("invalid")) {
  //         // add an "invalid" class to the field:
  //         requiredInputsInTab[i].classList.add("invalid");
  //       }
  //       // and set the current valid status to false
  //       valid = false;
  //     }
  //     if (
  //       // if field is checkbox and not checked
  //       requiredInputsInTab[i].type == "checkbox" &&
  //       !requiredInputsInTab[i].checked
  //     ) {
  //       // if field doesnt have invalid class
  //       if (!requiredInputsInTab[i].classList.contains("invalid")) {
  //         // add an "invalid" class to the field:
  //         requiredInputsInTab[i].classList.add("invalid");
  //       }
  //       // and set the current valid status to false
  //       valid = false;
  //     }

  //     if (
  //       // if field is not empty and has invalid class
  //       !requiredInputsInTab[i].value == "" &&
  //       requiredInputsInTab[i].type != "checkbox" &&
  //       requiredInputsInTab[i].classList.contains("invalid")
  //     ) {
  //       // remove the invalid class
  //       requiredInputsInTab[i].classList.remove("invalid");
  //     } else if (
  //       // if field is a checkbox, checked and has invalid class
  //       requiredInputsInTab[i].type == "checkbox" &&
  //       requiredInputsInTab[i].checked &&
  //       requiredInputsInTab[i].classList.contains("invalid")
  //     ) {
  //       requiredInputsInTab[i].classList.remove("invalid");
  //     }
  //   }
  //   return valid; // return the valid status
  // }

  // Catch all clicks on form
  document.addEventListener("click", function(event) {
    // If user clicks "add instrument"-buttton
    if (event.target.matches('button[data-name="addInstrument"]')) {
      // Disable "add instrument" button at 10 slots
      if (instrumentCount > 9) {
        document
          .querySelector('button[data-name="addInstrument"]')
          .setAttribute("disabled", "disabled");
      }
      // Add instrument
      addInstrument();

      // Set focus to newly created instrument field
      document.querySelector(".single-instrument:last-of-type input").focus();

      // Get existing data from localStorage
      var saved = localStorage.getItem(storageID);
      saved = saved ? JSON.parse(saved) : {};
      // Save the insrumentCounter to it
      saved.instrumentCount = instrumentCount;
      // Save the object back to localStorage
      localStorage.setItem(storageID, JSON.stringify(saved));
    }

    // Show input and price calculation for IM SOUND
    let totalValueLabel = document.querySelector("[data-totalValue]");
    let totalValueInput = document.querySelector('input[name="gesamtWert"]');
    let organizationLabel = document.querySelector("label[data-organization]");
    let organizationSelect = document.querySelector(
      "select[data-organization]"
    );
    let imSoundSection = document.querySelector("div[data-imsoundsection]");
    let sinfonimasection = document.querySelector("div[data-sinfonimasection]");
    // Hide input and price calculation, show organization in tab 2
    if (event.target.matches("[data-sinfonima]")) {
      // Hide totalValue field
      hideElement(totalValueLabel, totalValueInput);
      showElement(organizationLabel, organizationSelect);
      return;
    }
    if (event.target.matches("[data-imsound]")) {
      // Reveal the hidden totalValue field for IM SOUND
      showElement(totalValueLabel, totalValueInput);
      hideElement(organizationLabel, organizationSelect);
      showElement(imSoundSection);
      hideElement(sinfonimasection);
      return;
    }
  });

  // Conditional fields based on drop downs
  document.addEventListener("change", function(event) {
    // Variables
    let customCountryLabel = document.querySelector(
      "label[data-customCountry]"
    );
    let customCountryInput = document.querySelector(
      "input[data-customCountry]"
    );
    let customOrganizationLabel = document.querySelector(
      "label[data-customOrganization]"
    );
    let customOrganizationInput = document.querySelector(
      "input[data-customOrganization]"
    );
    let musikerhaftpflichtLabel = document.querySelector(
      "div[data-musikerhaftpflicht]"
    );
    // let customOrganizationInput = document.querySelector(
    //   "input[data-customOrganization]"
    // );

    // If residency is in other country show custom country input
    if (event.target.matches("select[data-residency]")) {
      if (event.target.value === "anderesLand")
        showElement(customCountryLabel, customCountryInput);
      // if it is not another country hide custom country input
      if (event.target.value !== "anderesLand")
        hideElement(customCountryLabel, customCountryInput);
    }

    // If organization is set to sonstige show custom input
    if (event.target.matches("select[data-organization]")) {
      if (event.target.value === "Sonstige")
        showElement(customOrganizationLabel, customOrganizationInput);
      // If organization is not set to sonstige hide custom input
      if (event.target.value !== "Sonstige")
        hideElement(customOrganizationLabel, customOrganizationInput);
    }

    // If verdient Geld changes
    if (event.target.matches("input[name='verdient-geld']")) {
      if (event.target.value === "ja") showElement(musikerhaftpflichtLabel);
      // If organization is not set to sonstige hide custom input
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
  }

  // Automatically saving form
  // Variables
  // var storageID = document.querySelector("[data-auto-save]").id;
  // "anfrage-form-auto-save";

  // Methods
  /**
   * Get an ID for a field
   * @param  {Node}   field The field
   * @return {String}       The ID
   */
  // var getName = function(field) {
  //   if (field.name.length > 0) {
  //     return field.name;
  //   }
  //   if (field.id.length > 0) {
  //     return field.id;
  //   }
  //   return null;
  // };

  // // Load saved form data from localStorage
  // var loadData = function() {
  //   // Get localStorage data
  //   var saved = localStorage.getItem(storageID);
  //   if (!saved) return;
  //   saved = JSON.parse(saved);

  //   // Check if instruments had been added previously
  //   if (saved.instrumentCount != instrumentCount) {
  //     // Add instruments until the count is equal
  //     while (instrumentCount <= saved.instrumentCount) {
  //       // Add instrument
  //       addInstrument();
  //     }
  //   }
  //   // Get all of the form fields
  //   var fields = document.querySelectorAll(
  //     "[data-auto-save] input, [data-auto-save] textarea, [data-auto-save] select"
  //   );
  //   // Loop through each field and load any saved data in localStorage
  //   Array.prototype.slice.call(fields).forEach(function(field) {
  //     // If the field has no usable ID, skip it
  //     var name = getName(field);
  //     if (!name) return;

  //     // Skip the files input as the File object cannot be stored in localstorage
  //     if (name == "files") return;

  //     // If there's no saved data in localStorage, skip it
  //     if (!saved[name]) return;

  //     // Set the field value to the saved data in localStorage
  //     // If it's a checkbox, set it's checked state
  //     // If it's a radio button and its value matches, set its checked state
  //     // Otherwise, set the value
  //     if (field.type === "checkbox") {
  //       field.checked = saved[name] === "on" ? true : false;
  //     } else if (field.type === "radio") {
  //       field.checked = saved[name] === field.value ? true : false;
  //     } else {
  //       field.value = saved[name];
  //     }
  //   });
  // };

  /**
   * Handle input events
   * @param  {Event} event The event object
   */
  // var inputHandler = function(event) {
  //   // Only run for fields in the [data-auto-save] form
  //   if (!event.target.closest("[data-auto-save]")) return;

  //   // Get an ID for the field
  //   var name = getName(event.target);
  //   if (!name) return;

  //   // Get existing data from localStorage
  //   var saved = localStorage.getItem(storageID);
  //   saved = saved ? JSON.parse(saved) : {};

  //   // Add the field to the localStorage object
  //   // If it's a checkbox, use on/off values
  //   // Otherwise, save the value
  //   if (event.target.type === "checkbox") {
  //     saved[name] = event.target.checked ? "on" : "off";
  //   } else {
  //     saved[name] = event.target.value;
  //   }
  //   // Save the object back to localStorage
  //   localStorage.setItem(storageID, JSON.stringify(saved));
  // };

  /**
   * Handle submit events
   * @param  {Event} event The event object
   */
  var submitHandler = function(event) {
    // Prevent default form submit
    // event.preventDefault();

    // Ignore forms that are actively being submitted
    if (event.target.classList.contains("submitting")) return;

    // Show submitting message
    var status = event.target.querySelector("[data-submit]");
    status.innerHTML = "Submitting...";

    // Add form .submitting state class for styling
    event.target.classList.add("submitting");

    // Confige fetch request options
    var requestOptions = {
      method: "POST",
      body: new FormData(event.target),
      redirect: "follow",
    };

    // Post to integromat
    // fetch("url", requestOptions)
    fetch(
      "https://1454459a-1de0-4477-9d83-6534dee946eb.mock.pstmn.io/v1",
      requestOptions
    )
      .then((response) => {
        // If response is ok
        if (response.ok) {
          // redirect to anfrage-erfolgreich page and remove
          window.location.href = "/anfrage-erfolgreich/";
          // Clear saved formdata from localstorage
          // localStorage.removeItem(storageID);
        }
      })
      // If there is an error log it to console and reidrect to fehler page
      .catch((error) => {
        console.error("Error: ", error);
        window.location.href = "/fehler/";
      });
  };

  // Inits & Event Listeners
  // Load saved data from storage
  // loadData();

  // Listen for input events
  // document.addEventListener("input", inputHandler, false);

  // Listen for submit events
  //   document.addEventListener("submit", submitHandler, false);
  // document.addEventListener("submit", submitHandler, false);

  // Listen for tab navigation button clicks
  //   document.addEventListener(
  //     "click",
  //     function(event) {
  //       // If the clicked element doesn't have the right selector, bail
  //       if (
  //         !event.target.matches("#nextBtn") &&
  //         !event.target.matches("#prevBtn")
  //       )
  //         return;

  //       //   If
  //       if (event.target.matches("#nextBtn")) {
  //         nextPrev(1);
  //       } else if (event.target.matches("#prevBtn")) {
  //         nextPrev(-1);
  //       }
  //     },
  //     false
  //   );
})();

export default anfrage;
