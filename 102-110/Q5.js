let div = document.querySelector("div");
let counter = setInterval(function () {
  div.innerHTML -= 1;
  if (div.innerHTML === "5") {
    window.open(
      "https://elzero.org",
      "",
      "width: 500, height: 500, top: 200, left: 500"
    );
  }
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}, 1000);
