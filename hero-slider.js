let slides = document.querySelectorAll(".slide");
let current = 0;
const hero = document.querySelector(".hero-slider");

let autoSlideInterval = null;

/* Show specific slide */
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

/* Next slide (manual + auto) */
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
  resetAutoSlide();
}

/* Previous slide (manual) */
function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
  resetAutoSlide();
}

/* Start automatic slideshow */
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 4500); // slide change interval
}

/* Reset auto slide when user interacts */
function resetAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
  startAutoSlide();
}

/* Page load control */
window.addEventListener("load", () => {
  // Show first slide (image visible, text hidden by CSS)
  showSlide(current);

  // AFTER light fix → show content
  setTimeout(() => {
    hero.classList.add("show-content");

    // Start automatic slideshow AFTER intro
    startAutoSlide();
  }, 2500); // matches dark-overlay animation + punch timing
});
