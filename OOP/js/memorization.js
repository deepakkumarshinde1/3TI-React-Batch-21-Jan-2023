// memorization

// closure
function printCount() {
  let count = 1; //lexical scope
  function counter() {
    console.log(++count);
  }
  return counter; // function definition / function call
}

let a = printCount();
a(); // counter call
a();
a();
a();
a();
a();

// generators
function* genID() {
  // 1 to 10;
  let i = 0;
  while (i < 10) {
    i++;
    yield i;
  }
}

let b = genID(); // b in instance
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());
console.log(b.next());

let c = genID(); // b in instance

console.log(b.next());

console.log(b.next());

// function curring
