import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function Menu() {
  return (
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
  );
}
