function average(...args) {
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum / args.length;
}

console.log(average(2, 4, 6, 8)); // Output: 5
