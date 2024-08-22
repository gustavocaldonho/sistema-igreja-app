import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMe, signinUser } from "../services/user_api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [registryEntry, setRegistryEntry] = useState(false);
  const [user, setUser] = useState({});
  const navigation = useNavigation();

  async function setDatasUser(token, password) {
    try {
      const response = await getMe(token);
      setUser({
        name: response.data.name,
        cpf: response.data.cpf,
        email: response.data.email,
        birthday: response.data.birthday,
        community: response.data.community,
        position: response.data.position,
        password: password,
      });
      console.log("setDatasUser (auth):", response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function signIn(data) {
    try {
      const response = await signinUser(data);
      const token = response.data.access_token;
      if (token !== undefined) {
        setDatasUser(token, data.password);
        await AsyncStorage.setItem(
          "AccessToken",
          String(response.data.access_token)
        );
      }
      return response;
    } catch (error) {
      return error;
    }
  }

  async function signOut() {
    setUser({});
    await AsyncStorage.removeItem("AccessToken");
    navigation.navigate("Initial");
  }

  return (
    <AuthContext.Provider
      value={{
        registryEntry,
        setRegistryEntry,
        user,
        setUser,
        signIn,
        signOut,
        setDatasUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
