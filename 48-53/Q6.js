let start = 0;
let swappedName = "elZerO";
let text = "";

for (let i = 0; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toUpperCase()) {
    text += swappedName[i].toLowerCase();
  } else if (swappedName[i] === swappedName[i].toLowerCase()) {
    text += swappedName[i].toUpperCase();
  }
}
console.log(text);
