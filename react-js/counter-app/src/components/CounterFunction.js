// code
// state less
// external state logic (16.8) ==> hooks
// hooks are the methods to perform a complex task
// every hook method has a prefix as "use"
// hook we use to handel state is called as useState()

function CounterFunction(props) {
  let { start, end, incCount, count, index, resetCount } = props;

  return (
    <>
      <h1>FC {count}</h1>
      <button
        onClick={() => incCount(index)}
        disabled={end === count ? true : false}
      >
        CLICK
      </button>
      <button onClick={() => resetCount(index)}>Reset</button>
    </>
  );
}

//export
export default CounterFunction;

// 1 , 4 , -10
