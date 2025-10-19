// Smooth scrolling is enabled via CSS; JS augments interactivity.

(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const backToTop = document.getElementById("backToTop");
  const bottomPopup = document.getElementById("bottomPopup");

  // Toggle mobile navigation
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close nav when a link is clicked
    nav.addEventListener("click", (e) => {
      if (e.target.matches("a")) {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Back to Top button show/hide
  const toggleBackToTop = () => {
    const show = window.scrollY > 200;
    if (backToTop) backToTop.classList.toggle("show", show);
  };
  window.addEventListener("scroll", toggleBackToTop);
  toggleBackToTop();

  // Back to Top click
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Bottom popup timer: show after 5s, hide after additional 6s
  if (bottomPopup) {
    setTimeout(() => {
      bottomPopup.classList.add("show");
      // Auto-hide after a few seconds
      setTimeout(() => {
        bottomPopup.classList.remove("show");
      }, 6000);
    }, 5000);
  }

  // Trigger app-opening animations
  window.addEventListener("DOMContentLoaded", () => {
    // Small delay to ensure styles are applied
    setTimeout(() => {
      document.body.classList.add("app-loaded");
    }, 120);
  });
})();