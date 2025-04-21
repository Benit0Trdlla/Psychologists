const sliderContainer = document.querySelector('.slider-container');
const slides = sliderContainer.children;
let currentSlide = 0;

sliderContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('slide')) {
    const slideIndex = Array.prototype.indexOf.call(slides, e.target);
    if (slideIndex !== currentSlide) {
      currentSlide = slideIndex;
      updateSlides();
    }
  }
});

function updateSlides() {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add('active');
      slide.classList.remove('next', 'prev');
    } else if (index === currentSlide + 1) {
      slide.classList.add('next');
      slide.classList.remove('active', 'prev');
    } else if (index === currentSlide - 1) {
      slide.classList.add('prev');
      slide.classList.remove('active', 'next');
    } else {
      slide.classList.remove('active', 'next', 'prev');
    }
  });
}