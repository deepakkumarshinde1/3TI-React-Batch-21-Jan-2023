// import

import { useState } from "react";
import CounterClass from "./components/CounterClass";
import CounterFunction from "./components/CounterFunction";

// code
function App() {
  let [toggle, setToggle] = useState(true);
  return (
    <>
      <center>
        <button onClick={() => setToggle(!toggle)}>Switch</button>
        {toggle === true ? (
          <CounterClass start={100} />
        ) : (
          <CounterFunction start={1} end={10} />
        )}
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
