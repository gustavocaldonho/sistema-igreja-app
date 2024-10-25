import React, { useEffect, useState } from "react";
import { PermissionsAndroid, Platform, Alert, Linking } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import "@react-native-firebase/app";
import AuthProvider from "./src/contexts/auth";
import MyStack from "./src/routes/MyStack";
import * as Notifications from "expo-notifications";
import messaging from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

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
  const [appIsReady, setAppIsReady] = useState(false);

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
            const token = await messaging().getToken();
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

        messaging().onMessage(async (remoteMessage) => {
          await Notifications.scheduleNotificationAsync({
            content: {
              title: remoteMessage.notification.title || "New Notification",
              body: remoteMessage.notification.body || "You have a new message",
            },
            android: {
              icon: "./assets/icon-notification.png",
            },
            trigger: null,
          });
        });

        setAppIsReady(true);
      } catch (e) {
        console.error("Erro ao inicializar o app:", e);
      }
    };

    initializeApp();
  }, []);

  useEffect(() => {
    const hideSplashScreen = async () => {
      if (appIsReady) {
        await SplashScreen.hideAsync();
      }
    };
    hideSplashScreen();
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // Evita renderizar o app enquanto não estiver pronto
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <MyStack />
      </AuthProvider>
    </NavigationContainer>
  );
}
