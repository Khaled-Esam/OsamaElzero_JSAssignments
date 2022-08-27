let submit = document.querySelector("[type = 'submit']");
let text = document.querySelector("[type = 'text']");
let type = document.querySelector("[name = 'type'");
let count = document.querySelector("[type = 'number']");
let results = document.querySelector(".results");
document.forms[0].onsubmit = function (e) {
  e.preventDefault();
  if (text.value.length >= 0 && count.value >= 0) {
    results.innerHTML = "";
    for (let i = 0; i < count.value; i++) {
      let Element = document.createElement(type.value);
      let con = document.createTextNode(type.value);
      Element.appendChild(con);
      Element.id = `id-${i + 1}`;
      Element.title = "Element";
      Element.className = "box";
      results.appendChild(Element);
    }
  }
};
