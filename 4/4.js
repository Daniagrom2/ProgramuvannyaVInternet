// solution 1: using concat method
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let result1 = arr1.concat(arr2);

// solution 2: using spread operator
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];
let result2 = [...arr3, ...arr4];

console.log(result1); // [1, 2, 3, 4, 5, 6]
console.log(result2); // [1, 2, 3, 4, 5, 6]
