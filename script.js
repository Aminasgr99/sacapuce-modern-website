// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Cart functionality
let cart = [];
const cartCount = document.querySelector('.cart-count');
const addToCartButtons = document.querySelectorAll('.btn-primary');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Only add to cart if it's in product section
        if (this.closest('.product-card')) {
            const productName = this.closest('.product-card').querySelector('h3').textContent;
            const productPrice = this.closest('.product-card').querySelector('.price').textContent;
            
            cart.push({ name: productName, price: productPrice });
            cartCount.textContent = cart.length;
            
            // Show success feedback
            const originalText = this.textContent;
            this.textContent = '✓ Ajouté';
            setTimeout(() => {
                this.textContent = originalText;
            }, 2000);
        }
    });
});

// Search functionality
const searchBar = document.querySelector('.search-bar');
if (searchBar) {
    searchBar.addEventListener('keyup', function(e) {
        console.log('Recherche:', this.value);
        // Implement search logic here
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.category-card, .product-card, .blog-card').forEach(card => {
    observer.observe(card);
});

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Filter functionality
const filterSelects = document.querySelectorAll('.filter-select');
filterSelects.forEach(select => {
    select.addEventListener('change', function() {
        console.log('Filtré par:', this.value);
        // Implement filter logic here
    });
});

console.log('Site Sacapuce Modern - Chargé avec succès ✓');