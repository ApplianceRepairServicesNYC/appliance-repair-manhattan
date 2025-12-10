/* ==========================================================================
   Appliance Repair Group - Main JavaScript
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const mobileMenuClose = document.querySelector('.mobile-menu .close-btn');

    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            mobileMenuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', closeMobileMenu);
        }

        if (mobileMenuOverlay) {
            mobileMenuOverlay.addEventListener('click', closeMobileMenu);
        }

        function closeMobileMenu() {
            mobileMenu.classList.remove('active');
            mobileMenuOverlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    // Sticky Header
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }

        lastScroll = currentScroll;
    });

    // Back to Top Button
    const backToTop = document.getElementById('back-to-top');

    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // Dropdown Navigation
    const dropdownParents = document.querySelectorAll('.nav li:has(.dropdown)');
    
    dropdownParents.forEach(function(parent) {
        parent.addEventListener('mouseenter', function() {
            const dropdown = this.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.opacity = '1';
                dropdown.style.visibility = 'visible';
                dropdown.style.transform = 'translateY(0)';
            }
        });

        parent.addEventListener('mouseleave', function() {
            const dropdown = this.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.opacity = '0';
                dropdown.style.visibility = 'hidden';
                dropdown.style.transform = 'translateY(10px)';
            }
        });
    });

    // Form Validation
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const requiredFields = contactForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(function(field) {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('error');
                } else {
                    field.classList.remove('error');
                }
            });

            // Email validation
            const emailField = contactForm.querySelector('[type="email"]');
            if (emailField && emailField.value) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailField.value)) {
                    isValid = false;
                    emailField.classList.add('error');
                }
            }

            // Phone validation
            const phoneField = contactForm.querySelector('[type="tel"]');
            if (phoneField && phoneField.value) {
                const phoneRegex = /^[\d\s\-\(\)\+]{10,}$/;
                if (!phoneRegex.test(phoneField.value)) {
                    isValid = false;
                    phoneField.classList.add('error');
                }
            }

            if (isValid) {
                // Form is valid - show success message
                alert('Thank you for your message! We will contact you shortly.');
                contactForm.reset();
            } else {
                alert('Please fill in all required fields correctly.');
            }
        });

        // Remove error class on input
        const formFields = contactForm.querySelectorAll('input, select, textarea');
        formFields.forEach(function(field) {
            field.addEventListener('input', function() {
                this.classList.remove('error');
            });
        });
    }

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#top') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Lazy Loading Images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }

    // Service Cards Animation on Scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .review-card, .brand-logo');
        
        elements.forEach(function(element) {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('animate-in');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run on load

    // Phone Number Click Tracking (for analytics)
    document.querySelectorAll('a[href^="tel:"]').forEach(link => {
        link.addEventListener('click', function() {
            // Track phone call click
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'Contact',
                    'event_label': 'Phone Call'
                });
            }
        });
    });

    // Current Year in Footer
    const yearSpan = document.querySelector('.footer-bottom .year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

});

// Add CSS class for animation
const style = document.createElement('style');
style.textContent = `
    .service-card, .review-card, .brand-logo {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .service-card.animate-in, .review-card.animate-in, .brand-logo.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    .form-group input.error,
    .form-group select.error,
    .form-group textarea.error {
        border-color: #d80027 !important;
    }
    img.loaded {
        animation: fadeIn 0.3s ease;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
`;
document.head.appendChild(style);
