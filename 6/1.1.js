class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

const myCar = new Car("Tesla", "Model S", 2021);
console.log(myCar); // { brand: 'Tesla', model: 'Model S', year: 2021 }
