// arrow function
let add = () => {
  // function expression
};

addEventListener("click", () => {
  // callback
});

let sub = function () {
  return 3 - 2;
};

let sub1 = () => 3 - 2;

class Sample {
  text = "hello";
  printData() {
    setTimeout(() => {
      console.log("timeout");
      console.log(this);
    }, 2000);
  }
}

let sample = new Sample();

//sample.printData();

// i will code be 7:00 pm

// i have uploaded code => true => resolve => try{ result = } or .then(result){}
// i have not uploaded code => false => rejected => catch(error){}

// div => exception : Cannot divide by zero

async function div(a, b) {
  let result = a / b;
  if (b === 0) {
    // reject
    return Promise.reject("Cannot divide by zero");
  } else {
    // resolve
    //return Promise.resolve(result);
    return result;
  }
}

div(10, 5)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
// pending => fulfilled => unfulfilled (rejected)

// calc , add, div, mul , sub , mod
// font awesome
// all validation

// git repo

// css
// js
