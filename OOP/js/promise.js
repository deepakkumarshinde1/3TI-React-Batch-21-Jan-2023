console.log(a); // undefined, value
//console.log(b); // undefined, value
//console.log(c); // undefined, value
printData3();
printData(); // not a function
printData2();

var a = 10;
let b = 20;
const c = 30;
var printData = function () {
  console.log("printData");
};

var printData2 = () => {
  console.log("printData2");
};

function printData3() {
  console.log("printData3");
}
