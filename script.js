// ========== Mobile Menu ==========
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// ========== Dark Mode ==========
const darkToggle = document.getElementById("dark-toggle");
const root = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
  root.setAttribute("data-theme", "dark");
}

darkToggle.addEventListener("click", () => {
  if (root.getAttribute("data-theme") === "dark") {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    darkToggle.textContent = "🌙";
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkToggle.textContent = "☀️";
  }
});

// ========== Scroll Navbar Shadow ==========
window.addEventListener("scroll", () => {
  const header = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
