// FADE IN
window.addEventListener('load',()=>{document.body.classList.add('loaded');});

// SCROLL REVEAL
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible');});},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// CUSTOM CURSOR
const cursor=document.querySelector('.cursor');
window.addEventListener('mousemove',e=>{cursor.style.top=`${e.clientY}px`; cursor.style.left=`${e.clientX}px`;});
document.querySelectorAll('a, button').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('hover')); el.addEventListener('mouseleave',()=>cursor.classList.remove('hover'));});

// MODAL BOOKING
const modal=document.getElementById('bookModal');
const btns=[document.getElementById('bookBtn'),document.getElementById('bookBtnHero'),document.getElementById('bookBtnFooter')];
const close=document.querySelector('.close');
btns.forEach(btn=>{btn.addEventListener('click',()=>{modal.style.display='block';});});
close.addEventListener('click',()=>{modal.style.display='none';});
window.addEventListener('click',e=>{if(e.target==modal)modal.style.display='none';});

// HERO PARALLAX
const heroBg = document.querySelector('.hero-bg');
window.addEventListener('scroll',()=>{heroBg.style.transform = `translateY(${window.scrollY*0.3}px)`;});
