let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let arr1 = numsOne.concat(numsTwo);
let arr2 = [...numsOne, ...numsTwo];
numsOne.push(...numsTwo);
console.log(arr1);
console.log(arr2);
console.log(numsOne);
