var i = 0;
while (i < 10) {
  i++;
  //   console.log(i);
}
// halt the iteration and resume

function* createId() {
  id = 0;
  while (id <= 10) {
    yield id;
    id++;
  }
}

let idCount = createId();
console.log(idCount.next());
// code
console.log(idCount.next());
console.log(idCount.next());
console.log(idCount.next());
console.log(idCount.next());
console.log(idCount.next());
console.log(idCount.next());
console.log(idCount.next());
console.log(idCount.next());
console.log(idCount.next());
console.log(idCount.next());
console.log(idCount.next());

// Thunk ==> default
// Saga ==> generators()

// request ===> call()
// call a action ==> put()
// takeLatest() , takeEvery()

//multiple request form same operation
// takeLatest()
// takeEvery()
