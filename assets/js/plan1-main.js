/**
 * Main JavaScript for Plan 1 Portfolio
 * Handles navigation, smooth scroll, animations, and Swiper carousel
 */

class PortfolioApp {
    constructor() {
        this.nav = document.getElementById('nav');
        this.navLinks = document.querySelectorAll('.nav-links a');
        this.navToggle = document.querySelector('.nav-toggle');
        this.navLinksContainer = document.querySelector('.nav-links');
        this.scrollProgress = document.querySelector('.scroll-progress');
        this.swiper = null;
        
        this.init();
    }
    
    init() {
        this.setupNavigation();
        this.setupScrollAnimations();
        this.setupLazyVideos();
        this.initSwiper();
        this.setupFormHandler();
        
        // Remove preload class after a short delay
        setTimeout(() => {
            document.body.classList.remove('is-preload');
        }, 100);
    }
    
    // ========================================================================
    // Navigation
    // ========================================================================
    
    setupNavigation() {
        // Smooth scroll for navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                if (targetSection) {
                    // Close mobile menu if open
                    this.navLinksContainer.classList.remove('active');
                    this.navToggle.classList.remove('active');
                    
                    // Smooth scroll to section
                    const offsetTop = targetSection.offsetTop - 70; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Mobile menu toggle
        if (this.navToggle) {
            this.navToggle.addEventListener('click', () => {
                this.navLinksContainer.classList.toggle('active');
                this.navToggle.classList.toggle('active');
            });
        }
        
        // Scroll effects
        window.addEventListener('scroll', () => {
            this.handleScroll();
        });
        
        // Initial scroll check
        this.handleScroll();
    }
    
    handleScroll() {
        const scrollY = window.scrollY;
        
        // Add shadow to nav when scrolled
        if (scrollY > 50) {
            this.nav.classList.add('scrolled');
        } else {
            this.nav.classList.remove('scrolled');
        }
        
        // Update scroll progress bar
        const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollY / windowHeight) * 100;
        this.scrollProgress.style.width = `${scrollPercent}%`;
        
        // Update active nav link based on scroll position
        this.updateActiveNavLink();
    }
    
    updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.scrollY + 100; // Offset for fixed nav
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    // ========================================================================
    // Scroll Animations (Intersection Observer)
    // ========================================================================
    
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe featured cards
        document.querySelectorAll('.featured-card').forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
            observer.observe(card);
        });
        
        // Observe about section
        const aboutGrid = document.querySelector('.about-grid');
        if (aboutGrid) {
            observer.observe(aboutGrid);
        }
    }
    
    // ========================================================================
    // Lazy Load Videos
    // ========================================================================
    
    setupLazyVideos() {
        const videoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    const src = video.dataset.src;
                    
                    if (src) {
                        video.src = src;
                        video.load();
                        videoObserver.unobserve(video);
                    }
                }
            });
        }, { threshold: 0.1 });
        
        document.querySelectorAll('.lazy-video').forEach(video => {
            videoObserver.observe(video);
        });
    }
    
    // ========================================================================
    // Swiper Carousel
    // ========================================================================
    
    initSwiper() {
        if (typeof Swiper === 'undefined') {
            console.error('Swiper library not loaded');
            return;
        }
        
        this.swiper = new Swiper('.projects-carousel', {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: false,
            grabCursor: true,
            keyboard: {
                enabled: true,
                onlyInViewport: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
                dynamicBullets: true
            },
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30
                }
            },
            autoplay: false
        });
    }
    
    // ========================================================================
    // Form Handler
    // ========================================================================
    
    setupFormHandler() {
        const form = document.getElementById('contact-form');
        const formResponse = document.getElementById('form-response');
        
        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const formData = new FormData(form);
                const button = form.querySelector('button[type="submit"]');
                const originalText = button.textContent;
                
                // Disable button and show loading state
                button.disabled = true;
                button.textContent = 'Sending...';
                
                try {
                    const response = await fetch(form.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                        }
                    });
                    
                    if (response.ok) {
                        formResponse.textContent = 'Thank you for your message! I\'ll get back to you soon.';
                        formResponse.className = 'success';
                        form.reset();
                    } else {
                        throw new Error('Form submission failed');
                    }
                } catch (error) {
                    formResponse.textContent = 'Oops! There was a problem sending your message. Please try again.';
                    formResponse.className = 'error';
                } finally {
                    button.disabled = false;
                    button.textContent = originalText;
                    
                    // Hide message after 5 seconds
                    setTimeout(() => {
                        formResponse.style.display = 'none';
                        formResponse.className = '';
                    }, 5000);
                }
            });
        }
    }
}

// ========================================================================
// Utility Functions
// ========================================================================

// Smooth scroll to top (for hero CTA)
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 70;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new PortfolioApp();
    });
} else {
    new PortfolioApp();
}

// Export for use in other scripts if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { PortfolioApp, scrollToSection };
}

