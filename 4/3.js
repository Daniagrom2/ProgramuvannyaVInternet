let person = {
  name: 'John',
  age: 23,
  city: 'Boston',
  get birthYear() {
    return new Date().getFullYear() - this.age;
  }
};

console.log(person.birthYear);
