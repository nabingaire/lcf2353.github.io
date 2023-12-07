/* 
Author: Nabin Gaire
File Name: script.js
Date: 2023-12-07
*/

//Special Function 

function toggleMenu() {
    var menu = document.getElementById("nav-menu");
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
    } else {
        menu.classList.add("active");
    }
}