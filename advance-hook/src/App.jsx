import { useState } from "react";
import PrintComponent from "./components/PrintComponent";

function App() {
  let [count, setCount] = useState(0);
  let [count2, setCount2] = useState(0);
  return (
    <>
      <center>
        <h1>{count}</h1>
        <button onClick={() => setCount(++count)}>INC</button>
        <button onClick={() => setCount2(++count2)}>INC2</button>
        <PrintComponent count2={count2} />
      </center>
    </>
  );
}

export default App;
