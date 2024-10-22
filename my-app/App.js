import React, { useEffect } from "react";
import { PermissionsAndroid, Platform, Alert, Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import "@react-native-firebase/app";
import AuthProvider from "./src/contexts/auth";
import MyStack from "./src/routes/MyStack";
import * as Notifications from "expo-notifications";
import messaging from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-async-storage/async-storage";

const setupNotificationChannel = async () => {
  await Notifications.setNotificationChannelAsync("default", {
    name: "default",
    importance: Notifications.AndroidImportance.HIGH,
    vibrate: [0, 250, 250, 250],
  });
};

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function App() {
  const requestUserPermission = async () => {
    if (Platform.OS === "android") {
      try {
        // Verifica se o dispositivo está rodando Android 13 (API 33) ou superior
        if (Platform.Version >= 33) {
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

          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            console.log("Permissão para notificações concedida.");
            return true;
          } else {
            console.log("Permissão para notificações negada.");
            return false;
          }
        } else {
          // Se o SO não for da versão 13 ou superior
          const enabled = await Notifications.getPermissionsAsync();
          if (enabled.status !== "granted") {
            Alert.alert(
              "Notificações Desabilitadas",
              "As notificações estão desativadas para este app. Deseja habilitá-las agora?",
              [
                {
                  text: "Fazer depois",
                  style: "cancel",
                },
                {
                  text: "Habilitar",
                  onPress: () => {
                    Linking.openSettings();
                  },
                },
              ]
            );
          }
          return true;
        }
      } catch (error) {
        console.error("Falha ao solicitar permissão de notificação", error);
        return false;
      }
    }
  };

  useEffect(() => {
    const initializeMessaging = async () => {
      const permissionGranted = await requestUserPermission();
      console.log("Permissão concedida: ", permissionGranted);

      if (permissionGranted) {
        try {
          const token = await messaging().getToken();
          const existingToken = await AsyncStorage.getItem("FCMToken");
          if (token && token !== existingToken) {
            await AsyncStorage.removeItem("FCMToken"); // Remove o token FCM antigo
            await AsyncStorage.setItem("FCMToken", token); // Armazena o novo token
            console.log("Novo FCM Token salvo:", token);
          } else {
            console.log("Token FCM existente:", existingToken);
          }
        } catch (error) {
          console.error("Erro ao obter o token FCM:", error);
        }
      }

      await setupNotificationChannel();

      messaging()
        .getInitialNotification()
        .then((remoteMessage) => {
          if (remoteMessage) {
            console.log(
              "Notificação causou a abertura do app a partir do estado quit:",
              remoteMessage.notification
            );
          }
        });

      messaging().onNotificationOpenedApp((remoteMessage) => {
        console.log(
          "Notificação causou a abertura do app a partir do estado background:",
          remoteMessage.notification
        );
      });

      messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        console.log("Mensagem recebida em segundo plano:", remoteMessage);
      });
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
