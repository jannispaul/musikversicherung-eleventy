

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
