// ===========================
// HAMBURGER MENU
// ===========================

const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }

});

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuToggle.innerHTML = "☰";

    });

});
