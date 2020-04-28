var menuToggle = document.querySelector(".nav-toggle");
var nav = document.querySelector(".nav");

nav.classList.remove("nav--nojs");
menuToggle.classList.add("nav-toggle--closed");

menuToggle.addEventListener("click", function() {
  if (nav.classList.contains("nav--closed")) {
    nav.classList.remove("nav--closed");
    nav.classList.add("nav--opened");
    menuToggle.classList.add("nav-toggle--opened");
    menuToggle.classList.remove("nav-toggle--closed");
  }
  else {
    nav.classList.add("nav--closed");
    nav.classList.remove("nav--opened");
    menuToggle.classList.remove("nav-toggle--opened");
    menuToggle.classList.add("nav-toggle--closed");
  }
});
