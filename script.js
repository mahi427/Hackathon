/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * add event listener on multiple elements
 */

// navbar
function openMenu() {
  document.getElementById("mobileMenu").classList.add("active");
}
function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("active");
}
