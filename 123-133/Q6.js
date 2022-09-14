let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let c = 0;
// chars.forEach((e, index) => {
//   if (typeof e === "number") {
//     chars = [e].concat(chars.slice(0, index), chars.slice(index + 1));
//   }
// });
// console.log(chars);
// let count = 0;
// let f = chars.some(function (e) {
//   if (typeof e === "number") {
//     count++;
//   }
//   return typeof e === "string";
// });
// console.log(count);
// for (let i = 0, j = count; i < count; i++, j++) {
//   chars[i] = chars[j];
// }
// console.log(chars);

//Better Solution
let nums = chars.filter((e) => typeof e === "number");
let chs = chars.filter((e) => typeof e === "string");
let newArray = [...nums, ...chs];
newArray.copyWithin(0, nums.length, nums.length * 2);
console.log(newArray);
