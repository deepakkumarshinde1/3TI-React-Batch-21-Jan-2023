import { memo } from "react";

let PrintComponent = ({ count2 }) => {
  console.log("print component");
  return <>PrintComponent {count2 * count2}</>;
};

export default memo(PrintComponent);

// rerender when props is changes
// memo ==> higher order component
// memo(PrintComponent) ==> printComponent pure component
// pure component will only render when props will change

// if component is not state having state
// and has a props

function abc(callback) {
  callback();
}

abc(function () {});
