"use strict";
let a = 10;
class Shape {
    constructor(rad) {
        this.radius = rad;
    }
    abc() {
        // definition
    }
}
// let shape = new Shape() => we can create object of abstract class
class Circle extends Shape {
    constructor(rad, radiusPie) {
        super(rad);
        this.sample = 10;
    }
    draw() { }
    print() {
        return 2;
    }
    getDia() {
        console.log(this.radius * 2);
    }
    static config(rad) {
        let radiusPie = Math.PI * rad;
        return new Circle(rad, radiusPie);
    }
}
let circle = Circle.config(10); // external constructor
circle.draw();
function xyz(varOne) {
    return [varOne];
}
xyz(10);
