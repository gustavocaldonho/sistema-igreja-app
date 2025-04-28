import React, { useEffect } from "react";
import { PermissionsAndroid, Platform, Alert, Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import "@react-native-firebase/app";
import {
  getMessaging,
  getToken,
  getInitialNotification,
  onNotificationOpenedApp,
  onMessage,
  setBackgroundMessageHandler,
} from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Notifications from "expo-notifications";
import AuthProvider from "./src/contexts/auth";
import ModalProvider from "./src/contexts/modalContext";
import ConfirmModalProvider from "./src/contexts/modalConfirmContext";
import MyStack from "./src/routes/MyStack";

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
          return granted === PermissionsAndroid.RESULTS.GRANTED;
        } else {
          const enabled = await Notifications.getPermissionsAsync();
          if (enabled.status !== "granted") {
            Alert.alert(
              "Notificações Desabilitadas",
              "As notificações estão desativadas para este app. Deseja habilitá-las agora?",
              [
                { text: "Fazer depois", style: "cancel" },
                { text: "Habilitar", onPress: () => Linking.openSettings() },
              ]
            );
          }
          return enabled.status === "granted";
        }
      } catch (error) {
        console.error("Falha ao solicitar permissão de notificação", error);
        return false;
      }
    }
  };

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const permissionGranted = await requestUserPermission();
        console.log("Permissão de Notificação concedida: ", permissionGranted);

        if (permissionGranted) {
          try {
            const messaging = getMessaging();
            const token = await getToken(messaging);
            const existingToken = await AsyncStorage.getItem("FCMToken");
            if (token && token !== existingToken) {
              await AsyncStorage.setItem("FCMToken", token);
              console.log("Novo FCM Token salvo:", token);
            } else {
              console.log("Token FCM existente:", existingToken);
            }
          } catch (error) {
            console.error("Erro ao obter o token FCM:", error);
          }
        } else {
          await AsyncStorage.removeItem("FCMToken");
        }

        await setupNotificationChannel();

        const messaging = getMessaging();

        const initialNotification = await getInitialNotification(messaging);
        if (initialNotification) {
          console.log(
            "Notificação causou a abertura do app a partir do estado quit:",
            initialNotification.notification
          );
        }

        onNotificationOpenedApp(messaging, (remoteMessage) => {
          console.log(
            "Notificação causou a abertura do app a partir do estado background:",
            remoteMessage.notification
          );
        });

        setBackgroundMessageHandler(messaging, async (remoteMessage) => {
          console.log("Mensagem recebida em segundo plano:", remoteMessage);
        });

        onMessage(messaging, async (remoteMessage) => {
          await Notifications.scheduleNotificationAsync({
            content: {
              title: remoteMessage.notification?.title || "Nova Notificação",
              body:
                remoteMessage.notification?.body ||
                "Você recebeu uma nova mensagem",
            },
            android: {
              icon: "./assets/icon-notification.png", // Certifique-se que o ícone existe!
            },
            trigger: null,
          });
        });
      } catch (e) {
        console.error("Erro ao inicializar o app:", e);
      }
    };

    initializeApp();
  }, []);

  return (
    <NavigationContainer>
      <AuthProvider>
        <ModalProvider>
          <ConfirmModalProvider>
            <MyStack />
          </ConfirmModalProvider>
        </ModalProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
