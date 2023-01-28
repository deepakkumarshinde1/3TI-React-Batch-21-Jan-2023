// 1995
// 1997 => ECMA Script 1 (ES1, ES2, ES3 , ES5 (2009), ES6(2015))

// store temp variables => let , var(ES5) , const =>
let text = true;
// data type =>
//  undefined
/***
 * string
 * number
 * boolean
 * undefined
 * object
 *  => Array, JS Object, Functions, null
 */
console.log(typeof text);

text = 1234;
console.log(typeof text);

text = "1234";
console.log(typeof text);

// Array => Collection Of Data same or different type

let studentRollNo = [19, 10, "a", 10];
// every value with index/ key which are auto gen
// index/key start 0

//console.log(studentRollNo[600]); // test data
// console in built object , log() is method

// read array one by one
// loop => for, while, do while, for in , for of

// length
let length = studentRollNo.length;
for (let index = 0; index < length; index++) {
  //   console.log(index);
  console.log(studentRollNo[index], "For Loop");
}

// let text2 = [1];
// console.log(Array.isArray(text2));
var index = 0;
while (index < length) {
  //   console.log(index);
  console.log(studentRollNo[index], "While Loop");
  index++;
}

var index = 0;
do {
  //   console.log(index);
  console.log(studentRollNo[index], "Do While Loop");
  index++;
} while (index < length);

// for in
for (let index in studentRollNo) {
  console.log(studentRollNo[index], "For In Loop");
}
// for of
for (let value of studentRollNo) {
  console.log(value, "For of Loop");
}

// in built array methods like loop
// map -
// forEach
// filter -
// find
// join

// functions
// => set/block code ... which can be use again and again
// # function definition/named function
function add(varA, varB) {
  console.log(varA + varB);
  //code
} // function definition

add(10, 30); // function call

// # function expression
// # callback or inline function
// # arrow function
// # IIFE
