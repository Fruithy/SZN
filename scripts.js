// Parallax hero text
const heroContent = document.querySelector('.hero-content');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroContent.style.transform = `translateY(${scrollY * 0.05}px)`;
});

// Word-by-word fade-in for hero text
const heroText = document.getElementById('heroText');
const words = heroText.textContent.split(' ');
heroText.textContent = '';
words.forEach((word, i) => {
    const span = document.createElement('span');
    span.textContent = word + ' ';
    span.style.opacity = 0;
    span.style.transition = `opacity 0.8s ease ${(i+1)*0.4}s`;
    heroText.appendChild(span);
    setTimeout(()=>{span.style.opacity = 1;}, 100);
});

// Price card hover details
const priceCards = document.querySelectorAll('.price-card');
const priceDetails = document.getElementById('priceDetails');

priceCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    priceDetails.textContent = card.dataset.details;
  });
  card.addEventListener('mouseleave', () => {
    priceDetails.textContent = '';
  });
});
