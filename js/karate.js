// js/karate.js
// Karate Page Specific JavaScript

function _resolveImgLocal(path) {
  if (typeof resolveImg === "function") return resolveImg(path);
  const base = location.pathname.includes("/body-parts/") ? "../" : "";
  const cleaned = path.startsWith("/") ? path.slice(1) : path;
  return base + cleaned; 
}

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const productsContainer = document.getElementById("karateProductsContainer");

// Antes: const products = window.products (esto daba undefined)
const karateProducts = (typeof products !== "undefined" ? products : []).filter(p => p.category === "karate");


  // Render inicial
  renderKarateProducts(karateProducts);

  // Filtros por tipo (all, gi, protection, accessories)
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");
      const filtered =
        filter === "all" ? karateProducts : karateProducts.filter((p) => p.type === filter);

      renderKarateProducts(filtered);

      // Mensaje si no hay resultados
      if (filtered.length === 0 && productsContainer) {
        productsContainer.innerHTML = `
          <div class="col-12 text-center py-5">
            <p class="footer-copy">No se encontraron productos en esta categoría</p>
          </div>
        `;
      }
    });
  });

  // Smooth scroll para anclas (CTA)
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // Animaciones on-scroll
  const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".philosophy-item").forEach((item, index) => {
    item.style.opacity = "0";
    item.style.transform = "translateY(30px)";
    item.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(item);
  });

  document.querySelectorAll(".technique-card").forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  console.log("[v0] Karate page initialized");
  console.log("[v0] Loaded", karateProducts.length, "karate products");
});

function renderKarateProducts(productsToRender) {
  const container = document.getElementById("karateProductsContainer");
  if (!container) return;

  if (productsToRender.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <p class="footer-copy">No se encontraron productos en esta categoría</p>
      </div>`;
    return;
  }

  container.innerHTML = productsToRender
    .map((product) => {
      const img = _resolveImgLocal(product.image);
      return `
        <div class="col-md-6 col-lg-4">
          <div class="product-card">
            <img src="${img}" alt="${product.name}" class="product-image">
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
        </div>`;
    })
    .join("");
}
