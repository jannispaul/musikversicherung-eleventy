const browserSupported = (function() {
  "use strict";
  if (
    !(
      "function" == typeof Blob &&
      "undefined" != typeof Intl &&
      "undefined" != typeof MutationObserver &&
      "undefined" != typeof URLSearchParams &&
      "undefined" != typeof WebSocket &&
      "undefined" != typeof IntersectionObserver &&
      "entries" in FormData.prototype &&
      "append" in Element.prototype
    )
  ) {
    const e = document.getElementById("unsupported-browser");
    e && e.removeAttribute("hidden");
  }
})();
//# sourceMappingURL=unsupported-bootstrap-cbe2b7e3.js.map

export default browserSupported;
