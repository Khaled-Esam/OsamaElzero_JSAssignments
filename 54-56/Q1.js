let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (counter < friends.length) {
  if (friends[counter][index] !== "A" && typeof friends[counter] !== "number") {
    console.log(friends[counter]);
  }
  counter++;
}
