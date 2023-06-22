function Employee(firstName, lastName, birthYear, position) {
  Person.call(this, firstName, lastName, birthYear);
  this.position = position;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}, ${this.position}`;
  };
}

Employee.prototype = Object.create(Person.prototype);

const employee1 = new Employee("John", "Doe", 1990, "Manager");
console.log(employee1.getAge()); // 33
console.log(employee1.getFullName()); // John Doe, Manager
