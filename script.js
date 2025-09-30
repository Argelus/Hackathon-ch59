// ==========================================================
// --- 1. DATOS GLOBALES Y CONFIGURACIÓN ---
// ==========================================================

// Datos de las categorías del Header
const categories = [
    { id: "karate", name: "Karate" },
    { id: "muay-thai", name: "Muay Thai" },
    { id: "jiu-jitsu", name: "Jiu-Jitsu" },
    { id: "taekwondo", name: "Taekwondo" },
    { id: "boxing", name: "Boxing" },
];

// Datos de las Features de la Home Page
const features = [
    { icon: 'Shield', title: "Protección Garantizada", description: "Equipo certificado para máxima seguridad", },
    { icon: 'Zap', title: "Rendimiento Óptimo", description: "Diseñado para atletas de alto nivel", },
    { icon: 'Trophy', title: "Calidad Premium", description: "Materiales de primera calidad", },
    { icon: 'Flame', title: "Estilo Único", description: "Diseños exclusivos para cada disciplina", },
];

// Datos de las Category Cards de la Home Page
const categoryCards = [
    { id: "karate", name: "Karate", description: "Arte marcial japonés enfocado en golpes precisos y disciplina", image: "https://via.placeholder.com/600x400/dc2626/000000?text=Karate", color: "from-red-600 to-black", textColor: "#dc2626", },
    { id: "muay-thai", name: "Muay Thai", description: "El arte de las ocho extremidades, boxeo tailandés tradicional", image: "https://via.placeholder.com/600x400/f59e0b/000000?text=Muay+Thai", color: "from-amber-500 to-red-600", textColor: "#f59e0b", },
    { id: "jiu-jitsu", name: "Jiu-Jitsu", description: "Arte marcial brasileño especializado en lucha en el suelo", image: "https://via.placeholder.com/600x400/2563eb/000000?text=Jiu+Jitsu", color: "from-blue-600 to-blue-900", textColor: "#3b82f6", },
    { id: "taekwondo", name: "Taekwondo", description: "Arte marcial coreano conocido por sus patadas espectaculares", image: "https://via.placeholder.com/600x400/3b82f6/dc2626?text=Taekwondo", color: "from-blue-500 to-red-500", textColor: "#2563eb", },
    { id: "boxing", name: "Boxing", description: "El noble arte del pugilismo, técnica y potencia en cada golpe", image: "https://via.placeholder.com/600x400/dc2626/f59e0b?text=Boxing", color: "from-red-700 to-yellow-600", textColor: "#dc2626", },
];

// Datos de la Página de Boxeo
const boxingProducts = [
    { name: "Guantes de Boxeo Pro 16oz", price: "$3000.99", rating: 5, image: "https://via.placeholder.com/400x400/dc2626/FFFFFF?text=Guantes+Box", category: "Guantes", },
    { name: "Casco de Entrenamiento", price: "$2899.99", rating: 5, image: "https://via.placeholder.com/400x400/dc2626/FFFFFF?text=Casco+Box", category: "Protección", },
    { name: "Vendas de Mano Premium", price: "$349.00", rating: 5, image: "https://via.placeholder.com/400x400/dc2626/FFFFFF?text=Vendas+Box", category: "Accesorios", },
    { name: "Saco de Boxeo 100lb", price: "$2468.99", rating: 5, image: "https://via.placeholder.com/400x400/dc2626/FFFFFF?text=Saco+Box", category: "Equipamiento", },
    { name: "Speed Ball Profesional", price: "$4250.99", rating: 4, image: "https://via.placeholder.com/400x400/dc2626/FFFFFF?text=Speed+Ball", category: "Equipamiento", },
    { name: "Protector Bucal Doble", price: "$90.99", rating: 4, image: "https://via.placeholder.com/400x400/dc2626/FFFFFF?text=Bucal+Box", category: "Protección", },
];

// Datos de la Página de Jiu-Jitsu
const jiujitsuProducts = [
    { name: "Gi Brasileño Azul A3", price: "$700.00", rating: 5, image: "https://via.placeholder.com/400x400/3b82f6/FFFFFF?text=Gi+BJJ", category: "Uniformes", },
    { name: "Cinturón de Grado", price: "$700.00", rating: 5, image: "https://via.placeholder.com/400x400/3b82f6/FFFFFF?text=Cinturon+BJJ", category: "Accesorios", },
    { name: "Rashguard de Compresión", price: "$300.00", rating: 5, image: "https://via.placeholder.com/400x400/3b82f6/FFFFFF?text=Rashguard", category: "Uniformes", },
    { name: "Shorts de Grappling", price: "$250.00", rating: 4, image: "https://via.placeholder.com/400x400/3b82f6/FFFFFF?text=Shorts+Grappling", category: "Uniformes", },
    { name: "Protector de Orejas", price: "$159.00", rating: 4, image: "https://via.placeholder.com/400x400/3b82f6/FFFFFF?text=Protector+Orejas", category: "Protección", },
    { name: "Dummy de Entrenamiento", price: "$1,199.99", rating: 5, image: "https://via.placeholder.com/400x400/3b82f6/FFFFFF?text=Dummy+BJJ", category: "Equipamiento", },
];

// Datos de la Página de Karate
const karateProducts = [
    { name: "Gi Tradicional Blanco", price: "$89.99", rating: 5, image: "https://via.placeholder.com/400x400/FFFFFF/dc2626?text=Gi+Karate", category: "Uniformes", },
    { name: "Cinturón Negro Premium", price: "$29.99", rating: 5, image: "https://via.placeholder.com/400x400/000000/FFFFFF?text=Cinturon+K", category: "Accesorios", },
    { name: "Guantes de Kumite", price: "$45.99", rating: 4, image: "https://via.placeholder.com/400x400/dc2626/FFFFFF?text=Kumite+Gloves", category: "Protección", },
    { name: "Protector Bucal", price: "$19.99", rating: 4, image: "https://via.placeholder.com/400x400/FFFFFF/dc2626?text=Bucal+K", category: "Protección", },
    { name: "Makiwara de Entrenamiento", price: "$129.99", rating: 5, image: "https://via.placeholder.com/400x400/808080/FFFFFF?text=Makiwara", category: "Equipamiento", },
    { name: "Protector de Pecho", price: "$65.99", rating: 4, image: "https://via.placeholder.com/400x400/FFFFFF/dc2626?text=Pecho+K", category: "Protección", },
];

// Datos de la Página de Muay Thai
const muaythaiProducts = [
    { name: "Shorts Tradicionales Tailandeses", price: "$499.99", rating: 5, image: "https://via.placeholder.com/400x400/f59e0b/dc2626?text=Shorts+MT", category: "Uniformes", },
    { name: "Guantes de Boxeo 16oz", price: "$299.99", rating: 5, image: "https://via.placeholder.com/400x400/f59e0b/dc2626?text=Guantes+MT", category: "Guantes", },
    { name: "Espinilleras Premium", price: "$699.99", rating: 5, image: "https://via.placeholder.com/400x400/f59e0b/dc2626?text=Espini+MT", category: "Protección", },
    { name: "Vendas de Mano 4.5m", price: "$255.99", rating: 4, image: "https://via.placeholder.com/400x400/f59e0b/dc2626?text=Vendas+MT", category: "Accesorios", },
    { name: "Pao de Entrenamiento", price: "$899.99", rating: 5, image: "https://via.placeholder.com/400x400/f59e0b/dc2626?text=Pao+MT", category: "Equipamiento", },
    { name: "Protector de Cabeza", price: "$955.99", rating: 4, image: "https://via.placeholder.com/400x400/f59e0b/dc2626?text=Casco+MT", category: "Protección", },
];

// Datos de la Página de Taekwondo
const taekwondoProducts = [
    { name: "Dobok Tradicional Blanco", price: "$1470.00", rating: 5, image: "https://via.placeholder.com/400x400/dbeafe/fee2e2?text=Dobok", category: "Uniformes", },
    { name: "Peto Electrónico WTF", price: "$2250.99", rating: 5, image: "https://via.placeholder.com/400x400/dbeafe/fee2e2?text=Peto", category: "Protección", },
    { name: "Casco de Competición", price: "$799.99", rating: 5, image: "https://via.placeholder.com/400x400/dbeafe/fee2e2?text=Casco+TKD", category: "Protección", },
    { name: "Protector de Antebrazo", price: "$449.00", rating: 4, image: "https://via.placeholder.com/400x400/dbeafe/fee2e2?text=Antebrazo", category: "Protección", },
    { name: "Botines de Taekwondo", price: "$389.99", rating: 4, image: "https://via.placeholder.com/400x400/dbeafe/fee2e2?text=Botines", category: "Calzado", },
    { name: "Escudo de Pateo", price: "$579.99", rating: 5, image: "https://via.placeholder.com/400x400/dbeafe/fee2e2?text=Escudo+TKD", category: "Equipamiento", },
];

// Datos del Cuerpo Interactivo SVG
const bodyParts = [
    { id: "head", path: "M160 30 C160 10, 200 10, 200 30 C200 60, 160 60, 160 30 Z", name: "Cabeza", hoverColor: "#ef4444" },
    { id: "torso", path: "M160 70 L200 70 L210 150 L150 150 Z", name: "Torso", hoverColor: "#f59e0b" },
    { id: "left-arm", path: "M200 75 L230 80 L235 140 L210 135 Z", name: "Brazo Izquierdo", hoverColor: "#3b82f6" },
    { id: "right-arm", path: "M160 75 L130 80 L125 140 L150 135 Z", name: "Brazo Derecho", hoverColor: "#3b82f6" },
    { id: "left-hand", path: "M235 140 L240 160 L235 165 L230 160 L225 165 L220 160 L215 165 L210 155 Z", name: "Mano Izquierda", hoverColor: "#8b5cf6" },
    { id: "right-hand", path: "M125 140 L120 160 L125 165 L130 160 L135 165 L140 160 L145 165 L150 155 Z", name: "Mano Derecha", hoverColor: "#8b5cf6" },
    { id: "left-leg", path: "M180 150 L195 150 L200 240 L185 240 Z", name: "Pierna Izquierda", hoverColor: "#10b981" },
    { id: "right-leg", path: "M180 150 L165 150 L160 240 L175 240 Z", name: "Pierna Derecha", hoverColor: "#10b981" },
    { id: "left-foot", path: "M185 240 L200 240 L205 255 L180 255 Z", name: "Pie Izquierdo", hoverColor: "#ec4899" },
    { id: "right-foot", path: "M175 240 L160 240 L155 255 L180 255 Z", name: "Pie Derecho", hoverColor: "#ec4899" },
];

const mainBodyParts = [
    bodyParts.find(p => p.id === "head"), bodyParts.find(p => p.id === "torso"),
    { id: "arms", name: "Brazos", path: bodyParts.filter(p => p.id === "left-arm" || p.id === "right-arm").map(p => p.path).join(" "), hoverColor: "#3b82f6" },
    { id: "hands", name: "Manos", path: bodyParts.filter(p => p.id === "left-hand" || p.id === "right-hand").map(p => p.path).join(" "), hoverColor: "#8b5cf6" },
    { id: "legs", name: "Piernas", path: bodyParts.filter(p => p.id === "left-leg" || p.id === "right-leg").map(p => p.path).join(" "), hoverColor: "#10b981" },
    { id: "feet", name: "Pies", path: bodyParts.filter(p => p.id === "left-foot" || p.id === "right-foot").map(p => p.path).join(" "), hoverColor: "#ec4899" },
].filter(Boolean);


// Variables de estado
let cart = [];
let hoveredPart = null;
const pageContentContainer = document.getElementById('page-content-container');
const bodyElement = document.body;


// ==========================================================
// --- 2. LÓGICA DE GESTIÓN DEL CARRITO (useCartStore) ---
// ==========================================================

const saveCart = () => {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
};

const loadCart = () => {
    const storedCart = localStorage.getItem('shoppingCart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
    }
};

const calculateTotal = () => {
    return cart.reduce(
        (acc, item) => acc + parseFloat(item.price.replace(/[$,]/g, "")) * item.quantity,
        0
    );
};

const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
};

const updateCartCount = () => {
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = getTotalItems().toString();
    }
};

const addToCart = (product) => {
    const existingItem = cart.find(item => item.name === product.name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    // Solo renderiza el carrito si estamos en la página del carrito
    if (pageContentContainer.innerHTML.includes('Tu Carrito')) {
        renderCart();
    }
    updateCartCount();
    alert(`¡${product.name} agregado al carrito! Cantidad actual: ${existingItem ? existingItem.quantity : 1}`);
};

const removeFromCart = (name) => {
    cart = cart.filter(item => item.name !== name);
    saveCart();
    renderCart();
    updateCartCount();
};

const decreaseQuantity = (name) => {
    const item = cart.find(p => p.name === name);
    if (!item) return;

    if (item.quantity === 1) {
        removeFromCart(name);
    } else {
        item.quantity -= 1;
        saveCart();
        renderCart();
        updateCartCount();
    }
};

const clearCart = () => {
    if (confirm('¿Estás seguro de que quieres vaciar todo el carrito?')) {
        cart = [];
        saveCart();
        renderCart();
        updateCartCount();
    }
};


// ==========================================================
// --- 3. LÓGICA DE TEMAS (ThemeProvider) ---
// ==========================================================

const toggleTheme = () => {
    const isLight = bodyElement.classList.toggle('light');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
    updateThemeIcon(isLight);
    // Vuelve a renderizar la página actual para aplicar los colores del tema si es necesario
    if (pageContentContainer.lastChild && pageContentContainer.lastChild.id === 'home-page') {
        renderHomePage();
    }
};

const loadTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    const isLight = savedTheme === 'light';

    if (isLight) {
        bodyElement.classList.add('light');
    }
    updateThemeIcon(isLight);
};

const updateThemeIcon = (isLight) => {
    const iconElement = document.getElementById('theme-icon');
    if (iconElement) {
        iconElement.innerHTML = isLight
            ? '<path d="M12 3v1m0 16v1m9-9h-1m-16 0h-1m15.5-5.5-1.5 1.5M7.5 17.5l-1.5 1.5m14.5 0-1.5-1.5M7.5 6.5l-1.5-1.5M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"/>' // Sun (Light)
            : '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>'; // Moon (Dark)
    }
};


// ==========================================================
// --- 4. RENDERIZADO DEL HEADER Y NAVEGACIÓN ---
// ==========================================================

const renderHeaderLinks = () => {
    const desktopMenu = document.getElementById('desktop-menu');
    let linksHtml = '';

    categories.forEach(cat => {
        linksHtml += `
            <li class="nav-item">
                <a class="nav-link nav-link-custom" href="#" onclick="showCategoryPage('${cat.id}', event)">
                    ${cat.name}
                </a>
            </li>
        `;
    });
    
    if (desktopMenu) {
        desktopMenu.innerHTML = linksHtml;
    }
    
    // Toggle para el icono de la hamburguesa (Menu <-> X)
    const navbarToggler = document.querySelector('.navbar-toggler');
    const menuIcon = document.getElementById('menu-icon');

    if (navbarToggler && menuIcon) {
        navbarToggler.addEventListener('click', () => {
            const isExpanded = navbarToggler.getAttribute('aria-expanded') === 'true';
            if (!isExpanded) {
                // Icono X (Menú abierto)
                menuIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>`;
            } else {
                 // Icono Menu (Menú cerrado)
                menuIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
            }
        });
    }
};

const closeMobileMenu = () => {
    // Cierra el menú móvil de Bootstrap si está abierto
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
        bsCollapse.hide();
    }
    // Restaura el icono a hamburguesa
    document.getElementById('menu-icon').innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>`;
};


// ==========================================================
// --- 5. RENDERIZADO DE PÁGINAS INDIVIDUALES ---
// ==========================================================

// --- UTILITIES ---
const getIconSvg = (iconName) => {
    // Simula los iconos de lucide-react
    const icons = {
        Shield: `<svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`,
        Zap: `<svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
        Trophy: `<svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14V3"/><path d="M14 14V3"/><path d="M8 21v-7h8v7"/></svg>`,
        Flame: `<svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.2-1-2-1-3 0-1.8 0-3 2-3s2 1.2 2 3c0 1-.8 1.8-1 3.5"/><path d="M15.5 14.5A2.5 2.5 0 0 1 13 12c0-1.2 1-2 1-3 0-1.8 0-3-2-3s-2 1.2-2 3c0 1 .8 1.8 1 3.5"/><path d="M12 22a4 4 0 0 0 0-8c-2 0-3.5 1.5-4 4-2.5 0-4 1.5-4 4H4"/></svg>`,
        ArrowLeft: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>`,
        Star: `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
        ShoppingCart: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 12.08a2 2 0 0 0 2 1.92h9.72a2 2 0 0 0 2-1.92L23 6H6"/></svg>`,
        Award: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89 7 22l5-3 5 3-1.21-8.12"/></svg>`,
        Waves: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20s2-2 4-2 4 2 6 2 4-2 6-2 4 2 6 2"/><path d="M2 12s2-2 4-2 4 2 6 2 4-2 6-2 4 2 6 2"/><path d="M2 4s2-2 4-2 4 2 6 2 4-2 6-2 4 2 6 2"/></svg>`,
    };
    return icons[iconName] || '';
};

// --- CUERPO INTERACTIVO LÓGICA DE HOVER ---
const setHoveredPart = (partId) => {
    hoveredPart = partId;
    updateSVGColors();
    updateHoverPopup();
    updateZoneButtons();
};

const handlePartClick = (partId) => {
    alert(`Redirigiendo a /gear/${partId}. Equipo para ${mainBodyParts.find(p => p.id === partId)?.name}!`);
};

const updateSVGColors = () => {
    mainBodyParts.forEach(part => {
        const pathElement = document.getElementById(`svg-part-${part.id}`);
        if (pathElement) {
            const isHovered = part.id === hoveredPart;
            pathElement.setAttribute('fill', isHovered ? part.hoverColor : (bodyElement.classList.contains('light') ? '#e5e7eb' : '#3f3f46'));
            pathElement.setAttribute('stroke', isHovered ? part.hoverColor : (bodyElement.classList.contains('light') ? '#d1d5db' : '#71717a'));
        }
    });
};

const updateHoverPopup = () => {
    const popupContainer = document.getElementById('hover-popup-container');
    if (!popupContainer) return;
    
    if (hoveredPart) {
        const part = mainBodyParts.find(p => p.id === hoveredPart);
        popupContainer.innerHTML = `<div class="hover-popup"><p class="text-white font-bold text-lg mb-0">${part.name}</p></div>`;
        popupContainer.style.display = 'block';
    } else {
        popupContainer.style.display = 'none';
        popupContainer.innerHTML = '';
    }
};

const updateZoneButtons = () => {
    mainBodyParts.forEach(part => {
        const button = document.getElementById(`zone-btn-${part.id}`);
        if (button) {
            const isHovered = part.id === hoveredPart;
            button.style.backgroundColor = isHovered ? `${part.hoverColor}20` : (bodyElement.classList.contains('light') ? '#f3f4f6' : '#18181b');
        }
    });
};

// --- PÁGINA DE INICIO (HOME PAGE) ---
const renderInteractiveBody = () => {
    return `
        <div id="interactive-body-section" class="d-flex flex-column flex-lg-row align-items-center justify-content-center gap-5 p-4 mx-auto" style="max-width: 1200px;">
            <div class="position-relative">
                <div class="svg-box">
                    <svg viewBox="0 0 360 280" class="w-100" style="max-width: 400px; height: auto;">
                        <g id="body-paths-container">
                            ${mainBodyParts.map(part => `
                                <path
                                    id="svg-part-${part.id}"
                                    d="${part.path}"
                                    class="body-part-path"
                                    data-id="${part.id}"
                                    onmouseenter="setHoveredPart('${part.id}')"
                                    onmouseleave="setHoveredPart(null)"
                                    onclick="handlePartClick('${part.id}')"
                                />
                            `).join('')}
                        </g>
                    </svg>
                </div>
                <div id="hover-popup-container" style="display: none;"></div>
            </div>

            <div class="w-100 w-lg-auto" style="max-width: 400px;">
                <div class="zone-list-box">
                    <h3 class="fs-4 fw-bold mb-4 ${bodyElement.classList.contains('light') ? 'text-dark' : 'text-white'}">Protección por zona</h3>
                    <div class="row g-3">
                        ${mainBodyParts.map(part => `
                            <div class="col-6">
                                <button
                                    id="zone-btn-${part.id}"
                                    onclick="handlePartClick('${part.id}')"
                                    onmouseenter="setHoveredPart('${part.id}')"
                                    onmouseleave="setHoveredPart(null)"
                                    class="btn zone-button"
                                >
                                    <span class="zone-button-text">
                                        ${part.name}
                                    </span>
                                </button>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>
        </div>
    `;
};

const renderHomePage = () => {
    const isLight = bodyElement.classList.contains('light');
    let homeHtml = `
        <div id="home-page" class="home-page-container min-vh-100">
            <section class="hero-section">
                <div class="position-absolute w-100 h-100 top-0 start-0" style="background-image: url('https://via.placeholder.com/1920x1080/000000/FFFFFF?text=Pattern'); opacity:1; background-size: cover; background-position: center;" />

                <div class="container px-4 py-5 position-relative z-10">
                    
                    <div class="text-center mb-5 pt-5 animate-fade-in">
                        <h1 class="hero-title fw-black mb-4">KNOCK OUT</h1>
                        <p class="fs-5 ${isLight ? 'text-muted' : 'text-white-50'} mx-auto" style="max-width: 768px;">
                            Equípate como un verdadero guerrero. Encuentra el equipo perfecto para tu disciplina.
                        </p>
                    </div>

                    <div class="row g-4 mb-5 pb-5 mx-auto" style="max-width: 1200px;">
                        ${features.map((feature, index) => `
                            <div class="col-6 col-lg-3">
                                <div
                                    class="feature-card"
                                    style="animation-delay: ${index * 100}ms; animation: fadeIn 0.6s ease-out ${index * 0.1}s forwards;"
                                >
                                    <div class="feature-icon-box">
                                        ${getIconSvg(feature.icon)}
                                    </div>
                                    <h3 class="fw-bold ${isLight ? 'text-dark' : 'text-white'} mb-2">${feature.title}</h3>
                                    <p class="text-sm ${isLight ? 'text-muted' : 'text-white-50'} mb-0">${feature.description}</p>
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <div class="text-center mb-5 mt-5">
                        <h2 class="fs-2 fw-black mb-3 ${isLight ? 'text-dark' : 'text-white'}">
                            Encuentra Equipo por Parte del Cuerpo
                        </h2>
                        <p class="text-center ${isLight ? 'text-muted' : 'text-white-50'} fs-6 mb-4">
                            Pasa el cursor sobre el cuerpo y haz clic en la zona que necesitas proteger
                        </p>
                    </div>

                    ${renderInteractiveBody()}
                    
                    <div class="text-center mb-5 mt-5 pt-5">
                        <h2 class="fs-2 fw-black mb-3 ${isLight ? 'text-dark' : 'text-white'}">Explora por Disciplina</h2>
                        <p class="text-center ${isLight ? 'text-muted' : 'text-white-50'} fs-6 mb-5">
                            Cada arte marcial tiene su propio estilo y equipo especializado
                        </p>
                    </div>
                    
                    <div class="row g-4 pb-5 mx-auto" style="max-width: 1200px;">
                        ${categoryCards.map((category, index) => `
                            <div class="col-12 col-md-6 col-lg-4">
                                <a href="#" onclick="showCategoryPage('${category.id}', event)" class="text-decoration-none">
                                    <div class="category-card" 
                                        style="animation-delay: ${index * 100}ms; animation: fadeIn 0.6s ease-out ${index * 0.1}s forwards;"
                                    >
                                        <div class="position-relative">
                                            <img src="${category.image}" alt="${category.name}" class="img-fluid w-100" style="object-fit: cover; height: 250px;">
                                            <div class="category-card-overlay"></div>
                                            <div class="position-absolute bottom-0 start-0 p-4 w-100">
                                                <p style="color: ${category.textColor};" class="fw-bold fs-6 mb-1 text-uppercase">${category.name}</p>
                                                <h3 class="text-white fw-bold fs-4 mb-2">${category.name}</h3>
                                                <p class="text-white-50 mb-0">${category.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        `).join('')}
                    </div>
                </div>
            </section>
        </div>
    `;

    pageContentContainer.innerHTML = homeHtml;
    // Re-ejecutar lógica de SVG ya que se renderizó el HTML
    updateSVGColors();
    updateHoverPopup();
};


// --- PÁGINA DEL CARRITO ---

const renderCart = () => {
    const total = calculateTotal();
    const totalItems = getTotalItems();
    const isLight = bodyElement.classList.contains('light');

    let cartHtml = `
        <div class="card shadow-lg p-4 p-md-5 rounded-4 mx-auto" style="max-width: 900px;">
            <h1 class="card-title display-5 fw-bold mb-4 ${isLight ? 'text-dark' : 'text-dark'}">Tu Carrito</h1>
    `;
    
    if (totalItems === 0) {
        cartHtml += '<p class="text-muted">No hay productos en el carrito.</p>';
        cartHtml += '</div>';
        pageContentContainer.innerHTML = `<div class="container py-5 cart-page-bg min-vh-100">${cartHtml}</div>`;
        return;
    }

    let listHtml = '<ul class="list-unstyled space-y-4">';
    
    cart.forEach((item) => {
        const itemNameSafe = item.name.replace(/'/g, "\\'");
        listHtml += `
            <li class="d-flex align-items-center justify-content-between pb-3 mb-3 border-bottom">
                <div class="d-flex align-items-center gap-3">
                    <img src="${item.image}" alt="${item.name}" class="product-image rounded-3"/>
                    <div>
                        <p class="fw-bold fs-5 text-dark mb-1">${item.name}</p>
                        <div class="d-flex align-items-center gap-2 mt-1">
                            <button onclick="decreaseQuantity('${itemNameSafe}')" class="btn btn-sm rounded-3 btn-quantity" title="Restar uno">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/></svg>
                            </button>
                            <span class="text-dark">${item.quantity}</span>
                            <button onclick="addToCart({ name: '${itemNameSafe}', price: '${item.price}', image: '${item.image}' })" class="btn btn-sm rounded-3 btn-quantity" title="Sumar uno">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/></svg>
                            </button>
                        </div>
                        <p class="text-danger fw-bold mt-1 mb-0">${item.price}</p>
                    </div>
                </div>
                <button onclick="removeFromCart('${itemNameSafe}')" class="btn btn-lg rounded-3 btn-remove-item p-2" title="Eliminar producto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/><path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4l.678 10H11.2V4H4.118zM12 2H4v1h8V2z"/></svg>
                </button>
            </li>
        `;
    });
    listHtml += '</ul>';

    let summaryHtml = `
        <div class="mt-4 pt-4 border-top">
            <div class="d-flex justify-content-between align-items-center">
                <p class="fs-4 fw-bold text-dark mb-0">Total: $${total.toFixed(2)}</p>
                <div class="d-flex gap-3">
                    <button onclick="clearCart()" class="btn btn-lg rounded-3 btn-clear-cart">Vaciar Carrito</button>
                    <button onclick="alert('Checkout aún no implementado')" class="btn btn-lg rounded-3 btn-checkout">Checkout</button>
                </div>
            </div>
        </div>
    `;
    
    cartHtml += listHtml + summaryHtml + '</div>'; 
    pageContentContainer.innerHTML = `<div class="container py-5 cart-page-bg min-vh-100">${cartHtml}</div>`;
};


// --- RENDERIZADO UNIVERSAL DE CATEGORÍAS ---

const renderProductCard = (product, themeClass, ratingColorClass, priceClass, imgBgClass) => {
    const isLight = bodyElement.classList.contains('light');
    const itemNameSafe = product.name.replace(/'/g, "\\'");
    const textColor = isLight ? 'text-dark' : 'text-white';
    const categoryTextColor = (themeClass.includes('karate') || themeClass.includes('muaythai') || themeClass.includes('taekwondo')) ? 'text-dark' : 'text-white';

    return `
        <div class="col-12 col-md-6 col-lg-4">
            <div
                class="group ${themeClass} rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
                <div class="aspect-square overflow-hidden ${imgBgClass}">
                    <img
                        src="${product.image || 'https://via.placeholder.com/400x400/000000/FFFFFF?text=Product'}"
                        alt="${product.name}"
                        class="w-100 h-100 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                </div>
                <div class="p-4 p-md-6">
                    <div class="text-xs font-bold ${ratingColorClass} mb-2 uppercase tracking-wider">${product.category}</div>
                    <h3 class="font-bold fs-5 mb-3 ${textColor}">${product.name}</h3>
                    <div class="d-flex align-items-center gap-1 mb-4">
                        ${Array.from({ length: 5 }).map((_, i) => `
                            ${getIconSvg('Star').replace('fill="currentColor"', i < product.rating ? `class="w-4 h-4 ${ratingColorClass}" fill="currentColor"` : `class="w-4 h-4 text-zinc-700"`)}
                        `).join('')}
                    </div>
                    <div class="d-flex align-items-center justify-content-between">
                        <span class="fs-4 fw-black ${priceClass}">${product.price}</span>
                        <button
                            onclick="addToCart({ name: '${itemNameSafe}', price: '${product.price}', image: '${product.image}' })"
                            class="d-flex align-items-center gap-2 px-3 py-2 btn btn-danger rounded-xl transition"
                        >
                            ${getIconSvg('ShoppingCart').replace('class="w-6 h-6 text-white"', 'class="w-4 h-4"')}
                            Añadir
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
};


const renderCategoryPage = (category) => {
    const pageData = {
        boxing: {
            title: "BOXING", subtitle: "El noble arte del pugilismo.", icon: 'Award', tag: 'THE SWEET SCIENCE', color: 'red', products: boxingProducts,
            heroClass: 'bg-boxing-hero', productCardTheme: 'card-boxing', ratingClass: 'rating-color', priceClass: 'price-grad', imgBgClass: 'img-bg',
            sections: [
                { title: 'Los Fundamentos', pClass: 'text-zinc-400', sectionClass: 'bg-boxing-section', items: [{ name: "Jab", icon: "👊" }, { name: "Cross", icon: "💥" }, { name: "Hook", icon: "🥊" }, { name: "Uppercut", icon: "⬆️" }], itemClass: 'bg-zinc-900 border-2 border-red-800' }
            ]
        },
        'jiu-jitsu': {
            title: "JIU-JITSU", subtitle: "El arte suave. Técnica sobre fuerza.", icon: 'Waves', tag: 'JIU-JITSU BRASILEIRO', color: 'blue', products: jiujitsuProducts,
            heroClass: 'bg-jiujitsu-hero', productCardTheme: 'card-jiujitsu', ratingClass: 'rating-color', priceClass: 'text-blue-500', imgBgClass: 'bg-gradient-to-br from-blue-900 to-blue-950',
            sections: [
                { title: 'Sistema de Cinturones', pClass: 'text-blue-300', sectionClass: 'bg-jiujitsu-section', items: [{ name: "Blanco", color: "bg-white" }, { name: "Azul", color: "bg-blue-500" }, { name: "Púrpura", color: "bg-purple-600" }, { name: "Marrón", color: "bg-amber-800" }, { name: "Negro", color: "bg-zinc-900" }], itemClass: 'bg-blue-800/50 backdrop-blur-sm border-2 border-blue-500 min-w-[140px]' }
            ]
        },
        karate: {
            title: "KARATE", subtitle: "El camino de la mano vacía.", icon: 'Award', tag: '空手道 KARATE-DO', color: 'red', products: karateProducts,
            heroClass: 'bg-karate-hero', productCardTheme: 'card-karate', ratingClass: 'rating-color', priceClass: 'text-red-600', imgBgClass: 'img-bg',
            sections: [
                { title: 'Filosofía del Karate', pClass: 'text-zinc-700', sectionClass: 'bg-karate-light-section', items: [{ name: "Disciplina", color: 'text-red-600' }, { name: "Respeto", color: 'text-red-600' }, { name: "Perfección", color: 'text-red-600' }], itemClass: 'bg-zinc-50 border-2 border-zinc-200' }
            ]
        },
        'muay-thai': {
            title: "MUAY THAI", subtitle: "El arte de las ocho extremidades.", icon: 'Flame', tag: 'มวยไทย MUAY THAI', color: 'amber', products: muaythaiProducts,
            heroClass: 'bg-muaythai-hero', productCardTheme: 'card-muaythai', ratingClass: 'rating-color', priceClass: 'text-red-600', imgBgClass: 'img-bg',
            sections: [
                { title: 'Las Ocho Extremidades', pClass: 'text-amber-200', sectionClass: 'bg-muaythai-section', items: [{ name: "Puños" }, { name: "Codos" }, { name: "Rodillas" }, { name: "Piernas" }], itemClass: 'bg-amber-500/20 backdrop-blur-sm border-2 border-amber-500' }
            ]
        },
        taekwondo: {
            title: "TAEKWONDO", subtitle: "El camino del pie y el puño.", icon: 'Zap', tag: '태권도 TAEKWONDO', color: 'blue', products: taekwondoProducts,
            heroClass: 'bg-taekwondo-hero', productCardTheme: 'card-taekwondo', ratingClass: 'rating-color', priceClass: 'price-grad', imgBgClass: 'img-bg',
            sections: [
                { title: 'Los Cinco Principios', pClass: 'text-zinc-700', sectionClass: 'bg-white', items: [{ name: "Cortesía", color: 'from-blue-500 to-blue-600' }, { name: "Integridad", color: 'from-red-500 to-red-600' }, { name: "Perseverancia", color: 'from-yellow-500 to-yellow-600' }, { name: "Autocontrol", color: 'from-blue-600 to-blue-700' }, { name: "Espíritu", color: 'from-red-600 to-red-700' }], itemClass: 'bg-zinc-50 border-2 border-zinc-200' }
            ]
        }
    };

    const data = pageData[category];
    if (!data) {
        pageContentContainer.innerHTML = `<div class="container py-5"><h2 class="text-white">Categoría no encontrada.</h2></div>`;
        return;
    }

    const heroImage = data.products[0]?.image.replace(/\..+$/, '') || 'https://via.placeholder.com/1920x1080/000000/FFFFFF?text=Category+Hero';
    const isDarkBackground = !data.heroClass.includes('light-section');
    const textColorHero = isDarkBackground ? 'text-white' : 'text-dark';
    const linkColorHero = isDarkBackground ? `text-${data.color}-300 hover:text-white` : 'text-dark hover:text-red-600';

    let categoryHtml = `
        <div class="min-h-screen">
            <section class="relative overflow-hidden ${data.heroClass} ${isDarkBackground ? 'text-white' : 'text-dark'}">
                <div class="absolute inset-0 opacity-20">
                    <div class="absolute inset-0 bg-[url('${heroImage}')] bg-cover bg-center" style="background-image: url('${heroImage}.jpg');" />
                </div>
                <div class="absolute inset-0 opacity-10 ${data.tag.includes('JUI-JITSU') ? 'jiujitsu-wave-bg' : ''}">
                    </div>

                <div class="container mx-auto px-4 py-5 py-md-5 py-lg-7 relative z-10">
                    <a href="#" onclick="showHomePage(event)" class="d-inline-flex align-items-center gap-2 ${linkColorHero} transition-colors mb-4 mb-md-5 group">
                        ${getIconSvg('ArrowLeft').replace('class="w-6 h-6"', 'class="w-5 h-5 group-hover:-translate-x-1 transition-transform"')}
                        <span>Volver al inicio</span>
                    </a>

                    <div class="max-w-4xl">
                        <div class="d-inline-flex align-items-center gap-2 px-3 px-md-4 py-1 py-md-2 bg-${data.color}-500 ${isDarkBackground ? 'text-white' : 'text-dark'} fw-black rounded-pill mb-3 mb-md-4 text-sm tracking-wider">
                            ${getIconSvg(data.icon).replace('class="w-6 h-6 text-white"', 'class="w-4 h-4"')}
                            ${data.tag}
                        </div>
                        <h1 class="fs-1 fs-md-0 fw-black ${textColorHero} mb-3 mb-md-4 leading-none">${data.title}</h1>
                        <p class="fs-5 fs-md-4 ${isDarkBackground ? 'text-white-50' : 'text-muted'} mb-4 mb-md-5 leading-relaxed max-w-2xl">${data.subtitle}</p>
                    </div>
                </div>
            </section>

            ${data.sections.map((section, sectionIndex) => `
                <section class="py-5 py-md-7 ${section.sectionClass} ${section.sectionClass.includes('light') ? 'text-dark' : 'text-white'}">
                    <div class="container mx-auto px-4">
                        <div class="max-w-4xl mx-auto text-center">
                            <h2 class="fs-3 fs-md-4 fw-black mb-4">${section.title}</h2>
                            <p class="fs-6 fs-md-5 ${section.pClass} leading-relaxed mb-5 mb-md-7">
                                ${section.title === 'Los Fundamentos' ? 'El boxeo es un arte que combina técnica refinada, acondicionamiento físico superior y estrategia mental. Domina los fundamentos para convertirte en un verdadero púgil.' : 
                                 section.title === 'Sistema de Cinturones' ? 'El camino del Jiu-Jitsu es largo y requiere dedicación. Cada cinturón representa años de entrenamiento y perfeccionamiento técnico.' : 
                                 section.title === 'Filosofía del Karate' ? 'El Karate no es solo un arte marcial, es un camino de vida que cultiva el carácter, la disciplina y el respeto.' : 
                                 section.title === 'Las Ocho Extremidades' ? 'El Muay Thai utiliza puños, codos, rodillas y piernas, convirtiéndolo en uno de los estilos de combate más completos y efectivos del mundo.' :
                                 section.title === 'Los Cinco Principios' ? 'El Taekwondo se basa en cinco principios fundamentales que guían tanto el entrenamiento físico como el desarrollo del carácter.' : ''}
                            </p>
                            <div class="row g-4 justify-content-center">
                                ${section.items.map((item, itemIndex) => `
                                    <div class="${section.items.length === 5 ? 'col-6 col-md-auto' : 'col-6 col-md-3'}">
                                        <div class="${section.itemClass} rounded-2xl p-4 p-md-5 hover:scale-105 transition-all">
                                            ${item.icon ? `<div class="fs-1 fs-md-3 mb-3">${item.icon}</div>` : 
                                              item.color && section.title !== 'Filosofía del Karate' ? `
                                                <div class="w-100 h-8 rounded-lg mb-3 shadow-lg" style="background: ${item.color.includes('bg-') ? item.color.replace('bg-', 'background-color: ') : `linear-gradient(to right, ${item.color.split(' ')[0].split('-')[1]}, ${item.color.split(' ')[2].split('-')[1]})`}; min-height: ${section.title === 'Sistema de Cinturones' ? '1.5rem' : '4rem'};">
                                                    ${section.title === 'Los Cinco Principios' ? `<div class="d-flex align-items-center justify-content-center h-100 fs-4 fw-black text-white">${itemIndex + 1}</div>` : ''}
                                                </div>
                                            ` : 
                                            section.title === 'Filosofía del Karate' ? `<div class="fs-1 fw-black ${item.color} mb-3">${itemIndex + 1}</div>` :
                                            section.title === 'Las Ocho Extremidades' ? `<div class="fs-1 fw-black text-amber-400 mb-3">${itemIndex + 1}</div>` : ''}
                                            
                                            <h3 class="fs-5 fs-md-4 fw-bold ${section.itemClass.includes('bg-zinc-50') ? 'text-dark' : 'text-white'}">${item.name}</h3>
                                            ${section.title === 'Filosofía del Karate' ? `<p class="text-zinc-600 mb-0">Pilar fundamental del Karate-Do</p>` : ''}
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </section>
            `).join('')}


            <section class="py-5 py-md-7 ${category === 'karate' || category === 'muay-thai' ? 'bg-amber-50' : 'bg-zinc-950'}">
                <div class="container mx-auto px-4">
                    <div class="text-center mb-5 mb-md-7">
                        <h2 class="fs-2 fs-md-4 fw-black ${category === 'karate' || category === 'muay-thai' ? 'text-dark' : 'text-white'} mb-3">Equipo de ${data.title}</h2>
                        <p class="fs-5 fs-md-4 ${category === 'karate' || category === 'muay-thai' ? 'text-muted' : `text-${data.color}-500`}">Equipamiento profesional para campeones</p>
                    </div>

                    <div class="row g-4 g-lg-5">
                        ${data.products.map(product => renderProductCard(product, data.productCardTheme, data.ratingClass, data.priceClass, data.imgBgClass)).join('')}
                    </div>
                </div>
            </section>
        </div>
    `;

    pageContentContainer.innerHTML = categoryHtml;
};

// --- NAVEGACIÓN DE PÁGINAS ---

const showHomePage = (event) => {
    if (event) event.preventDefault();
    renderHomePage(); 
    closeMobileMenu();
};

const showCartPage = (event) => {
    if (event) event.preventDefault();
    renderCart();
    closeMobileMenu();
};

const showCategoryPage = (category, event) => {
    if (event) event.preventDefault();
    renderCategoryPage(category);
    closeMobileMenu();
};


// ==========================================================
// --- 6. INICIALIZACIÓN DE LA APLICACIÓN ---
// ==========================================================

window.onload = () => {
    loadTheme(); // Carga la preferencia de tema
    loadCart();
    renderHeaderLinks();
    updateCartCount();
    showHomePage(); // Muestra la página de inicio al cargar
};