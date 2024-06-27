import React, { useState } from "react";
import { View } from "react-native";
import styles from "./style";

import ScreenBase from "../ScreenBase";
import BoxSearch from "../BoxSearch";
import ItemUser from "./ItemUser";

export default function Users({ navigation, route }) {
  const { userList, setUserList } = route.params;
  // console.log(userList);

  const addUser = () => {
    const newUser = {
      name: "Novo Usuário",
      cpf: "444.444.444-44",
      email: "novo@usuario.com",
      dataNasc: "01/01/2000",
      comunidade: "b",
      password: "4321",
    };
    setUserList([...userList, newUser]);

    // addUser();
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <BoxSearch />
        <ScreenBase colorStatusBar={"#fff"}>
          <View style={styles.main}>
            <ItemUser
              nameUser={"Fábio Antonio Astori"}
              cpf={"000.000.000-00"}
              navigation={navigation}
            />
            <ItemUser
              nameUser={"Gustavo Caldonho"}
              cpf={"111.111.111-11"}
              navigation={navigation}
            />
            <ItemUser
              nameUser={"Maria José das Dores"}
              cpf={"222.222.222-22"}
              navigation={navigation}
            />
            <ItemUser
              nameUser={"Antônio Carlos"}
              cpf={"333.333.333-33"}
              navigation={navigation}
            />
          </View>
        </ScreenBase>
      </View>
    </View>
  );
}
