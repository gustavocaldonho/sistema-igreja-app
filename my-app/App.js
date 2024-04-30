import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FormLogin from "./src/components/FormLogin";
import Title from "./src/components/Title";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#C1CAD6" />
      <Title />
      <FormLogin />
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
