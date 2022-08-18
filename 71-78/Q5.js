let nums = [2, 12, 11, 5, 10, 1, 99];

let evenAndOdd = nums.reduce(function (a, b) {
  return b % 2 == 1 ? a + b : a * b;
}, 1);
console.log(evenAndOdd);
// 500
