import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";

import Title from "./src/components/Title";
import FormLogin from "./src/components/FormLogin";

export default function TabOneScreen() {
  const [logado, setLogado] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#C1CAD6" />
      {logado == false ? (
        <View style={styles.boxLogin}>
          <Title />
          <FormLogin />
        </View>
      ) : (
        <View style={styles.boxMenu}>
          <View style={styles.boxLine}>
            <View style={styles.boxOption}>
              <Text>Avisos</Text>
            </View>
            <View style={styles.boxOption}>
              <Text>Dizimo</Text>
            </View>
          </View>
          <View style={styles.boxLine}>
            <View style={styles.boxOption}>
              <Text>Caixa Mortuário</Text>
            </View>
            <View style={styles.boxOption}>
              <Text>Perfil</Text>
            </View>
          </View>
          <View style={styles.boxLine}>
            <View style={styles.boxOption}>
              <Text>Famílias</Text>
            </View>
            <View style={styles.boxOption}>
              <Text>Comunidades</Text>
            </View>
          </View>
        </View>
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
  boxMenu: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    paddingVertical: 30,
    paddingHorizontal: 20,

    borderColor: "green",
    borderWidth: 5,
  },
  boxLine: {
    width: "100%",
    height: "30%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,

    borderColor: "red",
    borderWidth: 2,
  },
  boxOption: {
    width: "45%",
    height: "100%",

    borderColor: "violet",
    borderWidth: 2,
  },
});
