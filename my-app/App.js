import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import AuthProvider from "./src/contexts/auth";
import MyStack from "./src/routes/MyStack";
import * as Notifications from "expo-notifications";
import messaging from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Configuração do canal de notificação para Android
const setupNotificationChannel = async () => {
  await Notifications.setNotificationChannelAsync("default", {
    name: "default",
    importance: Notifications.AndroidImportance.HIGH,
    vibrate: [0, 250, 250, 250],
  });
};

// Configuração do manipulador de notificações
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  // Função para solicitar permissão do usuário para notificações
  const requestUserPermission = async () => {
    try {
      const authStatus = await messaging().requestPermission();
      const enabled =
        authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
        authStatus === messaging.AuthorizationStatus.PROVISIONAL;

      if (enabled) {
        console.log("Authorization status:", authStatus);
        return true;
      } else {
        console.log("Failed to get permission status", authStatus);
        return false;
      }
    } catch (error) {
      console.error("Permission request failed", error);
      return false;
    }
  };

  useEffect(() => {
    // Função para inicializar a configuração de mensagens
    const initializeMessaging = async () => {
      const permissionGranted = await requestUserPermission();
      if (permissionGranted) {
        try {
          const token = await messaging().getToken();
          console.log("FCM Token:", token);
          await AsyncStorage.setItem("FCMToken", token);
        } catch (error) {
          console.error("Failed to get FCM token", error);
        }
      }

      // Configuração do canal de notificação
      await setupNotificationChannel();

      // Handle notification when app is opened from a quit state
      messaging()
        .getInitialNotification()
        .then((remoteMessage) => {
          if (remoteMessage) {
            console.log(
              "Notification caused app to open from quit state:",
              remoteMessage.notification
            );
          }
        });

      // Handle notification when the app is in the background
      messaging().onNotificationOpenedApp((remoteMessage) => {
        console.log(
          "Notification caused app to open from background state:",
          remoteMessage.notification
        );
      });

      // Register background handler
      messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        console.log("Message handled in the background!", remoteMessage);
      });

      // Handle notification when the app is in the foreground
      const unsubscribe = messaging().onMessage(async (remoteMessage) => {
        // Notificação exibida quando o app está em primeiro plano
        await Notifications.scheduleNotificationAsync({
          content: {
            title: remoteMessage.notification.title || "New Notification",
            body: remoteMessage.notification.body || "You have a new message",
          },
          trigger: null, // Exibe a notificação imediatamente
        });
      });

      return unsubscribe;
    };

    initializeMessaging();
  }, []);

  return (
    <NavigationContainer>
      <AuthProvider>
        <MyStack />
      </AuthProvider>
    </NavigationContainer>
  );
}
