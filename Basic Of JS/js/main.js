// in built array methods like loop
// map -
// forEach
// filter -
// find
// join

// functions
// => set/block code ... which can be use again and again
// # function definition/named function
/*
function add(varA = 0, varB = 0) {
  // formal param
  let result = varA + varB;
  //result // Not a Number
  //code
} // function definition

let a = 10;
let resultValue = add(1); // function call => actual parameter
// undefined , nothing, reference error, NaN, null

console.log(add(1));
// void => return undefined, null
// return
*/

// add(...varA) => rest parameter ... in arguments
/*function add(...varA) {
  // let result = varA + varB;
  console.log(varA);
} // function definition
*/
function add(varA, varB) {
  let result = varA + Number(varB);
  console.log(result);
} // function definition

add(10, "20");
// # function expression

let sub = function () {
  console.log("its a function");
}; // function expression
sub();

// # callback or inline function
// a function definition a written in a function call

// div => higher order function
function printResult123(result) {
  console.log(result);
}

function div(varOne, varTwo, callback) {
  let result = varOne / varTwo;
  callback(result);
}

div(10, 20, function (result) {
  console.log(result);
});

let objectArray = [
  { name: "Deepak", roll: 10 },
  { name: "Suraj", roll: 111 },
  { name: "Vinod", roll: 12 },
  { name: "Rashmi", roll: 111 },
];

// loop for , while , do while, for in, for of
// read data of an array
objectArray.forEach(function (value, index) {
  console.log(value, index);
});

// search
let searchValue = 11;
let searchResult = objectArray.find(function (value, index) {
  return value.roll === searchValue;
});

// find ::   find value and only return a 1st search value => value not found we get "undefined"

let searchFilterResult = objectArray.filter(function (value, index) {
  return value.roll === searchValue;
});
// filter ::   filter value and return a all search value result => value not found we get "undefined"

// join method => convert array to string
let numberArray = [10, 20, 30, 40, 50];
let stringArray = numberArray.join("");
console.log(stringArray);

// map => recreate array
let mapResult = objectArray.map(function (value, index) {
  return `<li>${value.name}</li>`;
});

mapResult = mapResult.join("");

console.log(mapResult);
// # arrow function
// # IIFE
