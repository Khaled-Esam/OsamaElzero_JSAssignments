let input = document.querySelector("input");
let result = document.querySelector(".result");
input.oninput = function (e) {
  let dollar = input.value;
  result.textContent = `{${dollar} } USD => {${(dollar * 15.6).toFixed(
    2
  )}} Egyptian pound}`;
};
