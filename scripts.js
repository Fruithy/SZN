document.addEventListener('DOMContentLoaded', function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // Toggle mobile menu
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
    Array.from(cloud.children).forEach((el,i)=>{
      el.addEventListener('mouseenter',()=>{
        el.style.transform='translateY(-8px) scale(1.05)';
      });
      el.addEventListener('mouseleave',()=>{
        el.style.transform='';
      });
    });
  }

  // Contact form
  const form = document.getElementById('leadForm');
  const status = document.getElementById('formStatus');
  const clearBtn = document.getElementById('clearBtn');

  if(clearBtn){
    clearBtn.addEventListener('click',()=>{
      form.reset();
      status.textContent='';
    });
  }

  if(form){
    form.addEventListener('submit', e=>{
      e.preventDefault();
      status.textContent='Sender...';
      setTimeout(()=>{
        status.textContent='Takk! Vi har mottatt meldingen din.';
        form.reset();
      },1000);
    });
  }
});
