/***
 * var , const, let , for , function , while ,do while, return ,
 * if else, throw, typeof , for in , for of , true , false , null ,
 * class,  NaN undefined , delete , new  , case , break, default, this
 */

class Circle {
  radius = 10;
  drawCircle() {
    console.log(this.radius);
  }
}

// Prototype => inheritance, extend class manually
// Circle.prototype.drawCircle = function () {
//   console.log(this.radius);
// };
// create object

let circle = new Circle(); // external constructor
circle.drawCircle();

// es5 OOP =>  constructor function

function Human() {}
Human.prototype.running = function () {};

let human = new Human();
