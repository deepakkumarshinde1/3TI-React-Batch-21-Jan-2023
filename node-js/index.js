// import a module
// ES5 => Server
const path = require("path");
const calculate = require("./calculate");
const chalk = require("chalk");
// ES6 => React
//import path from "path";

//import calculate from "./calculate";

let text = path.join("c", "project", "index.js");
console.log(text);
calculate.add();
