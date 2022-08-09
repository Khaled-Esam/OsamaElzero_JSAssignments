let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here

console.log(
  allArrs
    .concat(
      arr2.reverse().splice(true, true).toString(),
      arr1.pop(),
      arr2.shift()
    )
    .join("")
    .toLowerCase()
); // fxy
