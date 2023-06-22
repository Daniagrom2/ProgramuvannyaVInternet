const shapes = [
  new Square(5),
  new Circle(3),
  new Rectangle(4, 6),
  new Square(7),
  new Circle(2),
  new Rectangle(3, 8),
];

shapes.forEach((shape) => {
  console.log(
    `Area of ${shape.constructor.name}: ${shape.getArea()}, Perimeter of ${shape.constructor.name}: ${shape.getPerimeter()}`
  );
});
