// ================= Smooth Scrolling =================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// ================= Active Navbar Highlight =================
const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {
  link.addEventListener("click", function() {
    navLinks.forEach(nav => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

// ================= Scroll Animation =================
const cards = document.querySelectorAll(".card");

function revealOnScroll() {
  cards.forEach(card => {
    const windowHeight = window.innerHeight;
    const elementTop = card.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      card.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// ================= Navbar Background Change =================
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.background = "#000";
  } else {
    header.style.background = "#111";
  }
});

// ================= Simple Form Alert =================
const form = document.querySelector(".form");

if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully!");
    form.reset();
  });
}
