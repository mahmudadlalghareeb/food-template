var header = document.querySelector("header");
var nav = document.querySelector(".nav");

window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

var icon = document.querySelectorAll(".icons span");
for (let i = 0; i < icon.length; i++) {
  icon[i].addEventListener("click", toggle);
}

function toggle() {
  if (icon[1].style.display == "none") {
    icon[1].style.display = "block";
    icon[0].style.display = "none";
  } else {
    icon[0].style.display = "block";
    icon[1].style.display = "none";
  }
  nav.classList.toggle("active");
}
