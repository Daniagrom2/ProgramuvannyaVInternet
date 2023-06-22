function checkArray(array) {
  return function(fragment) {
    return array.includes(fragment);
  }
}

const fruits = ["apple", "banana", "orange"];
const checkFruit = checkArray(fruits);
console.log(checkFruit("banana")); // true
console.log(checkFruit("pear")); // false
