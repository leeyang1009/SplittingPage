const right = document.querySelector(".right");
const left = document.querySelector(".left");
const container = document.querySelector(".container");

right.addEventListener("mouseenter", function () {
  container.classList.add("hover-right");
});
right.addEventListener("mouseleave", function () {
  container.classList.remove("hover-right");
});

left.addEventListener("mouseenter", function () {
  container.classList.add("hover-left");
});
left.addEventListener("mouseleave", function () {
  container.classList.remove("hover-left");
});
