let car = {
  ownerName: "John Smith",
  modelName: "Toyota Camry",
  engineVolume: 2.5
};

let cars = [
  {ownerName: "John Smith", modelName: "Toyota Camry", engineVolume: 2.5},
  {ownerName: "Jane Doe", modelName: "Honda Civic", engineVolume: 1.8},
  {ownerName: "Bob Johnson", modelName: "Ford Mustang", engineVolume: 3.7}
];

let minEngineCar = cars.reduce(function (prev, curr) {
  return prev.engineVolume < curr.engineVolume ? prev : curr;
});

console.log(minEngineCar);
