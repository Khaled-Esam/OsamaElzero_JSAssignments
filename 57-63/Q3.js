function ageInTime(theAge) {
  if (theAge > 10 && theAge < 100) {
    console.log(` Months => ${theAge * 12} `);
    console.log(` Weeks => ${Math.floor((theAge * 365) / 7)} `);
    console.log(` Days => ${theAge * 365} `);
  } else {
    console.log(`Age Out of Range`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
