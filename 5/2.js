function values(f, low, high) {
  let arr = [];
  for (let i = low; i <= high; i++) {
    arr.push(f(i));
  }
  return arr;
}

console.log(values(x => x * x, 0, 5)); // Output: [0, 1, 4, 9, 16, 25]
