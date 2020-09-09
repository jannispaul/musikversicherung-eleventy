const forms = (function forms() {
  if (
    document.querySelector("#schaden-form") ||
    document.querySelector("#anfrage-form")
  ) {
    // This script handles form pages called tabs, adding instruments to the list and saves the form's state to localstorage and loads it

    // Set variables

    // Current tab is set to be the first tab (0)
    var currentTab = 0;

    // Display the current tab
    showTab(currentTab);

    // Instrument counter starts with 0 instrument
    let instrumentCount = 0;
    // Increment instrument count
    let incrementInstrumentCount = () => instrumentCount++;

    // DOM-Elements as variables
    let totalValueLabel = document.querySelector("[data-totalValue]");
    let totalValueInput = document.querySelector('input[name="gesamtWert"]');
    let organizationLabel = document.querySelector("label[data-organization]");
    let organizationSelect = document.querySelector(
      "select[data-organization]"
    );
    let customOrganizationLabel = document.querySelector(
      "label[data-customorganization]"
    );
    let customOrganizationInput = document.querySelector(
      "input[data-customorganization]"
    );
    let imSoundSection = document.querySelector("div[data-imsoundsection]");
    let sinfonimasection = document.querySelector("div[data-sinfonimasection]");
    let customCountryLabel = document.querySelector(
      "label[data-customCountry]"
    );
    let customCountryInput = document.querySelector(
      "input[data-customCountry]"
    );
    let musikerhaftpflichtLabel = document.querySelector(
      "div[data-musikerhaftpflicht]"
    );
    let probeRaumOrtLabel = document.querySelector("div[data-proberaumort]");
    let probeRaumBeschreibungLabel = document.querySelector(
      "label[data-proberaumbeschreibung]"
    );
    // let reviewForm = document.querySelector("#review-form");

    // Add instrument
    function addInstrument() {
      // Increment instrument count
      incrementInstrumentCount();

      // Single instrument html to add more instruments
      let singleInstrument = `<div class="single-instrument flex flex-wrap md:flex-no-wrap items-end mb-x1p5 md:mb-x0p5">
  <label class="flex md:flex-grow flex-col items-start flex-none md:flex-auto w-full md:w-1/2 md:mr-x0p5">
    Instrument / Zubehör ${instrumentCount}
    <input
      name="instrument${instrumentCount}"
      type="text"
      class="w-full "
      autofocus 
      ${instrumentCount === 1 ? "required" : ""}/>
  </label>
  <label
    class="flex flex-col flex-grow-0 flex-1 order-1 mr-x0p5 w-2/6 md:w-auto
    md:w-1/6">
    Wert in €
    <input
      type="number"
      name=${"value" + instrumentCount}
      pattern="\d*"
      ${instrumentCount === 1 ? "required" : ""}/>
  </label>
  <div class="toggle flex order-2 md:order-2">
    <input
      type="radio"
      name=${"valueType" + instrumentCount}
      value="Neuwert"
      id=${"neuwert" + instrumentCount} required />
    <label
      class="option overlap flex-1 small"
      for=${"neuwert" + instrumentCount}>
      <p>Neuwert</p>
    </label>
    <!-- <label for="Zeitwert"> -->
    <input
      type="radio"
      name=${"valueType" + instrumentCount}
      value="Zeitwert"
      id=${"zeitwert" + instrumentCount}  />
    <label
      class="option flex-1 small"
      for=${"zeitwert" + instrumentCount}>
      <p>Zeitwert</p>
    </label>
  </div>
</div>`;
      // Add to DOM after class singleInstrument
      if (storageID === "anfrage-form") {
        document
          .querySelector(".instrument-list")
          .insertAdjacentHTML("beforeend", singleInstrument);
      }
    }

    function showTab(n) {
      // This function will display the specified tab of the form...
      var tabs = document.getElementsByClassName("tab");
      if (n === tabs.length) return;
      tabs[n].style.display = "block";
      //... and fix the Previous/Next buttons:
      if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
      } else {
        document.getElementById("prevBtn").style.display = "inline";
      }
      if (n == tabs.length - 1) {
        document.getElementById("nextBtn").innerHTML = "Absenden";
      } else {
        document.getElementById("nextBtn").innerHTML = "Weiter";
      }

      //... and run a function that will display the correct step indicator:
      {
        {
          /*  fixStepIndicator(n);  */
        }
      }
    }

    function nextPrev(n) {
      // This function will figure out which tab to display
      var tabs = document.getElementsByClassName("tab");
      // Exit the function if any field in the current tab is invalid:
      if (n == 1 && !validateForm()) return false;
      // Hide the current tab if its not the last:
      if (n !== tabs.length) {
        tabs[currentTab].style.display = "none";
      }
      // Increase or decrease the current tab by 1:
      currentTab = currentTab + n;

      // if you have reached the end of the form...
      if (currentTab >= tabs.length) {
        // ... the form gets submitted:
        //   document.getElementById("form").submit();
        document
          .querySelector("form")
          .dispatchEvent(new Event("submit", { bubbles: true }));
        return false;
      }
      // Otherwise, display the correct tab:
      showTab(currentTab);
      window.scrollTo({ top: 0 });
    }

    function validateForm() {
      // Helper function to test if an element or parent is hidden
      function isHidden(el) {
        return el.offsetParent === null;
      }
      // This function deals with validation of the form fields
      var tabs,
        requiredInputsInTab,
        i,
        valid = true;
      tabs = document.getElementsByClassName("tab");

      // Set required inputs in tab
      requiredInputsInTab = tabs[currentTab].querySelectorAll(
        "input[required], textarea[required], select[required] "
      );
      // A loop that checks every input field in the current tab:
      for (i = 0; i < requiredInputsInTab.length; i++) {
        // If a field is empty...
        if (
          requiredInputsInTab[i].value == "" &&
          !isHidden(requiredInputsInTab[i])
        ) {
          // console.log(requiredInputsInTab[i]);
          // if field doesnt have invalid class
          if (!requiredInputsInTab[i].classList.contains("invalid")) {
            // add an "invalid" class to the field:
            requiredInputsInTab[i].classList.add("invalid");
          }
          // console.log(requiredInputsInTab[i]);
          // and set the current valid status to false
          valid = false;
        }
        if (
          // if field is checkbox and not checked
          requiredInputsInTab[i].type == "checkbox" &&
          !requiredInputsInTab[i].checked
        ) {
          // if field doesnt have invalid class
          if (!requiredInputsInTab[i].classList.contains("invalid")) {
            // add an "invalid" class to the field:
            requiredInputsInTab[i].classList.add("invalid");
          }

          // and set the current valid status to false
          valid = false;
        }

        if (
          // if field is radio button
          requiredInputsInTab[i].type == "radio" &&
          !isHidden(requiredInputsInTab[i])
        ) {
          // Get all elements (so siblings + the input)
          const allElements = Array.from(
            requiredInputsInTab[i].parentNode.children
          );

          // Get the inputs in the toggle
          const inputs = allElements.filter((el) => el.localName === "input");
          // Get the labels in the toggle
          const labels = allElements.filter((el) => el.localName === "label");
          // If neither input is checked
          if (!inputs[0].checked && !inputs[1].checked) {
            // ADd invalid class to both labels
            labels.forEach((label) => label.classList.add("invalid"));
            // and set the current valid status to false
            valid = false;
            // console.log(valid);
          } else {
            // Otherwise remove invalid class from both labels
            labels.forEach((label) => label.classList.remove("invalid"));
          }
        }

        if (
          // if field is not empty and has invalid class
          !requiredInputsInTab[i].value == "" &&
          requiredInputsInTab[i].type != "checkbox" &&
          requiredInputsInTab[i].classList.contains("invalid")
        ) {
          // remove the invalid class
          requiredInputsInTab[i].classList.remove("invalid");
        } else if (
          // if field is a checkbox, checked and has invalid class
          requiredInputsInTab[i].type == "checkbox" &&
          requiredInputsInTab[i].checked &&
          requiredInputsInTab[i].classList.contains("invalid")
        ) {
          requiredInputsInTab[i].classList.remove("invalid");
        }
      }

      return valid; // return the valid status
    }

    // Catch all clicks on form
    document.addEventListener("click", function(event) {
      // If user clicks "add instrument"-buttton
      if (event.target.matches('button[data-name="addInstrument"]')) {
        // Disable "add instrument" button at 10 slots
        if (instrumentCount < 10) {
          // Add instrument
          addInstrument();
          // Set focus to newly created instrument field
          document
            .querySelector(".single-instrument:last-of-type input")
            .focus();
        } else {
          document
            .querySelector('button[data-name="addInstrument"]')
            .setAttribute("disabled", "disabled");
        }

        // Get existing data from localStorage
        var saved = localStorage.getItem(storageID);
        saved = saved ? JSON.parse(saved) : {};
        // Save the insrumentCounter to it
        saved.instrumentCount = instrumentCount;
        // Save the object back to localStorage
        localStorage.setItem(storageID, JSON.stringify(saved));
      }
    });

    // Conditional fields based on drop downs
    document.addEventListener("change", function(event) {
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
      }

      // If residency is in other country show custom country input
      if (event.target.matches("select[data-residency]")) {
        if (event.target.value === "anderes Land")
          showElement(customCountryLabel, customCountryInput);
        // if it is not another country hide custom country input
        if (event.target.value !== "anderes Land")
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

      // If proberaum vorhanden show if
      if (event.target.matches("input[name='proberaum']")) {
        if (event.target.value === "ja") showElement(probeRaumOrtLabel);
        // If proberaum is not used hide further proberaum inputs
        if (event.target.value !== "ja")
          hideElement(probeRaumOrtLabel) &
            hideElement(probeRaumBeschreibungLabel);
      }

      // If proberaum is not in an inhabitat building show description input
      if (event.target.matches("input[name='bewohnt']")) {
        if (event.target.value !== "ja")
          showElement(probeRaumBeschreibungLabel);
        // If proberaum is in a inhabitat building hide description input
        if (event.target.value === "ja")
          hideElement(probeRaumBeschreibungLabel);
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
    if (document.querySelector("[data-auto-save]")) {
      var storageID = document.querySelector("[data-auto-save]").id;
    }
    // Methods
    /**
     * Get an ID for a field
     * @param  {Node}   field The field
     * @return {String}       The ID
     */
    var getName = function(field) {
      if (field.name.length > 0) {
        return field.name;
      }
      if (field.id.length > 0) {
        return field.id;
      }
      return null;
    };

    // Load saved form data from localStorage
    var loadData = function() {
      addInstrument();
      // Get localStorage data
      var saved = localStorage.getItem(storageID);
      if (!saved) return;
      saved = JSON.parse(saved);

      // Check if instruments had been added previously
      if (saved.instrumentCount != instrumentCount) {
        // Add instruments until the count is equal
        while (instrumentCount <= saved.instrumentCount) {
          // Add instrument
          addInstrument();
        }
      }
      if (saved.proberaum === "ja") showElement(probeRaumOrtLabel);

      // Get all of the form fields
      var fields = document.querySelectorAll(
        "[data-auto-save] input, [data-auto-save] textarea, [data-auto-save] select"
      );
      // Loop through each field and load any saved data in localStorage
      Array.prototype.slice.call(fields).forEach(function(field) {
        // If the field has no usable ID, skip it
        var name = getName(field);
        if (!name) return;

        // Skip the files input as the File object cannot be stored in localstorage
        if (name == "files") return;

        // If there's no saved data in localStorage, skip it
        if (!saved[name]) return;

        // Set the field value to the saved data in localStorage
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
      if (saved.wohnsitz === "anderes Land")
        showElement(customCountryLabel, customCountryInput);
    }
    function sinfonimaState() {
      // Hide imsound input, show organization in tab 2 and sinfonima section
      hideElement(totalValueLabel, totalValueInput);
      showElement(organizationLabel, organizationSelect);
      hideElement(imSoundSection);
      showElement(sinfonimasection);
      if (organizationSelect.value === "Sonstige")
        showElement(customOrganizationLabel);
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
    var inputHandler = function(event) {
      // Only run for fields in the [data-auto-save] form
      if (!event.target.closest("[data-auto-save]")) return;

      // Get an ID for the field
      var name = getName(event.target);
      if (!name) return;

      // Get existing data from localStorage
      var saved = localStorage.getItem(storageID);
      saved = saved ? JSON.parse(saved) : {};

      // Add the field to the localStorage object
      // If it's a checkbox, use on/off values
      // Otherwise, save the value
      if (event.target.type === "checkbox") {
        saved[name] = event.target.checked ? "on" : "off";
      } else {
        saved[name] = event.target.value;
      }
      // Save the object back to localStorage
      localStorage.setItem(storageID, JSON.stringify(saved));
    };

    /**
     * Handle submit events
     * @param  {Event} event The event object
     */

    var reviewSubmitHandler = function(event) {
      console.log(event);
      // Add form .submitting state class for styling
      // event.target.classList.add("submitting");
    };

    var submitHandler = function(event) {
      // Prevent default form submit
      event.preventDefault();

      console.log(event);
      // Ignore forms that are actively being submitted
      if (event.target.classList.contains("submitting")) return;

      // Show submitting message
      var status = event.target.querySelector("[data-submit]");
      status.innerHTML = "Sendet...";
      status.disabled = true;

      // Add form .submitting state class for styling
      event.target.classList.add("submitting");

      // Confige fetch request options
      var requestOptions = {
        method: "POST",
        body: new FormData(event.target),
        redirect: "follow",
      };
      let requestUrl = "";
      let redirectUrl = "";

      storageID === "anfrage-form"
        ? (requestUrl = "https://www.formbackend.com/f/1cf344532f65848f")
        : (requestUrl = "https://www.formbackend.com/f/706ac99a74b44def");

      storageID === "anfrage-form"
        ? (redirectUrl = "/danke/")
        : (redirectUrl = "/schaden-gemeldet/");

      // console.log(requestOptions, storageID, requestUrl, redirectUrl);
      // console.log("test");

      // Post to formbackend
      fetch(requestUrl, requestOptions)
        .then((response) => {
          // If response is ok
          if (response.ok) {
            console.log("fetch response ok");
            // redirect to schaden-gemeldet page
            window.location.href = redirectUrl;
            // Clear saved formdata from localstorage
            localStorage.removeItem(storageID);
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
    loadData();

    // Listen for input events
    document.addEventListener("input", inputHandler, false);

    // Listen for submit events
    // reviewForm.addEventListener("submit", console.log(e), false);
    //   document.addEventListener("submit", submitHandler, false);
    document.addEventListener("submit", submitHandler, false);

    // Listen for tab navigation button clicks
    document.addEventListener(
      "click",
      function(event) {
        // If the clicked element doesn't have the right selector, bail
        if (
          !event.target.matches("#nextBtn") &&
          !event.target.matches("#prevBtn")
        )
          return;

        // If the clicked element has the right selector run function
        if (event.target.matches("#nextBtn")) {
          nextPrev(1);
        } else if (event.target.matches("#prevBtn")) {
          nextPrev(-1);
        }
      },
      false
    );
  }
})();

export default forms;
