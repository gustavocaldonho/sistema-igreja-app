import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [registryEntry, setRegistryEntry] = useState(false);
  const [user, setUser] = useState({});

  const navigation = useNavigation();

  const [userList, setUserList] = useState([
    {
      name: "José",
      cpf: "222.222.222-22",
      email: "jose@gmail.com",
      dataNasc: "23/12/1980",
      community: "a",
      password: "1234",
    },
    {
      name: "João",
      cpf: "2",
      email: "miguel@gmail.com",
      dataNasc: "23/12/1980",
      community: "a",
      password: "1234",
    },
  ]);

  function signIn(cpf, password) {
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].cpf === cpf && userList[i].password === password) {
        setUser({
          name: userList[i].name,
          cpf: userList[i].cpf,
          email: userList[i].email,
          dataNasc: userList[i].dataNasc,
          comunidade: userList[i].comunidade,
          password: userList[i].password,
        });
        navigation.navigate("Menu");
        return false; // não mostrar msg de erro
      }
    }
    setUser({});
    return true; // mostrar msg de erro
  }

  function signOut() {
    setUser({});
    navigation.navigate("Initial");
  }

  return (
    <AuthContext.Provider
      value={{
        registryEntry,
        setRegistryEntry,
        userList,
        setUserList,
        user,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
