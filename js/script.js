// ---------- Data: services (drives service cards + carousel) ----------
const SERVICES = [
  {
    id: "laser",
    name: "Impresión Láser",
    tagline: "Documentos y material corporativo con acabado profesional",
    description:
      "Imprimimos documentos, tarjetas, folletos y material publicitario con tecnología láser de alta definición, ideal para empresas que necesitan calidad y rapidez en Villavicencio.",
    features: [
      "Impresión a color y blanco/negro",
      "Tarjetas de presentación y folletos",
      "Acabados mate y brillante",
      "Entrega en 24-48 horas",
    ],
    priceFrom: "Desde $300 por hoja",
    icon: '<rect x="6" y="3" width="12" height="7"/><path d="M6 17H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="7"/>',
  },
  {
    id: "sublimacion",
    name: "Sublimación",
    tagline: "Personaliza mugs, camisetas, gorras y más",
    description:
      "Convertimos tus ideas en productos personalizados de alta durabilidad: mugs, camisetas, gorras, termos y artículos promocionales para tu marca o evento.",
    features: [
      "Full color sin límite de tonos",
      "Camisetas, mugs, gorras y termos",
      "Ideal para dotaciones y merchandising",
      "Pedidos individuales o al por mayor",
    ],
    priceFrom: "Desde $18.000 por unidad",
    icon: '<path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7z"/><circle cx="12" cy="9" r="2.5"/>',
  },
  {
    id: "marketing",
    name: "Marketing Digital",
    tagline: "Estrategia y contenido para crecer en redes",
    description:
      "Diseñamos estrategias de contenido, pauta publicitaria y diseño gráfico para que tu negocio tenga presencia digital sólida y consiga más clientes en el Meta.",
    features: [
      "Gestión de redes sociales",
      "Diseño gráfico y branding",
      "Pauta publicitaria en Meta Ads",
      "Reportes mensuales de resultados",
    ],
    priceFrom: "Desde $350.000 al mes",
    icon: '<path d="M3 11l18-7-7 18-2.5-7.5L3 11z"/>',
  },
  {
    id: "papeleria",
    name: "Papelería Corporativa",
    tagline: "Todo el papeleo que tu empresa necesita",
    description:
      "Producimos facturas, recibos, membretes, carpetas y tarjetas de presentación con los estándares que tu empresa necesita para operar formalmente.",
    features: [
      "Facturación y talonarios",
      "Membretes y sobres corporativos",
      "Carpetas y tarjetas de presentación",
      "Papel y acabados de calidad",
    ],
    priceFrom: "Desde $30.000",
    icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M9 13h6M9 17h6"/>',
  },
];

// ---------- Data: tentative pricing for quote calculator ----------
const PRICING = {
  laser: {
    label: "Impresión Láser",
    items: [
      { id: "bn", name: "Hojas Blanco y Negro (carta)", price: 300, unit: "hoja", min: 50, step: 50, defaultQty: 100 },
      { id: "color", name: "Hojas a Color (carta)", price: 1200, unit: "hoja", min: 20, step: 20, defaultQty: 50 },
      { id: "tarjetas", name: "Tarjetas de presentación", price: 350, unit: "tarjeta", min: 100, step: 100, defaultQty: 100 },
      { id: "folletos", name: "Folletos tríptico", price: 1800, unit: "folleto", min: 50, step: 50, defaultQty: 100 },
    ],
  },
  sublimacion: {
    label: "Sublimación",
    items: [
      { id: "mug", name: "Mug personalizado", price: 18000, unit: "unidad", min: 1, step: 1, defaultQty: 10 },
      { id: "camiseta", name: "Camiseta personalizada", price: 28000, unit: "unidad", min: 1, step: 1, defaultQty: 10 },
      { id: "gorra", name: "Gorra personalizada", price: 22000, unit: "unidad", min: 1, step: 1, defaultQty: 10 },
      { id: "termo", name: "Termo personalizado", price: 35000, unit: "unidad", min: 1, step: 1, defaultQty: 10 },
    ],
  },
  marketing: {
    label: "Marketing Digital",
    items: [
      { id: "basico", name: "Plan Básico (redes sociales)", price: 350000, unit: "mes", min: 1, step: 1, defaultQty: 1 },
      { id: "pro", name: "Plan Pro (redes + pauta + diseño)", price: 650000, unit: "mes", min: 1, step: 1, defaultQty: 1 },
      { id: "logo", name: "Diseño de logo", price: 150000, unit: "proyecto", min: 1, step: 1, defaultQty: 1 },
      { id: "pauta", name: "Gestión de pauta publicitaria", price: 200000, unit: "mes", min: 1, step: 1, defaultQty: 1 },
    ],
  },
  papeleria: {
    label: "Papelería Corporativa",
    items: [
      { id: "facturero", name: "Facturero talonario (x100)", price: 45000, unit: "talonario", min: 1, step: 1, defaultQty: 2 },
      { id: "membretes", name: "Membretes (resma x500)", price: 120000, unit: "resma", min: 1, step: 1, defaultQty: 1 },
      { id: "recibos", name: "Recibos de caja (x100)", price: 30000, unit: "talonario", min: 1, step: 1, defaultQty: 2 },
      { id: "carpetas", name: "Carpetas corporativas (x50)", price: 200000, unit: "paquete", min: 1, step: 1, defaultQty: 1 },
    ],
  },
};

const WHATSAPP_NUMBER = "573182955152";

function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function formatCOP(n) {
  return "$" + Math.round(n).toLocaleString("es-CO");
}

// ---------- Theme toggle ----------
function initTheme() {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("innube-theme", next);
  });
}

// ---------- Reveal on scroll ----------
function initReveal() {
  const targets = document.querySelectorAll(".reveal, .reveal-stagger");
  if (!("IntersectionObserver" in window) || targets.length === 0) {
    targets.forEach((el) => el.classList.add("in-view"));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  targets.forEach((el) => observer.observe(el));
}

// ---------- Render service cards ----------
function renderServiceCards() {
  const grid = document.getElementById("services-grid");
  if (!grid) return;
  grid.innerHTML = SERVICES.map(
    (s) => `
    <div class="service-card reveal">
      <div class="service-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${s.icon}</svg>
      </div>
      <h3>${s.name}</h3>
      <p>${s.description}</p>
      <ul class="service-features">
        ${s.features
          .map(
            (f) => `<li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              ${f}
            </li>`
          )
          .join("")}
      </ul>
      <span class="service-price">${s.priceFrom}</span>
    </div>
  `
  ).join("");
}

// ---------- Carousel ----------
function initCarousel() {
  const track = document.getElementById("carousel-track");
  const dotsWrap = document.getElementById("carousel-dots");
  const prevBtn = document.getElementById("carousel-prev");
  const nextBtn = document.getElementById("carousel-next");
  const carouselEl = document.getElementById("carousel");
  if (!track || !dotsWrap) return;

  track.innerHTML = SERVICES.map(
    (s) => `
    <div class="carousel-slide" style="background: linear-gradient(135deg, var(--navy-dark), var(--teal))">
      <div>
        <span class="eyebrow">${s.priceFrom}</span>
        <h3>${s.name}</h3>
        <p>${s.tagline}</p>
        <ul>${s.features.map((f) => `<li>${f}</li>`).join("")}</ul>
      </div>
      <div class="carousel-visual">
        <div class="service-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${s.icon}</svg>
        </div>
      </div>
    </div>
  `
  ).join("");

  dotsWrap.innerHTML = SERVICES.map(
    (_, i) => `<button class="carousel-dot${i === 0 ? " active" : ""}" data-index="${i}" aria-label="Ir a diapositiva ${i + 1}"></button>`
  ).join("");

  const total = SERVICES.length;
  if (total > 1) {
    const firstClone = track.firstElementChild.cloneNode(true);
    const lastClone = track.lastElementChild.cloneNode(true);
    track.insertBefore(lastClone, track.firstElementChild);
    track.appendChild(firstClone);
    track.style.transition = "none";
    track.style.transform = "translateX(-100%)";
    requestAnimationFrame(() => {
      track.style.transition = "";
    });
  }

  let index = 0;
  let position = total > 1 ? 1 : 0;
  const dots = dotsWrap.querySelectorAll(".carousel-dot");

  function updateDots() {
    dots.forEach((d, di) => d.classList.toggle("active", di === index));
  }

  function moveTo(newPosition, animate = true) {
    if (total <= 1) return;
    position = newPosition;
    track.style.transition = animate ? "" : "none";
    track.style.transform = `translateX(-${position * 100}%)`;
  }

  function step(direction) {
    if (total <= 1) return;
    index = (index + direction + total) % total;
    moveTo(position + direction);
    updateDots();
  }

  function goTo(i) {
    index = (i + total) % total;
    if (total <= 1) {
      updateDots();
      return;
    }
    moveTo(index + 1);
    updateDots();
  }

  track.addEventListener("transitionend", () => {
    if (total <= 1) return;
    if (position === 0) {
      moveTo(total, false);
    } else if (position === total + 1) {
      moveTo(1, false);
    }
  });

  prevBtn?.addEventListener("click", () => step(-1));
  nextBtn?.addEventListener("click", () => step(1));
  dots.forEach((d) => d.addEventListener("click", () => goTo(Number(d.dataset.index))));

  let autoplay = setInterval(() => step(1), 5000);
  function pause() { clearInterval(autoplay); }
  function resume() { autoplay = setInterval(() => step(1), 5000); }
  carouselEl?.addEventListener("mouseenter", pause);
  carouselEl?.addEventListener("mouseleave", resume);
  carouselEl?.addEventListener("touchstart", pause, { passive: true });
  carouselEl?.addEventListener("touchend", resume);

  carouselEl?.setAttribute("tabindex", "0");
  carouselEl?.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  // basic swipe support
  let startX = null;
  track.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener("touchend", (e) => {
    if (startX === null) return;
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) > 40) step(diff < 0 ? 1 : -1);
    startX = null;
  });
}

// ---------- Quote calculator ----------
function initQuoteCalculator() {
  const tabsWrap = document.getElementById("quote-tabs");
  const itemSelect = document.getElementById("quote-item");
  const qtyInput = document.getElementById("quote-qty");
  const totalEl = document.getElementById("quote-total");
  const unitEl = document.getElementById("quote-unit-price");
  const ctaBtn = document.getElementById("quote-cta");
  if (!tabsWrap || !itemSelect || !qtyInput || !totalEl) return;

  const categories = Object.keys(PRICING);
  let activeCategory = categories[0];

  tabsWrap.innerHTML = categories
    .map(
      (cat, i) =>
        `<button class="quote-tab${i === 0 ? " active" : ""}" data-cat="${cat}">${PRICING[cat].label}</button>`
    )
    .join("");

  function populateItems() {
    const items = PRICING[activeCategory].items;
    itemSelect.innerHTML = items
      .map((it) => `<option value="${it.id}">${it.name} — ${formatCOP(it.price)}/${it.unit}</option>`)
      .join("");
    updateQtyBounds();
    calculate();
  }

  function currentItem() {
    const items = PRICING[activeCategory].items;
    return items.find((it) => it.id === itemSelect.value) || items[0];
  }

  function updateQtyBounds() {
    const item = currentItem();
    qtyInput.min = item.min;
    qtyInput.step = item.step;
    qtyInput.value = item.defaultQty;
  }

  function calculate() {
    const item = currentItem();
    const qty = Math.max(Number(qtyInput.value) || item.min, item.min);
    const total = item.price * qty;
    unitEl.textContent = `${formatCOP(item.price)} / ${item.unit}`;
    totalEl.textContent = formatCOP(total);
    totalEl.classList.remove("pulse");
    void totalEl.offsetWidth;
    totalEl.classList.add("pulse");

    ctaBtn.href = waLink(
      `Hola Innube, quiero cotizar: ${qty} ${item.unit}(s) de "${item.name}" (${PRICING[activeCategory].label}). Precio referencial estimado: ${formatCOP(total)}. ¿Podrían confirmarme el precio final?`
    );
  }

  tabsWrap.querySelectorAll(".quote-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeCategory = btn.dataset.cat;
      tabsWrap.querySelectorAll(".quote-tab").forEach((b) => b.classList.toggle("active", b === btn));
      populateItems();
    });
  });

  itemSelect.addEventListener("change", () => {
    updateQtyBounds();
    calculate();
  });
  qtyInput.addEventListener("input", calculate);

  populateItems();
}

// ---------- FAQ accordion ----------
function initFaq() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      items.forEach((other) => {
        other.classList.remove("open");
        other.querySelector(".faq-answer").style.maxHeight = null;
      });
      if (!isOpen) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

// ---------- Portfolio filter + lightbox ----------
function initPortfolio() {
  const filters = document.querySelectorAll(".portfolio-filter");
  const items = document.querySelectorAll(".portfolio-item");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxClose = document.getElementById("lightbox-close");

  filters.forEach((btn) => {
    btn.addEventListener("click", () => {
      filters.forEach((b) => b.classList.toggle("active", b === btn));
      const cat = btn.dataset.filter;
      items.forEach((item) => {
        const match = cat === "todos" || item.dataset.category === cat;
        item.classList.toggle("hidden-item", !match);
      });
    });
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const img = item.querySelector("img");
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxCaption.textContent = img.alt;
      lightbox.classList.add("open");
    });
  });

  function closeLightbox() { lightbox.classList.remove("open"); }
  lightboxClose?.addEventListener("click", closeLightbox);
  lightbox?.addEventListener("click", (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeLightbox(); });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("year").textContent = new Date().getFullYear();
  initTheme();
  renderServiceCards();
  initCarousel();
  initQuoteCalculator();
  initFaq();
  initPortfolio();
  initReveal();
});
