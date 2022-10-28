console.log("Hello world!");

/* Mobile Navigation:*/
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header-section");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/*Valos evet 2022 megjeleniti:*/
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

// Smoth scrolling animation
// Ekkor beindul a FOCUS mukodni
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // Scroll back to top:
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links:
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation:
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
