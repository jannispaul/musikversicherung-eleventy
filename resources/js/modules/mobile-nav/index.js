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

  mobileMenuButton.addEventListener("click", function() {
    mobileMenuButton.classList.toggle("active");
    mobileMenu.classList.toggle("expanded");
  });
})();

export default MobileNav;
