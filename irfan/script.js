document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
  
    if (hamburger) {
      hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
  
        // Toggle icon between menu and close
        const icon = hamburger.querySelector('i');
        if (navLinks.classList.contains('active')) {
          icon.classList.remove('ri-menu-3-line');
          icon.classList.add('ri-close-line');
        } else {
          icon.classList.remove('ri-close-line');
          icon.classList.add('ri-menu-3-line');
        }
      });
    }
  
    // Swiper initialization
    var swiper = new Swiper(".blogSwiper", {
      slidesPerView: 3,
      spaceBetween: 10,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 10 },
        600: { slidesPerView: 1, spaceBetween: 10 },
        900: { slidesPerView: 2, spaceBetween: 10 },
        1200: { slidesPerView: 3, spaceBetween: 10 },
      },
    });
  });
  