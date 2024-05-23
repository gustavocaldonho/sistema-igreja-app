import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import styles from "./style";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

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

import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Avisos" component={Avisos} />
      <Stack.Screen name="Comunidades" component={Comunidades} />
      <Stack.Screen
        name="CaixaMortuario"
        component={CaixaMortuario}
        options={({ navigation }) => ({
          title: "Caixa Mortuária",
          headerStyle: styles.headerStyle,
          headerTitleStyle: styles.titleHeader,
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="chevron-left"
                size={25}
                color="#339dd7"
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
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
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon
                name="chevron-left"
                size={25}
                color="#339dd7"
                style={{ marginLeft: 15 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="PerfilUser" component={PerfilUser} />
    </Stack.Navigator>
  );
}

export default function TabOneScreen() {
  const [logged, setLogged] = useState(true);
  const [cadastroEntry, setCadastroEntry] = useState(false);

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
              <FormLogin />
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
            <View style={styles.boxFormCadastro}>{<FormCadastroUser />}</View>
          )}
          {cadastroEntry ? (
            <View style={styles.buttonBack}>
              <TouchableOpacity
                style={styles.textButtonBack}
                onPress={() => {
                  changeToRegister(false);
                }}
              >
                <Icon name={"chevron-left"} size={20} color="#ffffff" />
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
    </View>
  );
}
