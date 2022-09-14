let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log([...n2, ...n1].length * [...n2, ...n1].shift());
console.log(+[new Set("n1").size, Math.min(...n2)].join(""));
console.log(+[n2.indexOf(Math.min(...n1)), Math.min(...n1)].join(""));
console.log(Math.max(...n1) * [...n1, ...n2].length);
console.log([...n1, ...n2].length * new Set(n1).size * Math.min(...n1));
// Needed Output
// 210
