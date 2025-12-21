let slides = document.querySelectorAll(".slide");
let current = 0;
const hero = document.querySelector(".hero-slider");

let autoSlideInterval = null;

/* ================= SHOW SLIDE ================= */
function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

/* ================= NEXT SLIDE ================= */
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
  resetAutoSlide();
}

/* ================= PREVIOUS SLIDE ================= */
function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
  resetAutoSlide();
}

/* ================= AUTO SLIDE ================= */
function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    current = (current + 1) % slides.length;
    showSlide(current);
  }, 4500); // slide interval
}

/* ================= RESET AUTO SLIDE ================= */
function resetAutoSlide() {
  if (autoSlideInterval) {
    clearInterval(autoSlideInterval);
  }
  startAutoSlide();
}

/* ================= PAGE LOAD CONTROL ================= */
window.addEventListener("load", () => {

  /* 1️⃣ Show first slide image (text hidden by CSS) */
  showSlide(current);

  /* 2️⃣ Wait for dark → lights → curtain animation */
  setTimeout(() => {

    /* Show text + punch animation */
    hero.classList.add("show-content");

    /* Start automatic slideshow AFTER intro */
    startAutoSlide();

  }, 3600); // MUST match curtain open animation

});
