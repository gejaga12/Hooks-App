import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setformState] = useState({
    username: "gerardo",
    email: "gejag12@hotmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("UseEffect se llamo!");
  }, []);

  useEffect(() => {
    // console.log("Email se llamo!");
  }, [email]);

  useEffect(() => {
    // console.log("formState cambio!");
  }, [formState]);

  return (
    <>
      <h1>Formulario Simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="usermane"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="gejag12@hotmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

      {username === "gerardo" && <Message />}
    </>
  );
};
