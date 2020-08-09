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

const MobileNav = (function MobileNav() {
  const mobileMenuButton = document.querySelector(".mobile-icon");
  const mobileMenu = document.querySelector(".mobile-menu");
  const mobileMenuContainer = document.querySelector(".mobile-menu-container");
  const main = document.querySelector("#main");
  const body = document.querySelector("body");

  mobileMenuButton.addEventListener("click", function() {
    mobileMenuContainer.classList.toggle("invisible");
    mobileMenuButton.classList.toggle("active");
    mobileMenu.classList.toggle("expanded");
    body.classList.toggle("fixed");
  });
})();

export default MobileNav;
