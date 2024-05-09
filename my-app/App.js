import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";

import Title from "./src/components/Title";
import FormLogin from "./src/components/FormLogin";
import FormCadastroUser from "./src/components/FormCadastroUser";
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

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  // Os campos 'height' de 'boxBackgroundTop' e de 'boxFormLogin' estão dimensionados numericamente. Dessa forma, talvez não fiquem responsivos, isto é, em outros dispositivos a formatação fique incorreta.

  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    position: "relative",
  },
  main: {
    flex: 1,
    display: "flex",
    justifyContent: "space-between",
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
    height: 400,
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
    height: 530,
    width: "85%",
    borderRadius: 35,
    position: "absolute",
    left: (screenWidth - screenWidth * 0.85) / 2, // Calcula a posição horizontal central
    top: 240,
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
  buttonAccount: {
    width: "70%",
    backgroundColor: "#339DD7",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 14,
    paddingBottom: 14,
    marginTop: 20,
    marginBottom: 40,
    borderRadius: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
  textButtonAccount: {
    fontSize: 20,
    color: "#ffffff",
    fontWeight: "bold",
  },
  buttonBack: {
    alignItems: "flex-end",
    position: "absolute",
    top: 70,
    left: 0,
    width: 60,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "#339DD7",
  },
  textButtonBack: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
    paddingRight: 2,
    backgroundColor: "#339DD7",
    borderWidth: 2,
    borderColor: "#ffffff",
  },
});
