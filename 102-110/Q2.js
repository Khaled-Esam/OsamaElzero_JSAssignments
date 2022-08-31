let box = document.querySelector(".box");
let button = document.querySelector("button");
window.onload = function () {
  setTimeout(function () {
    box.style.display = "block";
  }, 5000);
};

button.onclick = function () {
  box.style.display = "none";
};
