//1
// function itsMe() {
//   return `Iam A Normal Function`;
// }

let itsMe = () => "I am A Normal Function";

console.log(itsMe()); // Iam A Normal Function

//2
// function urlCreate(protocol, web, tld) {
//   return `${protocol}://www.${web}.${tld}`;
// }

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
