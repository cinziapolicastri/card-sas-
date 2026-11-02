/**
 * CARD SAS - Party & Event Boutique
 * Core Application Logic, Reactive State & Interactivity
 */

// Curated Products Catalog featuring Real Harry Potter Gadgets
const PRODUCTS = [
  {
    id: "hp-dobby-set",
    name: "Set Regalo Harry Potter \"Dobby\" (Tazza + Calzini)",
    category: "harry-potter",
    categoryLabel: "Harry Potter Ufficiale",
    price: 15.90,
    rating: 5.0,
    reviewsCount: 34,
    badge: "Bestseller Regalo",
    image: "assets/products/harry-potter-dobby-set.png",
    shortDesc: "Confezione regalo con tazza in gres decorata (315 ml) e calzini coordinati \"Dobby is a free elf\" (tg. 36-40), in splendida scatola a finestra.",
    fullDesc: "Il regalo perfetto per ogni fan di Harry Potter e dell'elfo domestico più amato della saga. Il cofanetto include una tazza in robusto gres adatta per colazione, tisane o cioccolata calda e un paio di calzini morbidi con grafica iconica e scritta \"Dobby has no master, Dobby is a free elf!\". Presentato in confezione regalo ufficiale con finestra trasparente.",
    includes: [
      "1x Tazza mug in gres da 315 ml con grafica ufficiale Dobby",
      "1x Paio di calzini coordinati (97% poliestere, 3% elastan, taglia 36-40)",
      "1x Confezione regalo sagomata con vetrina trasparente e licenza ufficiale Warner Bros"
    ]
  },
  {
    id: "hp-stationery-bag",
    name: "Set Cancelleria Hogwarts con Astuccio (5 pezzi)",
    category: "harry-potter",
    categoryLabel: "Harry Potter Ufficiale",
    price: 6.90,
    rating: 4.8,
    reviewsCount: 22,
    badge: "Scuola & Studio",
    image: "assets/products/harry-potter-stationery-bag.png",
    shortDesc: "Kit studio completo da 5 pezzi (penna, matita, gomma, temperino, righello) in astuccio trasparente con zip a tema Hogwarts.",
    fullDesc: "Porta la magia di Hogwarts sul tuo banco di scuola o sulla tua scrivania. Questo set ufficiale contiene tutti gli strumenti essenziali per lo studio e il disegno, custoditi in un pratico astuccio trasparente con cerniera zip rinforzata e grafiche dei simboli delle casate.",
    includes: [
      "1x Astuccio portacarte trasparente con cerniera zip e stampe Hogwarts",
      "1x Penna a sfera con impugnatura confortevole",
      "1x Matita in grafite con gommino superiore",
      "1x Gomma per cancellare sagomata a tema",
      "1x Temperamatite compatto",
      "1x Righello graduato personalizzato"
    ]
  },
  {
    id: "hp-mug",
    name: "Tazza Mug in Ceramica Ufficiale Harry Potter (325 ml)",
    category: "harry-potter",
    categoryLabel: "Harry Potter Ufficiale",
    price: 9.90,
    rating: 4.9,
    reviewsCount: 47,
    badge: "Must Have",
    image: "assets/products/harry-potter-mug.png",
    shortDesc: "Classica tazza da colazione in ceramica smaltata di alta qualità (325 ml, altezza 10 cm) con grafica originale Harry Potter.",
    fullDesc: "Inizia ogni giornata con un tocco di magia. Realizzata in ceramica resistente, questa tazza mug da 325 ml è perfetta per caffè, tè, tisane o latte caldo. Lavabile in lavastoviglie e utilizzabile nel microonde, viene fornita nella sua elegante scatola protettiva illustrata.",
    includes: [
      "1x Tazza mug in ceramica di prima scelta (capacità ca. 325 ml, altezza 10 cm)",
      "1x Confezione protettiva in cartoncino regalo con licenza ufficiale Wizarding World"
    ]
  },
  {
    id: "sw-mug-spinner",
    name: "Tazza Grande Original Stormtrooper con Spinner 3D (560 ml)",
    category: "star-wars",
    categoryLabel: "Star Wars & Stormtrooper",
    price: 16.90,
    rating: 5.0,
    reviewsCount: 31,
    badge: "Novità Esclusiva",
    image: "assets/products/stormtrooper-mug-spinner.png",
    shortDesc: "Maxi tazza in ceramica dolomite (560 ml, 15,5 x 12 cm) con elmo 3D Stormtrooper girevole (spinner) integrato nella scocca.",
    fullDesc: "Un pezzo unico e divertente per tutti gli amanti della saga: questa maxi tazza da 560 ml presenta una cavità centrale con l'iconico casco 3D dell'Original Stormtrooper che ruota su se stesso come uno spinner antistress. Perfetta per colazione, caffè americano o tisane, viene fornita nella sua scatola regalo finestra \"Spin Me!\".",
    includes: [
      "1x Maxi tazza in dolomite smaltata nera (capacità 560 ml, dimensioni 15,5 x 12 cm)",
      "1x Elmo 3D Original Stormtrooper girevole a 360° integrato",
      "1x Confezione regalo ufficiale Shepperton Design Studios con finestra"
    ]
  },
  {
    id: "sw-doormat-dark-side",
    name: "Zerbino Star Wars \"Welcome to the Dark Side\" (60x40 cm)",
    category: "star-wars",
    categoryLabel: "Star Wars Ufficiale",
    price: 19.90,
    rating: 4.9,
    reviewsCount: 39,
    badge: "Idea Regalo Casa",
    image: "assets/products/star-wars-doormat-dark-side.png",
    shortDesc: "Zerbino d'ingresso ufficiale in fibra di cocco naturale e fondo in PVC antiscivolo (60 x 40 cm) con Darth Vader.",
    fullDesc: "Accogli i tuoi ospiti con l'ironia e il fascino del Lato Oscuro! Realizzato in robusta fibra di cocco naturale con base antiscivolo in PVC, questo zerbino ufficiale Star Wars raffigura l'inconfondibile casco di Darth Vader affiancato dalla scritta \"Welcome to the Dark Side\". Perfetto come regalo d'inaugurazione casa o per veri fan.",
    includes: [
      "1x Zerbino in fibra di cocco naturale ad alta resistenza (dimensioni ca. 60 x 40 cm)",
      "1x Base inferiore in PVC antiscivolo per massima stabilità",
      "1x Cartellino appendibile con licenza ufficiale Star Wars / Disney"
    ]
  },
  {
    id: "sw-bottle-stormtrooper",
    name: "Borraccia in Metallo Original Stormtrooper (500 ml)",
    category: "star-wars",
    categoryLabel: "Star Wars & Stormtrooper",
    price: 17.90,
    rating: 4.9,
    reviewsCount: 26,
    badge: "Hot & Cold",
    image: "assets/products/stormtrooper-metal-bottle.png",
    shortDesc: "Bottiglia termica in acciaio inox nero opaco (500 ml, h 27 cm) per bevande calde e fredde, in elegante confezione regalo.",
    fullDesc: "Porta lo stile imperiale sempre con te, in ufficio, a scuola o in palestra. Questa borraccia riutilizzabile in acciaio inossidabile da 500 ml mantiene la temperatura di bevande calde e fredde ed è decorata con l'elmo metallizzato Original Stormtrooper (True to the Original Since 1976). Custodita in un'elegante scatola regalo nera.",
    includes: [
      "1x Borraccia in metallo inox nero satinato (capacità ca. 500 ml, altezza ca. 27 cm)",
      "1x Tappo a vite ermetico anti-goccia in acciaio",
      "1x Scatola regalo verticale illustrata Original Stormtrooper"
    ]
  },
  {
    id: "party-beer-pong",
    name: "Set Gioco da Festa \"Beer Pong\" (22 Bicchieri + 15 Palline)",
    category: "party-trend",
    categoryLabel: "Party & Giochi",
    price: 9.90,
    rating: 4.9,
    reviewsCount: 44,
    badge: "Must per Feste",
    image: "assets/products/party-beer-pong.png",
    shortDesc: "Kit completo Beer Pong con 22 iconici bicchieri rossi (550 ml) e 15 palline da lancio, pronto per animare ogni festa.",
    fullDesc: "Il re indiscusso dei party game americani! Questo kit completo firmato Out of the Blue contiene tutto il necessario per sfidare gli amici a colpi di mira: 22 grandi bicchieri rossi da 550 ml e 15 palline leggere da ping-pong, confezionati in un pratico sacchetto con header card.",
    includes: [
      "22x Bicchieri party rossi riutilizzabili (capacità ca. 550 ml ciascuno)",
      "15x Palline da lancio bianche per Beer Pong",
      "1x Confezione con header card illustrata \"Drinking Game Beer Pong\""
    ]
  },
  {
    id: "party-drinking-darts",
    name: "Gioco da Tavolo \"Dart Shots\" Bersaglio Magnetico + 4 Bicchierini",
    category: "party-trend",
    categoryLabel: "Party & Giochi",
    price: 16.90,
    rating: 5.0,
    reviewsCount: 29,
    badge: "Idea Regalo Party",
    image: "assets/products/party-drinking-darts.png",
    shortDesc: "Set freccette da tavolo con bersaglio magnetico su supporto in metallo, 4 freccette magnetiche e 4 bicchierini shot numerati.",
    fullDesc: "Divertimento assicurato per serate tra amici, compleanni, lauree e addio al celibato/nubilato! Mira al bersaglio con le freccette magnetiche sicure (senza punta acuminata) e segui le sfide indicate dai settori (Full Shot, Half Shot, Drink with a Buddy, Pass). Include rastrelliera porta-bicchierini integrata alla base.",
    includes: [
      "1x Bersaglio da tavolo con supporto in metallo e base porta-shot",
      "4x Bicchierini da shot in vetro decorati e numerati (1-4)",
      "4x Freccette con punta magnetica (2 rosse + 2 gialle)",
      "1x Scatola regalo illustrata \"Dart Shots Drinking Game\""
    ]
  }
];

// Reactive State (filtra eventuali articoli rimossi dal catalogo)
const VALID_PRODUCT_IDS = new Set(PRODUCTS.map(p => p.id));
const state = {
  cart: (JSON.parse(localStorage.getItem("card_sas_cart")) || []).filter(item => VALID_PRODUCT_IDS.has(item.id)),
  wishlist: (JSON.parse(localStorage.getItem("card_sas_wishlist")) || []).filter(id => VALID_PRODUCT_IDS.has(id)),
  currentCategory: "all",
  searchQuery: "",
  freeShippingThreshold: 65.00
};

// Persistence Helpers
function saveCart() {
  localStorage.setItem("card_sas_cart", JSON.stringify(state.cart));
  updateCartUI();
}

function saveWishlist() {
  localStorage.setItem("card_sas_wishlist", JSON.stringify(state.wishlist));
  updateWishlistUI();
}

function formatPrice(number) {
  return number.toFixed(2).replace(".", ",") + " €";
}

// Toast Notifications
function showToast(message, icon = "✨") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateY(20px)";
    toast.style.transition = "all 0.3s ease";
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// ===================================================================
// Product Grid & Catalog
// ===================================================================
function renderProducts() {
  const grid = document.getElementById("productsGrid");
  if (!grid) return;

  const filtered = PRODUCTS.filter(product => {
    const matchesCategory = state.currentCategory === "all" || product.category === state.currentCategory;
    const matchesSearch = !state.searchQuery || 
      product.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      product.categoryLabel.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
      product.shortDesc.toLowerCase().includes(state.searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
        <p style="font-size: 1.25rem; margin-bottom: 1rem;">Nessun articolo trovato per "${state.searchQuery}"</p>
        <button class="btn btn-secondary" onclick="resetFilters()">Mostra Tutti i Gadget</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const inWishlist = state.wishlist.includes(product.id);
    return `
      <article class="product-card" data-id="${product.id}" data-category="${product.category}">
        <div class="card-media">
          <img src="${product.image}" alt="${product.name}" loading="lazy">
          <span class="badge-tag">${product.badge}</span>
          <button class="wishlist-toggle ${inWishlist ? 'active' : ''}" 
                  onclick="toggleWishlist('${product.id}')" 
                  aria-label="Aggiungi ai preferiti">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2.2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>

        <div class="card-body">
          <div class="card-meta-row">
            <span class="card-category">${product.categoryLabel}</span>
          </div>
          <h3 class="card-title">${product.name}</h3>
          <p class="card-description">${product.shortDesc}</p>

          <div class="card-footer">
            <div class="card-price-wrap">
              <span class="price-label">Prezzo</span>
              <div class="card-price">${formatPrice(product.price)}</div>
            </div>
            <div class="card-actions">
              <button class="btn-quickview" onclick="openQuickView('${product.id}')" title="Vedi dettagli">Dettagli</button>
              <button class="btn-card-add" onclick="addToCart('${product.id}')">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                <span>Aggiungi</span>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function setCategoryFilter(category) {
  state.currentCategory = category;
  document.querySelectorAll(".filter-chip").forEach(chip => {
    if (chip.dataset.category === category) {
      chip.classList.add("active");
    } else {
      chip.classList.remove("active");
    }
  });
  renderProducts();
}

function resetFilters() {
  state.searchQuery = "";
  state.currentCategory = "all";
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.value = "";
  document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
  const allChip = document.querySelector(".filter-chip[data-category='all']");
  if (allChip) allChip.classList.add("active");
  renderProducts();
}

// Category filter click handling
function setupCategoryFilters() {
  const container = document.getElementById("categoryFilters");
  if (!container) return;

  container.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-chip")) {
      container.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
      e.target.classList.add("active");
      state.currentCategory = e.target.dataset.category;
      renderProducts();
    }
  });
}

// Search input handling
function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.trim();
    renderProducts();
  });
}

// ===================================================================
// Quick View Modal
// ===================================================================
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById("quickViewModal");
  const body = document.getElementById("modalProductDetails");

  body.innerHTML = `
    <div class="modal-product-layout">
      <div class="modal-image-stage">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="modal-info">
        <div class="modal-category">${product.categoryLabel}</div>
        <h2>${product.name}</h2>
        <div class="modal-price">${formatPrice(product.price)}</div>
        <p class="modal-desc">${product.fullDesc}</p>

        <div class="modal-includes">
          <h4>🎁 Cosa include la confezione:</h4>
          <ul>
            ${product.includes.map(inc => `<li>${inc}</li>`).join("")}
          </ul>
        </div>

        <div class="modal-actions-row">
          <button class="btn btn-primary" onclick="addToCart('${product.id}'); closeQuickView();" style="flex-grow: 1;">
            Aggiungi al Carrello • ${formatPrice(product.price)}
          </button>
          <button class="btn btn-secondary" onclick="shareProductWhatsApp('${product.name}', '${formatPrice(product.price)}')">
            💬 Chiedi su WhatsApp
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeQuickView() {
  const modal = document.getElementById("quickViewModal");
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

function shareProductWhatsApp(name, price) {
  const text = encodeURIComponent(`Ciao CARD SAS! Vorrei ordinare o chiedere informazioni su "${name}" (${price}). È disponibile?`);
  window.open(`https://wa.me/393456789012?text=${text}`, "_blank");
}

// ===================================================================
// Cart System & Drawers
// ===================================================================
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = state.cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    state.cart[existingIndex].quantity += quantity;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity,
      meta: product.categoryLabel
    });
  }
  showToast(`"${product.name}" aggiunto al carrello!`, "🛍️");

  saveCart();
  openCartDrawer();
}

function updateCartQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }
  saveCart();
}

function removeFromCart(id) {
  state.cart = state.cart.filter(i => i.id !== id);
  saveCart();
  showToast("Articolo rimosso dal carrello", "🗑️");
}

function updateCartUI() {
  const cartCountEl = document.getElementById("cartCount");
  const cartDrawerCountEl = document.getElementById("cartDrawerCount");
  const itemsList = document.getElementById("cartItemsList");
  const subtotalEl = document.getElementById("cartSubtotal");
  const shippingText = document.getElementById("shippingTrackerText");
  const progressFill = document.getElementById("shippingProgressFill");

  const totalCount = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartCountEl) cartCountEl.textContent = totalCount;
  if (cartDrawerCountEl) cartDrawerCountEl.textContent = totalCount;
  if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);

  // Free shipping tracker
  if (shippingText && progressFill) {
    const diff = state.freeShippingThreshold - subtotal;
    if (diff <= 0) {
      shippingText.innerHTML = `🎉 <strong>Complimenti!</strong> Hai diritto alla Spedizione Gratuita!`;
      progressFill.style.width = "100%";
    } else {
      const percentage = Math.min(100, Math.round((subtotal / state.freeShippingThreshold) * 100));
      shippingText.innerHTML = `Mancano <strong>${formatPrice(diff)}</strong> alla Spedizione Gratuita!`;
      progressFill.style.width = `${percentage}%`;
    }
  }

  if (!itemsList) return;

  if (state.cart.length === 0) {
    itemsList.innerHTML = `
      <div class="drawer-empty-state">
        <div class="empty-icon">🛒</div>
        <h3>Il carrello è vuoto</h3>
        <p>Aggiungi uno dei nostri gadget esclusivi Harry Potter o festosi.</p>
        <button class="btn btn-secondary" onclick="closeCartDrawer();" style="margin-top: 1rem;">
          Continua lo Shopping
        </button>
      </div>
    `;
    return;
  }

  itemsList.innerHTML = state.cart.map(item => `
    <div class="drawer-item">
      <img src="${item.image}" alt="${item.name}">
      <div class="drawer-item-info">
        <strong>${item.name}</strong>
        <div class="item-meta">${item.meta || ''}</div>
        <div class="qty-control">
          <button onclick="updateCartQty('${item.id}', -1)" aria-label="Riduci">−</button>
          <span>${item.quantity}</span>
          <button onclick="updateCartQty('${item.id}', 1)" aria-label="Aumenta">+</button>
        </div>
      </div>
      <div>
        <div class="drawer-item-price">${formatPrice(item.price * item.quantity)}</div>
        <button class="drawer-item-remove" onclick="removeFromCart('${item.id}')">Rimuovi</button>
      </div>
    </div>
  `).join("");
}

function openCartDrawer() {
  document.getElementById("cartDrawer").classList.add("active");
  document.getElementById("cartOverlay").classList.add("active");
}

function closeCartDrawer() {
  document.getElementById("cartDrawer").classList.remove("active");
  document.getElementById("cartOverlay").classList.remove("active");
}

function checkoutViaWhatsApp() {
  if (state.cart.length === 0) {
    showToast("Il carrello è vuoto!", "⚠️");
    return;
  }

  const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let message = `*ORDINE CARD SAS - GADGET STORE*\n\n`;
  message += `Desidero ordinare i seguenti articoli dal sito:\n\n`;

  state.cart.forEach((item, idx) => {
    message += `${idx + 1}. *${item.name}* (x${item.quantity}) - ${formatPrice(item.price * item.quantity)}\n`;
  });

  message += `\n*Totale:* ${formatPrice(subtotal)}\n`;
  message += `Spedizione: ${subtotal >= state.freeShippingThreshold ? 'GRATUITA' : 'Standard 6,90 €'}\n\n`;
  message += `Potete confermarmi la disponibilità e procedere con l'ordine? Grazie!`;

  window.open(`https://wa.me/393456789012?text=${encodeURIComponent(message)}`, "_blank");
}

// ===================================================================
// Wishlist System
// ===================================================================
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);

  if (index > -1) {
    state.wishlist.splice(index, 1);
    showToast(`Rimosso dai preferiti`, "🤍");
  } else {
    state.wishlist.push(productId);
    showToast(`Aggiunto ai preferiti!`, "❤️");
  }

  saveWishlist();
  renderProducts();
}

function updateWishlistUI() {
  const countEl = document.getElementById("wishlistCount");
  const drawerCountEl = document.getElementById("wishlistDrawerCount");
  const itemsList = document.getElementById("wishlistItemsList");

  if (countEl) countEl.textContent = state.wishlist.length;
  if (drawerCountEl) drawerCountEl.textContent = state.wishlist.length;

  if (!itemsList) return;

  if (state.wishlist.length === 0) {
    itemsList.innerHTML = `
      <div class="drawer-empty-state">
        <div class="empty-icon">🤍</div>
        <h3>Nessun preferito salvato</h3>
        <p>Salva i tuoi articoli preferiti per ritrovarli facilmente.</p>
      </div>
    `;
    return;
  }

  const wishlistProducts = PRODUCTS.filter(p => state.wishlist.includes(p.id));
  itemsList.innerHTML = wishlistProducts.map(product => `
    <div class="drawer-item">
      <img src="${product.image}" alt="${product.name}">
      <div class="drawer-item-info">
        <strong>${product.name}</strong>
        <div class="drawer-item-price">${formatPrice(product.price)}</div>
        <button class="btn btn-primary" style="padding: 0.35rem 0.8rem; font-size: 0.75rem; margin-top: 0.4rem;" 
                onclick="addToCart('${product.id}'); toggleWishlist('${product.id}');">
          Sposta nel Carrello
        </button>
      </div>
      <div>
        <button class="drawer-item-remove" onclick="toggleWishlist('${product.id}')">Rimuovi</button>
      </div>
    </div>
  `).join("");
}

function openWishlistDrawer() {
  document.getElementById("wishlistDrawer").classList.add("active");
  document.getElementById("wishlistOverlay").classList.add("active");
}

function closeWishlistDrawer() {
  document.getElementById("wishlistDrawer").classList.remove("active");
  document.getElementById("wishlistOverlay").classList.remove("active");
}

// ===================================================================
// Checkout Modal Feedback
// ===================================================================
function setupCheckout() {
  const proceedBtn = document.getElementById("proceedCheckoutBtn");
  const checkoutWhatsAppBtn = document.getElementById("checkoutWhatsAppBtn");

  if (checkoutWhatsAppBtn) {
    checkoutWhatsAppBtn.addEventListener("click", checkoutViaWhatsApp);
  }

  if (proceedBtn) {
    proceedBtn.addEventListener("click", () => {
      if (state.cart.length === 0) {
        showToast("Il tuo carrello è vuoto!", "⚠️");
        return;
      }
      const subtotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      alert(`🎉 Ordine Simulato con Successo!\n\nTotale: ${formatPrice(subtotal)}\nGrazie per aver scelto CARD SAS. Puoi anche confermare l'ordine direttamente via WhatsApp!`);
    });
  }
}

// ===================================================================
// Mobile Navigation & Global Listeners
// ===================================================================
function setupEventListeners() {
  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navMenu = document.getElementById("navMenu");
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      navMenu.classList.toggle("open");
    });
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => navMenu.classList.remove("open"));
    });
  }

  document.getElementById("cartTriggerBtn").addEventListener("click", openCartDrawer);
  document.getElementById("closeCartBtn").addEventListener("click", closeCartDrawer);
  document.getElementById("cartOverlay").addEventListener("click", closeCartDrawer);

  document.getElementById("wishlistTriggerBtn").addEventListener("click", openWishlistDrawer);
  document.getElementById("closeWishlistBtn").addEventListener("click", closeWishlistDrawer);
  document.getElementById("wishlistOverlay").addEventListener("click", closeWishlistDrawer);

  document.getElementById("closeModalBtn").addEventListener("click", closeQuickView);
  document.getElementById("quickViewModal").addEventListener("click", (e) => {
    if (e.target.id === "quickViewModal") closeQuickView();
  });

  const newsletterForm = document.getElementById("newsletterForm");
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = e.target.querySelector("input").value;
      showToast(`Grazie! Buono sconto inviato a ${email}`, "🎁");
      e.target.reset();
    });
  }
}

// Global initialization
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  setupCategoryFilters();
  setupSearch();
  setupCheckout();
  setupEventListeners();
  updateCartUI();
  updateWishlistUI();
});
