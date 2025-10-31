document.addEventListener('DOMContentLoaded', function(){
  // ===== Dynamic year in footer =====
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // ===== Mobile menu toggle =====
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const expanded = navLinks.style.display === 'flex';
      navLinks.style.display = expanded ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.background = 'rgba(15,15,15,0.9)';
      navLinks.style.padding = '12px';
    });
  }

  // ===== Smooth scroll =====
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // ===== Keyword hover effect =====
  const cloud = document.getElementById('keywordCloud');
  if (cloud) {
    Array.from(cloud.children).forEach(el => {
      el.addEventListener('mouseenter', () => {
        el.style.transform = 'translateY(-8px) scale(1.05)';
      });
      el.addEventListener('mouseleave', () => {
        el.style.transform = '';
      });
    });
  }

  // ===== Formspree async submission =====
  const form = document.getElementById('leadForm');
  const status = document.getElementById('formStatus');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      status.textContent = 'Sender...';

      const data = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
          status.textContent = 'Takk! Vi har mottatt meldingen din.';
          form.reset();
        } else {
          status.textContent = 'Oops! Noe gikk galt. Prøv igjen.';
        }
      } catch {
        status.textContent = 'Nettverksfeil. Vennligst prøv igjen.';
      }
    });
  }

  // ===== Floating animated keyword cloud =====
  const keywords = document.querySelectorAll('#keywordCloud span');
  function animateKeywords() {
    keywords.forEach((word) => {
      const delay = Math.random() * 5000;
      const duration = 3000 + Math.random() * 3000;
      const x = (Math.random() - 0.5) * 40;
      const y = (Math.random() - 0.5) * 20;
      const opacity = 0.6 + Math.random() * 0.4;

      word.style.transition = `transform ${duration}ms ease-in-out, opacity ${duration}ms ease-in-out`;
      setTimeout(() => {
        word.style.transform = `translate(${x}px, ${y}px)`;
        word.style.opacity = opacity;
      }, delay);
      setTimeout(() => {
        word.style.transform = `translate(0, 0)`;
        word.style.opacity = 1;
      }, delay + duration);
    });
  }
  if (keywords.length > 0) {
    setInterval(animateKeywords, 6000);
    animateKeywords();
  }

  // ===== Sequential reveal for "Vår tilnærming" steps =====
  const steps = document.querySelectorAll('.step');
  const stepContainer = document.querySelector('.steps');

  function revealStepsSequentially() {
    steps.forEach((step, index) => {
      setTimeout(() => {
        step.classList.add('visible');
      }, index * 300); // delay each step
    });
  }

  const stepObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        revealStepsSequentially();
        stepObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  if (stepContainer) stepObserver.observe(stepContainer);
});
