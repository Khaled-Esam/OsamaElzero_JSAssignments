let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let objKeys = Object.keys(myInfo);
let objValues = Object.values(myInfo);
let map = new Map();

map.set(objKeys[0], objValues[0]);
console.log(map.keys());
for (let i = 0; i < objKeys.length; i++) {
  map.set(objKeys[i], objValues[0]);
}

console.log(map);
console.log(map.size);
console.log(map.has("role"));

let map2 = new Map(Object.entries(myInfo));
console.log(map2);
// Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3;
// true;
