import { useState } from "react";
import { UserContext } from "./UserContext";

//   const user = {
//     id: 1,
//     name: "Gerardo",
//     club: "Boca Juniors",
//   };

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState();


  return (
    // <UserContext.Provider value={{ hola: "Mundo", user: user }}>
    <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
  );
};
