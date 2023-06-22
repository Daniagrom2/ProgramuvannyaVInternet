let persons = [
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'Jane', age: 31, city: 'New York' },
  { name: 'Bob', age: 45, city: 'Los Angeles' },
  { name: 'Sara', age: 29, city: 'Chicago' },
  { name: 'Mark', age: 27, city: 'Houston' }
];

persons.groupName = 'A';
persons.teacher = 'Joan Doe';
persons.year = '2023';

// using for loop
for (let i = 0; i < persons.length; i++) {
  console.log(`Name: ${persons[i].name}, Age: ${persons[i].age}, City: ${persons[i].city}`);
}

// using for..in loop
for (let key in persons) {
  console.log(`Key: ${key}, Value: ${persons[key]}`);
}

// using forEach method
persons.forEach(person => console.log(person));
console.log(persons.groupName);
console.log(persons.teacher);
console.log(persons.year);
