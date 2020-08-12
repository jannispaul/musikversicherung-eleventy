const reviews = (function forms() {
  if (document.querySelector("#review-form")) {
    // Set variable
    var reviewSubmitHandler = function(event) {
      // Prevent default form submit
      // event.preventDefault();
      console.log(event);

      // Ignore forms that are actively being submitted
      if (event.target.classList.contains("submitting")) return;

      // Show submitting message
      var status = event.target.querySelector("[data-submit]");
      status.innerHTML = "Sendet...";
      status.disabled = true;
      // Add form .submitting state class for styling
      // event.target.classList.add("submitting");
    };

    // var submitHandler = function(event) {
    //   if (storageID === "schaden-form" || storageID === "anfrage-form") {
    //     console.log(event);
    //     // Prevent default form submit
    //     event.preventDefault();

    //     // Ignore forms that are actively being submitted
    //     if (event.target.classList.contains("submitting")) return;

    //     // Show submitting message
    //     var status = event.target.querySelector("[data-submit]");
    //     status.innerHTML = "Sendet...";

    //     // Add form .submitting state class for styling
    //     event.target.classList.add("submitting");

    //     // Confige fetch request options
    //     var requestOptions = {
    //       method: "POST",
    //       body: new FormData(event.target),
    //       redirect: "follow",
    //     };
    //     let requestUrl = "";
    //     let redirectUrl = "";

    //     storageID === "anfrage-form" ??
    //       (requestUrl = "https://www.formbackend.com/f/1cf344532f65848f");
    //     storageID === "schaden-form" ??
    //       (requestUrl = "https://www.formbackend.com/f/706ac99a74b44def");

    //     storageID === "anfrage-form"
    //       ? (redirectUrl = "/danke/")
    //       : (redirectUrl = "/schaden-gemeldet/");
    // Post to formbackend
    // fetch(requestUrl, requestOptions)
    //   // fetch("https://1454459a-1de0-4477-9d83-6534dee946eb.mock.pstmn.io/v1", requestOptions)
    //   .then((response) => {
    //     // If response is ok
    //     if (response.ok) {
    //       // redirect to schaden-gemeldet page and remove
    //       window.location.href = "/bewertung-erfolgreich/";
    //     }
    //   })
    // If there is an error log it to console and reidrect to fehler page
    //     .catch((error) => {
    //       console.error("Error: ", error);
    //       window.location.href = "/fehler/";
    //     });
    // }
    // };

    // Listen for submit events
    document.addEventListener("submit", reviewSubmitHandler, false);
  }
})();

export default reviews;
