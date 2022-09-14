let date1 = "25/10/1982";
let date2 = "25 - 10 - 1982";
let date3 = "25 10 1982";
let date4 = "25 10 82";
let regex = /\d{2}\s?[/-]?\s?\d{2}\s?[-/]?\s?\d{2,}/gi;
console.log(date1.match(regex)); // "25/10/1982"
console.log(date2.match(regex)); // "25 - 10 - 1982"
console.log(date3.match(regex)); // "25 10 1982"
console.log(date4.match(regex)); // "25 10 82"
