(() => {
  const products = [
    { 
      id:1, 
      title:"Fox Fur Wool Overcoat", 
      season:"winter", 
      price:"665 Kr", 
      desc:"Elegant double-sided wool blend coat with fox fur details.",
      image:"https://ik.imagekit.io/Szn/Products/furcoat.jpg?updatedAt=1761338583934", 
      affiliate:"https://s.click.aliexpress.com/e/_c33NrCSB" 
    },
    { 
      id:2, 
      title:"Sleeveless Knitted Dress", 
      season:"summer", 
      price:"82 Kr", 
      desc:"Minimal bodycon knit with buttoned front and soft stretch.",
      image:"https://ik.imagekit.io/Szn/Products/summerdress.jpg?updatedAt=1761338583916", 
      affiliate:"https://s.click.aliexpress.com/e/_c3diOdP5" 
    },
    { 
      id:3, 
      title:"ETJ 1975 Denim Midi Dress", 
      season:"spring", 
      price:"235 Kr", 
      desc:"Slim denim silhouette with lapel neckline and side zip.",
      image:"https://ik.imagekit.io/Szn/Products/blackdress.jpg?updatedAt=1761338583854", 
      affiliate:"https://s.click.aliexpress.com/e/_c3JXTBFN" 
    },
    { 
      id:4, 
      title:"Merino Wool Wide-Leg Knit Pants", 
      season:"winter", 
      price:"168 Kr", 
      desc:"Soft merino blend — effortless warmth for colder seasons.",
      image:"https://ik.imagekit.io/Szn/Products/furlegs.jpg?updatedAt=1761338583953", 
      affiliate:"https://s.click.aliexpress.com/e/_c4OcaWHz" 
    }
  ];

  const grid = document.getElementById('productsGrid');
  const seasonSelect = document.getElementById('seasonSelect');
  const searchInput = document.getElementById('search');
  const yearEl = document.getElementById('year');
  const currentSeasonLabel = document.getElementById('currentSeasonLabel');
  const seasonToggle = document.getElementById('seasonToggle');

  yearEl.textContent = new Date().getFullYear();
  renderProducts(products);

  function renderProducts(list) {
    grid.innerHTML = '';
    if (!list.length) {
      grid.innerHTML = `<div class="card"><div>No results</div></div>`;
      return;
    }
    list.forEach(p => {
      const el = document.createElement('article');
      el.className = 'card';
      el.innerHTML = `
        <div class="thumbnail">
          <img src="${p.image}" alt="${p.title}">
        </div>
        <div class="meta">
          <div>
            <div class="title-small">${p.title}</div>
            <div class="desc" style="color:var(--muted);font-size:0.9rem">${p.desc}</div>
          </div>
          <div class="price">${p.price}</div>
        </div>
        <div style="display:flex;gap:8px;align-items:center;justify-content:space-between">
          <a class="btn" href="${p.affiliate}" target="_blank">Buy</a>
          <button class="btn ghost preview" data-id="${p.id}">Preview</button>
        </div>
      `;
      grid.appendChild(el);
    });
  }

  function filterProducts() {
    const season = seasonSelect.value.toLowerCase();
    const q = searchInput.value.trim().toLowerCase();
    const list = products.filter(p => {
      const seasonMatch = season === 'all' || p.season === season;
      const textMatch = !q || (p.title + p.desc).toLowerCase().includes(q);
      return seasonMatch && textMatch;
    });
    currentSeasonLabel.textContent = season === 'all' ? 'All' : season[0].toUpperCase() + season.slice(1);
    renderProducts(list);
  }

  function debounce(fn, ms) {
    let t;
    return (...args) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...args), ms);
    };
  }

  seasonSelect.addEventListener('change', filterProducts);
  searchInput.addEventListener('input', debounce(filterProducts, 200));

  seasonToggle.addEventListener('click', () => {
    const order = ['all','spring','summer','autumn','winter'];
    const idx = order.indexOf(seasonSelect.value);
    seasonSelect.value = order[(idx + 1) % order.length];
    filterProducts();
  });

  document.getElementById('subscribeForm').addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value.trim();
    if (!email || !email.includes('@')) return alert('Please enter a valid email.');
    e.target.innerHTML = `<div style="color:var(--muted)">Thanks — check your inbox soon.</div>`;
  });

  grid.addEventListener('click', e => {
    const btn = e.target.closest('.preview');
    if (!btn) return;
    const p = products.find(x => x.id === Number(btn.dataset.id));
    if (p) showToast(`${p.title} — ${p.price}`);
  });

  function showToast(text) {
    let toast = document.getElementById('sznToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'sznToast';
      toast.style.position = 'fixed';
      toast.style.bottom = '20px';
      toast.style.right = '20px';
      toast.style.background = 'rgba(0,0,0,0.7)';
      toast.style.padding = '10px 16px';
      toast.style.borderRadius = '8px';
      toast.style.color = '#fff';
      document.body.appendChild(toast);
    }
    toast.textContent = text;
    toast.style.opacity = 1;
    clearTimeout(toast._t);
    toast._t = setTimeout(() => toast.style.opacity = 0, 3000);
  }
})();
