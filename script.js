// Smooth scrolling is handled in CSS; this script adds interactivity and animations.

(function () {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const backToTop = document.getElementById("backToTop");
  const bottomPopup = document.getElementById("bottomPopup");

  // Mobile Navigation Toggle
  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Close menu when clicking a link
    nav.addEventListener("click", (e) => {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Back-to-Top Button Show/Hide on Scroll
  const toggleBackToTop = () => {
    if (!backToTop) return;
    const shouldShow = window.scrollY > 200;
    backToTop.classList.toggle("show", shouldShow);
  };
  window.addEventListener("scroll", toggleBackToTop);
  toggleBackToTop();

  // Back-to-Top Click → Smooth Scroll
  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Bottom Popup Animation
  if (bottomPopup) {
    setTimeout(() => {
      bottomPopup.classList.add("show");
      setTimeout(() => {
        bottomPopup.classList.remove("show");
      }, 6000); // hide after 6 seconds
    }, 5000); // show after 5 seconds
  }

  // App Opening Animation (fade-in)
  window.addEventListener("load", () => {
    setTimeout(() => {
      document.body.classList.add("app-loaded");
    }, 150);
  });
})();
