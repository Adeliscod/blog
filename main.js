document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
  });

  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.cards', { delay: 500 });
  ScrollReveal().reveal('.banner', { delay: 500 });