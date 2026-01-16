// FADE IN ON LOAD
window.addEventListener('load',()=>{document.body.classList.add('loaded');});

// SCROLL REVEAL
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible');});},{threshold:0.15});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// CUSTOM CURSOR
const cursor=document.querySelector('.cursor');
window.addEventListener('mousemove',e=>{cursor.style.top=`${e.clientY}px`; cursor.style.left=`${e.clientX}px`;});
document.querySelectorAll('a, button').forEach(el=>{el.addEventListener('mouseenter',()=>cursor.classList.add('hover')); el.addEventListener('mouseleave',()=>cursor.classList.remove('hover'));});
