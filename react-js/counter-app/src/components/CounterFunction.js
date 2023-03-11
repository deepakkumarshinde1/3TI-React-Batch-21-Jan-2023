// code
// state less
// external state logic (16.8) ==> hooks
// hooks are the methods to perform a complex task
// every hook method has a prefix as "use"
// hook we use to handel state is called as useState()
import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
  useLayoutEffect,
  memo,
  useReducer,
  useMemo,
  useCallback,
  useContext,
  createContext,
} from "react";

function CounterFunction(props) {
  let { start, end } = props;
  let [count, setCount] = useState(start); // return => [value,updateMethod(dispatch)]
  let [sqNumber, setSqNumber] = useState(2);

  let incCount = () => {
    count++;
    setCount(count);
  };

  // useEffect for lifecycle
  // mount
  useEffect(() => {
    console.log("fc mounting");
  }, []); // [] ===> DependencyList

  // update
  useEffect(() => {
    console.log("fc updating ");
  }, [count]); // [] ===> DependencyList

  useEffect(() => {
    return () => {
      console.log("fc unmount");
    };
  }, []);
  // unmount
  return (
    <>
      <h1>FC {count}</h1>
      <button onClick={incCount} disabled={end === count ? true : false}>
        CLICK
      </button>
      <button onClick={() => setCount(start)}>Reset</button>
      <button onClick={() => setSqNumber(count * count)}>
        Square {sqNumber}
      </button>
    </>
  );
}

//export
export default CounterFunction;

// 1 , 4 , -10
