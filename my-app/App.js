import React, { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import "@react-native-firebase/app";
import AuthProvider from "./src/contexts/auth";
import MyStack from "./src/routes/MyStack";
import * as Notifications from "expo-notifications";
import "@react-native-firebase/app";
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

      // Register background handler
      messaging().setBackgroundMessageHandler(async (remoteMessage) => {
        console.log("Message handled in the background!", remoteMessage);
      });

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
