// Test Case 1
let num = 100; // "009"

if (num < 10) {
  console.log(`00${num}`);
} else if (num >= 10 && num < 100) {
  console.log(`0${num}`);
}
if (num >= 100) {
  console.log(num);
}
