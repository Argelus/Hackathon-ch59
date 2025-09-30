// ================================
// main.js - Fight Gear Pro
// ================================

// -- Efecto de navbar al hacer scroll --
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
});

// ================================
// Utilidad: nombre legible por parte
// ================================
function getPartName(part) {
  const names = {
    head:  "Protección de Cabeza",
    hands: "Protección de Manos",
    torso: "Protección de Torso",
    feet:  "Protección de Pies",
  };
  return names[part] || part;
}

// ================================
// DOM listo
// ================================
document.addEventListener("DOMContentLoaded", () => {
  // ================================
  // Mapa del cuerpo (hover en pareja + click -> página)
  // ================================
  const map = document.getElementById("bodyMap");
  if (map) {
    const routes = {
      head:  "body-parts/head.html",
      hands: "body-parts/hands.html",
      torso: "body-parts/torso.html",
      feet:  "body-parts/feet.html",
    };

    // ---- helpers de "encendido" en grupo ----
    const HOT_FILL   = "var(--primary-color)";
    const HOT_STROKE = "var(--primary-color)";
    const HOT_FILTER = "drop-shadow(0 0 10px var(--primary-color))";

    function setGroupHot(partSlug, isHot) {
      const group = map.querySelectorAll(`.body-part[data-part="${partSlug}"]`);
      group.forEach((node) => {
        if (isHot) {
          // guarda estilos previos 
          if (!node.dataset.prevFill)   node.dataset.prevFill   = node.style.fill || "";
          if (!node.dataset.prevStroke) node.dataset.prevStroke = node.style.stroke || "";
          if (!node.dataset.prevFilter) node.dataset.prevFilter = node.style.filter || "";
          // aplica highlight inline (equivalente a :hover)
          node.style.fill   = HOT_FILL;
          node.style.stroke = HOT_STROKE;
          node.style.filter = HOT_FILTER;
        } else {
          // restaura estilos previos
          node.style.fill   = node.dataset.prevFill   || "";
          node.style.stroke = node.dataset.prevStroke || "";
          node.style.filter = node.dataset.prevFilter || "";
          delete node.dataset.prevFill;
          delete node.dataset.prevStroke;
          delete node.dataset.prevFilter;
        }
      });
    }

    // ---- delegación de click para navegar ----
    map.addEventListener("click", (ev) => {
      const el = ev.target.closest(".body-part");
      if (!el) return;
      const part = el.dataset.part;
      const url = routes[part];
      if (url) window.location.href = url;
    });

    // ---- prepara cada pieza para hover, focus y tooltip ----
    map.querySelectorAll(".body-part").forEach((el) => {
      const partSlug = el.dataset.part;

      // Accesibilidad
      el.setAttribute("tabindex", "0");
      el.setAttribute("role", "link");
      el.setAttribute("aria-label", getPartName(partSlug));

      // Hover en pareja (mouseenter / mouseleave)
      el.addEventListener("mouseenter", (e) => {
        setGroupHot(partSlug, true);

        // Tooltip
        const tooltip = document.createElement("div");
        tooltip.className = "body-tooltip";
        tooltip.textContent = getPartName(partSlug);
        tooltip.style.cssText = `
          position: fixed;
          background: var(--primary-color);
          color: white;
          padding: .5rem 1rem;
          border-radius: 5px;
          font-size: .9rem;
          pointer-events: none;
          z-index: 9999;
          left: ${e.clientX + 10}px;
          top: ${e.clientY + 10}px;
        `;
        document.body.appendChild(tooltip);

        const move = (e2) => {
          tooltip.style.left = `${e2.clientX + 10}px`;
          tooltip.style.top  = `${e2.clientY + 10}px`;
        };
        const leave = () => {
          el.removeEventListener("mousemove", move);
          el.removeEventListener("mouseleave", leave);
          tooltip.remove();
          setGroupHot(partSlug, false);
        };

        el.addEventListener("mousemove", move);
        el.addEventListener("mouseleave", leave);
      });

      // Focus con teclado (encender grupo)
      el.addEventListener("focus", () => setGroupHot(partSlug, true));
      el.addEventListener("blur",  () => setGroupHot(partSlug, false));

      // Activación con Enter o Espacio
      el.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter" || ev.key === " ") {
          ev.preventDefault();
          el.click();
        }
      });
    });
  }

  // ==================================
  // Scroll suave para enlaces internos
  // ==================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  // =========================================
  // Animación de aparición al hacer scrolling
  // =========================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".category-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
    });

  document.querySelectorAll(".product-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
  });

  // =======================
  // Logs de diagnóstico
  // =======================
  console.log("[v0] Fight Gear Pro initialized");
  console.log("[v0] Cart system loaded");
  try {
    if (typeof products !== "undefined" && Array.isArray(products)) {
      console.log("[v0] Products database loaded:", products.length, "products");
    }
  } catch {
    /* sin productos en esta página */
  }
});
