import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import Title from "./src/components/Title";
import FormLogin from "./src/components/FormLogin";
import Menu from "./src/components/Menu";

export default function TabOneScreen() {
  const [logged, setLogged] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#C1CAD6" />
      {logged == false ? (
        <View style={styles.boxLogin}>
          <Title />
          <FormLogin />
        </View>
      ) : (
        <Menu />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingTop: 80,
  },
  boxLogin: {
    height: "100%",
    width: "100%",
  },
});
