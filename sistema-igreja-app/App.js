import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/components/Login";
import Title from "./src/components/Title";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Title />
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 80,
  },
});
