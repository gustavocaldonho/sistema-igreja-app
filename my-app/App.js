import React, { useEffect } from "react";
import { View, Text, Button, PermissionsAndroid, Platform } from "react-native";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import "@react-native-firebase/app";
import AuthProvider from "./src/contexts/auth";
import MyStack from "./src/routes/MyStack";
import * as Notifications from "expo-notifications";
import messaging from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Função para configurar o canal de notificação
const setupNotificationChannel = async () => {
  await Notifications.setNotificationChannelAsync("default", {
    name: "default",
    importance: Notifications.AndroidImportance.HIGH,
    vibrate: [0, 250, 250, 250],
  });
};

// Manipulador de notificações
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  // Função para solicitar permissões de notificações
  const requestNotificationPermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
          {
            title: "Permissão para Notificações",
            message: "O app gostaria de enviar notificações",
            buttonNeutral: "Perguntar depois",
            buttonNegative: "Cancelar",
            buttonPositive: "Permitir",
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (error) {
        console.error("Falha ao solicitar permissão de notificação", error);
        return false;
      }
    } else {
      try {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        return enabled;
      } catch (error) {
        console.error("Falha ao solicitar permissão de notificação", error);
        return false;
      }
    }
  };

  useEffect(() => {
    const initializeMessaging = async () => {
      // Solicita permissão de notificações
      const permissionGranted = await requestNotificationPermission();
      if (permissionGranted) {
        try {
          // Obtém o token FCM
          const token = await messaging().getToken();
          const existingToken = await AsyncStorage.getItem("FCMToken");
          if (token && token !== existingToken) {
            await AsyncStorage.removeItem("FCMToken"); // Deleta o FCMToken antigo
            await AsyncStorage.setItem("FCMToken", token); // Armazena o novo FCMToken
          } else if (!token) {
            throw new Error("Falha ao obter token FCM");
          } else {
            console.log("FCM Token existente:", existingToken);
          }
        } catch (error) {
          console.error(error);
        }
      }

      // Configura o canal de notificações
      await setupNotificationChannel();

      // Manipula notificações quando o app é aberto pelo estado de quit
      messaging()
        .getInitialNotification()
        .then((remoteMessage) => {
          if (remoteMessage) {
            console.log(
              "Notificação fez o app abrir do estado quit:",
              remoteMessage.notification
            );
          }
        });

      // Manipula notificações quando o app está em segundo plano
      messaging().onNotificationOpenedApp((remoteMessage) => {
        console.log(
          "Notificação fez o app abrir do estado em segundo plano:",
          remoteMessage.notification
        );
      });

      // Manipula notificações em segundo plano
      messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        console.log("Mensagem manipulada em segundo plano!", remoteMessage);
      });

      // Manipula notificações enquanto o app está em execução (foreground)
      const unsubscribe = messaging().onMessage(async (remoteMessage) => {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: remoteMessage.notification.title || "Nova Notificação",
            body:
              remoteMessage.notification.body || "Você tem uma nova mensagem",
          },
          android: {
            icon: "./assets/icon-notification.png",
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
