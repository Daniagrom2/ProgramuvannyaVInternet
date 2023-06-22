function getGreeting() {
  let lastGreeting = "";

  return function (name) {
    let greeting = `Hello, ${name}!`;

    if (greeting === lastGreeting) {
      console.log("Cached!");
      return lastGreeting;
    } else {
      lastGreeting = greeting;
      console.log("Not cached!");
      return greeting;
    }
  };
}

let greet = getGreeting();
console.log(greet("John")); // Output: Not cached! Hello, John!
console.log(greet("John")); // Output: Cached! Hello, John!
console.log(greet("Jane")); // Output: Not cached! Hello, Jane!
console.log(greet("Jane")); // Output: Cached! Hello, Jane!
