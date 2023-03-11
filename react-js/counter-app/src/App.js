// import

import { useState } from "react";
import CounterFunction from "./components/CounterFunction";

// code
function App() {
  let [counterList, setCounterList] = useState([10, 20, 30, 50]);
  // loop
  let incCount = (index) => {
    console.log("hello", index);
    counterList[index] += 1;
    setCounterList([...counterList]);
  };
  let resetCount = (index) => {
    counterList[index] = 0;
    setCounterList([...counterList]);
  };
  return (
    <>
      <center>
        {counterList.map((value, index) => {
          return (
            <CounterFunction
              key={index}
              count={value}
              start={value}
              end={value + 10}
              incCount={incCount}
              index={index}
              resetCount={resetCount}
            />
          );
        })}
      </center>
    </>
  );
}

// export
export default App;

// props =>
// send data from parent component to child component
// we need to use "props"
// props i.e property
// parent ===> child (one data binding)
// props ==> is a {} (object)
// which can gain data from outer world
// props are read only in nature

// state
// handel data in component
// state => alpha, number, boolean , array,object ,fun call
// start are read & write
