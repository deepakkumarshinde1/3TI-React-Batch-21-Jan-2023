/***
 * var , const, let , for , function , while ,do while, return ,
 * if else, throw, typeof , for in , for of , true , false , null ,
 * class,  NaN undefined , delete , new  , case , break, default, this
 */
class Shape {
  radius;
  constructor(rad) {
    this.radius = rad;
  }
  draw() {
    console.log(this.radius);
  }
}

class Circle extends Shape {
  constructor(rad, radiusPie) {
    super(rad);
  }

  static config(rad) {
    let radiusPie = Math.PI * rad;
    return new Circle(rad, radiusPie);
  }
}
// inheritance => is way by which child can access parent property
//rect , square

// Prototype => inheritance, extend class manually
// Circle.prototype.drawCircle = function () {
//   console.log(this.radius);
// };
// create object

let circle = Circle.config(10); // external constructor
circle.draw();
// Circle.add();

// Circle.apply;
// Circle.bind;
// Circle.call;

// es5 OOP =>  constructor function

// function Human() {}
// Human.prototype.running = function () {};

// let human = new Human();

// Date.now(); // static method
// let date = new Date();
// date.getFullYear();
