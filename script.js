// Hero canvas light stripes
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const stripes = [];
for(let i=0;i<50;i++){
  stripes.push({
    x: Math.random()*canvas.width,
    y: Math.random()*canvas.height,
    length: 50 + Math.random()*100,
    speed: 0.2 + Math.random()*0.3,
    color: Math.random() < 0.5 ? 'rgba(255,0,85,0.1)' : 'rgba(0,255,204,0.08)'
  });
}

function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  stripes.forEach(s=>{
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(s.x, s.y+s.length);
    ctx.strokeStyle = s.color;
    ctx.lineWidth = 2;
    ctx.stroke();
    s.y += s.speed;
    if(s.y > canvas.height) s.y = -s.length;
  });
  requestAnimationFrame(animate);
}
animate();

// Hero parallax
const heroContent = document.querySelector('.hero-content');
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    heroContent.style.transform = `translateY(${scrollY * 0.05}px)`;
});

// Word-by-word fade-in hero text
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

// Canvas resize
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
