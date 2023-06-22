let persons = [
  { name: 'John', age: 23, city: 'Boston' },
  { name: 'Jane', age: 31, city: 'New York' },
  { name: 'Bob', age: 45, city: 'Los Angeles' },
  { name: 'Sara', age: 29, city: 'Chicago' },
  { name: 'Mark', age: 27, city: 'Houston' }
];

let result = persons.map(person => `${person.name} from ${person.city} born in ${new Date().getFullYear() - person.age}`);
console.log(result);
