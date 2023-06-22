function callWithContext(obj, callback) {
  callback.call(obj);
}

let person = {
  name: "John",
  age: 25,
};

function birthdayGreeting() {
  let today = new Date();
  console.log(`Today is ${today}! Happy birthday, ${this.name}!`);
}

callWithContext(person, birthdayGreeting);
