function checkStatus(a, b, c) {
  let name, age, available;
  typeof a === "string"
    ? (name = a)
    : typeof a === "number"
    ? (age = a)
    : (available = a);
  typeof b === "string"
    ? (name = b)
    : typeof b === "number"
    ? (age = b)
    : (available = b);
  typeof c === "string"
    ? (name = c)
    : typeof c === "number"
    ? (age = c)
    : (available = c);
  console.log(
    `Hello ${name}, Your Age Is ${age}, ${
      available === true
        ? "You Are Available For Hire"
        : "You Are Not Available For Hire"
    }`
  );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
