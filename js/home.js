document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("active");
      toggle.classList.toggle("open");
    });
  }
});
