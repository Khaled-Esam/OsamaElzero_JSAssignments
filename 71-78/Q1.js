let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];
let letters = mix
  .map((e) => (isNaN(e) ? e : ""))
  .reduce((acc, cur) => `${acc}${cur}`);
console.log(letters);
// Elzero
