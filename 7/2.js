function produceRandomAfterDelay(delay) {
  return invokeAfterDelay(() => Math.floor(Math.random() * 11), delay);
}

// Приклад використання
Promise.all([produceRandomAfterDelay(1000), produceRandomAfterDelay(2000)])
  .then(results => console.log(results[0] + results[1]))
  .catch(error => console.error(error));
