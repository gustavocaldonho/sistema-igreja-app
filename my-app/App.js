import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import AuthProvider from "./src/contexts/auth";
import MyStack from "./MyStack";

export default function TabOneScreen() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <MyStack />
      </AuthProvider>
    </NavigationContainer>
  );
}
