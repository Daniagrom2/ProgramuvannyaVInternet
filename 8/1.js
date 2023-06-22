class Person {
  constructor(firstName, lastName, gender, maritalStatus) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.maritalStatus = maritalStatus;
  }
  
  toLocaleString(locale) {
    const options = {style: 'short', type: 'conjunction'};
    const conjunction = new Intl.ListFormat(locale, options);
    
    let title;
    if (this.gender === 'male') {
      title = new Intl.MessageFormat('Mr. {lastName}', locale);
    } else if (this.gender === 'female') {
      if (this.maritalStatus === 'married') {
        title = new Intl.MessageFormat('Mrs. {lastName}', locale);
      } else {
        title = new Intl.MessageFormat('{title} {lastName}', locale);
        const titles = {
          en: ['Ms.', 'Miss'],
          de: ['Frau', 'Fräulein'],
          fr: ['Mme', 'Mlle']
        };
        const genderIndex = this.maritalStatus === 'single' ? 1 : 0;
        title.format({title: titles[locale.language][genderIndex]});
      }
    }
    
    return title.format({lastName: this.lastName}) + ', ' + this.firstName;
  }
}
const person = new Person('John', 'Smith', 'male');
console.log(person.toLocaleString('en')); // Mr. Smith, John

const person2 = new Person('Anna', 'Johnson', 'female', 'single');
console.log(person2.toLocaleString('en')); // Miss Johnson, Anna
console.log(person2.toLocaleString('de')); // Fräulein Johnson, Anna
console.log(person2.toLocaleString('fr')); // Mlle Johnson, Anna

const person3 = new Person('Maria', 'Garcia', 'female', 'married');
console.log(person3.toLocaleString('en')); // Mrs. Garcia, Maria
