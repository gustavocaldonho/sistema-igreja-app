import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import BoxLinearGradient from "./src/components/ScreenBase/BoxLinearGradient";

import Title from "./src/components/Title";
import FormLogin from "./src/components/FormLogin";
import FormCadastroUser from "./src/components/FormCadastroUser";
import MyStack from "./MyStack";

export default function TabOneScreen() {
  const [cadastroEntry, setCadastroEntry] = useState(false);
  const [logged, setLogged] = useState(true);
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

  // function getDataUserLogged(userLogged, userList) {
  //   for (let i = 0; i < userList.length; i++) {
  //     console.log(userList[i]);
  //   }
  // }

  // getDataUserLogged(userLogged, userList);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#339DD7" />
      {/* <StatusBar backgroundColor="#f7c7de" /> */}
      {/* <StatusBar backgroundColor="#f094c0" /> */}
      {/* <StatusBar backgroundColor="#fff" /> */}

      <BoxLinearGradient>
        {logged == false ? (
          <View style={styles.main}>
            <View style={styles.boxBackgroundTop}>
              {cadastroEntry == false ? (
                <Title textTitle={"SEJA BEM-VINDO!!"} />
              ) : (
                <Title textTitle={"CADASTRO DE USUÁRIO"} />
              )}
            </View>
            {cadastroEntry == false ? (
              <View style={styles.boxFormLogin}>
                <FormLogin
                  userList={userList}
                  setLogged={setLogged}
                  setUserLogged={setUserLogged}
                />
                <TouchableOpacity
                  style={styles.buttonAccount}
                  onPress={() => {
                    setCadastroEntry(true);
                  }}
                >
                  <Text style={styles.textButtonAccount}>Criar Conta</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.boxFormCadastro}>
                {
                  <FormCadastroUser
                    userList={userList}
                    setUserList={setUserList}
                  />
                }
              </View>
            )}
            {cadastroEntry ? (
              <View style={styles.buttonBack}>
                <TouchableOpacity
                  style={styles.textButtonBack}
                  onPress={() => {
                    setCadastroEntry(false);
                  }}
                >
                  <Icon name={"chevron-left"} size={25} color="#ffffff" />
                </TouchableOpacity>
              </View>
            ) : (
              <Text />
            )}
          </View>
        ) : (
          <NavigationContainer>
            <MyStack
              setLogged={setLogged}
              userLogged={userLogged}
              userList={userList}
              setUserList={setUserList}
            />
          </NavigationContainer>
        )}
      </BoxLinearGradient>
    </View>
  );
}
