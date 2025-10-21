/* scripts.js — minimal interactions & typed hero */
document.addEventListener('DOMContentLoaded', () => {
  // typed hero lines
  const lines = [
    "Capture your vision.",
    "Elevate your presence.",
    "Empower with AI."
  ];
  const typedEl = document.getElementById('typed-lines');

  // simple type-and-delete loop
  let li = 0, ci = 0, deleting = false;
  const typeSpeed = 60;
  const pauseAfter = 1300;

  function tick() {
    const current = lines[li];
    if (!deleting) {
      typedEl.textContent = current.slice(0, ci+1);
      ci++;
      if (ci === current.length) {
        deleting = true;
        setTimeout(tick, pauseAfter);
        return;
      }
    } else {
      typedEl.textContent = current.slice(0, ci-1);
      ci--;
      if (ci === 0) {
        deleting = false;
        li = (li + 1) % lines.length;
      }
    }
    setTimeout(tick, deleting ? typeSpeed/1.4 : typeSpeed);
  }
  tick();

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });

  // Year in footer
  const year = new Date().getFullYear();
  document.getElementById('year').textContent = year;

  // Contact form -> fallback to mailto or just show a small success (no backend)
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Basic validation
    const name = form.querySelector('[name="name"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const msg = form.querySelector('[name="message"]').value.trim();
    if (!name || !email || !msg) {
      alert('Please complete all fields before sending.');
      return;
    }
    // Open user's email client with pre-filled content as fallback
    const subject = encodeURIComponent('SZN.no — New inquiry from ' + name);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`);
    window.location.href = `mailto:hello@szn.no?subject=${subject}&body=${body}`;
  });

  // Mailto button fallback
  document.getElementById('btn-mailto').addEventListener('click', () => {
    window.location.href = 'mailto:hello@szn.no';
  });
});
