document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.mobile-toggle');
  const nav = document.querySelector('.nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    toggle.querySelector('i').classList.toggle('fa-bars');
    toggle.querySelector('i').classList.toggle('fa-times');
  });
});
