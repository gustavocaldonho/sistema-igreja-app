import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";

import Title from "./src/components/Title";
import FormLogin from "./src/components/FormLogin";
import Menu from "./src/components/Menu";
import Avisos from "./src/components/Avisos";
import CaixaMortuario from "./src/components/CaixaMortuario";
import Comunidades from "./src/components/Comunidades";
import Dizimo from "./src/components/Dizimo";
import Familias from "./src/components/Familias";
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
      <Stack.Screen name="CaixaMortuario" component={CaixaMortuario} />
      <Stack.Screen name="Comunidades" component={Comunidades} />
      <Stack.Screen name="Dizimo" component={Dizimo} />
      <Stack.Screen name="Familias" component={Familias} />
      <Stack.Screen name="PerfilUser" component={PerfilUser} />
    </Stack.Navigator>
  );
}

export default function TabOneScreen() {
  const [logged, setLogged] = useState(false);
  const [cadastroEntry, setCadastroEntry] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#339DD7" />

      {logged == false ? (
        <View style={styles.main}>
          <View style={styles.boxBackgroundTop}>
            {cadastroEntry == false ? (
              <Title textTitle={"SEJA BEM-VINDO!!"} />
            ) : (
              <Title textTitle={"CADASTRAR"} />
            )}
          </View>
          {cadastroEntry == false ? (
            <View style={styles.boxFormLogin}>
              <FormLogin />
              {/* Botão Criar Conta */}
            </View>
          ) : (
            <View style={styles.boxFormCadastro}>{/* <FormCadastro/> */}</View>
            // Tirar os InputGroup de dentro de FormLogin e colocá-los numa pasta separada dentro de components
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

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  // Os campos 'height' de 'boxBackgroundTop' e de 'boxFormLogin' estão dimensionados numericamente. Dessa forma, talvez não fiquem responsivos, isto é, em outros dispositivos a formatação fique incorreta.

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    position: "relative",
  },
  main: {
    height: "100%",
    width: "100%",
  },
  boxBackgroundTop: {
    height: 500,
    width: "100%",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    backgroundColor: "#339DD7",
  },

  boxFormLogin: {
    display: "flex",
    height: 430,
    width: "85%",
    borderRadius: 35,
    position: "absolute",
    left: (screenWidth - screenWidth * 0.85) / 2, // Calcula a posição horizontal central
    top: 300,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.05,
    elevation: 5,
  },
  boxFormCadastro: {
    display: "flex",
    height: 500,
    width: "85%",
    borderRadius: 35,
    position: "absolute",
    left: (screenWidth - screenWidth * 0.85) / 2, // Calcula a posição horizontal central
    top: 280,
    backgroundColor: "#ffffff",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.9,
    shadowRadius: 3.05,
    elevation: 5,
  },
});
