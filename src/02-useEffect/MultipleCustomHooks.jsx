import { useFetch } from "../hooks/useFetch";

export const MultipleCustomHooks = () => {
  const { data, isLoading, hasError } = useFetch(
    "https://www.breakingbadapi.com/api/quotes/1"
  );

  console.log({ data, isLoading, hasError });

  return (
    <>
      <h1>UseEffect</h1>
      <hr />

      <div className="alert alert-info text-center">Cargando...</div>

      <blockquote className="blockquote text-right">
        <p className="mb-1">Hola Mundo</p>
        <footer className="blockquote-footer">Gerardo García</footer>
      </blockquote>
    </>
  );
};
