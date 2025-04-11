
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const body = document.body;

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuToggle.classList.toggle('active');
    body.classList.toggle('menu-open');
    
    if (nav.classList.contains('active')) {
        document.addEventListener('click', closeMenuOnClickOutside);
    } else {
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
});

function closeMenuOnClickOutside(e) {
    if (!nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('active');
        menuToggle.classList.remove('active');
        body.classList.remove('menu-open');
        document.removeEventListener('click', closeMenuOnClickOutside);
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    let isScrolling;
  
    carousel.addEventListener('scroll', function() {
      clearTimeout(isScrolling);
  
      isScrolling = setTimeout(function() {
        const slides = carousel.querySelectorAll('.carousel-slide');
        if (!slides.length) return;
  
        const firstSlideStyle = window.getComputedStyle(slides[0]);
        const marginLeft = parseFloat(firstSlideStyle.marginLeft);
        const marginRight = parseFloat(firstSlideStyle.marginRight);
        const slideWidth = slides[0].offsetWidth + marginLeft + marginRight;
  
        const index = Math.round(carousel.scrollLeft / slideWidth);
  
        carousel.scrollTo({
          left: index * slideWidth,
          behavior: 'smooth'
        });
      }, 100);
    });
  });
  


  document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const dots = document.querySelectorAll('.carousel-dots .dot');
    const slides = document.querySelectorAll('.carousel-slide');
  
    function updateDots() {
      const firstSlide = slides[0];
      const slideStyle = window.getComputedStyle(firstSlide);
      const slideMargin = parseFloat(slideStyle.marginLeft) + parseFloat(slideStyle.marginRight);
      const slideWidth = firstSlide.offsetWidth + slideMargin;
      
      const index = Math.round(carousel.scrollLeft / slideWidth);
      
      dots.forEach((dot, i) => {
        if (i === index) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  
    carousel.addEventListener('scroll', updateDots);
  
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        const firstSlide = slides[0];
        const slideStyle = window.getComputedStyle(firstSlide);
        const slideMargin = parseFloat(slideStyle.marginLeft) + parseFloat(slideStyle.marginRight);
        const slideWidth = firstSlide.offsetWidth + slideMargin;
        
        carousel.scrollTo({
          left: index * slideWidth,
          behavior: 'smooth'
        });
      });
    });
  });
  