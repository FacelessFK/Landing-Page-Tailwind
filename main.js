import "./style.css";

const navBtn = document.querySelector("#menu");
const menuBar = document.querySelector("[role='menubar']");

navBtn.addEventListener("click", function () {
    const isExpanded = JSON.parse(navBtn.getAttribute("aria-expended"));
    navBtn.setAttribute("aria-expended", !isExpanded);
    menuBar.classList.toggle("hidden");
    menuBar.classList.toggle("flex");
});
