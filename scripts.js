// Smooth scroll + fade-in animations + theme toggle
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
      document.querySelector(".nav").classList.remove("active");
    });
  });

  // Mobile nav toggle
  const nav = document.getElementById("nav");
  const navToggle = document.getElementById("navToggle");
  navToggle.addEventListener("click", () => nav.classList.toggle("active"));

  // Fade-in on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.2 });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

  // Dark mode toggle
  const darkToggle = document.getElementById("darkToggle");
  darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });

  // Contact form (front-end only)
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Takk! Meldingen din er sendt 🙌");
    form.reset();
  });
});
