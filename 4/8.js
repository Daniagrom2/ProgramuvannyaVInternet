let persons = [
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'Mary', age: 30, city: 'New York' },
  { name: 'Mike', age: 28, city: 'Chicago' },
];

function getUserData(name) {
  let user = persons.find(person => person.name === name);
  if (!user) {
    throw new Error('Unable to find user');
  }
  return user;
}

function showUserInfo(name) {
  console.log('Loading...');
  try {
    let user = getUserData(name);
    console.log(`Name: ${user.name}, Age: ${user.age}, City: ${user.city}`);
    console.log('Loading finished');
  } catch (error) {
    console.log(error.message);
    console.log('Loading finished');
  }
}

showUserInfo('Mary');
showUserInfo('Alex');
