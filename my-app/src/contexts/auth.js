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

  const [warningList, setWarningList] = useState([
    { id: 0, title: "Título 0", message: "Mensagem", visibleToParish: false },
    { id: 1, title: "Título 1", message: "Mensagem", visibleToParish: false },
    { id: 2, title: "Título 2", message: "Mensagem", visibleToParish: false },
  ]);

  const [communityList, setCommunityList] = useState([
    { id: 0, patron: "São Geraldo Magela", location: "Sapucaia" },
    {
      id: 1,
      patron: "Nossa Senhora das Graças",
      location: "Paul de Graça Aranha",
    },
    { id: 2, patron: "Nossa Senhora Auxiliadora", location: "Marilândia-ES" },
    { id: 3, patron: "Santo Antônio", location: "Graça Aranha" },
  ]);

  // console.log(communityList);

  function signIn(cpf, password) {
    for (let i = 0; i < userList.length; i++) {
      if (userList[i].cpf === cpf && userList[i].password === password) {
        setUser({
          name: userList[i].name,
          cpf: userList[i].cpf,
          email: userList[i].email,
          dataNasc: userList[i].dataNasc,
          community: userList[i].community,
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
        warningList,
        setWarningList,
        communityList,
        setCommunityList,
        user,
        setUser,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
