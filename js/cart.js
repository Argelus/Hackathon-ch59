// Cart Management with localStorage
class ShoppingCart {
  constructor() {
    this.items = this.loadCart();
    this.updateCartUI();
  }

  loadCart() {
    const cart = localStorage.getItem("fightGearCart");
    return cart ? JSON.parse(cart) : [];
  }

  saveCart() {
    localStorage.setItem("fightGearCart", JSON.stringify(this.items));
    this.updateCartUI();
  }

  addItem(product) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.items.push({
        ...product,
        quantity: 1,
      });
    }

    this.saveCart();
    this.showNotification("Producto agregado al carrito");
  }

  removeItem(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
    this.saveCart();
    this.renderCart();
  }

  updateQuantity(productId, change) {
    const item = this.items.find((item) => item.id === productId);

    if (item) {
      item.quantity += change;

      if (item.quantity <= 0) {
        this.removeItem(productId);
      } else {
        this.saveCart();
        this.renderCart();
      }
    }
  }

  getTotal() {
    return this.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }

  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }

  updateCartUI() {
    const cartCount = document.getElementById("cartCount");
    if (cartCount) {
      cartCount.textContent = this.getItemCount();
    }
  }

  renderCart() {
    const cartItems = document.getElementById("cartItems");
    const cartTotal = document.getElementById("cartTotal");
    if (!cartItems) return;

    // base relativa según desde dónde se abre el modal/página
    const base = location.pathname.includes("/body-parts/") ? "../" : "";

    if (this.items.length === 0) {
      cartItems.innerHTML = `
        <div class="empty-cart">
          <i class="fas fa-shopping-cart fa-3x mb-3"></i>
          <p>Tu carrito está vacío</p>
        </div>
      `;
      if (cartTotal) cartTotal.textContent = "0";
      return;
    }

    cartItems.innerHTML = this.items.map((item) => {
      const src = item.image.startsWith("/")
        ? base + item.image.slice(1)   // "/public/a.jpg" -> "../public/a.jpg" o "public/a.jpg"
        : base + item.image;           // "public/a.jpg" -> "../public/a.jpg" o "public/a.jpg"
      return `
        <div class="cart-item">
          <img src="${src}" alt="${item.name}" class="cart-item-image">
          <div class="cart-item-info">
            <h5 class="cart-item-title">${item.name}</h5>
            <p class="cart-item-price">$${item.price}</p>
            <div class="cart-item-quantity">
              <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, -1)">
                <i class="fas fa-minus"></i>
              </button>
              <span>${item.quantity}</span>
              <button class="quantity-btn" onclick="cart.updateQuantity(${item.id}, 1)">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </div>
          <button class="btn-remove" onclick="cart.removeItem(${item.id})">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      `;
    }).join("");

    if (cartTotal) cartTotal.textContent = this.getTotal().toFixed(2);
  }

  showNotification(message) {
    const notification = document.createElement("div");
    notification.className = "cart-notification";
    notification.innerHTML = `
      <i class="fas fa-check-circle"></i>
      <span>${message}</span>
    `;
    notification.style.cssText = `
      position: fixed;
      top: 100px;
      right: 20px;
      background: var(--primary-color);
      color: white;
      padding: 1rem 1.5rem;
      border-radius: 10px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.3);
      z-index: 9999;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
      notification.style.animation = "slideOut 0.3s ease";
      setTimeout(() => notification.remove(), 300);
    }, 3000);
  }

  checkout() {
    if (this.items.length === 0) {
      alert("Tu carrito está vacío");
      return;
    }

    alert(`Compra finalizada!\nTotal: $${this.getTotal().toFixed(2)}\n\nGracias por tu compra!`);
    this.items = [];
    this.saveCart();
    this.renderCart();

    const modal = window.bootstrap.Modal.getInstance(document.getElementById("cartModal"));
    if (modal) modal.hide();
  }
}

// Initialize cart
const cart = new ShoppingCart();

// Add animation styles
const style = document.createElement("style");
style.textContent = `
  @keyframes slideIn {
    from { transform: translateX(400px); opacity: 0; }
    to   { transform: translateX(0);     opacity: 1; }
  }
  @keyframes slideOut {
    from { transform: translateX(0);     opacity: 1; }
    to   { transform: translateX(400px); opacity: 0; }
  }
`;
document.head.appendChild(style);

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  const cartModal = document.getElementById("cartModal");
  if (cartModal) {
    cartModal.addEventListener("show.bs.modal", () => {
      cart.renderCart();
    });
  }

  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
      cart.checkout();
    });
  }
});
