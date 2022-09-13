import { useFetch } from "../hooks/useFetch";
import { useCounter } from "../hooks/useCounter";

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1 className="text-center">UseEffect</h1>
      <hr />
      {isLoading ? (
        <div className="alert alert-info text-center">Cargando...</div>
      ) : (
        <blockquote className="blockquote text-center">
          <p className="mb-1 p-2">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )}
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
