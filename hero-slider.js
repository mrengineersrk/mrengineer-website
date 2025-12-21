let slides = document.querySelectorAll(".slide");
let current = 0;
const hero = document.querySelector(".hero-slider");

/* Show specific slide */
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

/* Next slide */
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

/* Previous slide */
function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

/* Page load control */
window.addEventListener("load", () => {
  // Set first slide (but keep it hidden)
  showSlide(current);

  // AFTER light is fixed → show content
  setTimeout(() => {
    hero.classList.add("show-content");
  }, 2000); // MUST match CSS animation-delay
});
