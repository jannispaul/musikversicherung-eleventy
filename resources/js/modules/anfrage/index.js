const anfrage = (function anfrage() {
  // This script handles form pages called tabs, adding instruments to the list and saves the form's state to localstorage

  // Set variables
  // var currentTab = 1; // Current tab is set to be the first tab (0)
  // showTab(currentTab); // Display the current tab

  // let instrumentCount = 0; // Instrument counter starts with 1 instrument
  // let incrementInstrumentCount = () => instrumentCount++; // Increment instrument count

  // Add instrument
  //   function addInstrument() {
  //     // Increment count
  //     incrementInstrumentCount();

  //     // Single instrument html to add more instruments
  //     let singleInstrument = `<div class="single-instrument flex flex-wrap md:flex-no-wrap items-end mb-x1p5 md:mb-x0p5">
  //   <label class="flex md:flex-grow flex-col items-start flex-none md:flex-auto w-full md:w-1/2 md:mr-x0p5">
  //     Instrument / Zubehör ${instrumentCount}
  //     <input
  //       name="instrument${instrumentCount}"
  //       type="text"
  //       class="w-full "
  //       autofocus />
  //   </label>
  //   <label
  //     class="flex flex-col flex-grow-0 flex-1 order-1 mr-x0p5 w-2/6 md:w-auto
  //     md:w-1/6">
  //     Wert in €
  //     <input
  //       type="number"
  //       name=${"value" + instrumentCount}
  //       pattern="\d*"/>
  //   </label>
  //   <div class="toggle flex order-2 md:order-2">
  //     <input
  //       type="radio"
  //       name=${"valueType" + instrumentCount}
  //       value="Neuwert"
  //       id=${"neuwert" + instrumentCount} />
  //     <label
  //       class="option overlap flex-1"
  //       for=${"neuwert" + instrumentCount}>
  //       <p>Neuwert</p>
  //     </label>
  //     <!-- <label for="Zeitwert"> -->
  //     <input
  //       type="radio"
  //       name=${"valueType" + instrumentCount}
  //       value="Zeitwert"
  //       id=${"zeitwert" + instrumentCount} />
  //     <label
  //       class="option flex-1"
  //       for=${"zeitwert" + instrumentCount}>
  //       <p>Zeitwert</p>
  //     </label>
  //   </div>
  // </div>`;

  //     // Add to DOM
  //     document
  //       .querySelector(".instrument-list")
  //       .insertAdjacentHTML("beforeend", singleInstrument);
  //   }
  //   addInstrument();

  // Catch all clicks on form
  document.addEventListener("click", function(event) {
    // // If user clicks "add instrument"-buttton
    // if (event.target.matches('button[data-name="addInstrument"]')) {
    //   // Disable "add instrument" button at 10 slots
    //   if (instrumentCount > 9) {
    //     document
    //       .querySelector('button[data-name="addInstrument"]')
    //       .setAttribute("disabled", "disabled");
    //   }
    // Add instrument
    // addInstrument();
    // Set focus to newly created instrument field
    // document.querySelector(".single-instrument:last-of-type input").focus();
    // // Get existing data from localStorage
    // var saved = localStorage.getItem(storageID);
    // saved = saved ? JSON.parse(saved) : {};
    // // Save the insrumentCounter to it
    // saved.instrumentCount = instrumentCount;
    // // Save the object back to localStorage
    // localStorage.setItem(storageID, JSON.stringify(saved));
    // }
    // Show input and price calculation for IM SOUND
    // let totalValueLabel = document.querySelector("[data-totalValue]");
    // let totalValueInput = document.querySelector('input[name="gesamtWert"]');
    // let organizationLabel = document.querySelector("label[data-organization]");
    // let organizationSelect = document.querySelector(
    //   "select[data-organization]"
    // );
    // let imSoundSection = document.querySelector("div[data-imsoundsection]");
    // let sinfonimasection = document.querySelector("div[data-sinfonimasection]");
    // // Hide input and price calculation, show organization in tab 2
    // if (event.target.matches("[data-sinfonima]")) {
    //   // Hide totalValue field
    //   hideElement(totalValueLabel, totalValueInput);
    //   showElement(organizationLabel, organizationSelect);
    //   hideElement(imSoundSection);
    //   showElement(sinfonimasection);
    //   return;
    // }
    // if (event.target.matches("[data-imsound]")) {
    //   // Reveal the hidden totalValue field for IM SOUND
    //   showElement(totalValueLabel, totalValueInput);
    //   hideElement(organizationLabel, organizationSelect);
    //   showElement(imSoundSection);
    //   hideElement(sinfonimasection);
    //   return;
    // }
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
    let probeRaumOrtLabel = document.querySelector("div[data-proberaumort]");
    let probeRaumBeschreibungLabel = document.querySelector(
      "label[data-proberaumbeschreibung]"
    );

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

    // If proberaum vorhanden show if
    if (event.target.matches("input[name='proberaum']")) {
      if (event.target.value === "ja") showElement(probeRaumOrtLabel);
      // If proberaum is not used hide further proberaum inputs
      if (event.target.value !== "ja")
        hideElement(probeRaumOrtLabel) &
          hideElement(probeRaumBeschreibungLabel);
    }

    // If proberaum is not in a inhabitat building show description input
    if (event.target.matches("input[name='bewohnt']")) {
      if (event.target.value !== "ja") showElement(probeRaumBeschreibungLabel);
      // If proberaum is in a inhabitat building hide description input
      if (event.target.value === "ja") hideElement(probeRaumBeschreibungLabel);
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
})();

export default anfrage;
