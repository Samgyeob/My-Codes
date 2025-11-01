/* ============================================================
   MINISTRY PAGE SCRIPT
   - Removed accordion functionality (content always visible)
   - Kept gallery slider functionality
   All comments are in English.
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------------------------
     Gallery slider
     - shows exactly 5 slots initially
     - moves by 2 slots per click
     - stops at ends
     --------------------------- */
  function setupGallery(trackId){
    const track = document.getElementById(trackId);
    if(!track) return;

    const leftBtn  = track.parentElement.querySelector('.arrow.left');
    const rightBtn = track.parentElement.querySelector('.arrow.right');

    // read CSS variables for slot width and gap
    function getSlotUnit(){
      const rs = getComputedStyle(document.documentElement);
      const w = parseInt(rs.getPropertyValue('--thumb-w')) || 180;
      const gap = parseInt(rs.getPropertyValue('--thumb-gap')) || 12;
      return w + gap;
    }

    const visible = 5;
    const step = 2;
    const total = track.children.length;
    const maxIndex = Math.max(total - visible, 0);
    let index = 0;

    // initial arrow visibility: only show right if there's overflow
    leftBtn.style.display = 'none';
    rightBtn.style.display = (total > visible) ? 'inline-block' : 'none';

    function updateButtons(){
      leftBtn.style.display = index <= 0 ? 'none' : 'inline-block';
      rightBtn.style.display = index >= maxIndex ? 'none' : (total > visible ? 'inline-block' : 'none');
    }

    function scrollToIndex(){
      const unit = getSlotUnit();
      track.scrollTo({ left: index * unit, behavior: 'smooth' });
      updateButtons();
    }

    leftBtn.addEventListener('click', () => {
      index = Math.max(index - step, 0);
      scrollToIndex();
    });

    rightBtn.addEventListener('click', () => {
      index = Math.min(index + step, maxIndex);
      scrollToIndex();
    });

    // when window resizes, recompute scroll position to keep same index aligned
    window.addEventListener('resize', () => {
      // small timeout to wait for CSS vars to settle
      setTimeout(() => {
        const unit = getSlotUnit();
        track.scrollTo({ left: index * unit });
        updateButtons();
      }, 120);
    }, { passive: true });
  }

  // initialize galleries if they exist
  setupGallery('kfd-gallery');
  setupGallery('into-gallery');

  /* ---------------------------
     Optional: Smooth scroll for internal links
     --------------------------- */
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

}); // end DOMContentLoaded