import React, { useEffect } from "react";
import { PermissionsAndroid, Platform, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import firebase from "@react-native-firebase/app";
import messaging from "@react-native-firebase/messaging";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthProvider from "./src/contexts/auth";
import ModalProvider from "./src/contexts/modalContext";
import ConfirmModalProvider from "./src/contexts/modalConfirmContext";
import MyStack from "./src/routes/MyStack";
import firebaseConfig from './firebaseConfig';

export default function App() {
  // Solicita permissão para notificações no Android e iOS
  const requestUserPermission = async () => {
    if (Platform.OS === "android") {
      if (Platform.Version >= 33) {
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
          console.error("Falha ao solicitar permissão de notificação no Android", error);
          return false;
        }
      }
      return true; // Android versões abaixo 33 não precisam solicitar
    } else {
      // iOS: solicita permissão detalhada
      try {
        const authStatus = await messaging().requestPermission({
          alert: true,
          announcement: true,
          badge: true,
          sound: true,
          provisional: false,
        });
        return (
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL
        );
      } catch (error) {
        console.error("Falha ao solicitar permissão de notificação no iOS", error);
        return false;
      }
    }
  };

  useEffect(() => {
    const initializeApp = async () => {
      try {
        if (!firebase.apps.length) {
          await firebase.initializeApp(firebaseConfig);
        }

        const permissionGranted = await requestUserPermission();
        console.log("Permissão de Notificação concedida: ", permissionGranted);

        if (permissionGranted) {
          const token = await messaging().getToken();
          const existingToken = await AsyncStorage.getItem("FCMToken");

          if (token && token !== existingToken) {
            await AsyncStorage.setItem("FCMToken", token);
            console.log("Novo FCM Token salvo:", token);
          } else {
            console.log("Token FCM existente:", existingToken);
          }
        } else {
          await AsyncStorage.removeItem("FCMToken");
          console.log("Permissão negada, token removido.");
        }

        // Eventos de notificação

        const initialNotification = await messaging().getInitialNotification();
        if (initialNotification) {
          console.log(
            "Notificação causou abertura do app (quit):",
            initialNotification.notification
          );
        }

        messaging().onNotificationOpenedApp(remoteMessage => {
          console.log(
            "Notificação causou abertura do app (background):",
            remoteMessage.notification
          );
        });

        messaging().setBackgroundMessageHandler(async remoteMessage => {
          console.log("Mensagem recebida em segundo plano:", remoteMessage);
        });

        messaging().onMessage(async remoteMessage => {
          console.log("Mensagem recebida em foreground:", remoteMessage);
          Alert.alert(
            remoteMessage.notification?.title || "Nova Notificação",
            remoteMessage.notification?.body || "Você recebeu uma nova mensagem"
          );
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
