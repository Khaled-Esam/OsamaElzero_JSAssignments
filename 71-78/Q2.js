let myString = "EElllzzzzzzzeroo";
let unique = myString
  .split("")
  .filter((e, i, arr) => (arr.slice(0, i).includes(e) ? "" : e))
  .reduce((acc, cur) => acc + cur);
console.log(unique);
// Elzero
