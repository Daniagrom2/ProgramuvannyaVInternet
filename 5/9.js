function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

const person = { name: "John" };

greet.call(person); // Hello, my name is John

greet.apply(person); // Hello, my name is John

const boundGreet = greet.bind(person);

boundGreet(); // Hello, my name is John
