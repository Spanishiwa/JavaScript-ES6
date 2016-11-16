class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  area() {
    return `area is: ${(this.radius * this.radius * Math.PI)}`;
  }

  perimeter() {
    return `perimeter is: ${(Math.PI * 2 * this.radius)}`;
  }
}

const circle = new Circle(5);
console.log(circle.area());
console.log(circle.perimeter());
