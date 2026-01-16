/* --- Reset og grunnleggende --- */
* {margin:0; padding:0; box-sizing:border-box;}
body, html {height:100%; font-family: 'Montserrat', sans-serif; overflow-x:hidden; background:#0f0f0f; color:#fff;}

/* --- Hero --- */
.hero {
  position: relative;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
  text-align:center;
  height:100vh;
  overflow:hidden;
}

.hero-bg {
  position:absolute;
  top:0; left:0; width:100%; height:100%;
  background: linear-gradient(120deg, #0f0f0f, #1a1a1a);
  z-index:0;
  overflow:hidden;
}

/* Moving light stripes */
.light-stripes {
  position:absolute;
  top:-50%; left:-50%;
  width:200%; height:200%;
  background: repeating-linear-gradient(
    45deg,
    rgba(255,0,85,0.1),
    rgba(255,0,85,0.1) 2px,
    transparent 2px,
    transparent 10px
  );
  animation: moveStripes 15s linear infinite;
}
.light-stripes.second {
  background: repeating-linear-gradient(
    135deg,
    rgba(0,255,204,0.08),
    rgba(0,255,204,0.08) 2px,
    transparent 2px,
    transparent 12px
  );
  animation: moveStripes 20s linear infinite reverse;
}

@keyframes moveStripes {
  0% {transform: translate(0,0);}
  100% {transform: translate(-50%,50%);}
}

.hero-content {
  position: relative;
  z-index:1;
  max-width:700px;
  padding:2rem;
  overflow:visible;
}

/* Fade-in hero text word by word */
.hero-text {
  font-family: 'Playfair Display', serif;
  font-weight:700;
  font-size:4rem;
  color:#ff0055;
  letter-spacing:2px;
}

.hero-subtext {
  font-size:1.5rem;
  color:#ffffffcc;
  margin:1rem 0 2rem;
  opacity:0;
  animation: fadeIn 2s forwards 1.5s;
}
@keyframes fadeIn {to {opacity:1;}}

/* --- Actions --- */
.actions {display:flex; flex-direction: column; gap:1rem; align-items:center; position:relative;}
.btn {
  padding:1rem 2rem;
  background:#00ffcc;
  color:#0f0f0f;
  font-weight:700;
  border-radius:50px;
  text-decoration:none;
  transition:0.3s, transform 0.3s, box-shadow 0.3s;
}
.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 0 25px #00ffcc;
  animation: pulse 1.5s infinite;
}
@keyframes pulse {
  0%,100% {box-shadow:0 0 25px #00ffcc;}
  50% {box-shadow:0 0 40px #00ffcc;}
}

/* --- Instagram --- */
.insta {
  color:#ff0055;
  font-weight:600;
  text-decoration:none;
  font-size:1.2rem;
  transition:0.3s;
  position:relative;
}
.insta:hover {color:#ff3399;}
.insta-preview {
  display:flex;
  gap:0.5rem;
  margin-top:1rem;
  opacity:0;
  transform:translateY(-10px);
  transition:0.3s;
}
.insta:hover + .insta-preview,
.insta-preview:hover {opacity:1; transform:translateY(0);}
.insta-preview img {width:80px; border-radius:8px; object-fit:cover; box-shadow:0 0 10px rgba(255,255,255,0.3);}

/* --- Priser --- */
#priser {
  background: #111;
  color: #fff;
  padding: 6rem 5%;
  text-align: center;
}
.price-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(220px,1fr));
  gap: 2rem;
  margin-top:2rem;
}
.price-card {
  background:#1a1a1a;
  padding:2rem;
  border-radius:12px;
  transition: transform 0.3s, box-shadow 0.3s, background 0.3s;
  border:1px solid #222;
  cursor:pointer;
}
.price-card:hover {
  transform: translateY(-8px);
  box-shadow:0 8px 25px rgba(0,255,204,0.4);
  background: #1f1f1f;
}
.price-card h3 {
  font-size:1.4rem;
  margin-bottom:0.5rem;
  color:#ff0055;
}
.price-card .price {
  font-size:1.8rem;
  font-weight:700;
  color:#00ffcc;
}
.price-details {
  margin-top:1rem;
  font-size:1rem;
  color:#ffffffaa;
  height:1.2em;
}

/* --- Responsiv --- */
@media(max-width:768px){
  .hero-text {font-size:3rem;}
  .hero-subtext {font-size:1.2rem;}
  .actions {gap:0.5rem;}
  .insta-preview img {width:60px;}
}
