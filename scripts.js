document.addEventListener('DOMContentLoaded', function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      const expanded = navLinks.style.display === 'flex';
      navLinks.style.display = expanded ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.background = 'rgba(15,15,15,0.9)';
      navLinks.style.padding = '12px';
    });
  }

  // Smooth scroll
  document.querySelectorAll('a[href^=\"#\"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const href = a.getAttribute('href');
      if(href.length>1){
        e.preventDefault();
        document.querySelector(href).scrollIntoView({behavior:'smooth'});
      }
    });
  });

  // Keyword animation
  const cloud = document.getElementById('keywordCloud');
  if(cloud){
    Array.from(cloud.children).forEach((el)=>{
      el.addEventListener('mouseenter',()=>{
        el.style.transform='translateY(-8px) scale(1.05)';
      });
      el.addEventListener('mouseleave',()=>{
        el.style.transform='';
      });
    });
  }

  // ✅ Formspree async submission
  const form = document.getElementById('leadForm');
  const status = document.getElementById('formStatus');
  
  if(form){
    form.addEventListener('submit', async (e)=>{
      e.preventDefault();
      status.textContent = 'Sender...';

      const data = new FormData(form);
      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        if(response.ok){
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
});
