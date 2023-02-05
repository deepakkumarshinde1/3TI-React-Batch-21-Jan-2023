let a = 10;

interface Common {
  sample: number;
  draw(): void;
}

abstract class Shape {
  protected radius: number;
  constructor(rad: number) {
    this.radius = rad;
  }
  abstract print(): number;
  abc() {
    // definition
  }
}

// let shape = new Shape() => we can create object of abstract class

class Circle extends Shape implements Common {
  sample = 10;
  constructor(rad: number, radiusPie: number) {
    super(rad);
  }

  draw(): void {}

  print(): number {
    return 2;
  }

  getDia() {
    console.log(this.radius * 2);
  }

  static config(rad: number) {
    let radiusPie = Math.PI * rad;
    return new Circle(rad, radiusPie);
  }
}

let circle = Circle.config(10); // external constructor
circle.draw();

function xyz(varOne: number): number[] {
  return [varOne];
}

xyz(10);
