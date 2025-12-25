document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card) => {
    const header = card.querySelector('h3');
    if (header) {
      header.addEventListener('click', () => {
        card.classList.toggle('expanded');
      });
    }
  });
});
