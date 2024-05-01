import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Title from "./src/components/Title";
import FormLogin from "./src/components/FormLogin";
import Menu from "./src/components/Menu";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Avisos from "./src/components/Avisos";
import CaixaMortuario from "./src/components/CaixaMortuario";
import Comunidades from "./src/components/Comunidades";
import Dizimo from "./src/components/Dizimo";
import Familias from "./src/components/Familias";
import PerfilUser from "./src/components/PerfilUser";

const Stack = createStackNavigator();

function myStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Avisos" component={Avisos} />
        <Stack.Screen name="CaixaMortuario" component={CaixaMortuario} />
        <Stack.Screen name="Comunidades" component={Comunidades} />
        <Stack.Screen name="Dizimo" component={Dizimo} />
        <Stack.Screen name="Familias" component={Familias} />
        <Stack.Screen name="PerfilUser" component={PerfilUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default function TabOneScreen() {
  const [logged, setLogged] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#C1CAD6" />
      {logged == false ? (
        <View style={styles.boxLogin}>
          <Title />
          <FormLogin />
        </View>
      ) : (
        <Menu />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 80,
  },
  boxLogin: {
    height: "100%",
    width: "100%",
  },
});
