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
        console.log("granted: ", granted);
        console.log("notification: ", PermissionsAndroid.RESULTS.GRANTED);
        return "granted" === PermissionsAndroid.RESULTS.GRANTED; //###### tirar as ""
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
      const permissionGranted = await requestUserPermission();
      console.log("permissionGranted: ", permissionGranted);
      if (permissionGranted) {
        try {
          const token = await messaging().getToken();
          const existingToken = await AsyncStorage.getItem("FCMToken");
          if (token && token != existingToken) {
            await AsyncStorage.removeItem("FCMToken"); //deleta o FCMToken antigo
            await AsyncStorage.setItem("FCMToken", token); //adiciona o FCMToken novo
          } else if (!token) {
            throw new Error("Failed to get FCM token");
          } else {
            console.log("Existing FCM Token:", existingToken);
          }
        } catch (error) {
          console.error(error);
        }
      }

      await setupNotificationChannel();
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

      messaging().onNotificationOpenedApp((remoteMessage) => {
        console.log(
          "Notification caused app to open from background state:",
          remoteMessage.notification
        );
      });

      messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        console.log("Message handled in the background!", remoteMessage);
      });

      const unsubscribe = messaging().onMessage(async (remoteMessage) => {
        await Notifications.scheduleNotificationAsync({
          content: {
            title: remoteMessage.notification.title || "New Notification",
            body: remoteMessage.notification.body || "You have a new message",
          },
          android: {
            icon: "./assets/icon-notification.png",
          },
          trigger: null, // Exibe a notificação imediatamente
        });
      });

      return unsubscribe;
    };

    console.log("opa");
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
