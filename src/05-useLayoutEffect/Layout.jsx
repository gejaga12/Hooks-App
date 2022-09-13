import { useFetch, useCounter } from "../hooks/index";
import { Quote, LoadingQuote } from "../03-examples/index";

export const Layout = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0]; // DESESTRUCTURO HACIENDO DOBLE NEGACION AL DATA TRANSFORMANDOLO EN BOOLEANO

  return (
    <>
      <h1 className="text-center" id="titulo">
        UseEffect
      </h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote author={author} quote={quote} />}

      <div id="divButtons">
        <button
          className="btn btn-danger"
          id="btn1"
          onClick={() => increment()}
          disabled={isLoading}
        >
          Siguiente
        </button>
        <button
          className="btn btn-primary"
          id="btn"
          onClick={() => decrement()}
          disabled={isLoading}
        >
          Atras
        </button>
      </div>
    </>
  );
};
