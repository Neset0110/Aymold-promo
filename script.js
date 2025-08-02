// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect
    const navbar = document.querySelector('.navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
        
        lastScrollTop = scrollTop;
    });

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .channel-card, .testimonial-card, .logo-item');
    animateElements.forEach(el => {
        el.classList.add('loading');
        observer.observe(el);
    });

    // Hero Slider
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;
    let startX = 0;
    let endX = 0;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        currentSlide = index;
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Auto slide every 5 seconds
    function startAutoSlide() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(slideInterval);
    }

    // Touch/Swipe support for mobile
    const heroSlider = document.querySelector('.hero-slider');
    
    if (heroSlider) {
        // Touch events
        heroSlider.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });
        
        heroSlider.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
        
        // Mouse events for desktop
        heroSlider.addEventListener('mousedown', (e) => {
            startX = e.clientX;
        });
        
        heroSlider.addEventListener('mouseup', (e) => {
            endX = e.clientX;
            handleSwipe();
        });
        
        function handleSwipe() {
            const swipeThreshold = 50;
            const diff = startX - endX;
            
            if (Math.abs(diff) > swipeThreshold) {
                if (diff > 0) {
                    // Swipe left - next slide
                    nextSlide();
                } else {
                    // Swipe right - previous slide
                    prevSlide();
                }
                stopAutoSlide();
                startAutoSlide();
            }
        }
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            stopAutoSlide();
            startAutoSlide();
        });
    });

    // Start auto slide
    startAutoSlide();

    // Pause auto slide on hover
    if (heroSlider) {
        heroSlider.addEventListener('mouseenter', stopAutoSlide);
        heroSlider.addEventListener('mouseleave', startAutoSlide);
    }

    // Dropdown menu interactions
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown-menu');
        
        // Mouse enter
        item.addEventListener('mouseenter', function() {
            dropdown.style.opacity = '1';
            dropdown.style.visibility = 'visible';
            dropdown.style.transform = 'translateY(0)';
        });
        
        // Mouse leave
        item.addEventListener('mouseleave', function() {
            dropdown.style.opacity = '0';
            dropdown.style.visibility = 'hidden';
            dropdown.style.transform = 'translateY(-10px)';
        });
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Button hover effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroVisual = document.querySelector('.hero-visual');
        
        if (hero && heroVisual) {
            const rate = scrolled * -0.5;
            heroVisual.style.transform = `translateY(${rate}px)`;
        }
    });

    // Counter animation for statistics
    const statButtons = document.querySelectorAll('.stat-button');
    
    const animateCounter = (element, target) => {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current);
        }, 20);
    };

    // Observe stat buttons for animation
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statButton = entry.target;
                const statNumber = statButton.querySelector('.stat-number');
                const target = parseInt(statButton.getAttribute('data-count'));
                animateCounter(statNumber, target);
                statsObserver.unobserve(statButton);
            }
        });
    }, { threshold: 0.5 });

    statButtons.forEach(statButton => {
        statsObserver.observe(statButton);
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
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

    // Form interactions
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Gönderiliyor...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    submitBtn.textContent = 'Başarılı!';
                    submitBtn.style.background = '#10b981';
                    
                    // Show success message
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.innerHTML = `
                        <div class="success-content">
                            <i class="fas fa-check-circle"></i>
                            <h3>Teklif Talebiniz Alındı!</h3>
                            <p>24 saat içinde size dönüş yapacağız. Teşekkür ederiz.</p>
                        </div>
                    `;
                    document.body.appendChild(successMessage);
                    
                    // Remove success message after 5 seconds
                    setTimeout(() => {
                        successMessage.remove();
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                    }, 5000);
                }, 1500);
            }
        });
    });

    // Language selector interaction
    const languageSelector = document.querySelector('.language-selector');
    
    if (languageSelector) {
        languageSelector.addEventListener('click', function(e) {
            e.stopPropagation();
            this.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!languageSelector.contains(e.target)) {
                languageSelector.classList.remove('active');
            }
        });

        // Handle language selection
        const langOptions = document.querySelectorAll('.lang-option');
        langOptions.forEach(option => {
            option.addEventListener('click', function(e) {
                e.stopPropagation();
                const lang = this.getAttribute('data-lang');
                const flag = this.querySelector('span:first-child').textContent;
                const code = this.querySelector('span:last-child').textContent;
                
                // Update current language display
                const currentLang = languageSelector.querySelector('.current-lang');
                const flagClass = `flag-${lang}`;
                currentLang.innerHTML = `<div class="flag ${flagClass}"></div>`;
                
                // Update all language options to show current selection
                langOptions.forEach(opt => {
                    opt.classList.remove('active');
                });
                this.classList.add('active');
                
                // Close dropdown
                languageSelector.classList.remove('active');
                
                console.log('Language changed to:', lang);
            });
        });
    }

    // Add ripple effect to buttons
    const addRippleEffect = (event) => {
        const button = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    // Add ripple effect to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', addRippleEffect);
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .btn-primary, .btn-secondary, .btn-outline {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Initialize tooltips (if needed)
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('data-tooltip');
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
            tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        });
        
        element.addEventListener('mouseleave', function() {
            const tooltip = document.querySelector('.tooltip');
            if (tooltip) {
                tooltip.remove();
            }
        });
    });

    // Add tooltip styles
    const tooltipStyle = document.createElement('style');
    tooltipStyle.textContent = `
        .tooltip {
            position: absolute;
            background: #1f2937;
            color: white;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 0.875rem;
            z-index: 1000;
            pointer-events: none;
            animation: fadeIn 0.2s ease;
        }
        
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
        }
    `;
    document.head.appendChild(tooltipStyle);

    console.log('TechVision Pro website initialized successfully!');
});

// Performance optimization
window.addEventListener('load', function() {
    // Lazy load images (if any are added)
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}); 