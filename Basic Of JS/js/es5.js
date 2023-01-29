// ternary operator
let number = 11;
let result = number % 2 === 0 ? true : false;

// if (number % 2 === 0) result = "even";
// else result = "odd";

/************************ string */
let text = "India is My Country";
// let stringOutput = text.toUpperCase();
// let stringOutput = text.toLowerCase();
// let stringOutput = text.split(" "); // string to array
// stringOutput = stringOutput.join("-"); // array to string
// stringOutput = stringOutput.toLowerCase();

// methods chaining
let stringOutput = text.split(" ").join("-").toLowerCase();

// my-image.jpeg
let imageName = "my-image.jpeg.pdf.png";
let pos = imageName.lastIndexOf(".");
stringOutput = imageName.substring(pos + 1);

/************************ Maths */
// area circle = pie * r^2
let pie = Math.PI;
let sql = Math.pow(2, 10);
let rad = 10;
let areaOfCircle = Math.PI * Math.pow(rad, 2);
areaOfCircle = Math.round(areaOfCircle); // 1.4 =1 , 1.5 => 2

// OTP
let otp = Math.random(); // 0 ... 1
otp *= 10000;
otp = Math.round(otp);
otp = otp < 10 ? Number(otp + "856") : otp;
otp = otp < 100 ? Number(otp + "89") : otp;
otp = otp < 1000 ? Number(otp + "9") : otp;
console.log(otp);

/************************* date  */
let date = new Date();

let dateOutput = date.toDateString().split("");
// dateOutput = date.getDate();
// dateOutput = date.getFullYear();
// dateOutput = date.getMonth(); // 0 ... 11
//dateOutput = date.getDay();// 0 ... 6

// dateOutput = date.getHours();// 24 hrs
// dateOutput = date.getMinutes(); // 24 hrs
//dateOutput = date.getSeconds(); // 24 hrs

function getTime() {
  let date = new Date();
  let hrs = date.getHours(); // 24 hrs
  let min = date.getMinutes(); // 24 hrs
  let sec = date.getSeconds(); // 24 hrs
  let meridiem = hrs >= 12 ? "pm" : "am";
  hrs = hrs > 12 ? hrs - 12 : hrs;
  console.log(hrs, min, sec, meridiem);
}
// run a timer after every 1 sec
// setInterval
setInterval(getTime, 1000); // 1s === 1000ms
