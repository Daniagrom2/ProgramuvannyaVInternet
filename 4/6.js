const persons = [  { name: 'John', age: 23, city: 'Boston' },  { name: 'Kate', age: 18, city: 'New York' },  { name: 'Tom', age: 32, city: 'Chicago' },  { name: 'Alice', age: 27, city: 'Los Angeles' },  { name: 'Bob', age: 19, city: 'San Francisco' }];

function selectPersonsOver20(persons) {
  const results = [];
  for (let i = 0; i < persons.length; i++) {
    if (persons[i].age > 20) {
      results.push(persons[i]);
    }
  }
  return results;
}

const selectedPersons = selectPersonsOver20(persons);
console.log(selectedPersons);
