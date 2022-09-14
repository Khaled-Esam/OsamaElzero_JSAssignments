class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return `Car Is Running Now`;
  }
  stop() {
    return `Car Is Stopped`;
  }
}

let carOne = new Car("MG", 2022, 420000);
let carTwo = new Car("KIA", 2016, 350000);
let carThree = new Car("Honda", 2011, 570000);
console.log(
  `Car One Name is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p} `
);
console.log(carOne.run());
