let running = {
  running: function () {
    console.log("running");
  },
};

let walking = {
  walk: function () {
    console.log(this.text);
    console.log("walking");
  },
};

let talking = {
  talk: function () {
    console.log("talking");
  },
};
let eating = {
  eat: function () {
    console.log("eating");
  },
};

class Human {
  constructor(data) {
    this.text = data;
  }
}

let Amol = Object.assign(new Human("sample"), walking, talking, eating);

let robot = Object.assign({}, walking);

Amol.walk();
Amol.eat();
Amol.talk();
