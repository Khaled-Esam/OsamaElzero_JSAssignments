let points = 10;

points += true + true;
points++;

console.log(points); // 13

points = (points % --points);
points++;
points *= points + points;
console.log(points); // 8;