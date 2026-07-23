// ---------- data ----------
const PRODUCTS = [
  {name:"Barquilla Doble Choco", cat:"barquillas", price:65, desc:"Vainilla y chocolate en cono crujiente artesanal.", img:"https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=800&auto=format&fit=crop"},
  {name:"Malteada Fresa Real", cat:"malteadas", price:78, desc:"Fresa natural, crema batida y cereza.", img:"https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=800&auto=format&fit=crop"},
  {name:"Sundae Caramelo", cat:"sundaes", price:85, desc:"Helado, caramelo tibio y nuez garapiñada.", img:"https://images.unsplash.com/photo-1560008581-09826d1de69e?q=80&w=800&auto=format&fit=crop"},
  {name:"Helado Napolitano", cat:"helados", price:55, desc:"Vainilla, fresa y chocolate en una sola bola.", img:"https://images.unsplash.com/photo-1576506295286-5cda18df43e7?q=80&w=800&auto=format&fit=crop"},
  {name:"Especial Corazón Rojo", cat:"especiales", price:95, desc:"Edición San Valentín: fresa, chocolate y merengue.", img:"https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=800&auto=format&fit=crop"},
  {name:"Topping Chispas de Choco", cat:"toppings", price:15, desc:"Chispas crujientes de chocolate belga.", img:"https://images.unsplash.com/photo-1587049352846-4a222e784d38?q=80&w=800&auto=format&fit=crop"},
  {name:"Barquilla Mango", cat:"barquillas", price:60, desc:"Mango fresco con toque de chile-limón opcional.", img:"https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?q=80&w=800&auto=format&fit=crop"},
  {name:"Malteada Choco Extremo", cat:"malteadas", price:82, desc:"Triple chocolate con brownie y jarabe caliente.", img:"https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop"},
  {name:"Helado Pistache", cat:"helados", price:58, desc:"Pistache real con trozos tostados.", img:"https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=800&auto=format&fit=crop"},
];

const BRANCHES = [
  {name:"Barquilovers Centro", addr:"Av. Central 123, Centro, CDMX", hours:"Lun–Dom 11:00–22:00"},
  {name:"Barquilovers Polanco", addr:"Calle Masaryk 45, Polanco, CDMX", hours:"Lun–Dom 12:00–23:00"},
  {name:"Barquilovers Condesa", addr:"Av. Michoacán 88, Condesa, CDMX", hours:"Lun–Dom 11:30–22:30"},
];

const TESTIMONIALS = [
  {name:"Camila R.", text:"El mejor helado de la ciudad, siempre fresco y el servicio es increíble.", stars:5},
  {name:"Diego M.", text:"La barquilla de mango es mi favorita, la textura del cono es perfecta.", stars:5},
  {name:"Valeria S.", text:"Pedimos el combo pareja y fue justo lo que necesitábamos para celebrar.", stars:5},
  {name:"Andrés T.", text:"Atención rápida y sabores muy originales, ya es mi lugar de siempre.", stars:4},
];

const GALLERY_IMGS = [
  "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1488900128323-21503983a07e?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1560008581-09826d1de69e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1576506295286-5cda18df43e7?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=900&auto=format&fit=crop",
];

// ---------- render products ----------
const productGrid = document.getElementById('productGrid');
function renderProducts(filter='todos'){
  productGrid.innerHTML = PRODUCTS.filter(p => filter==='todos' || p.cat===filter).map(p => `
    <div class="bg-white dark:bg-choco-light/20 rounded-4xl overflow-hidden shadow-soft card-hover reveal in">
      <div class="aspect-[4/3] overflow-hidden">
        <img src="${p.img}" alt="${p.name}" loading="lazy" class="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
      </div>
      <div class="p-5">
        <h3 class="font-display text-xl">${p.name}</h3>
        <p class="text-sm text-choco/60 dark:text-crema/60 mt-1">${p.desc}</p>
        <div class="flex items-center justify-between mt-4">
          <span class="font-display text-rojo text-xl">$${p.price}</span>
          <button onclick="openOrderModal('${p.name.replace(/'/g, "\\'")}')" class="btn-primary text-white text-sm font-semibold px-4 py-2 rounded-full">Comprar</button>
        </div>
      </div>
    </div>
  `).join('');
}
renderProducts();

document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active','bg-rojo','text-white'));
    btn.classList.add('active','bg-rojo','text-white');
    renderProducts(btn.dataset.cat);
  });
});

// ---------- gallery ----------
const galleryGrid = document.getElementById('galleryGrid');
galleryGrid.innerHTML = GALLERY_IMGS.map(src => `
  <div class="reveal in rounded-3xl overflow-hidden shadow-soft cursor-zoom-in group">
    <img src="${src}" loading="lazy" class="w-full group-hover:scale-105 transition-transform duration-500" alt="Foto Barquilovers" />
  </div>
`).join('');
galleryGrid.querySelectorAll('img').forEach(img => {
  img.addEventListener('click', () => {
    document.getElementById('lightboxImg').src = img.src;
    document.getElementById('lightbox').classList.remove('hidden');
    document.getElementById('lightbox').classList.add('flex');
  });
});
document.getElementById('closeLightbox').addEventListener('click', () => {
  document.getElementById('lightbox').classList.add('hidden');
  document.getElementById('lightbox').classList.remove('flex');
});

// ---------- branches ----------
document.getElementById('branchList').innerHTML = BRANCHES.map(b => `
  <div class="bg-white dark:bg-choco-light/20 rounded-3xl p-6 flex items-center justify-between gap-4 card-hover">
    <div>
      <h3 class="font-display text-xl">${b.name}</h3>
      <p class="text-sm text-choco/60 dark:text-crema/60 mt-1">${b.addr}</p>
      <p class="text-sm text-choco/60 dark:text-crema/60">${b.hours}</p>
    </div>
    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(b.addr)}" target="_blank" rel="noopener" class="shrink-0 btn-primary text-white text-xs font-semibold px-4 py-2.5 rounded-full">Cómo llegar</a>
  </div>
`).join('');

// ---------- testimonials slider ----------
const testiTrack = document.getElementById('testiTrack');
const testiDots = document.getElementById('testiDots');
testiTrack.innerHTML = TESTIMONIALS.map(t => `
  <div class="w-full shrink-0 px-4 text-center">
    <p class="text-lg italic">"${t.text}"</p>
    <p class="mt-4 font-display text-rojo">${t.name}</p>
    <p class="text-amarillo">${'★'.repeat(t.stars)}${'☆'.repeat(5-t.stars)}</p>
  </div>
`).join('');
testiDots.innerHTML = TESTIMONIALS.map((_, i) => `<button data-i="${i}" class="w-2.5 h-2.5 rounded-full ${i===0?'bg-rojo':'bg-rojo/25'} testi-dot"></button>`).join('');
let testiIndex = 0;
function goTesti(i){
  testiIndex = i;
  testiTrack.style.transform = `translateX(-${i*100}%)`;
  document.querySelectorAll('.testi-dot').forEach((d,di) => d.classList.toggle('bg-rojo', di===i) || d.classList.toggle('bg-rojo/25', di!==i));
}
document.querySelectorAll('.testi-dot').forEach(d => d.addEventListener('click', () => goTesti(+d.dataset.i)));
setInterval(() => goTesti((testiIndex+1) % TESTIMONIALS.length), 5000);

// ---------- countdown ----------
function renderCountdown(el, target){
  function tick(){
    const diff = target - Date.now();
    if(diff <= 0){ el.innerHTML = '<span class="text-amarillo font-semibold">¡Promo activa!</span>'; return; }
    const d = Math.floor(diff/86400000), h = Math.floor(diff/3600000)%24, m = Math.floor(diff/60000)%60, s = Math.floor(diff/1000)%60;
    el.innerHTML = [['D',d],['H',h],['M',m],['S',s]].map(([l,v]) => `
      <div class="bg-white/10 rounded-xl px-3 py-2 min-w-[52px]"><span class="block text-lg font-display">${String(v).padStart(2,'0')}</span><span class="text-[10px] text-crema/60">${l}</span></div>
    `).join('');
  }
  tick(); setInterval(tick, 1000);
}
const now = Date.now();
renderCountdown(document.getElementById('cd-1'), now + 2*86400000 + 5*3600000);
renderCountdown(document.getElementById('cd-2'), now + 1*86400000 + 9*3600000);
renderCountdown(document.getElementById('cd-3'), now + 4*86400000 + 2*3600000);

// ---------- scroll reveal ----------
const revealEls = document.querySelectorAll('.reveal, .reveal-scale');
const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
}, {threshold:0.15});
revealEls.forEach(el => io.observe(el));

// ---------- navbar scroll state ----------
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('navbar-scrolled', window.scrollY > 30);
  const toTop = document.getElementById('toTop');
  if(window.scrollY > 500){ toTop.classList.remove('opacity-0','pointer-events-none'); }
  else { toTop.classList.add('opacity-0','pointer-events-none'); }
});
document.getElementById('toTop').addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));

// ---------- mobile menu ----------
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));

// ---------- dark mode ----------
const themeToggle = document.getElementById('themeToggle');
function applyTheme(dark){
  document.documentElement.classList.toggle('dark', dark);
  themeToggle.textContent = dark ? '☀️' : '🌙';
}
applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
themeToggle.addEventListener('click', () => applyTheme(!document.documentElement.classList.contains('dark')));

// ---------- search ----------
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');
searchBtn.addEventListener('click', () => { searchOverlay.classList.remove('hidden'); searchOverlay.classList.add('flex'); searchInput.focus(); });
document.getElementById('closeSearch').addEventListener('click', () => { searchOverlay.classList.add('hidden'); searchOverlay.classList.remove('flex'); });
searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim().toLowerCase();
  if(!q){ searchResults.innerHTML=''; return; }
  const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q));
  searchResults.innerHTML = matches.length ? matches.map(p => `<div class="flex justify-between px-3 py-2 rounded-xl hover:bg-amarillo/20"><span>${p.name}</span><span class="font-display text-rojo">$${p.price}</span></div>`).join('') : '<p class="text-choco/50 dark:text-crema/50 px-3">Sin resultados.</p>';
});

// ---------- forms ----------
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('cName');
  const email = document.getElementById('cEmail');
  const msg = document.getElementById('cMsg');
  let valid = true;
  [name, email, msg].forEach(f => f.nextElementSibling.classList.add('hidden'));
  if(!name.value.trim()){ name.nextElementSibling.classList.remove('hidden'); valid=false; }
  if(!/^\S+@\S+\.\S+$/.test(email.value)){ email.nextElementSibling.classList.remove('hidden'); valid=false; }
  if(!msg.value.trim()){ msg.nextElementSibling.classList.remove('hidden'); valid=false; }
  if(valid){
    document.getElementById('contactSuccess').classList.remove('hidden');
    e.target.reset();
  }
});
document.getElementById('wholesaleForm').addEventListener('submit', e => {
  e.preventDefault();
  const business = document.getElementById('wsName').value.trim();
  const email = document.getElementById('wsEmail').value.trim();
  const phone = document.getElementById('wsPhone').value.trim();
  const msg = document.getElementById('wsMsg').value.trim();
  const text = `Hola, quiero información de *ventas al mayoreo* 🍦%0A%0A*Negocio:* ${encodeURIComponent(business)}%0A*Correo:* ${encodeURIComponent(email)}%0A*Teléfono:* ${encodeURIComponent(phone)}%0A*Necesidad:* ${encodeURIComponent(msg || 'No especificado')}`;
  window.open(`https://wa.me/584120737316?text=${text}`, '_blank');
  document.getElementById('wsSuccess').classList.remove('hidden');
  e.target.reset();
});

// ---------- order modal (WhatsApp / correo) ----------
const orderModal = document.getElementById('orderModal');
const oProduct = document.getElementById('oProduct');
window.openOrderModal = function(productName){
  oProduct.value = productName || '';
  orderModal.classList.remove('hidden');
  orderModal.classList.add('flex');
  document.getElementById('oName').focus();
};
function closeOrderModal(){
  orderModal.classList.add('hidden');
  orderModal.classList.remove('flex');
}
document.getElementById('closeOrderModal').addEventListener('click', closeOrderModal);
orderModal.addEventListener('click', e => { if(e.target === orderModal) closeOrderModal(); });

function buildOrderText(){
  const name = document.getElementById('oName').value.trim();
  const product = document.getElementById('oProduct').value.trim();
  const qty = document.getElementById('oQty').value || '1';
  const phone = document.getElementById('oPhone').value.trim();
  const notes = document.getElementById('oNotes').value.trim();
  return { name, product, qty, phone, notes };
}

document.getElementById('sendOrderWhatsapp').addEventListener('click', () => {
  const { name, product, qty, phone, notes } = buildOrderText();
  if(!name || !product){ alert('Por favor escribe tu nombre y el producto que deseas ordenar.'); return; }
  const text = `Hola, quiero hacer un *pedido* 🍦%0A%0A*Nombre:* ${encodeURIComponent(name)}%0A*Producto:* ${encodeURIComponent(product)}%0A*Cantidad:* ${encodeURIComponent(qty)}%0A*Teléfono:* ${encodeURIComponent(phone || 'No especificado')}%0A*Notas:* ${encodeURIComponent(notes || 'Ninguna')}`;
  window.open(`https://wa.me/584120737316?text=${text}`, '_blank');
  closeOrderModal();
});

document.getElementById('sendOrderEmail').addEventListener('click', () => {
  const { name, product, qty, phone, notes } = buildOrderText();
  if(!name || !product){ alert('Por favor escribe tu nombre y el producto que deseas ordenar.'); return; }
  const subject = encodeURIComponent(`Nuevo pedido de ${name} — Barquilovers`);
  const body = encodeURIComponent(`Nombre: ${name}\nProducto: ${product}\nCantidad: ${qty}\nTeléfono: ${phone || 'No especificado'}\nNotas: ${notes || 'Ninguna'}`);
  window.open(`mailto:maprantonio3@gmail.com?subject=${subject}&body=${body}`, '_blank');
  closeOrderModal();
});

// ---------- loader ----------
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => { loader.style.opacity = '0'; setTimeout(() => loader.style.display='none', 500); }, 500);
});

document.getElementById('year').textContent = new Date().getFullYear();
