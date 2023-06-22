function compareObjects(obj1, obj2) {
  const obj1Class = obj1.constructor.name;
  const obj2Class = obj2.constructor.name;

  if (obj1Class === obj2Class) {
    console.log(`Objects are of the same class: ${obj1Class}`);
  } else {
    console.log(
      `Objects are not of the same class: ${obj1Class} and ${obj2Class}`
    );
  }
}
const car1 = new Car("Tesla", "Model S", 2021);
const car2 = new Car("BMW", "X5", 2022);
const person1 = new Person("John", "Doe", 1990);
const person2 = new Employee("Jane", "Doe", 1995, "Manager");

compareObjects(car1, car2); // Objects are of the same class: Car
compareObjects(car1, person1); // Objects are not of the same class: Car and Person
compareObjects(person1, person2); // Objects are not of the same class: Person and Employee
