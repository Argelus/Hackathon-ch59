// Products Database
const products = [
  // Karate Products
  { id: 1, name: "Guantes de Karate Profesionales", category: "karate", type: "protection", bodyPart: "hands", price: 200, image: "public/white-karate-gloves-professional.jpg", description: "Guantes de alta calidad para competición" },
  { id: 2, name: "Gi de Karate Tradicional", category: "karate", type: "gi", bodyPart: "torso", price: 1600, image: "public/white-karate-gi-uniform.jpg", description: "Uniforme tradicional de algodón premium" },
  { id: 3, name: "Protector de Pecho Karate", category: "karate", type: "protection", bodyPart: "torso", price: 550, image: "public/karate-chest-protector-white.jpg", description: "Protección completa para entrenamiento" },

  // Muay Thai Products
  { id: 4, name: "Guantes de Muay Thai 16oz", category: "muay-thai", type: "gloves", bodyPart: "hands", price: 1450, image: "public/red-muay-thai-boxing-gloves.jpg", description: "Guantes profesionales de cuero genuino" },
  { id: 5, name: "Espinilleras Muay Thai", category: "muay-thai", type: "protection", bodyPart: "feet", price: 800, image: "public/muay-thai-shin-guards-red.jpg", description: "Protección completa para piernas" },
  { id: 6, name: "Shorts de Muay Thai", category: "muay-thai", type: "apparel", bodyPart: "torso", price: 600, image: "public/muay-thai-shorts-red-gold.jpg", description: "Shorts tradicionales con diseño tailandés" },

  // Boxing Products
  { id: 7, name: "Guantes de Boxeo Profesionales", category: "boxing", type: "gloves", bodyPart: "hands", price: 1300, image: "public/blue-professional-boxing-gloves.jpg", description: "Guantes de competición certificados" },
  { id: 8, name: "Casco de Boxeo", category: "boxing", type: "protection", bodyPart: "head", price: 900, image: "public/blue-boxing-headgear-protection.jpg", description: "Protección completa para la cabeza" },
  { id: 9, name: "Vendas de Boxeo", category: "boxing", type: "accessories", bodyPart: "hands", price: 150, image: "public/blue-boxing-hand-wraps.jpg", description: "Vendas elásticas de 4 metros" },

  // Jiu-Jitsu Products
  { id: 10, name: "Gi de Jiu-Jitsu Brasileño", category: "jiu-jitsu", type: "gi", bodyPart: "torso", price: 1800, image: "public/purple-brazilian-jiu-jitsu-gi.jpg", description: "Gi de competición tejido pearl" },
  { id: 11, name: "Rashguard de Jiu-Jitsu", category: "jiu-jitsu", type: "apparel", bodyPart: "torso", price: 700, image: "public/purple-jiu-jitsu-rashguard.jpg", description: "Rashguard de compresión premium" },
  { id: 12, name: "Cinturón de Jiu-Jitsu", category: "jiu-jitsu", type: "accessories", bodyPart: "torso", price: 250, image: "public/purple-jiu-jitsu-belt.jpg", description: "Cinturón de algodón tradicional" },

  // Taekwondo Products
  { id: 13, name: "Dobok de Taekwondo", category: "taekwondo", type: "gi", bodyPart: "torso", price: 1050, image: "public/white-taekwondo-dobok-uniform.jpg", description: "Uniforme oficial de competición" },
  { id: 14, name: "Protector de Pies Taekwondo", category: "taekwondo", type: "protection", bodyPart: "feet", price: 500, image: "public/taekwondo-foot-protector-white.jpg", description: "Protección para sparring" },
  { id: 15, name: "Peto de Taekwondo", category: "taekwondo", type: "protection", bodyPart: "torso", price: 1300, image: "public/taekwondo-chest-protector-red.jpg", description: "Peto electrónico para competición" },
];


// --- Helper: resuelve la ruta correcta según la página actual ---
function resolveImg(path) {
  // path viene como "public/archivo.jpg"
  const base = location.pathname.includes("/body-parts/") ? "../" : "";
  return base + path;
}

// Render products on page
function renderProducts(productsToRender = products, containerId = "productsContainer") {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = productsToRender
    .map(
      (product) => `
        <div class="col-md-6 col-lg-4">
          <div class="product-card">
            <img src="${resolveImg(product.image)}" alt="${product.name}" class="product-image">
            <div class="product-body">
              <span class="product-category">${product.category}</span>
              <h4 class="product-title">${product.name}</h4>
              <p class="footer-copy">${product.description}</p>
              <div class="product-price">$${product.price} MXN</div>
              <button class="btn-add-cart" onclick="cart.addItem(${JSON.stringify(product).replace(/"/g, "&quot;")})">
                <i class="fas fa-shopping-cart"></i> Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      `
    )
    .join("");
}

// Filter products by category
function filterByCategory(category) {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

// Filter products by body part
function filterByBodyPart(bodyPart) {
  return products.filter((p) => p.bodyPart === bodyPart);
}

// Initialize products on page load
document.addEventListener("DOMContentLoaded", () => {
  // Render featured products on homepage (first 6)
  if (document.getElementById("productsContainer")) {
    renderProducts(products.slice(0, 6));
  }
});

// --- exporta al global (para páginas que usan window.products / window.resolveImg)
window.products = products;
window.resolveImg = resolveImg;   // si definiste resolveImg en products.js

