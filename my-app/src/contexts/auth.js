import React, { createContext, useState } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [registryEntry, setRegistryEntry] = useState(false);
  const [logged, setLogged] = useState(true);
  const [user, setUser] = useState({});
  const [userLogged, setUserLogged] = useState(null);

  const [userList, setUserList] = useState([
    {
      name: "José",
      cpf: "222.222.222-22",
      email: "jose@gmail.com",
      dataNasc: "23/12/1980",
      comunidade: "a",
      password: "1234",
    },
    {
      name: "João",
      cpf: "2",
      email: "miguel@gmail.com",
      dataNasc: "23/12/1980",
      comunidade: "a",
      password: "1234",
    },
  ]);

  function getDataUserLogged(userLogged, userList) {
    for (let i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
  }

  //   getDataUserLogged(userLogged, userList);

  return (
    <AuthContext.Provider
      value={{
        registryEntry,
        setRegistryEntry,
        logged,
        setLogged,
        userLogged,
        setUserLogged,
        userList,
        setUserList,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
