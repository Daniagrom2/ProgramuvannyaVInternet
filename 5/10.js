function callAndLog(callback, ...args) {
  const time = new Date();
  callback(...args);
  console.log(`Function ${callback.name} called with arguments ${args} at ${time}`);
}

function add(a, b) {
  console.log(a + b);
}

callAndLog(add, 2, 3); // 5, Function add called with arguments 2,3 at Sat Apr 16 2022 23:10:33 GMT-0400 (Eastern Daylight Time)
