const person = { name: 'John', age: 23, city: 'Boston' };
const { name, city } = person;
console.log(name, city); // виведе 'John Boston'

const persons = [
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'Kate', age: 18, city: 'New York' },
  { name: 'Tom', age: 32, city: 'Chicago' },
  { name: 'Alice', age: 27, city: 'Los Angeles' },
  { name: 'Bob', age: 19, city: 'San Francisco' }
];
const [firstPerson] = persons;
console.log(firstPerson); // виведе об'єкт { name: 'John', age: 23, city: 'Boston' }
