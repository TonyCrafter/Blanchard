document.querySelector(".header__btn-open").addEventListener("click", function() {
  document.querySelector(".nav-top").classList.add("active");
})
document.querySelector(".nav__close").addEventListener("click", function() {
  document.querySelector(".nav-top").classList.remove("active");
})