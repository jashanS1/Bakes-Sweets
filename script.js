// Data
const menuData = {
    cakes: {
        '500g': [
            { name: 'Vanilla', price: 599, desc: 'Classic rich and creamy vanilla cake.', img: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&q=80&w=600' },
            { name: 'Pineapple', price: 499, desc: 'Fresh pineapple bits with light cream.', img: 'https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?auto=format&fit=crop&q=80&w=600' },
            { name: 'Strawberry', price: 499, desc: 'Sweet strawberry delight.', img: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?auto=format&fit=crop&q=80&w=600' },
            { name: 'Butterscotch', price: 479, desc: 'Crunchy butterscotch praline and cream.', img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600' },
            { name: 'Black Forest', price: 549, desc: 'Chocolate sponge with cherry and cream.', img: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=600' },
            { name: 'Chocolate', price: 549, desc: 'Rich and moist chocolate ganache cake.', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600' },
            { name: 'Red Velvet', price: 599, desc: 'Soft red velvet sponge with cream cheese frosting.', img: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=600' },
            { name: 'Truffle', price: 599, desc: 'Dense dark chocolate truffle.', img: 'https://images.unsplash.com/photo-1557925923-33b251dc3296?auto=format&fit=crop&q=80&w=600' },
            { name: 'Choco Vanilla', price: 550, desc: 'A great combo of chocolate & vanilla flavour.', img: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&q=80&w=600' }
        ],
        '1kg': [
            { name: 'Vanilla', price: 999, desc: 'Classic rich and creamy vanilla cake.', img: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&q=80&w=600' },
            { name: 'Pineapple', price: 899, desc: 'Fresh pineapple bits with light cream.', img: 'https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?auto=format&fit=crop&q=80&w=600' },
            { name: 'Strawberry', price: 899, desc: 'Sweet strawberry delight.', img: 'https://images.unsplash.com/photo-1611293388250-580b08c4a145?auto=format&fit=crop&q=80&w=600' },
            { name: 'Butterscotch', price: 879, desc: 'Crunchy butterscotch praline and cream.', img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=600' },
            { name: 'Black Forest', price: 949, desc: 'Chocolate sponge with cherry and cream.', img: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&q=80&w=600' },
            { name: 'Chocolate', price: 949, desc: 'Rich and moist chocolate ganache cake.', img: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&q=80&w=600' },
            { name: 'Red Velvet', price: 999, desc: 'Soft red velvet sponge with cream cheese frosting.', img: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=600' },
            { name: 'Truffle', price: 999, desc: 'Dense dark chocolate truffle.', img: 'https://images.unsplash.com/photo-1557925923-33b251dc3296?auto=format&fit=crop&q=80&w=600' }
        ]
    },
    pizza: [
        { name: 'Single Veg', desc: 'Onion / Capsicum / Tomato', price: '₹80 / ₹150 / ₹280', img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=600' },
        { name: 'Onion & Tomato', desc: 'Fresh onions and tomatoes on a cheesy base.', price: '₹90 / ₹180 / ₹320', img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=600' },
        { name: 'Onion & Sweet Corn', desc: 'Crunchy onions and sweet corn kernels.', price: '₹100 / ₹200 / ₹320', img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&q=80&w=600' },
        { name: 'Golden Corn', desc: 'Loaded with sweet golden corn and extra cheese.', price: '₹100 / ₹200 / ₹350', img: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&q=80&w=600' },
        { name: 'Mix Veg', desc: 'Onion, Capsicum, Tomato.', price: '₹120 / ₹240 / ₹350', img: 'https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&q=80&w=600' },
        { name: 'Paneer', desc: 'Fresh paneer cubes with classic pizza sauce.', price: '₹150 / ₹250 / ₹350', img: 'https://images.unsplash.com/photo-1548369937-47519962c11a?auto=format&fit=crop&q=80&w=600' },
        { name: 'Special Full Loaded', desc: 'Loaded with all premium veggies and paneer.', price: '₹180 / ₹280 / ₹450', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600' },
        { name: 'Tandoori Paneer', desc: 'Tandoori marinated paneer with spicy drizzle.', price: '₹180 / ₹280 / ₹450', img: 'https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?auto=format&fit=crop&q=80&w=600' }
    ],
    sandwiches: [
        { name: 'Veg Grill', desc: 'Fresh veggies grilled to perfection.', price: '₹50 / ₹80', img: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=600' },
        { name: 'Cheese Grill', desc: 'Gooey melted cheese on crispy toasted bread.', price: '₹60 / ₹100', img: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?auto=format&fit=crop&q=80&w=600' },
        { name: 'Tandoori Paneer', desc: 'Spicy tandoori paneer filling.', price: '₹80 / ₹150', img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&q=80&w=600' } // reusing pizza img as sandwich isn't specific in unsplash
    ],
    garlic: [
        { name: 'Stuffed Garlic Bread', desc: 'Oven-baked bread stuffed with cheese and corn.', price: '₹100', img: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?auto=format&fit=crop&q=80&w=600' },
        { name: 'Paneer Tikka Garlic Bread', desc: 'Garlic bread topped with paneer tikka chunks.', price: '₹150', img: 'https://images.unsplash.com/photo-1619531040576-67ee2614981e?auto=format&fit=crop&q=80&w=600' }
    ],
    drinks: [
        { name: 'Cold Coffee', desc: 'Classic blended iced coffee.', price: '₹60 / ₹80', img: 'https://images.unsplash.com/photo-1461023058943-0708ce161e38?auto=format&fit=crop&q=80&w=600' },
        { name: 'KitKat Shake', desc: 'Thick shake blended with KitKat bars.', price: '₹100 / ₹120', img: 'https://images.unsplash.com/photo-1572490122747-3968b75bf699?auto=format&fit=crop&q=80&w=600' },
        { name: 'Oreo Shake', desc: 'Creamy shake loaded with crushed Oreos.', price: '₹100 / ₹120', img: 'https://images.unsplash.com/photo-1550993090-e59fafe174e9?auto=format&fit=crop&q=80&w=600' }
    ]
};

const WA_NUMBER = '918950604890';

// Helper to format WhatsApp order message
const generateWaLink = (itemName, itemPrice) => {
    const text = `Hi, I would like to order: ${itemName} (${itemPrice})`;
    return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`;
};

// Render Functions
const renderCakes = (weight) => {
    const container = document.getElementById('cakes-container');
    container.innerHTML = '';
    const cakes = menuData.cakes[weight];
    
    cakes.forEach(cake => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <img src="${cake.img}" alt="${cake.name} Cake" class="menu-card-img" loading="lazy">
            <div class="menu-card-content">
                <div class="menu-card-header">
                    <h3 class="menu-card-title">${cake.name}</h3>
                    <span class="menu-card-price">₹${cake.price}</span>
                </div>
                <p class="menu-card-desc">${cake.desc}</p>
                <a href="${generateWaLink(cake.name + ' Cake', '₹' + cake.price)}" target="_blank" class="btn btn-primary">
                    <i class="fab fa-whatsapp"></i> Order
                </a>
            </div>
        `;
        container.appendChild(card);
    });
};

const renderCategory = (category, containerId) => {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    const items = menuData[category];
    
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}" class="menu-card-img" loading="lazy">
            <div class="menu-card-content">
                <div class="menu-card-header">
                    <h3 class="menu-card-title">${item.name}</h3>
                    <span class="menu-card-price">${item.price}</span>
                </div>
                <p class="menu-card-desc">${item.desc}</p>
                <a href="${generateWaLink(item.name, item.price)}" target="_blank" class="btn btn-primary">
                    <i class="fab fa-whatsapp"></i> Order
                </a>
            </div>
        `;
        container.appendChild(card);
    });
};

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    
    // Initial Render
    renderCakes('500g');
    renderCategory('pizza', 'pizza-container');
    renderCategory('sandwiches', 'sandwiches-container');
    renderCategory('garlic', 'garlic-container');
    renderCategory('drinks', 'drinks-container');

    // Cake Weight Toggle
    const cakeToggle = document.getElementById('cake-weight-toggle');
    const label500g = document.getElementById('label-500g');
    const label1kg = document.getElementById('label-1kg');

    label500g.classList.add('active');

    cakeToggle.addEventListener('change', (e) => {
        if(e.target.checked) {
            renderCakes('1kg');
            label1kg.classList.add('active');
            label500g.classList.remove('active');
        } else {
            renderCakes('500g');
            label500g.classList.add('active');
            label1kg.classList.remove('active');
        }
    });

    // Menu Tabs
    const tabs = document.querySelectorAll('.menu-tab');
    const panes = document.querySelectorAll('.menu-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));
            
            tab.classList.add('active');
            const target = document.getElementById(tab.getAttribute('data-target'));
            target.classList.add('active');
        });
    });

    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    const links = document.querySelectorAll('.nav-link');

    mobileToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Sticky Navbar
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if(window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 15px rgba(74, 51, 42, 0.1)';
            navbar.style.padding = '0';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(74, 51, 42, 0.08)';
        }
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-left, .slide-in-right');
    animatedElements.forEach(el => observer.observe(el));

    // Custom Order Form Submission
    const customForm = document.getElementById('custom-cake-form');
    customForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('c-name').value;
        const phone = document.getElementById('c-phone').value;
        const occasion = document.getElementById('c-occasion').value;
        const flavor = document.getElementById('c-flavor').value;
        const weight = document.getElementById('c-weight').value;
        const date = document.getElementById('c-date').value;
        const msg = document.getElementById('c-message').value;

        const text = `Hi, I want a custom cake!
Name: ${name}
Phone: ${phone}
Occasion: ${occasion}
Flavor: ${flavor}
Weight: ${weight}
Date: ${date}
Instructions: ${msg}`;

        window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
    });

    // Lightbox for Gallery
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightboxImg.src = item.src;
            lightbox.classList.add('active');
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
        if(e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
});
