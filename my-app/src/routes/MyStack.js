import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Initial from "../components/screens/Initial";
import Menu from "../components/screens/Menu";
import Avisos from "../components/screens/Avisos";
import CaixaMortuario from "../components/screens/CaixaMortuaria";
import Comunidades from "../components/screens/Comunidades";
import Dizimo from "../components/screens/Dizimo";
import Users from "../components/screens/Users";
import PerfilUser from "../components/screens/PerfilUser";
import PerfilCommunity from "../components/screens/PerfilCommunity";

const Stack = createStackNavigator();

export default function MyStack() {
  // Todos os componentes definindos abaixo têm acesso a props "navigation"
  return (
    <Stack.Navigator initialRouteName="Initial">
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
