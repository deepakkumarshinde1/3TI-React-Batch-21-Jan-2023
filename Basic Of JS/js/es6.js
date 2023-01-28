// destructuring => extract some values
// object & array
// array
let array = ["abc", "xyz", "pqr", "lmn"];
/*
let varOne = array[0];
let varTwo = array[1];
let varThree = array[2];
*/
let [varOne, varTwo, varThree] = array;
console.log(varOne, varTwo, varThree);

let restaurant = {
  name: "Green Cafe",
  location: "Sinhgad",
  city: "Pune",
  minCost: 99,
};
let { name: restName, city } = restaurant;
console.log(restName);
console.log(city);
console.log(restaurant.minCost);

// spread operator => avoid reference issue and also marge oe more array
// variable by value , variable by reference
let value = [8]; // x001
var var_four = [10, 20, 30];
let value_2 = [...value, ...var_four]; // x001
value[0] = 9;

console.log(value, value_2);

let restaurantName = {
  name: "Green Cafe",
  minCost: 99,
};
let cityDetails = {
  city: "Pune",
  location: "Sinhgad",
};
let restaurantDetails = { ...restaurantName, ...cityDetails };
console.log(restaurantDetails);
// default & rest params
// class
// arrow
// promises (async)
// async await
// local storage

// ==> node JS

// what is class => class is a set of prop methods
// class is blue print of object
// prop are like variables
// methods are like function
// this => keyword to provide a current instance
function alert() {}
alert("hello to js"); // core methods are overridden

class Employee {
  name = "deepakkkumar";
  role = "trainer";

  printEmployeeDetails() {
    console.log(this.name, this.role);
  }
}

console.log(this); // globally this refers to window object

// object of class
let employee = new Employee(); // external constructor

employee.printEmployeeDetails();
