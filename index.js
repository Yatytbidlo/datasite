function redirectTo(url) {
  window.location.href = url;
}

var myButton = document.getElementById("mainBtn");
var modal = document.getElementById("modal");
var closeBtn = document.querySelector(".close");

myButton.addEventListener("click", function () {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

var arrow = document.getElementById("btnUp"); // Замените 'arrow' на идентификатор вашего элемента стрелочки

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

arrow.addEventListener("click", scrollToTop);

document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navigation__toggle");
  const menu = document.querySelector(".navigation__menu");

  toggleButton.addEventListener("click", function () {
    menu.classList.toggle("active");
    toggleButton.classList.toggle("active");
  });
});
