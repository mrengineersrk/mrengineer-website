document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = form.name.value.trim();
      const phone = form.phone.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
      if (!name || !phone || !email || !message) {
        alert('Please fill all fields');
        return;
      }
      // Simulate submit (replace with actual AJAX if backend is added)
      alert('Form submitted successfully!');
      form.reset();
    });
  }
});
