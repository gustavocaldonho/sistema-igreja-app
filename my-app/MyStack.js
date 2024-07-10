import React from "react";
import styles from "./style";
import { createStackNavigator } from "@react-navigation/stack";

import ButtonBack from "./src/components/ButtonBack";
import Initial from "./src/components/Initial";
import Menu from "./src/components/Menu";
import Avisos from "./src/components/Avisos";
import CaixaMortuario from "./src/components/CaixaMortuaria";
import Comunidades from "./src/components/Comunidades";
import Dizimo from "./src/components/Dizimo";
import Users from "./src/components/Users";
import PerfilUser from "./src/components/PerfilUser";
import PerfilCommunity from "./src/components/PerfilCommunity";

import PageBase from "./src/components/PageBase";

const Stack = createStackNavigator();

export default function MyStack() {
  // Todos os componentes definindos abaixo têm acesso a props "navigation"
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Initial"
        component={Initial}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Avisos"
        component={Avisos}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CaixaMortuario"
        component={CaixaMortuario}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Dizimo"
        component={Dizimo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PerfilUser"
        component={PerfilUser}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PerfilCommunity"
        component={PerfilCommunity}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Users"
        component={Users}
        options={{ headerShown: false }}
        // options={({ navigation }) => ({
        //   title: "Usuários",
        //   headerStyle: styles.headerStyle,
        //   headerTitleStyle: styles.titleHeader,
        //   headerTitleAlign: "center",
        //   headerLeft: () => (
        //     <ButtonBack navigation={navigation} color={"#339dd7"} />
        //   ),
        // })}
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
      <Stack.Screen
        name="PageBase"
        component={PageBase}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
