// Mobile Menu Toggle
const mobileMenu = document.querySelector(".mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    navLinks.classList.remove("active");

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animation on scroll
const animateElements = document.querySelectorAll(".animate-fadeInUp");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

animateElements.forEach((element) => {
  element.style.opacity = 0;
  element.style.transform = "translateY(30px)";
  element.style.transition = "opacity 0.8s ease, transform 0.8s ease";
  observer.observe(element);
});

// Book Filter
const filterButtons = document.querySelectorAll(".filter-btn");
const bookCards = document.querySelectorAll(".book-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

    const filter = button.textContent.toLowerCase();

    bookCards.forEach((card) => {
      const bookType = card.querySelector("h3").textContent.toLowerCase();

      if (filter === "all" || bookType.includes(filter)) {
        card.style.display = "block";
      } else {
        card.style.display = "none";
      }
    });
  });
});

// Form submission
const forms = document.querySelectorAll("form");

forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData.entries());

    // In a real implementation, you would send this data to a server
    console.log("Form submitted:", formValues);

    // Show success message
    form.innerHTML =
      '<div style="text-align: center; padding: 20px;"><i class="fas fa-check-circle" style="font-size: 3rem; color: var(--secondary); margin-bottom: 20px;"></i><h3>Thank You!</h3><p>Your message has been sent successfully. Gary will get back to you soon.</p></div>';
  });
});
