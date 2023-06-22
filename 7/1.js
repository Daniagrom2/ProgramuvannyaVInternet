function invokeAfterDelay(fn, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = fn();
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }, delay);
  });
}

// Приклад використання
invokeAfterDelay(() => Math.floor(Math.random() * 11), 2000)
  .then(result => console.log(result))
  .catch(error => console.error(error));
