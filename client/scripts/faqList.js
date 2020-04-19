let arrows = document.querySelectorAll(".arrow");
let paras = document.querySelectorAll(".para");
paras.forEach(function(item) {
  item.classList.remove("active");
});
arrows.forEach(function(item) {
  item.addEventListener("click", open);
  item.classList.remove("active");
});

function open() {
  if (this.classList.contains("active")) {
    this.classList.remove("active");
    this.parentNode.nextSibling.nextSibling.classList.remove("active");
  } else {
    this.classList.add("active");
    this.parentNode.nextSibling.nextSibling.classList.add("active");
  }
}
arrows[0].classList.add("active");
paras[0].classList.add("active");