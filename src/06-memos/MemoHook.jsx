import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const procesoPesado = (interaciones = 100) => {
  for (let i = 0; i < interaciones; i++) {
    console.log("Ahí va...");
  }
  return `${interaciones} iteraciones realizadas`;
};

export const MemoHook = () => {
  const { counter, increment } = useCounter(0);
  const [show, setShow] = useState(true);

  const memorizeValue = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <>
      <h1 className="text-center">
        Counter: <small>{counter}</small>
      </h1>

      <hr />

      <h4>{ memorizeValue }</h4>

      <div id="divButtons">
        <button
          className="btn btn-info"
          onClick={() => {
            increment();
          }}
        >
          +1
        </button>
        <button className="btn btn-primary" onClick={() => setShow(!show)}>
          Show/Hide {JSON.stringify(show)}
        </button>
      </div>
    </>
  );
};
