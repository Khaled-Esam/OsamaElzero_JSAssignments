let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(Array.from(setOfNumbers)[Array.from(setOfNumbers).length - 1]);
console.log([...setOfNumbers].pop());
