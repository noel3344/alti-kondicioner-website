// Language translations
const translations = {
    sq: {
        menu: 'Menu',
        brands: 'Brendet',
        categories: 'Kategoritë',
        all_brands: 'Të gjitha brendet',
        our_products: 'Produktet Tona',
        home: 'Kryefaqja',
        products: 'Produktet',
        services: 'Shërbimet',
        about: 'Rreth Nesh',
        contact: 'Kontakt',
        welcome: 'Mirë se vini në Alti Kondicioner',
        welcome_sub: 'Zgjidhni sistemin më të mirë të kondicionimit për shtëpinë tuaj',
        get_quote: 'Merrni Oferte Falas',
        // Add more translations as needed
    },
    en: {
        menu: 'Menu',
        brands: 'Brands',
        categories: 'Categories',
        all_brands: 'All Brands',
        our_products: 'Our Products',
        home: 'Home',
        products: 'Products',
        services: 'Services',
        about: 'About',
        contact: 'Contact',
        welcome: 'Welcome to Alti Kondicioner',
        welcome_sub: 'Choose the best air conditioning system for your home',
        get_quote: 'Get a Free Quote'
    },
    it: {
        menu: 'Menu',
        brands: 'Marchi',
        categories: 'Categorie',
        all_brands: 'Tutti i Marchi',
        our_products: 'I Nostri Prodotti',
        home: 'Casa',
        products: 'Prodotti',
        services: 'Servizi',
        about: 'Chi Siamo',
        contact: 'Contatto',
        welcome: 'Benvenuti su Alti Kondicioner',
        welcome_sub: 'Scegli il miglior sistema di condizionamento per la tua casa',
        get_quote: 'Richiedi un Preventivo Gratuito'
    }
};

// Currency rates
const currencyRates = {
    sq: { code: 'L', rate: 1, symbol: 'L' }, // ALL
    en: { code: 'USD', rate: 0.0102, symbol: '$' }, // USD
    it: { code: 'EUR', rate: 0.0095, symbol: '€' }  // EUR
};

// Sample product data
const products = [
    {
        id: 1,
        name: 'Daikin FTXF35C',
        brand: 'daikin',
        category: 'mural',
        price: 599.99,
        image: 'https://m.media-amazon.com/images/I/61XZQ3Q9QHL._AC_UF1000,1000_QL80_.jpg',
        specs: {
            'Type': 'Wall Mounted',
            'Cooling Capacity': '3.5 kW',
            'Heating Capacity': '3.8 kW',
            'Energy Rating': 'A++',
            'Noise Level': '19 dB',
            'WiFi Control': 'Yes',
            'Warranty': '5 Years'
        }
    },
    {
        id: 2,
        name: 'Mitsubishi MSZ-LN35VGV',
        brand: 'mitsubishi',
        category: 'mural',
        price: 699.99,
        image: 'https://m.media-amazon.com/images/I/71Z8kQ3Q9JL._AC_UF1000,1000_QL80_.jpg',
        specs: {
            'Type': 'Wall Mounted',
            'Cooling Capacity': '3.5 kW',
            'Heating Capacity': '4.0 kW',
            'Energy Rating': 'A+++',
            'Noise Level': '20 dB',
            'WiFi Control': 'Yes',
            'Warranty': '7 Years'
        }
    },
    {
        id: 3,
        name: 'Fujitsu ASYG07LMCC',
        brand: 'fujitsu',
        category: 'tokesor',
        price: 549.99,
        image: 'https://m.media-amazon.com/images/I/71Z8kQ3Q9JL._AC_UF1000,1000_QL80_.jpg',
        specs: {
            'Type': 'Wall Mounted',
            'Cooling Capacity': '2.5 kW',
            'Heating Capacity': '3.2 kW',
            'Energy Rating': 'A++',
            'Noise Level': '22 dB',
            'WiFi Control': 'No',
            'Warranty': '5 Years'
        }
    },
    {
        id: 4,
        name: 'Toshiba RAS-10SKP-E',
        brand: 'toshiba',
        category: 'multisplit',
        price: 479.99,
        image: 'https://m.media-amazon.com/images/I/71Z8kQ3Q9JL._AC_UF1000,1000_QL80_.jpg',
        specs: {
            'Type': 'Wall Mounted',
            'Cooling Capacity': '2.5 kW',
            'Heating Capacity': '3.0 kW',
            'Energy Rating': 'A+',
            'Noise Level': '24 dB',
            'WiFi Control': 'No',
            'Warranty': '5 Years'
        }
    },
    {
        id: 5,
        name: 'LG P12EP2',
        brand: 'lg',
        category: 'mural',
        price: 529.99,
        image: 'https://m.media-amazon.com/images/I/71Z8kQ3Q9JL._AC_UF1000,1000_QL80_.jpg',
        specs: {
            'Type': 'Wall Mounted',
            'Cooling Capacity': '3.5 kW',
            'Heating Capacity': '4.0 kW',
            'Energy Rating': 'A++',
            'Noise Level': '21 dB',
            'WiFi Control': 'Yes',
            'Warranty': '5 Years'
        }
    },
    {
        id: 6,
        name: 'Samsung AR12TXCAAWKN',
        brand: 'samsung',
        category: 'tokesor',
        price: 499.99,
        image: 'https://m.media-amazon.com/images/I/71Z8kQ3Q9JL._AC_UF1000,1000_QL80_.jpg',
        specs: {
            'Type': 'Wall Mounted',
            'Cooling Capacity': '3.5 kW',
            'Heating Capacity': '4.0 kW',
            'Energy Rating': 'A++',
            'Noise Level': '23 dB',
            'WiFi Control': 'Yes',
            'Warranty': '5 Years'
        }
    },
    {
        id: 7,
        name: 'Panasonic CS-HE9QKE',
        brand: 'panasonic',
        category: 'multisplit',
        price: 679.99,
        image: 'https://m.media-amazon.com/images/I/71Z8kQ3Q9JL._AC_UF1000,1000_QL80_.jpg',
        specs: {
            'Type': 'Wall Mounted',
            'Cooling Capacity': '2.5 kW',
            'Heating Capacity': '3.2 kW',
            'Energy Rating': 'A+++',
            'Noise Level': '19 dB',
            'WiFi Control': 'Yes',
            'Warranty': '7 Years'
        }
    },
    {
        id: 8,
        name: 'Gree Bora GWH09AAB-K3DNA5A/I',
        brand: 'gree',
        category: 'mural',
        price: 429.99,
        image: 'https://m.media-amazon.com/images/I/71Z8kQ3Q9JL._AC_UF1000,1000_QL80_.jpg',
        specs: {
            'Type': 'Wall Mounted',
            'Cooling Capacity': '2.5 kW',
            'Heating Capacity': '3.0 kW',
            'Energy Rating': 'A+',
            'Noise Level': '22 dB',
            'WiFi Control': 'No',
            'Warranty': '5 Years'
        }
    },
    {
        id: 9,
        name: 'Hitachi RAK-25P2A',
        brand: 'hitachi',
        category: 'tokesor',
        price: 599.99,
        image: 'https://m.media-amazon.com/images/I/71Z8kQ3Q9JL._AC_UF1000,1000_QL80_.jpg',
        specs: {
            'Type': 'Wall Mounted',
            'Cooling Capacity': '2.5 kW',
            'Heating Capacity': '3.0 kW',
            'Energy Rating': 'A++',
            'Noise Level': '20 dB',
            'WiFi Control': 'Yes',
            'Warranty': '5 Years'
        }
    },
    {
        id: 10,
        name: 'Carrier 42NQV035G',
        brand: 'carrier',
        category: 'multisplit',
        price: 649.99,
        image: 'https://m.media-amazon.com/images/I/71Z8kQ3Q9JL._AC_UF1000,1000_QL80_.jpg',
        specs: {
            'Type': 'Wall Mounted',
            'Cooling Capacity': '3.5 kW',
            'Heating Capacity': '4.0 kW',
            'Energy Rating': 'A+++',
            'Noise Level': '19 dB',
            'WiFi Control': 'Yes',
            'Warranty': '7 Years'
        }
    }
];

// Current language state
let currentLanguage = 'sq';

// Function to update prices based on current language
function updatePrices() {
    const rate = currencyRates[currentLanguage]?.rate || 1;
    const symbol = currencyRates[currentLanguage]?.symbol || '€';
    
    document.querySelectorAll('.product-price').forEach(priceElement => {
        const basePrice = parseFloat(priceElement.getAttribute('data-price')) || 0;
        const convertedPrice = (basePrice * rate).toFixed(2);
        priceElement.textContent = `${symbol}${convertedPrice}`;
    });
}

// Function to translate the page
function translatePage(lang) {
    currentLanguage = lang;
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update navigation active state
    document.querySelectorAll('.nav-links a').forEach(link => {
        const section = link.getAttribute('href').substring(1);
        link.textContent = translations[lang][section] || section.charAt(0).toUpperCase() + section.slice(1);
    });
    
    // Update currency in prices
    updatePrices();
    
    // Update active language button
    document.querySelectorAll('.lang-option').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
            // Update the main language button
            const mainBtn = document.querySelector('.lang-btn');
            mainBtn.innerHTML = `<i class="fas fa-globe"></i><span>${btn.textContent}</span>`;
            mainBtn.setAttribute('data-lang', lang);
        } else {
            btn.classList.remove('active');
        }
    });
}

// Function to filter products by brand or category
function filterProducts(filterBy, value) {
    const productGrid = document.querySelector('#menu .product-grid');
    if (!productGrid) return;
    
    let filteredProducts = [...products];
    
    if (value !== 'all') {
        filteredProducts = products.filter(product => product[filterBy] === value);
    }
    
    displayProducts(filteredProducts, productGrid);
}

// Initialize the application when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Make filter sections collapsible on mobile
    const makeCollapsible = () => {
        const isMobile = window.innerWidth <= 1200; // Match the CSS breakpoint
        const sections = document.querySelectorAll('.brands-sidebar h3');
        
        sections.forEach(section => {
            // Remove existing click handlers to avoid duplicates
            const newSection = section.cloneNode(true);
            section.parentNode.replaceChild(newSection, section);
            
            if (isMobile) {
                newSection.classList.add('collapsed');
                newSection.addEventListener('click', function(e) {
                    if (e.target === this) {
                        this.classList.toggle('collapsed');
                    }
                });
            }
        });
    };
    
    // Run on load and window resize
    makeCollapsible();
    window.addEventListener('resize', makeCollapsible);
    
    // Set up event listeners for menu filtering
    document.querySelectorAll('.brand-list li, .category-list li').forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items in the same list
            this.parentElement.querySelectorAll('li').forEach(li => li.classList.remove('active'));
            this.classList.add('active');
            
            // Determine if it's a brand or category filter
            if (this.hasAttribute('data-brand')) {
                filterProducts('brand', this.getAttribute('data-brand'));
                // Reset category filter
                document.querySelector('.category-list li.active')?.classList.remove('active');
                document.querySelector('.category-list li[data-category="all"]')?.classList.add('active');
            } else if (this.hasAttribute('data-category')) {
                filterProducts('category', this.getAttribute('data-category'));
                // Reset brand filter
                document.querySelector('.brand-list li.active')?.classList.remove('active');
                document.querySelector('.brand-list li[data-brand="all"]')?.classList.add('active');
            }
        });
    });
    
    // Language switcher
    document.querySelectorAll('.lang-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            translatePage(lang);
        });
    });
    
    // Set initial language
    translatePage(currentLanguage);
    
    // Toggle mobile menu
    const menuBtn = document.querySelector('.menu-btn');
    const navMenu = document.querySelector('.nav-links');
    
    if (menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuBtn.setAttribute('aria-expanded', 
                menuBtn.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
            );
        });
    }
    // Show home section by default
    showSection('home');
    
    // Initialize menu with all products
    const menuGrid = document.querySelector('#menu .product-grid');
    if (menuGrid) {
        // displayProducts(products, menuGrid);
    }
    
    // Set up navigation links
    const navLinks = document.querySelectorAll('.nav-links a, .footer-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            showSection(sectionId);
            
            // Update active state in navigation
            document.querySelectorAll('.nav-links li').forEach(li => {
                li.classList.remove('active');
            });
            if (link.parentElement) {
                link.parentElement.classList.add('active');
            }
            
            // Close mobile menu if open
            const navMenu = document.querySelector('.nav-links');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    });
    
    // Function to show a specific section and hide others
    function showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show the selected section
        const activeSection = document.getElementById(sectionId);
        if (activeSection) {
            activeSection.classList.add('active');
            // Scroll to top of the page
            window.scrollTo(0, 0);
        }
    }
    // Display products on page load
    // displayProducts();
    
    // Set up modal close button
    const modal = document.getElementById('productModal');
    const closeBtn = document.querySelector('.close-btn');
    
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside the modal content
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    // Function to display products in the grid
    function displayProducts(productsToShow, targetElement) {
        if (!targetElement) return;
        
        targetElement.innerHTML = ''; // Clear existing products
        
        if (productsToShow.length === 0) {
            targetElement.innerHTML = '<p class="no-products">No products found</p>';
            return;
        }
        
        productsToShow.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            
            const priceInEUR = product.price.toFixed(2);
            const priceInUSD = (product.price * 1.14).toFixed(2);
            const priceInALL = (product.price * 98).toFixed(2);
            
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image" data-product-id="${product.id}">
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">
                        <span class="price-eur">€${priceInEUR}</span>
                        <span class="price-usd" style="display: none;">$${priceInUSD}</span>
                        <span class="price-all" style="display: none;">L${priceInALL}</span>
                    </div>
                </div>
            `;
            
            // Add click event to product image
            const productImage = productCard.querySelector('.product-image');
            productImage.addEventListener('click', () => openProductModal(product));
            
            targetElement.appendChild(productCard);
        });
    }
    
    // Function to open product modal with details
    function openProductModal(product) {
        const modal = document.getElementById('productModal');
        const modalImage = document.getElementById('modalProductImage');
        const modalName = document.getElementById('modalProductName');
        const modalPrice = document.getElementById('modalProductPrice');
        const modalSpecs = document.getElementById('modalProductSpecs');
        
        if (!modal || !modalImage || !modalName || !modalPrice || !modalSpecs) return;
        
        // Set product details
        modalImage.src = product.image;
        modalImage.alt = product.name;
        modalName.textContent = product.name;
        
        // Set price in current currency
        const currentCurrency = document.querySelector('.lang-btn.active')?.dataset.lang || 'eur';
        let priceText = '';
        
        if (currentCurrency === 'usd') {
            priceText = `$${(product.price * 1.14).toFixed(2)}`;
        } else if (currentCurrency === 'sq') {
            priceText = `L${(product.price * 98).toFixed(2)}`;
        } else {
            priceText = `€${product.price.toFixed(2)}`;
        }
        
        modalPrice.textContent = priceText;
        
        // Set product specifications
        modalSpecs.innerHTML = '';
        for (const [key, value] of Object.entries(product.specs)) {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="spec-label">${key}:</span>
                <span class="spec-value">${value}</span>
            `;
            modalSpecs.appendChild(li);
        }
        
        // Show the modal
        modal.style.display = 'block';
    }
    
    // Currency conversion
    let exchangeRates = {};
    const baseCurrency = 'EUR'; // Using Euro as base currency
    const priceElements = document.querySelectorAll('.product-price');
    const API_KEY = '593e781adb9e416b926b76bfca4ca8c8'; // Replace with your actual API key or use environment variables

    // Fetch exchange rates
    async function fetchExchangeRates() {
        try {
            const response = await fetch(`https://openexchangerates.org/api/latest.json?app_id=${API_KEY}&base=${baseCurrency}`);
            const data = await response.json();
            if (data.rates) {
                exchangeRates = data.rates;
                updatePrices();
            } else {
                throw new Error('Invalid response from exchange rate API');
            }
        } catch (error) {
            console.error('Error fetching exchange rates:', error);
            // Use fallback rates if API fails
            exchangeRates = {
                USD: 1.14, // Approximate rate
                ALL: 98.00 // Approximate rate
            };
            updatePrices();
        }
    }

    // Update prices based on exchange rates
    function updatePrices() {
        priceElements.forEach(price => {
            const basePrice = parseFloat(price.querySelector('.price-eur').textContent.replace(/[^\d.]/g, ''));
            
            // Update USD price
            const usdPrice = (basePrice * exchangeRates.USD).toFixed(2);
            price.querySelector('.price-usd').textContent = `$${usdPrice}`;

            // Update ALL price
            const allPrice = (basePrice * exchangeRates.ALL).toFixed(2);
            price.querySelector('.price-all').textContent = `L${allPrice}`;
            
            // Also update the price in the modal if it's open
            const modal = document.getElementById('productModal');
            if (modal && modal.style.display === 'block') {
                const modalPrice = document.getElementById('modalProductPrice');
                if (modalPrice) {
                    const currentCurrency = document.querySelector('.lang-btn.active')?.dataset.lang || 'eur';
                    let priceText = '';
                    
                    if (currentCurrency === 'usd') {
                        priceText = `$${usdPrice}`;
                    } else if (currentCurrency === 'sq') {
                        priceText = `L${allPrice}`;
                    } else {
                        priceText = `€${basePrice.toFixed(2)}`;
                    }
                    
                    modalPrice.textContent = priceText;
                }
            }
        });
    }

    // Fetch exchange rates when page loads
    fetchExchangeRates();

    // Fetch new rates every hour
    setInterval(fetchExchangeRates, 3600000); // 1 hour in milliseconds

    // Language switching
    const languageButtons = document.querySelectorAll('.lang-btn');
    let currentLanguage = 'sq'; // Default to Albanian

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            languageButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            // Update current language
            currentLanguage = button.dataset.lang;
            
            // Update prices based on language
            priceElements.forEach(price => {
                const priceSpans = price.querySelectorAll('span');
                priceSpans.forEach(span => {
                    if (span.classList.contains(`price-${currentLanguage}`)) {
                        span.style.display = 'inline';
                    } else {
                        span.style.display = 'none';
                    }
                });
            });

            // Update interface text based on language
            updateInterfaceLanguage(currentLanguage);
        });
    });
    // Update active state on scroll (for when user scrolls manually)
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY + 100;
        
        document.querySelectorAll('.content-section').forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                // Update active state in navigation
                document.querySelectorAll('.nav-links a').forEach(link => {
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.parentElement.classList.add('active');
                    } else {
                        link.parentElement.classList.remove('active');
                    }
                });
            }
        });
    });

    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const formObject = {};
            formData.forEach((value, key) => {
                formObject[key] = value;
            });

            // Show success message
            alert('Thank you for your message! We will get back to you soon.');
            this.reset();
        });
    }

    // Function to update interface language
    function updateInterfaceLanguage(lang) {
        // Add your language-specific text updates here
        console.log(`Language updated to: ${lang}`);
        // Example: document.querySelector('.welcome-text').textContent = lang === 'sq' ? 'Mirë se vini' : 'Welcome';
    }

    // Add scroll event for header
    const header = document.querySelector('header');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            header.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
            // Scrolling down
            header.classList.remove('scroll-up');
            header.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
            // Scrolling up
            header.classList.remove('scroll-down');
            header.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
});
