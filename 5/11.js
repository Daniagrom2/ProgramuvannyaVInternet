function cacheLastCall(func, time) {
  let lastArgs;
  let lastResult;
  let lastTime;

  return function(...args) {
    if (!lastArgs || args.some((arg, i) => arg !== lastArgs[i])) {
      lastResult = func(...args);
      lastArgs = args;
      lastTime = Date.now();
    } else if (Date.now() - lastTime >= time) {
      lastResult = func(...args);
      lastTime = Date.now();
    }

    return lastResult;
  }
}

const add = (a, b) => {
  console.log("Computing sum...");
  return a + b;
}

const cachedAdd = cacheLastCall(add, 10000);

console.log(cachedAdd(2, 3)); // Computing sum..., 5
console.log(cachedAdd(2, 3)); // 5
setTimeout(() => console.log(cachedAdd(2, 3)), 5000); // Computing sum..., 5
setTimeout(() => console.log(cachedAdd(2, 3)), 11000); // Computing sum..., 5
