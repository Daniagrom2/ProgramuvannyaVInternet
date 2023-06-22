function Person(firstName, lastName, birthYear) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthYear = birthYear;

  this.getAge = function () {
    const today = new Date();
    const birthDate = new Date(this.birthYear, 0, 1);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

const person1 = new Person("John", "Doe", 1990);
console.log(person1.getAge()); // 33
console.log(person1.getFullName()); // John Doe
