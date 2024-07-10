import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Initial from "./src/components/Initial";
import Menu from "./src/components/Menu";
import Avisos from "./src/components/Avisos";
import CaixaMortuario from "./src/components/CaixaMortuaria";
import Comunidades from "./src/components/Comunidades";
import Dizimo from "./src/components/Dizimo";
import Users from "./src/components/Users";
import PerfilUser from "./src/components/PerfilUser";
import PerfilCommunity from "./src/components/PerfilCommunity";

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
      />
      <Stack.Screen
        name="Comunidades"
        component={Comunidades}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
