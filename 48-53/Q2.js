let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i >= end; i--) {
  i < start ? console.log(`0${i}`) : console.log(`${i}`);
  if (i === stop) break;
}
