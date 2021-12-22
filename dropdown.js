document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll(".list__item__btn").forEach(item => {
  item.addEventListener("click", function() {
    let btn = this;
    let dropdown = this.parentElement.querySelector(".dropdown-box");
    
    document.querySelectorAll(".list__item__btn").forEach(el => {
      if (el != btn) {
        el.classList.remove("active__btn");
      }
    });
    
    document.querySelectorAll(".dropdown-box").forEach(el => {
      if (el != dropdown) {
        el.classList.remove("active-list__item");
      }
    })
    dropdown.classList.toggle("active-list__item");
    btn.classList.toggle("active__btn")
  })
})

document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".list__item")) {
    document.querySelectorAll(".dropdown-box").forEach(el => {
        el.classList.remove("active-list__item");
    })
     document.querySelectorAll(".list__item__btn").forEach(el => {
        el.classList.remove("active__btn");
    });
  }
})
})