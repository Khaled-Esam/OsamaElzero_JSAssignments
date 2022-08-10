let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = +false; i < friends.length; i++) {
  if (friends[i].startsWith(letter[0].toUpperCase())) {
    continue;
  }
  console.log(`${letter.length} => ${friends[i]}`);
  letter += " ";
}
