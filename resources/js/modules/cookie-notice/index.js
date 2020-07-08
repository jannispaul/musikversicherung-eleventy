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

const cookieNotice = (function cookieNotice() {
  // When in client browser, run getCookie to look for "cookiesAccepted"
  function checkCookie() {
    const name = "cookiesAccepted";
    let localCookie = getCookie(name);
    localCookie ? hideCookieNotice() : "";
  }
  checkCookie();

  // Initializing function to set a cookie
  function setCookie(name, value, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // Initializing function to get a cookie
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
  }

  // On click, set cookiesAccepted to true and run setCookie
  function acceptCookies() {
    const cookieName = "cookiesAccepted";
    const cookieValue = true;
    const daysValid = 365;
    setCookie(cookieName, cookieValue, daysValid);
    hideCookieNotice();
  }

  function hideCookieNotice() {
    // Get cookieNotice element from dom
    let cookieNotice = document.querySelector("[data-cookie-notice]");

    // Add hidden class
    cookieNotice.classList.add("hidden");

    // remove display:flex class
    cookieNotice.classList.remove("md:flex");
  }

  document.addEventListener(
    "click",
    function(event) {
      // If the clicked element doesn't have the right selector, bail
      if (!event.target.matches("[data-accept-cookies]")) return;

      // Run acceptCookies function
      acceptCookies();
      // Don't follow the link
      // event.preventDefault();

      // Log the clicked element in the console
      // console.log(event.target);
    },
    false
  );
})();

export default cookieNotice;
