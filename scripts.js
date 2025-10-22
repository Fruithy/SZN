// CTA Button (email)
document.getElementById('cta-btn').addEventListener('click', () => {
  window.location.href = 'mailto:Magnusrobbestad@gmail.com?subject=Let’s%20work%20together&body=Hi%20SZN%20team,%0D%0A%0D%0AI’d%20love%20to%20collaborate%20with%20you%20on...';
});

document.getElementById('contact-btn').addEventListener('click', () => {
  window.location.href = 'mailto:Magnusrobbestad@gmail.com?subject=Let’s%20work%20together';
});

// Scroll fade-in animation
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
