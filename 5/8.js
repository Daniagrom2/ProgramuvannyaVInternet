const objects = [{name: "John", age: 23}, {name: "Alice", age: 28}];

const capitalizeName = obj => ({...obj, name: obj.name.charAt(0).toUpperCase() + obj.name.slice(1)});

const capitalizedObjects = objects.map(capitalizeName);

console.log(capitalizedObjects); // [{name: "John", age: 23}, {name: "Alice", age: 28}]
