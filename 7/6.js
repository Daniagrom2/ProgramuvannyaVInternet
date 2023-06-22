function logCall(fn) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const result = fn();
        console.log(new Date());
        resolve(result);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
}

// Приклад використання
logCall(() => Math.floor(Math.random() * 11))
  .then(result => console.log(result))
  .catch(error => console.error(error));
