(() => {
  const products = [
    {
      id: 1,
      title: "Fox Fur Wool Overcoat",
      season: "winter",
      price: "665 Kr",
      desc: "Double-sided wool — structured yet soft.",
      image: "https://ik.imagekit.io/Szn/Products/furcoat.jpg?updatedAt=1761338583934",
      imageAlt: "Fox Fur Wool Overcoat",
      affiliate: "https://s.click.aliexpress.com/e/_c33NrCSB"
    },
    {
      id: 2,
      title: "Sleeveless Knitted Dress",
      season: "summer",
      price: "82 Kr",
      desc: "Casual buttoned knit — lightweight & minimal.",
      image: "https://ae-pic-a1.aliexpress-media.com/kf/S9deffab987804448aa1fa01fd5638beeZ.jpg_220x220q75.jpg_.avif",
      imageAlt: "Sleeveless Knitted Dress",
      affiliate: "https://s.click.aliexpress.com/e/_c3diOdP5"
    },
    {
      id: 3,
      title: "ETJ 1975 Denim Midi Dress",
      season: "spring",
      price: "235 Kr",
      desc: "Slim fit denim, lapel neckline, side zip.",
      image: "https://ae-pic-a1.aliexpress-media.com/kf/S699c6887bb3042c5b28360b84b9f2d10e.jpg_220x220q75.jpg_.avif",
      imageAlt: "ETJ Denim Midi Dress",
      affiliate: "https://s.click.aliexpress.com/e/_c3JXTBFN"
    },
    {
      id: 4,
      title: "Merino Wool Wide-Leg Knit Pants",
      season: "winter",
      price: "168 Kr",
      desc: "Soft merino blend — effortless warmth.",
      image: "https://ae-pic-a1.aliexpress-media.com/kf/S8bdfd3c326ae46cca92264ca39d2bd9dv.jpg_220x220q75.jpg_.avif",
      imageAlt: "Merino Knit Pants",
      affiliate: "https://s.click.aliexpress.com/e/_c4OcaWHz"
    }
  ];

  const grid = document.getElementById("productsGrid");
  const seasonSelect = document.getElementById("seasonSelect");
  const searchInput = document.getElementById("search");
  const yearEl = document.getElementById("year");
  yearEl.textContent = new Date().getFullYear();

  function renderProducts(list) {
    grid.innerHTML = "";
    if (!list.length) {
      grid.innerHTML = `<p style="text-align:center;color:var(--muted)">No items found.</p>`;
      return;
    }
    list.forEach((p) => {
      const el = document.createElement("article");
      el.className = "card";
      el.innerHTML = `
        <div class="thumbnail">
          <img src="${p.image}" alt="${p.imageAlt}" loading="lazy">
        </div>
        <div class="meta">
          <div>
            <div class="title-small">${p.title}</div>
            <div class="desc">${p.desc}</div>
          </div>
          <div class="price">${p.price}</div>
        </div>
        <div class="actions">
          <a class="btn" href="${p.affiliate}" target="_blank" rel="noopener noreferrer">Buy</a>
        </div>
      `;
      grid.appendChild(el);
    });
  }

  function filterProducts() {
    const season = seasonSelect.value;
    const q = searchInput.value.trim().toLowerCase();
    const list = products.filter((p) => {
      const seasonMatch = season === "all" || p.season === season || p.season === "all";
      const textMatch = (p.title + " " + p.desc).toLowerCase().includes(q);
      return seasonMatch && textMatch;
    });
    renderProducts(list);
  }

  seasonSelect.addEventListener("change", filterProducts);
  searchInput.addEventListener("input", filterProducts);

  renderProducts(products);
})();
