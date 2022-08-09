let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code

console.log(
  finalArr.concat(arrTwo.pop(), arrOne.reverse(), arrTwo.reverse()).slice("")
); // ["Z", "X", "D", "C", "B", "A"]
