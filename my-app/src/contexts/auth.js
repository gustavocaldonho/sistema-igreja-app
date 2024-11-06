import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getMe, signinUser } from "../services/user_api";
import { sendApiFCMToken } from "../services/notification_api";
import { getImageProfile } from "../components/auxiliary/ModalImage/functions";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [registryEntry, setRegistryEntry] = useState(false);
  const [user, setUser] = useState({});
  const navigation = useNavigation();
  const [imageProfile, setImageProfile] = useState("");

  async function setDatasUser(token, password) {
    try {
      const response = await getMe(token);
      setUser({
        name: response.data.name,
        cpf: response.data.cpf,
        phone: response.data.phone,
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
        await AsyncStorage.setItem("Login", JSON.stringify(data));
        const fcmToken = await AsyncStorage.getItem("FCMToken");
        if (fcmToken) {
          await sendApiFCMToken(fcmToken, token);
        }
        console.log("(auth) FCMToken: ", fcmToken);
        await getImageProfile("", data.cpf, setImageProfile, "");
      }
      return response;
    } catch (error) {
      return error;
    }
  }

  async function signOut() {
    setUser({});
    let keys = await AsyncStorage.getAllKeys();
    keys = keys.filter((item) => item != "FCMToken");
    await AsyncStorage.multiRemove(keys);
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
        imageProfile,
        setImageProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
