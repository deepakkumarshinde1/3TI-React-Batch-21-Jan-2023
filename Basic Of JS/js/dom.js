/**
 * DOM => document object model
 * DOM => logical representation of HTML Page
 * HTML code ==> parse => token === DOM algo ===> DOM Tree
 * DOM => manipulate HTML by using CSS or JS
 */

/** what is event ?
 *  action perform by user
 *      click, dblClick, mouseover, drag, drop, scroll
 *      keypress, keyup,
 *      load, unload,
 */
/*
console.log(document);

let btnId = document.getElementById("btn-id"); // => single element
let button = document.getElementsByTagName("button"); // [] => element
let btnClass = document.getElementsByClassName("btn-class"); // []=> element

let btnClassSelector = document.querySelector(".btn-class"); // 1st single
let btnClassSelectorAll = document.querySelectorAll(".btn-class"); // []=> element

console.log(btnId);
console.log(button);
console.log(btnClass);
console.log(btnClassSelector);
console.log(btnClassSelectorAll);
*/
// .btn-class , #btn-id , button

function getElement(element) {
  let _element = document.querySelector(element);
  if (_element === null) {
    throw new Error(element + " is not available in HTML");
  } else {
    return _element;
  }
}

var btnId = getElement("#btn-id");
// if you dont get value , you will get a null

// event add
btnId.addEventListener("click", function () {
  console.log("click");

  // btnId.style.backgroundColor = "red";
  //btnId.classList.toggle("btn"); add() , remove()

  // btnId.innerHTML = "Saving ...";
  // btnId.disabled = true;
  window.location.assign("https://www.google.com/");
  // window.history
  // window.cookies()
  // window.localStorage()
});

console.log(this);
// this(default) => global object => window (BOM)

// BOM ==> DOM
