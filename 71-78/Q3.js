let myArray = ["E", "l", "z", ["e", "r"], "o"];
let flat = myArray.reduce(function (acc, cur) {
  return !Array.isArray(cur)
    ? `${acc}${cur}`
    : cur.reduce(function (e1, e2) {
        return (acc += e1 + e2);
      });
});
console.log(flat);
// Elzero
