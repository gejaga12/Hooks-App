import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
  console.log("Me volvi a generar");

  return (
    <button className="btn btn-danger" onClick={(value) => increment(5)}>
      Incrementar
    </button>
  );
});
