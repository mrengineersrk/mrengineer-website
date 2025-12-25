document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  if (slides.length > 0) {
    let current = 0;
    function showSlide(index) {
      slides.forEach((slide) => slide.classList.remove('active'));
      slides[index].classList.add('active');
    }
    setInterval(() => {
      current = (current + 1) % slides.length;
      showSlide(current);
    }, 5000);
    showSlide(0);
  }
});
