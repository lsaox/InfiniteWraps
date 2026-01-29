// Mobile nav toggle for Infinite Wraps

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.getElementById("nav-toggle");
  const navClose = document.getElementById("nav-close");
  const mobileNav = document.getElementById("mobile-nav");
  const navLinks = document.querySelectorAll("#mobile-nav .nav-link");

  const openNav = () => {
    if (mobileNav) mobileNav.classList.remove("hidden");
  };

  const closeNav = () => {
    if (mobileNav) mobileNav.classList.add("hidden");
  };

  if (navToggle) navToggle.addEventListener("click", openNav);
  if (navClose) navClose.addEventListener("click", closeNav);

  // Close overlay when any link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", closeNav);
  });
});

  document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll(".countup");
    if (!counters.length) return;

    function startCount(el) {
      if (el.dataset.done === "true") return;
      el.dataset.done = "true";

      const target = parseInt(el.dataset.target, 10);
      if (isNaN(target)) return;

      const duration = 1500; // ms
      const startTime = performance.now();

      function update(now) {
        const progress = Math.min((now - startTime) / duration, 1);
        const current = Math.floor(progress * target);
        el.textContent = current;

        if (progress < 1) {
          requestAnimationFrame(update);
        } else {
          el.textContent = target; // snap to final
        }
      }

      requestAnimationFrame(update);
    }

    // Use IntersectionObserver so it only runs when visible
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              startCount(entry.target);
            }
          });
        },
        { threshold: 0.4 }
      );

      counters.forEach((el) => observer.observe(el));
    } else {
      // Fallback: just start immediately
      counters.forEach(startCount);
    }
  });

