import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import ButtonBack from "./src/components/ButtonBack";
import BoxLinearGradient from "./src/components/ScreenBase/BoxLinearGradient";

import Title from "./src/components/Title";
import FormLogin from "./src/components/FormLogin";
import FormCadastroUser from "./src/components/FormCadastroUser";
import Menu from "./src/components/Menu";
import Avisos from "./src/components/Avisos";
import CaixaMortuario from "./src/components/CaixaMortuaria";
import Comunidades from "./src/components/Comunidades";
import Dizimo from "./src/components/Dizimo";
import Users from "./src/components/Users";
import PerfilUser from "./src/components/PerfilUser";
import PerfilCommunity from "./src/components/PerfilCommunity";

const Stack = createStackNavigator();

function MyStack() {
  // Todos os componentes definindos abaixo têm acesso a props "navigation"
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Avisos"
        component={Avisos}
        options={({ navigation }) => ({
          title: "Avisos",
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.titleHeader,
          headerTitleAlign: "center",
          headerLeft: () => (
            <ButtonBack navigation={navigation} color={"#339dd7"} />
          ),
        })}
      />
      <Stack.Screen
        name="CaixaMortuario"
        component={CaixaMortuario}
        options={({ navigation }) => ({
          title: "Caixa Mortuária",
          headerStyle: styles.headerStyle,
          headerTitleStyle: [styles.titleHeader, styles.sizeSmallHeader],
          headerTitleAlign: "center",
          headerLeft: () => (
            <ButtonBack navigation={navigation} color={"#339dd7"} />
          ),
        })}
      />
      <Stack.Screen
        name="Dizimo"
        component={Dizimo}
        options={({ navigation }) => ({
          title: "Dízimo",
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.titleHeader,
          headerTitleAlign: "center",
          headerLeft: () => (
            <ButtonBack navigation={navigation} color={"#339dd7"} />
          ),
        })}
      />
      <Stack.Screen
        name="PerfilUser"
        component={PerfilUser}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="PerfilCommunity"
        component={PerfilCommunity}
        options={({ navigation }) => ({
          headerShown: false,
        })}
      />
      <Stack.Screen
        name="Users"
        component={Users}
        options={({ navigation }) => ({
          title: "Usuários",
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.titleHeader,
          headerTitleAlign: "center",
          headerLeft: () => (
            <ButtonBack navigation={navigation} color={"#339dd7"} />
          ),
        })}
      />
      <Stack.Screen
        name="Comunidades"
        component={Comunidades}
        options={({ navigation }) => ({
          title: "Comunidades",
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.titleHeader,
          headerTitleAlign: "center",
          headerLeft: () => (
            <ButtonBack navigation={navigation} color={"#339dd7"} />
          ),
        })}
      />
    </Stack.Navigator>
  );
}

export default function TabOneScreen() {
  const [logged, setLogged] = useState(false);
  const [cadastroEntry, setCadastroEntry] = useState(false);

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
      name: "Miguel",
      cpf: "333.333.333-33",
      email: "miguel@gmail.com",
      dataNasc: "23/12/1980",
      comunidade: "a",
      password: "1234",
    },
  ]);

  function changeToRegister(signal) {
    if (signal == true) {
      setCadastroEntry(true);
    } else {
      setCadastroEntry(false);
    }
  }

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
                <FormLogin userList={userList} />
                <TouchableOpacity
                  style={styles.buttonAccount}
                  onPress={() => {
                    changeToRegister(true);
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
                    changeToRegister(false);
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
            <MyStack />
          </NavigationContainer>
        )}
      </BoxLinearGradient>
    </View>
  );
}
