
'use strict';


/**
 * toggle active class on header
 * when clicked nav-toggle-btn
 */

 const header = document.querySelector("[data-header]");
 const navToggleBtn = document.querySelector("[data-menu-toggle-btn]");
 
 navToggleBtn.addEventListener("click", function () {
   header.classList.toggle("active");
 });
 
 /**
 * Card-menu-Btn
 */

const ctxMenu = document.querySelector("[data-card]");
const toggleCard = document.querySelector("[data-menu-btn]");

toggleCard.addEventListener("click", function () {
    ctxMenu.classList.toggle("active");
});