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
        this.setupFeaturedCardClicks();
        this.handleInitialHash();
        
        // Remove preload class after a short delay
        setTimeout(() => {
            document.body.classList.remove('is-preload');
        }, 100);
    }
    
    // Make entire featured card clickable
    setupFeaturedCardClicks() {
        document.querySelectorAll('.featured-card').forEach(card => {
            card.addEventListener('click', (e) => {
                // Don't trigger if clicking the button directly (it has its own handler)
                if (!e.target.classList.contains('view-details')) {
                    const button = card.querySelector('.view-details');
                    if (button) {
                        button.click();
                    }
                }
            });
        });
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
                this.scrollToSection(targetId);
            });
        });
        
        // Handle hero CTA link
        const heroCta = document.querySelector('.hero-cta');
        if (heroCta) {
            heroCta.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = heroCta.getAttribute('href');
                this.scrollToSection(targetId);
            });
        }
        
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
    
    scrollToSection(targetId) {
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            // Close mobile menu if open
            this.navLinksContainer.classList.remove('active');
            this.navToggle.classList.remove('active');
            
            // Update URL hash without scroll jump using history.pushState
            if (history.pushState) {
                history.pushState(null, null, targetId);
            }
            
            // Smooth scroll to section
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed nav
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    }
    
    handleInitialHash() {
        // Check for both hash and query params
        // Query params should be in window.location.search (before hash)
        // But also check hash fragment for backwards compatibility (old format: #section?project=id)
        const urlParams = new URLSearchParams(window.location.search);
        let projectId = urlParams.get('project');
        let hash = window.location.hash;
        
        // Backwards compatibility: check if query params are in hash fragment
        // Format: #section?project=id
        if (!projectId && hash && hash.includes('?')) {
            const hashParts = hash.split('?');
            hash = hashParts[0]; // Extract just the section hash
            const hashQueryParams = new URLSearchParams(hashParts[1]);
            projectId = hashQueryParams.get('project');
        }
        
        // If there's a hash, scroll to that section first
        if (hash) {
            // Wait for page to fully load and animations to initialize
            setTimeout(() => {
                const targetSection = document.querySelector(hash);
                
                if (targetSection) {
                    // Smooth scroll to section
                    const offsetTop = targetSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    // If there's also a project query param, open the modal after scrolling
                    if (projectId) {
                        // Wait for scroll to complete, then open modal
                        setTimeout(() => {
                            this.openProjectModal(projectId);
                        }, 500); // Adjust timing based on scroll duration
                    }
                }
            }, 150);
        } else if (projectId) {
            // If there's a project param but no hash, default to featured section
            setTimeout(() => {
                const featuredSection = document.querySelector('#featured');
                if (featuredSection) {
                    const offsetTop = featuredSection.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                    
                    setTimeout(() => {
                        this.openProjectModal(projectId);
                    }, 500);
                }
            }, 150);
        }
    }
    
    openProjectModal(projectId) {
        // Access modal manager instance from global scope
        if (window.modalManagerInstance) {
            window.modalManagerInstance.openModal(projectId, false); // false = don't update URL (already in URL)
        } else {
            // Fallback: wait a bit for modal manager to initialize, then try again
            setTimeout(() => {
                if (window.modalManagerInstance) {
                    window.modalManagerInstance.openModal(projectId, false);
                } else {
                    // Last resort: find the button and click it
                    const viewDetailsButton = document.querySelector(`.view-details[data-project="${projectId}"]`);
                    if (viewDetailsButton) {
                        viewDetailsButton.click();
                    }
                }
            }, 100);
        }
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
        
        // Check for elements already in viewport (e.g., when page loads with hash)
        // This ensures animations trigger even if elements are already visible
        const checkInitialVisibility = () => {
            document.querySelectorAll('.featured-card, .about-grid').forEach(element => {
                const rect = element.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
                if (isVisible && !element.classList.contains('visible')) {
                    // Small delay to ensure smooth animation
                    setTimeout(() => {
                        element.classList.add('visible');
                    }, 100);
                }
            });
        };
        
        // Check after a short delay to account for any initial scroll
        setTimeout(checkInitialVisibility, 300);
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

