// Muay Thai Page Specific JavaScript

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn-mt")
  const productsContainer = document.getElementById("muayThaiProductsContainer")

  // Get muay thai products
  const muayThaiProducts = window.products.filter((p) => p.category === "muay-thai")

  // Render all muay thai products initially
  renderMuayThaiProducts(muayThaiProducts)

  // Filter functionality
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active button
      filterButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      // Filter products
      const filter = button.getAttribute("data-filter")
      let filteredProducts = muayThaiProducts

      if (filter !== "all") {
        filteredProducts = muayThaiProducts.filter((p) => p.type === filter)
      }

      // Render filtered products
      renderMuayThaiProducts(filteredProducts)
    })
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Animate elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe feature items
  document.querySelectorAll(".feature-item").forEach((item, index) => {
    item.style.opacity = "0"
    item.style.transform = "translateY(30px)"
    item.style.transition = `all 0.6s ease ${index * 0.1}s`
    observer.observe(item)
  })

  // Observe technique cards
  document.querySelectorAll(".technique-card-mt").forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(30px)"
    card.style.transition = `all 0.6s ease ${index * 0.1}s`
    observer.observe(card)
  })

  // Observe stat cards
  document.querySelectorAll(".stat-card-mt").forEach((card, index) => {
    card.style.opacity = "0"
    card.style.transform = "scale(0.9)"
    card.style.transition = `all 0.6s ease ${index * 0.15}s`
    observer.observe(card)
  })

  console.log("[v0] Muay Thai page initialized")
  console.log("[v0] Loaded", muayThaiProducts.length, "muay thai products")
})

function renderMuayThaiProducts(productsToRender) {
  const container = document.getElementById("muayThaiProductsContainer")
  if (!container) return

  if (productsToRender.length === 0) {
    container.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-light">No se encontraron productos en esta categoría</p>
            </div>
        `
    return
  }

  container.innerHTML = productsToRender
    .map(
      (product) => `
        <div class="col-md-6 col-lg-4">
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
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
    `,
    )
    .join("")
}
