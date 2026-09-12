// Base de données des produits avec VRAIES images Unsplash
const products = {
    bottes: [
        {
            id: 1,
            name: "Botte Élégante Noire",
            price: 79.99,
            image: "https://images.unsplash.com/photo-1548062372-6f5b1e6f8b5c?w=400&h=500&fit=crop",
            category: "Bottes & Bottines",
            rating: 5,
            reviews: 24,
            sizes: "40-48",
            promo: null
        },
        {
            id: 2,
            name: "Botte Confort Marron",
            price: 89.99,
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop",
            category: "Bottes & Bottines",
            rating: 4.5,
            reviews: 18,
            sizes: "40-48",
            promo: null
        },
        {
            id: 3,
            name: "Botte Premium Cuir",
            price: 129.99,
            image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?w=400&h=500&fit=crop",
            category: "Bottes & Bottines",
            rating: 5,
            reviews: 32,
            sizes: "40-48",
            promo: 20
        }
    ],
    escarpins: [
        {
            id: 4,
            name: "Escarpin Confort Camel",
            price: 65.99,
            image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=500&fit=crop",
            category: "Escarpins",
            rating: 4,
            reviews: 18,
            sizes: "40-48",
            promo: null
        },
        {
            id: 5,
            name: "Escarpin Élégant Noir",
            price: 75.99,
            image: "https://images.unsplash.com/photo-1572041922383-23c234dbb996?w=400&h=500&fit=crop",
            category: "Escarpins",
            rating: 5,
            reviews: 28,
            sizes: "40-48",
            promo: null
        },
        {
            id: 6,
            name: "Escarpin Talon Doré",
            price: 85.99,
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop",
            category: "Escarpins",
            rating: 4.5,
            reviews: 15,
            sizes: "40-48",
            promo: null
        }
    ],
    ballerines: [
        {
            id: 7,
            name: "Ballerine Cuir Premium",
            price: 71.99,
            image: "https://images.unsplash.com/photo-1493863671302-2e50bd9aad51?w=400&h=500&fit=crop",
            category: "Ballerines",
            rating: 5,
            reviews: 32,
            sizes: "40-48",
            promo: 20
        },
        {
            id: 8,
            name: "Ballerine Confort Beige",
            price: 59.99,
            image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?w=400&h=500&fit=crop",
            category: "Ballerines",
            rating: 4.5,
            reviews: 21,
            sizes: "40-48",
            promo: null
        },
        {
            id: 9,
            name: "Ballerine Classique Marine",
            price: 64.99,
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop",
            category: "Ballerines",
            rating: 5,
            reviews: 26,
            sizes: "40-48",
            promo: null
        }
    ],
    mocassins: [
        {
            id: 10,
            name: "Mocassin Classique Bordeaux",
            price: 69.99,
            image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=500&fit=crop",
            category: "Mocassins",
            rating: 4,
            reviews: 15,
            sizes: "40-48",
            promo: null
        },
        {
            id: 11,
            name: "Mocassin Marron Suède",
            price: 79.99,
            image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=500&fit=crop",
            category: "Mocassins",
            rating: 5,
            reviews: 22,
            sizes: "40-48",
            promo: null
        },
        {
            id: 12,
            name: "Mocassin Noir Premium",
            price: 89.99,
            image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=400&h=500&fit=crop",
            category: "Mocassins",
            rating: 4.5,
            reviews: 19,
            sizes: "40-48",
            promo: null
        }
    ],
    sandales: [
        {
            id: 13,
            name: "Sandale Confort Été",
            price: 49.99,
            image: "https://images.unsplash.com/photo-1462365550504-f9e46f1a0f5c?w=400&h=500&fit=crop",
            category: "Sandales",
            rating: 5,
            reviews: 28,
            sizes: "40-48",
            promo: null
        },
        {
            id: 14,
            name: "Sandale Élégante Dorée",
            price: 59.99,
            image: "https://images.unsplash.com/photo-1462365550504-f9e46f1a0f5c?w=400&h=500&fit=crop",
            category: "Sandales",
            rating: 4.5,
            reviews: 18,
            sizes: "40-48",
            promo: null
        },
        {
            id: 15,
            name: "Sandale Plage Noire",
            price: 39.99,
            image: "https://images.unsplash.com/photo-1462365550504-f9e46f1a0f5c?w=400&h=500&fit=crop",
            category: "Sandales",
            rating: 4,
            reviews: 14,
            sizes: "40-48",
            promo: 15
        }
    ],
    ville: [
        {
            id: 16,
            name: "Derby Homme Oxford",
            price: 85.99,
            image: "https://images.unsplash.com/photo-1507995957665-26b3aadd1141?w=400&h=500&fit=crop",
            category: "Chaussures de Ville",
            rating: 5,
            reviews: 21,
            sizes: "40-48",
            promo: null
        },
        {
            id: 17,
            name: "Chaussure de Ville Marron",
            price: 79.99,
            image: "https://images.unsplash.com/photo-1507995957665-26b3aadd1141?w=400&h=500&fit=crop",
            category: "Chaussures de Ville",
            rating: 4.5,
            reviews: 17,
            sizes: "40-48",
            promo: null
        },
        {
            id: 18,
            name: "Chaussure Noire Élégante",
            price: 95.99,
            image: "https://images.unsplash.com/photo-1507995957665-26b3aadd1141?w=400&h=500&fit=crop",
            category: "Chaussures de Ville",
            rating: 5,
            reviews: 24,
            sizes: "40-48",
            promo: null
        }
    ],
    femme: [],
    homme: []
};

// Remplir femme et homme
products.femme = [...products.bottes, ...products.escarpins, ...products.ballerines, ...products.sandales];
products.homme = products.ville;

// État de l'app
let cart = [];
let currentCategory = null;

// Initialiser
function init() {
    displayProducts('homePage');
    updateCartCount();
    console.log('✅ Site Sacapuce Chargé');
}

// Afficher les produits
function displayProducts(category) {
    const productsGrid = document.getElementById('productsGrid');
    let items = [];

    if (category === 'homePage') {
        // Afficher les meilleures ventes
        items = [
            products.bottes[0],
            products.escarpins[0],
            products.ballerines[0],
            products.mocassins[0],
            products.sandales[0],
            products.ville[0]
        ];
    } else {
        items = products[category] || [];
    }

    if (productsGrid) {
        productsGrid.innerHTML = items.map(product => createProductCard(product)).join('');
    }
}

// Créer une carte produit
function createProductCard(product) {
    const discount = product.promo ? `<span class="badge promo">-${product.promo}%</span>` : '<span class="badge">Nouveau</span>';
    const finalPrice = product.promo ? (product.price * (1 - product.promo / 100)).toFixed(2) : product.price.toFixed(2);
    const originalPrice = product.promo ? `<span class="original">${product.price.toFixed(2)}€</span>` : '';

    return `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/400x500?text=${product.name}'">
                ${discount}
            </div>
            <h3>${product.name}</h3>
            <div class="rating">${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 ? '☆' : ''} (${product.reviews} avis)</div>
            <p class="price">${originalPrice} ${finalPrice}€</p>
            <p class="availability">✓ En stock - Tailles ${product.sizes}</p>
            <button class="btn btn-primary" onclick="addToCart(${product.id})">Ajouter au panier</button>
        </div>
    `;
}

// Navigation - Afficher la catégorie
function showCategory(category) {
    currentCategory = category;
    const titles = {
        bottes: 'Bottes & Bottines',
        escarpins: 'Escarpins',
        ballerines: 'Ballerines',
        mocassins: 'Mocassins',
        sandales: 'Sandales',
        ville: 'Chaussures de Ville',
        femme: 'Chaussures Femme',
        homme: 'Chaussures Homme'
    };

    document.getElementById('categoryTitle').textContent = titles[category] || 'Catégorie';
    
    const categoryProductsGrid = document.getElementById('categoryProductsGrid');
    const items = products[category] || [];
    categoryProductsGrid.innerHTML = items.map(product => createProductCard(product)).join('');
    
    showPage('categoryPage');
    window.scrollTo(0, 0);
}

// Navigation - Afficher le panier
function showCart() {
    showPage('cartPage');
    displayCart();
    window.scrollTo(0, 0);
}

// Afficher le panier
function displayCart() {
    const cartContent = document.getElementById('cartContent');
    
    if (cart.length === 0) {
        cartContent.innerHTML = '<p class="empty-cart">Votre panier est vide</p>';
        return;
    }

    let total = 0;
    const cartHTML = cart.map((item, index) => {
        total += item.price * item.quantity;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="item-info">
                    <h4>${item.name}</h4>
                    <p>${item.price.toFixed(2)}€ x ${item.quantity}</p>
                </div>
                <div class="item-total">${(item.price * item.quantity).toFixed(2)}€</div>
                <button class="btn-remove" onclick="removeFromCart(${index})">✕</button>
            </div>
        `;
    }).join('');

    cartContent.innerHTML = `
        <div class="cart-items">${cartHTML}</div>
        <div class="cart-summary">
            <p class="total">Total: <strong>${total.toFixed(2)}€</strong></p>
            <button class="btn btn-primary" onclick="checkout()">Procéder au paiement</button>
            <button class="btn btn-secondary" onclick="goHome()">Continuer vos achats</button>
        </div>
    `;
}

// Ajouter au panier
function addToCart(productId) {
    let product = null;
    
    for (let category in products) {
        const found = products[category].find(p => p.id === productId);
        if (found) {
            product = found;
            break;
        }
    }

    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCartCount();
    showNotification(`${product.name} ajouté au panier!`);
}

// Retirer du panier
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    displayCart();
}

// Mettre à jour le compteur du panier
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelector('.cart-count').textContent = totalItems;
}

// Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Checkout
function checkout() {
    alert('Bienvenue dans la section paiement!\n\nTotal: ' + cart.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2) + '€\n\nFonctionnalité en cours de développement...');
}

// Navigation entre pages
function showPage(pageName) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageName).classList.add('active');
}

// Aller à l'accueil
function goHome() {
    showPage('homePage');
    currentCategory = null;
    displayProducts('homePage');
    window.scrollTo(0, 0);
}

// Scroller vers une section
function scrollToSection(sectionId) {
    showPage('homePage');
    setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
}

// Toggle menu (placeholder)
function toggleMenu() {
    alert('Menu utilisateur');
}

// Initialiser au chargement
window.addEventListener('DOMContentLoaded', init);

console.log('✅ JavaScript Sacapuce Chargé');
