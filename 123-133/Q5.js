let theName = "Elzero";
console.log(theName.split(""));
console.log(Array.from(theName));
console.log([...theName]);
console.log([...theName.slice(0)]);
console.log([...new Set(theName)]);
console.log(Object.assign([], theName));
console.log(Object.values(theName));
