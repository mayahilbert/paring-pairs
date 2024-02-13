$(document).ready(function(){
    $('.carousel').carousel({
        interval: 10000
    });
});

const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce))");
const details = document.querySelector(".object-and-details > details");

if (mediaQuery.matches) {
  details.removeAttribute("open");
}