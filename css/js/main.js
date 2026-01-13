// Mobile menu toggle
const toggleBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

toggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Smooth scroll
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Contact form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("formMessage");

  if (name === "" || email === "") {
    message.textContent = "Please complete all fields.";
    message.style.color = "red";
  } else {
    message.textContent = "Message sent successfully!";
    message.style.color = "lightgreen";
    this.reset();
  }
});
