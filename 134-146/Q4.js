let text = "https://--.ka.kh/";

let re = /https?:\/\/(?:[-\w]+\.)([-\w]+)\.\w+(?:\.\w+)?\/?.*/gi;

console.log(text.match(re));
