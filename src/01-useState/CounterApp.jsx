import { useState } from "react";

const CounterApp = () => {
      
  const [ state, setCounter] = useState({
    counter: 10,
    counter2: 20,
    counter3: 30,
  });

  const { counter, counter2, counter3 } = state;

  return (
    <>
      <h1>Counter:  {counter} </h1>
      <h1>Counter2: {counter2}</h1>
      <h1>Counter3: {counter3}</h1>
      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter({
            ...state,
            counter: counter + 1,
            
          })
        }
      >
        +1
      </button>
    </>
  );
};

export default CounterApp;
