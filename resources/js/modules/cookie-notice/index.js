// import $$ from "@utilities/selectors";

let cookiesAccepted = true;
// When in client browser, run getCookie to look for "cookiesAccepted"
function checkCookie() {
  const name = "cookiesAccepted";
  let localCookie = getCookie(name);
  localCookie ? (cookiesAccepted = localCookie) : (cookiesAccepted = false);
  // cookiesAccepted = getCookie(name);
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
  cookiesAccepted = true;
  const cookieName = "cookiesAccepted";
  const cookieValue = true;
  const daysValid = 365;
  setCookie(cookieName, cookieValue, daysValid);
  document.querySelector(["data-cookie-notice"]).setAttribute("hidden", "");
}
