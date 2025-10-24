// Minimal JS: renders a small set of seasonal affiliate products and lightweight UI interactions.
// No external requests required — swap with your real product API/affiliate feed when ready.

(() => {
  const products = [
    { id:1, title:"Tossy Fox Fur Wool Overcoat", season:"winter", price:"Kr 665", desc:"Women's Short Coat Office Lady Elegant Double-sided Woolen Coat", imageAlt:"href="img src="//ae01.alicdn.com/kf/Seb290325182b4173975206aa7cb17408c.jpg_80x80.jpg", affiliate:"https://s.click.aliexpress.com/e/_c33NrCSB" },
    { id:2, title:"Sleeveless Knitted Bodycon Dress", season:"summer", price:"Kr 82", desc:"Women Casual Buttons Sleeveless Knitted Bodycon Dress", imageAlt:"href="src="//ae01.alicdn.com/kf/See57c60003684ff1af8a53c5c8d5d6bcQ.jpg_80x80.jpg"", affiliate:"https://s.click.aliexpress.com/e/_c3diOdP5" },
    { id:3, title:"Autumn Lantern Set", season:"autumn", price:"€29", desc:"Battery-powered warm glow.", imageAlt:"Lanterns", affiliate:"https://example.com/aff?prod=3" },
    { id:4, title:"Spring Herb Kit", season:"spring", price:"€15", desc:"Grow basil, thyme & parsley.", imageAlt:"Herb kit", affiliate:"https://example.com/aff?prod=4" },
    { id:5, title:"All-Season Insulated Bottle", season:"all", price:"€24", desc:"Keeps drinks hot or cold.", imageAlt:"Bottle", affiliate:"https://example.com/aff?prod=5" },
    { id:6, title:"Festival Portable Charger", season:"summer", price:"€34", desc:"Compact, fast-charging.", imageAlt:"Power bank", affiliate:"https://example.com/aff?prod=6" }
  ];

  // DOM refs
  const grid = document.getElementById('productsGrid');
  const seasonSelect = document.getElementById('seasonSelect');
  const searchInput = document.getElementById('search');
  const yearEl = document.getElementById('year');
  const currentSeasonLabel = document.getElementById('currentSeasonLabel');
  const seasonToggle = document.getElementById('seasonToggle');

  // init
  yearEl.textContent = new Date().getFullYear();
  renderProducts(products);

  // render function
  function renderProducts(list){
    grid.innerHTML = '';
    if (!list.length) {
      grid.innerHTML = `<div class="card"><div class="thumbnail">No results</div><div style="color:var(--muted)">Try a different season or search term.</div></div>`;
      return;
    }
    list.forEach(p => {
      const el = document.createElement('article');
      el.className = 'card';
      el.innerHTML = `
        <div class="thumbnail" role="img" aria-label="${escapeHtml(p.imageAlt)}">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" aria-hidden><rect width="24" height="24" rx="6" fill="rgba(255,255,255,0.03)"/></svg>
        </div>
        <div>
          <div class="meta">
            <div>
              <div class="title-small">${escapeHtml(p.title)}</div>
              <div class="desc" style="color:var(--muted);font-size:0.9rem">${escapeHtml(p.desc)}</div>
            </div>
            <div class="price">${escapeHtml(p.price)}</div>
          </div>
        </div>
        <div style="display:flex;gap:8px;align-items:center">
          <a class="btn" data-aff="${encodeURI(p.affiliate)}" href="${p.affiliate}" target="_blank" rel="noopener noreferrer">Buy</a>
          <button class="btn ghost preview" data-id="${p.id}">Preview</button>
        </div>
      `;
      grid.appendChild(el);
    });
  }

  // simple filtering
  function filterProducts(){
    const season = seasonSelect.value;
    const q = searchInput.value.trim().toLowerCase();
    currentSeasonLabel.textContent = season === 'all' ? 'All' : capitalize(season);
    let list = products.filter(p => {
      const seasonMatch = (season === 'all') || (p.season === season) || (p.season === 'all');
      const text = (p.title + ' ' + p.desc).toLowerCase();
      const queryMatch = !q || text.includes(q);
      return seasonMatch && queryMatch;
    });
    renderProducts(list);
  }

  // event listeners
  seasonSelect.addEventListener('change', filterProducts);
  searchInput.addEventListener('input', debounce(filterProducts, 220));

  // season toggle button (cycles seasons)
  seasonToggle.addEventListener('click', () => {
    const order = ['all','spring','summer','autumn','winter'];
    const idx = order.indexOf(seasonSelect.value);
    seasonSelect.value = order[(idx + 1) % order.length];
    filterProducts();
  });

  // subscribe form (very lightweight)
  document.getElementById('subscribeForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    if(!email || !email.includes('@')) {
      alert('Please enter a valid email.');
      return;
    }
    // simulated opt-in (replace with real endpoint)
    document.getElementById('subscribeForm').innerHTML = `<div style="color:var(--muted)">Thanks — check your inbox for the welcome note.</div>`;
  });

  // preview button (shows a lightweight toast)
  grid.addEventListener('click', e => {
    const btn = e.target.closest('.preview');
    if (!btn) return;
    const id = Number(btn.dataset.id);
    const p = products.find(x => x.id === id);
    if(!p) return;
    showToast(`${p.title} — ${p.price} — ${p.desc}`);
  });

  // helpers
  function capitalize(s){ return s.charAt(0).toUpperCase() + s.slice(1) }
  function escapeHtml(s){ return (s+'').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])) }

  function debounce(fn, ms=200){
    let t;
    return (...args) => { clearTimeout(t); t = setTimeout(()=>fn(...args), ms); }
  }

  // tiny toast system
  function showToast(text){
    let toast = document.getElementById('sznToast');
    if(!toast){
      toast = document.createElement('div');
      toast.id = 'sznToast';
      toast.style.position = 'fixed';
      toast.style.right = '18px';
      toast.style.bottom = '18px';
      toast.style.background = 'linear-gradient(90deg, rgba(15,23,36,0.9), rgba(15,23,36,0.8))';
      toast.style.border = '1px solid rgba(255,255,255,0.03)';
      toast.style.padding = '12px 16px';
      toast.style.borderRadius = '12px';
      toast.style.boxShadow = '0 12px 40px rgba(2,6,23,0.6)';
      toast.style.color = 'var(--muted)';
      toast.style.maxWidth = '320px';
      toast.style.fontSize = '0.95rem';
      toast.style.zIndex = 60;
      toast.style.backdropFilter = 'blur(6px)';
      document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.style.opacity = '1';
    clearTimeout(toast._t);
    toast._t = setTimeout(()=> { toast.style.opacity = '0'; }, 3800);
  }

  // initial label sync
  currentSeasonLabel.textContent = 'All';

})();
