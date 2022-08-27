let one = document.querySelector(".one");
let two = document.querySelector(".two");
let oneText = one.textContent;
let twoText = two.textContent;
one.textContent = twoText;
two.textContent = `${oneText} 2`;
