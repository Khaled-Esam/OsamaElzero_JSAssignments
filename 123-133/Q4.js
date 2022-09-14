let theNumber = 100020003000;
console.log(+[...new Set([...String(theNumber)].sort())].join(""));

// Needed Output
123;
