function add(x) {
  return function(y) {
    return x + y;
  }
}

const add5 = add(5);
console.log(add5(3)); // Output: 8

const add10 = add(10);
console.log(add10(5)); // Output: 15
