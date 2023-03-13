function add() {
  console.log("add");
}
function sub() {
  console.log("sub");
}
function div() {
  console.log("div");
}

// export
// ES5 =>
module.exports = {
  add,
  sub,
  div,
};
// ES6 =>

export default {
  add,
  sub,
  div,
};
