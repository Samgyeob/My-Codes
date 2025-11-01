/* ============================================================
 * MINISTRY PAGE SCRIPT
 * - Gallery infinite auto-scroll (5 visible slots, continuous loop)
 * - Fade-in animation for ministry cards
 * All comments are in English.
 * ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scroll for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add fade-in animation to ministry cards
    const ministryCards = document.querySelectorAll('.ministry');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    ministryCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    /* ---------------------------
     * Gallery - Show all 7 images at once (fixed display)
     * Center alignment for full screen
     * --------------------------- */
    function setupGallery(trackId) {
        const track = document.getElementById(trackId);
        if (!track) return;

        // Simply ensure all images are visible from the start
        track.scrollLeft = 0;
        
        // Disable any scrolling behavior
        track.style.overflow = 'visible';
        track.style.scrollBehavior = 'auto';
        
        // Center alignment styles to fix full screen right-alignment issue
        track.style.display = 'flex';
        track.style.justifyContent = 'center';
        track.style.alignItems = 'center';
        track.style.flexWrap = 'nowrap';
        
        // Ensure parent container is also centered
        const parentContainer = track.parentElement;
        if (parentContainer) {
            parentContainer.style.display = 'flex';
            parentContainer.style.justifyContent = 'center';
            parentContainer.style.width = '100%';
        }
    }

    // initialize both galleries to show all images
    setupGallery('kfd-gallery');
    setupGallery('into-gallery');

}); // end DOMContentLoaded