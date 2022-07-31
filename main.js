import "./style.css";

const navBtn = document.querySelector("#menu");
const menuBar = document.querySelector("[role='menubar']");

navBtn.addEventListener("click", function () {
    const isExpanded = JSON.parse(navBtn.getAttribute("aria-expended"));
    navBtn.setAttribute("aria-expended", !isExpanded);
    menuBar.classList.toggle("hidden");
    menuBar.classList.toggle("flex");
});
const darkMod = document.querySelector(".dark_mod");
const light = document.querySelector(".light");
const dark = document.querySelector(".moon");

darkMod.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    light.classList.toggle("hidden");
    dark.classList.toggle("hidden");
});
