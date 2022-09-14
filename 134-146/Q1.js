let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let regex = /\d{4}:db\d:(?:\d{4}:){5}\d{4}/gi;
console.log(ip.match(regex));
