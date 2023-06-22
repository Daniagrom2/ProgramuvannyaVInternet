function ObservedPerson(firstName, lastName, birthYear) {
  Person.call(this, firstName, lastName, birthYear);
  const observedMethods = ["getAge", "getFullName"];
  const callCounts = {};

  observedMethods.forEach((method) => {
    callCounts[method] = 0;
    const originalMethod = this[method];

    this[method] = function (...args) {
      callCounts[method]++;
      console.log(`${method} has been called ${callCounts[method]} times.`);
      return originalMethod.apply(this, args);
    };
  });
}

ObservedPerson.prototype = Object.create(Person.prototype);

const person1 = new ObservedPerson("John", "Doe", 1990);
person1.getAge(); // getAge has been called 1 times.
person1.getAge(); // getAge has been called 2 times.
person1.getFullName(); // getFullName has been called 1 times.
person1.getAge(); // getAge has been called 3 times.
