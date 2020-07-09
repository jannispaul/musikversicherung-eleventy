const notice = (function notice() {
  // When in client browser, run getCookie to look for "cookiesAccepted"
  function checkCookie() {
    const name = "hideNotice";
    let localCookie = getCookie(name);
    localCookie ? hideNotice() : "";
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

  // On click, set hidenotice cookie
  function acceptNotice() {
    const cookieName = "hideNotice";
    const cookieValue = true;
    const daysValid = 10;
    setCookie(cookieName, cookieValue, daysValid);
    hideNotice();
  }

  function hideNotice() {
    // Get notice element from dom
    let notice = document.querySelector("[data-notice]");

    // Add hidden class
    notice.classList.add("hidden");

    // remove display:flex class
    notice.classList.remove("md:flex");
  }

  document.addEventListener(
    "click",
    function(event) {
      // If the clicked element doesn't have the right selector, bail
      if (!event.target.matches("[data-hide-notice]")) return;

      // Run hideNotice function
      acceptNotice();
    },
    false
  );
})();

export default notice;
