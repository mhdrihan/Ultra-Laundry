// Navbar
const navbarNav = document.querySelector(".navbar-nav");
const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector("#hamburger-menu");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
  navbar.classList.toggle("active");
};
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
    navbar.classList.remove("active");
  }
});
// Navbar End

// scroll effect
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
// scroll effect End
