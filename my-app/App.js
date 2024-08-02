import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import AuthProvider from "./src/contexts/auth";
import MyStack from "./src/routes/MyStack";
import * as Notification from "expo-notifications";

Notification.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldShowAlert: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <MyStack />
      </AuthProvider>
    </NavigationContainer>
  );
}
