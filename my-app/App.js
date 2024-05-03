import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
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
  const [logged, setLogged] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#339DD7" />

      {logged == false ? (
        <View style={styles.main}>
          <View style={styles.boxBackgroundTop}>
            <Title />
          </View>
          <View style={styles.boxFormLogin}>
            <FormLogin />
          </View>
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
  container: {
    flex: 1,
    zIndex: 0,
    backgroundColor: "#ffffff",
    position: "relative",
  },
  main: {
    height: "100%",
    width: "100%",
  },
  boxBackgroundTop: {
    height: "60%",
    width: "100%",
    paddingBottom: 180,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    backgroundColor: "#339DD7",
  },

  boxFormLogin: {
    display: "flex",
    height: "50%",
    width: "85%",
    borderRadius: 35,
    position: "absolute",
    left: (screenWidth - screenWidth * 0.85) / 2, // Calcula a posição horizontal central
    bottom: 70,
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
