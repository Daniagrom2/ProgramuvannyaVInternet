function counter() {
  let count = 0;

  function increment() {
    count++;
  }

  function getValue() {
    return count;
  }

  return {
    increment,
    getValue,
  };
}

let c = counter();
console.log(c.getValue()); // Output: 0
c.increment();
console.log(c.getValue()); // Output: 1
