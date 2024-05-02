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

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#339DD7" />

      <View style={styles.boxBackgroundTop}>
        <Title />
      </View>
      {logged == false ? (
        <View style={styles.boxLogin}>
          <FormLogin />
        </View>
      ) : (
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 0,
    backgroundColor: "#ffffff",
  },
  boxBackgroundTop: {
    height: "50%",
    width: "100%",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    backgroundColor: "#339DD7",
    // zIndex: 1,
  },

  boxLogin: {
    height: "100%",
    width: "100%",
    display: "none",

    borderColor: "red",
    borderWidth: 2,
  },
});
