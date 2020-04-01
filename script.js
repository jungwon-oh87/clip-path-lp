const nav = document.getElementById("nav");
const burger = document.getElementById("burger");

burger.addEventListener("click", menuToggle);

function menuToggle() {
  nav.classList.toggle("active");
  burger.classList.toggle("active");
  if (burger.classList.contains("active")) {
    burger.innerHTML = '<i class="fas fa-times fa-2x"></i>';
  } else {
    burger.innerHTML = '<i class="fas fa-bars fa-2x"></i>';
  }
}
