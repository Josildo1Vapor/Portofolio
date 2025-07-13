// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Form submission handler
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Obrigado pela sua mensagem! Entrarei em contato em breve.");
  this.reset();
});

// Add scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up");
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});

// Dynamic typing effect for hero subtitle
const subtitle = document.querySelector(".subtitle");
const titles = [
  "Engenheiro de Software",
  "Especialista em IA",
  "Analista de Dados",
  "Desenvolvedor Full Stack",
];
let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentTitle = titles[titleIndex];

  if (isDeleting) {
    subtitle.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;
  } else {
    subtitle.textContent = currentTitle.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentTitle.length) {
    setTimeout(() => (isDeleting = true), 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

// Start typing effect after page load
setTimeout(typeEffect, 2000);
