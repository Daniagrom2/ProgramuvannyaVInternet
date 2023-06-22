const users = [
  { id: 0, name: 'User0', age: 20, city: 'City0' },
  { id: 1, name: 'User1', age: 25, city: 'City1' },
  { id: 2, name: 'User2', age: 30, city: 'City2' },
  { id: 3, name: 'User3', age: 35, city: 'City3' },
];

function getUser(id) {
  return new Promise((resolve, reject) => {
    const user = users.find(user => user.id === id);
    if (user) {
      invokeAfterDelay(() => user, 1000).then(resolve);
    } else {
      reject('User not found');
    }
  });
}

// Приклад використання
getUser(1)
  .then(user => console.log(user))
  .catch(error => console.error(error));
