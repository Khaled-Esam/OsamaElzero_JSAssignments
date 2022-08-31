let message = prompt("Print Number from - to -", "Example: 5-20");
let arr = message.split("-");
let first = Number(arr[0]);
let second = Number(arr[1]);
if (first < second) {
  for (let i = first; i <= second; i++) {
    document.write(i);
  }
} else {
  for (let i = second; i <= first; i++) {
    document.write(i) + "\n";
  }
}
